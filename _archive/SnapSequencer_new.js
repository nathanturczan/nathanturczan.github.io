// SnapSequencer.js
// Particle-based sequencer that transposes samples to fit current scale
// Multi-folder isorhythmic implementation

const SnapSequencer = (() => {
    // Sample pack configuration
    const SAMPLE_PACKS = [ 'bassflute', 'cage_one', 'toy_bell', 'coleman', 'wildrose','jicello','chofar'];
    const RANDOM_PACK = 'DblBass';
    const MONOPHONIC_PACK = 'bassflute'; // Only one sample at a time
    const CONTINUOUS_PACK = 'coleman'; // Self-scheduling with overlap
    const COLEMAN_OVERLAP = 0.35; // Start next sample this many seconds before current ends
    
    // Per-pack timing offsets (in seconds)
    const PACK_OFFSETS = {
        'jicello':0,'chofar':-1,
        'bassflute': -1.0,
        'cage_one': -0.75,
        'toy_bell': 0.0,
        'wildrose':0,
        'coleman': -1 // Used for first sample only
    };
    
    // Start times and loop duration
    const START_TIMES = [0.00, 2.326, 5.000, 8.212, 10.665, 14.844];
    const LOOP_DURATION = 19.677;
    
    // Portamento parameters based on vocal research
    const PORTAMENTO_BASE_TIME = 0.8;
    const PORTAMENTO_TIME_SCALE = 0.095;
    const OVERSHOOT_SEMITONES = 1.0;
    const OVERSHOOT_TIME_RATIO = 0.25;
    const PREP_SEMITONES = 0.7;
    const PREP_TIME_RATIO = 0.3;
    const FADE_OUT_TIME = 2.0;
    
    // Transposition preference
    const TRANSPOSITION_PREFERENCE = [0, -1, 1, -2, -3, 2, -4, 3, -5, 4, -6, 5, -7, 6];
    
    // Note name to pitch class mapping
    const NOTE_TO_PC = {
        'c': 0, 'cs': 1, 'df': 1, 'd': 2, 'ds': 3, 'ef': 3,
        'e': 4, 'f': 5, 'fs': 6, 'gf': 6, 'g': 7, 'gs': 8,
        'af': 8, 'a': 9, 'as': 10, 'bf': 10, 'b': 11
    };
    
    // State
    let sampleData = {}; // { packName: { sampleName: { pcs: [0,4,7], filename: 'name.wav' } } }
    let sampleLists = {}; // { packName: ['sample1', 'sample2', ...] sorted reverse alpha }
    let packIndices = {}; // { packName: currentIndex } for cycling
    let players = {}; // { 'packName/sampleName': Tone.Player }
    let activePlayers = new Map();
    let activeBassflutePlayers = new Set(); // Track active bassflute samples for monophonic behavior
    let colemanScheduleTimeout = null; // Track coleman self-scheduling
    let glideIntervals = new Set();
    let loopEvent = null;
    let isInitialized = false;
    let currentScale = null;
    let particlesMuted = false;
    
    // Effect chain
    let effectChain = null;
    let effectNodes = [];

    const mod12 = (n) => ((n % 12) + 12) % 12;

    // Quarter-sine easing function (0 to 1)
    function quartSineEase(t) {
        return Math.sin(t * Math.PI * 0.5);
    }

    // Calculate portamento parameters based on interval size and direction
    function calculatePortamentoParams(oldTransposition, newTransposition) {
        const interval = Math.abs(newTransposition - oldTransposition);
        const isAscending = newTransposition > oldTransposition;
        
        const totalTime = PORTAMENTO_BASE_TIME + (interval * PORTAMENTO_TIME_SCALE);
        
        if (isAscending) {
            const usePreparation = interval >= 4;
            return {
                totalTime,
                usePreparation,
                prepTime: usePreparation ? totalTime * PREP_TIME_RATIO : 0,
                glideTime: usePreparation ? totalTime * (1 - PREP_TIME_RATIO) : totalTime,
                prepAmount: PREP_SEMITONES,
                overshootAmount: 0,
                overshootTime: 0
            };
        } else {
            return {
                totalTime,
                usePreparation: false,
                prepTime: 0,
                glideTime: totalTime * (1 - OVERSHOOT_TIME_RATIO),
                prepAmount: 0,
                overshootAmount: Math.min(OVERSHOOT_SEMITONES, interval * 0.3),
                overshootTime: totalTime * OVERSHOOT_TIME_RATIO
            };
        }
    }

    // Apply realistic portamento to a player's playbackRate
    function applyPortamento(player, oldTransposition, newTransposition, voiceId = null) {
        const oldRate = Math.pow(2, oldTransposition / 12);
        const newRate = Math.pow(2, newTransposition / 12);
        const isAscending = newTransposition > oldTransposition;
        
        const params = calculatePortamentoParams(oldTransposition, newTransposition);
        const startTime = Tone.now();
        let phase = 0;
        let phaseStartTime = startTime;
        
        const glideInterval = setInterval(() => {
            const now = Tone.now();
            const elapsed = now - phaseStartTime;
            
            // Phase 0: Preparation (ascending only)
            if (phase === 0 && params.usePreparation) {
                const progress = Math.min(1, elapsed / params.prepTime);
                if (progress >= 1) {
                    phase = 1;
                    phaseStartTime = now;
                } else {
                    const eased = quartSineEase(progress);
                    const prepRate = Math.pow(2, (oldTransposition - params.prepAmount) / 12);
                    player.playbackRate = oldRate + (prepRate - oldRate) * eased;
                    return;
                }
            }
            
            // Phase 1: Main glide
            if (phase === 0 || phase === 1) {
                if (!params.usePreparation && phase === 0) phase = 1;
                
                const progress = Math.min(1, elapsed / params.glideTime);
                if (progress >= 1) {
                    if (params.overshootAmount > 0) {
                        phase = 2;
                        phaseStartTime = now;
                    } else {
                        player.playbackRate = newRate;
                        clearInterval(glideInterval);
                        glideIntervals.delete(glideInterval);
                        return;
                    }
                } else {
                    const eased = quartSineEase(progress);
                    const startRate = params.usePreparation 
                        ? Math.pow(2, (oldTransposition - params.prepAmount) / 12)
                        : oldRate;
                    const targetRate = params.overshootAmount > 0
                        ? Math.pow(2, (newTransposition - params.overshootAmount) / 12)
                        : newRate;
                    player.playbackRate = startRate + (targetRate - startRate) * eased;
                    return;
                }
            }
            
            // Phase 2: Overshoot settle (descending only)
            if (phase === 2) {
                const progress = Math.min(1, elapsed / params.overshootTime);
                if (progress >= 1) {
                    player.playbackRate = newRate;
                    clearInterval(glideInterval);
                    glideIntervals.delete(glideInterval);
                } else {
                    const eased = quartSineEase(progress);
                    const overshootRate = Math.pow(2, (newTransposition - params.overshootAmount) / 12);
                    player.playbackRate = overshootRate + (newRate - overshootRate) * eased;
                }
            }
        }, 10);
        
        glideIntervals.add(glideInterval);
        
        if (voiceId) {
            console.log(
                `[SnapSequencer] ${voiceId}: ${oldTransposition} → ${newTransposition} semitones ` +
                `(${isAscending ? 'ascending' : 'descending'}, ` +
                `${params.usePreparation ? 'prep ' + params.prepTime.toFixed(3) + 's, ' : ''}` +
                `glide ${params.glideTime.toFixed(3)}s` +
                `${params.overshootAmount > 0 ? ', overshoot ' + params.overshootAmount.toFixed(1) + 'st' : ''})`
            );
        }
    }

    // Calculate preferred transposition
    function calculateTransposition(samplePCs, scalePCs, preferenceOrder = TRANSPOSITION_PREFERENCE) {
        const scaleSet = new Set(scalePCs);

        for (const shift of preferenceOrder) {
            const transposed = samplePCs.map(pc => mod12(pc + shift));
            if (transposed.every(pc => scaleSet.has(pc))) {
                return shift;
            }
        }

        return null;
    }

    // Get scale PCs from ScaleData
    function getScalePCs(scaleKey) {
        if (!ScaleData || !ScaleData[scaleKey]) {
            console.warn('[SnapSequencer] Scale not found:', scaleKey);
            return [];
        }
        return ScaleData[scaleKey].pitch_classes || [];
    }

    // Convert note names to pitch classes
    function notesToPCs(noteNames) {
        return noteNames.map(name => NOTE_TO_PC[name.toLowerCase()]).filter(pc => pc !== undefined);
    }

    // Load samples_data.json for a pack
    async function loadPackData(packName) {
        try {
            const response = await fetch(`samples/${packName}/samples_data.json`);
            const data = await response.json();
            
            const packData = {};
            for (const [key, value] of Object.entries(data)) {
                const pcs = notesToPCs(value.note_names);
                const filename = key.replace(/ /g, '_'); // Handle spaces in filenames
                packData[key] = { pcs, filename };
            }
            
            sampleData[packName] = packData;
            
            // Create reverse-alphabetically sorted list
            const sampleNames = Object.keys(packData).sort().reverse();
            sampleLists[packName] = sampleNames;
            packIndices[packName] = 0;
            
            console.log(`[SnapSequencer] Loaded ${sampleNames.length} samples from ${packName}`);
            return packData;
        } catch (error) {
            console.error(`[SnapSequencer] Failed to load ${packName}/samples_data.json:`, error);
            return {};
        }
    }

    // Get next sample for a pack
    function getNextSample(packName) {
        if (packName === RANDOM_PACK) {
            // Random selection for DblBass
            const samples = sampleLists[packName];
            const randomIndex = Math.floor(Math.random() * samples.length);
            return samples[randomIndex];
        } else {
            // Cycling for other packs
            const samples = sampleLists[packName];
            const index = packIndices[packName];
            const sampleName = samples[index];
            
            // Increment and wrap
            packIndices[packName] = (index + 1) % samples.length;
            
            return sampleName;
        }
    }

    // Get next sample that fits the current scale
    function getNextFittingSample(packName, scalePCs) {
        const samples = sampleLists[packName];
        const totalSamples = samples.length;
        
        if (packName === RANDOM_PACK) {
            // Try random samples until we find one that fits
            const tried = new Set();
            while (tried.size < totalSamples) {
                const randomIndex = Math.floor(Math.random() * totalSamples);
                if (tried.has(randomIndex)) continue;
                tried.add(randomIndex);
                
                const sampleName = samples[randomIndex];
                const sampleInfo = sampleData[packName][sampleName];
                const transposition = calculateTransposition(sampleInfo.pcs, scalePCs);
                
                if (transposition !== null) {
                    return { sampleName, transposition };
                }
            }
        } else {
            // Try sequential samples starting from current index
            const startIndex = packIndices[packName];
            for (let i = 0; i < totalSamples; i++) {
                const index = (startIndex + i) % totalSamples;
                const sampleName = samples[index];
                const sampleInfo = sampleData[packName][sampleName];
                const transposition = calculateTransposition(sampleInfo.pcs, scalePCs);
                
                if (transposition !== null) {
                    // Advance index for next time
                    packIndices[packName] = (index + 1) % totalSamples;
                    return { sampleName, transposition };
                }
            }
        }
        
        // No sample fits
        return null;
    }

    // Schedule coleman sample (self-scheduling)
    function scheduleNextColeman() {
        if (particlesMuted || !window.__audioEnabled) {
            return;
        }

        const scalePCs = getScalePCs(currentScale);
        const result = getNextFittingSample(CONTINUOUS_PACK, scalePCs);
        
        if (!result) {
            console.warn(`[SnapSequencer] No coleman samples fit the current scale, retrying in 1s`);
            colemanScheduleTimeout = setTimeout(() => scheduleNextColeman(), 1000);
            return;
        }
        
        const { sampleName, transposition } = result;
        const sampleInfo = sampleData[CONTINUOUS_PACK][sampleName];
        const playerKey = `${CONTINUOUS_PACK}/${sampleName}`;
        const basePlayer = players[playerKey];
        
        if (!basePlayer || !basePlayer.loaded || !basePlayer.buffer) {
            console.warn(`[SnapSequencer] Coleman player not ready: ${playerKey}, retrying in 1s`);
            colemanScheduleTimeout = setTimeout(() => scheduleNextColeman(), 1000);
            return;
        }
        
        const playbackRate = Math.pow(2, transposition / 12);
        const duration = basePlayer.buffer.duration / playbackRate;
        
        // Schedule to start now
        const voice = new Tone.Player().connect(effectChain);
        voice.buffer = basePlayer.buffer;
        voice.playbackRate = playbackRate;
        
        const voiceId = `${playerKey}@${Tone.now().toFixed(6)}`;
        
        activePlayers.set(voiceId, {
            player: voice,
            pcs: sampleInfo.pcs,
            transposition
        });
        
        voice.start();
        
        console.log(
            `[SnapSequencer] Playing ${playerKey} at ${transposition >= 0 ? '+' : ''}${transposition} semitones (rate: ${playbackRate.toFixed(3)}) voice=${voiceId}`
        );
        
        // Clean up when sample ends
        setTimeout(() => {
            const v = activePlayers.get(voiceId)?.player;
            if (v) {
                try { v.stop(); } catch (e) {}
                try { v.dispose(); } catch (e) {}
            }
            activePlayers.delete(voiceId);
        }, duration * 1000 + 50);
        
        // Schedule next coleman sample to start COLEMAN_OVERLAP seconds before this one ends
        const nextScheduleTime = (duration - COLEMAN_OVERLAP) * 1000;
        colemanScheduleTimeout = setTimeout(() => scheduleNextColeman(), nextScheduleTime);
        
        console.log(`[SnapSequencer] Next coleman scheduled in ${nextScheduleTime / 1000}s`);
    }

    // Initialize
    async function init() {
        if (isInitialized) {
            console.log('[SnapSequencer] Already initialized, skipping');
            return;
        }

        console.log('[SnapSequencer] Initializing...');

        // Load all sample pack data
        await Promise.all(SAMPLE_PACKS.map(pack => loadPackData(pack)));

        // Create simple effect chain
        const reverb = new Tone.Reverb({
            decay: 21,
            wet: 0.45
        }).toDestination();
        
        const delay = new Tone.FeedbackDelay({
            delayTime: 0.15,
            feedback: 0.8,
            wet: 0.05
        });
        
        delay.connect(reverb);
        effectChain = delay;
        effectNodes.push(delay, reverb);

        console.log('[SnapSequencer] Created effect chain');

        // Create players for all samples
        let totalPlayers = 0;
        for (const packName of SAMPLE_PACKS) {
            const packData = sampleData[packName];
            for (const [sampleName, data] of Object.entries(packData)) {
                const playerKey = `${packName}/${sampleName}`;
                const url = `samples/${packName}/samples/${data.filename}.wav`;
                
                players[playerKey] = new Tone.Player({
                    url,
                    onload: () => {
                        console.log(`[SnapSequencer] ✓ Loaded ${playerKey}`);
                    },
                    onerror: (err) => {
                        console.error(`[SnapSequencer] ✗ Failed to load ${playerKey}:`, err);
                    }
                }).connect(effectChain);
                
                totalPlayers++;
            }
        }

        console.log(`[SnapSequencer] Created ${totalPlayers} players`);

        isInitialized = true;
        console.log('[SnapSequencer] Initialized');
    }

    // Start
    async function start() {
        console.log('[SnapSequencer] start() called');

        if (!isInitialized) {
            console.warn('[SnapSequencer] Not initialized - cannot start');
            return;
        }

        if (!window.__audioEnabled) {
            console.log('[SnapSequencer] Audio disabled - cannot start');
            return;
        }

        await Tone.start();
        console.log('[SnapSequencer] AudioContext resumed');

        stop(); // Clean up any existing loop

        Tone.Transport.bpm.value = 60;
        currentScale = navigatorState.scale;
        console.log('[SnapSequencer] Current scale:', currentScale);

        const scalePCs = getScalePCs(currentScale);

        // Start coleman self-scheduling (with initial offset)
        const initialColemanOffset = (PACK_OFFSETS[CONTINUOUS_PACK] || 0) * 1000;
        console.log(`[SnapSequencer] Starting coleman in ${initialColemanOffset / 1000}s`);
        colemanScheduleTimeout = setTimeout(() => scheduleNextColeman(), initialColemanOffset);

        // Schedule loop for other packs
        console.log('[SnapSequencer] Creating loop event for', LOOP_DURATION, 'seconds...');
        loopEvent = new Tone.Loop((time) => {
            console.log('[SnapSequencer] Loop tick at time:', time);

            if (particlesMuted) {
                console.log('[SnapSequencer] Particles muted, skipping');
                return;
            }

            // Schedule all start times in this loop iteration
            START_TIMES.forEach(startTime => {
                Tone.Transport.scheduleOnce((scheduledTime) => {
                    const scalePCs = getScalePCs(currentScale);
                    
                    // Play one sample from each pack (except coleman which self-schedules)
                    SAMPLE_PACKS.forEach(packName => {
                        // Skip coleman - it handles its own scheduling
                        if (packName === CONTINUOUS_PACK) {
                            return;
                        }
                        
                        // Monophonic check for bassflute
                        if (packName === MONOPHONIC_PACK && activeBassflutePlayers.size > 0) {
                            console.log(`[SnapSequencer] ${packName} sample already playing, skipping`);
                            return;
                        }
                        
                        const result = getNextFittingSample(packName, scalePCs);
                        
                        if (!result) {
                            console.warn(`[SnapSequencer] No samples from ${packName} fit the current scale, skipping`);
                            return;
                        }
                        
                        const { sampleName, transposition } = result;
                        const sampleInfo = sampleData[packName][sampleName];
                        const playerKey = `${packName}/${sampleName}`;
                        const basePlayer = players[playerKey];
                        
                        if (!basePlayer || !basePlayer.loaded || !basePlayer.buffer) {
                            console.warn(`[SnapSequencer] Player not ready: ${playerKey}`);
                            return;
                        }
                        
                        const playbackRate = Math.pow(2, transposition / 12);
                        
                        const voice = new Tone.Player().connect(effectChain);
                        voice.buffer = basePlayer.buffer;
                        voice.playbackRate = playbackRate;
                        
                        const packOffset = PACK_OFFSETS[packName] || 0;
                        const actualStartTime = scheduledTime + packOffset;
                        const voiceId = `${playerKey}@${actualStartTime.toFixed(6)}`;
                        
                        activePlayers.set(voiceId, {
                            player: voice,
                            pcs: sampleInfo.pcs,
                            transposition
                        });
                        
                        // Track bassflute samples
                        if (packName === MONOPHONIC_PACK) {
                            activeBassflutePlayers.add(voiceId);
                        }
                        
                        voice.start(actualStartTime);
                        
                        console.log(
                            `[SnapSequencer] Playing ${playerKey} at ${transposition >= 0 ? '+' : ''}${transposition} semitones (rate: ${playbackRate.toFixed(3)}) voice=${voiceId}`
                        );
                        
                        const duration = voice.buffer.duration / voice.playbackRate;
                        setTimeout(() => {
                            const v = activePlayers.get(voiceId)?.player;
                            if (v) {
                                try { v.stop(); } catch (e) {}
                                try { v.dispose(); } catch (e) {}
                            }
                            activePlayers.delete(voiceId);
                            
                            // Remove from bassflute tracking
                            if (packName === MONOPHONIC_PACK) {
                                activeBassflutePlayers.delete(voiceId);
                            }
                        }, duration * 1000 + 50);
                    });
                }, time + startTime);
            });

        }, LOOP_DURATION).start(0);

        console.log('[SnapSequencer] Starting Transport...');
        Tone.Transport.start();
        console.log('[SnapSequencer] Started');
    }

    // Stop
    function stop() {
        if (loopEvent) {
            loopEvent.stop();
            loopEvent.dispose();
            loopEvent = null;
        }

        // Stop coleman self-scheduling
        if (colemanScheduleTimeout) {
            clearTimeout(colemanScheduleTimeout);
            colemanScheduleTimeout = null;
        }

        Tone.Transport.stop();
        Tone.Transport.cancel();

        activePlayers.forEach(({ player }) => {
            try { player.stop(); } catch (e) {}
            try { player.dispose(); } catch (e) {}
        });
        activePlayers.clear();
        activeBassflutePlayers.clear();

        console.log('[SnapSequencer] Stopped');
    }

    // Toggle particle mute
    function toggleParticles() {
        particlesMuted = !particlesMuted;
        console.log(`[SnapSequencer] Particles ${particlesMuted ? 'muted' : 'unmuted'}`);
        return particlesMuted;
    }

    // Handle scale change
    function onScaleChange(newScale) {
        console.log('[SnapSequencer] onScaleChange called:', newScale);

        if (!isInitialized) {
            console.log('[SnapSequencer] Not initialized, ignoring scale change');
            return;
        }

        if (newScale === currentScale) {
            console.log('[SnapSequencer] Scale unchanged, ignoring');
            return;
        }

        const oldScale = currentScale;
        currentScale = newScale;

        console.log(`[SnapSequencer] Scale change: ${oldScale} → ${newScale}`);

        const newScalePCs = getScalePCs(newScale);
        console.log('[SnapSequencer] New scale PCs:', newScalePCs);
        console.log('[SnapSequencer] Currently playing samples:', activePlayers.size);

        // Update any currently playing voices
        activePlayers.forEach((data, voiceId) => {
            const { player, pcs, transposition: oldTransposition } = data;
            const newTransposition = calculateTransposition(pcs, newScalePCs);

            if (newTransposition === null) {
                console.log(`[SnapSequencer] ${voiceId}: no longer fits scale, letting it finish`);
                return;
            }

            if (newTransposition !== oldTransposition) {
                applyPortamento(player, oldTransposition, newTransposition, voiceId);
                activePlayers.set(voiceId, { ...data, transposition: newTransposition });
            } else {
                console.log(`[SnapSequencer] ${voiceId}: no change (${oldTransposition} semitones)`);
            }
        });
    }

    // Cleanup
    function dispose() {
        stop();

        glideIntervals.forEach(interval => clearInterval(interval));
        glideIntervals.clear();

        Object.values(players).forEach(player => {
            if (player) player.dispose();
        });

        effectNodes.forEach(node => {
            if (node) node.dispose();
        });
        effectNodes = [];

        players = {};
        sampleData = {};
        sampleLists = {};
        packIndices = {};
        effectChain = null;
        isInitialized = false;

        console.log('[SnapSequencer] Disposed');
    }

    return {
        init,
        start,
        stop,
        toggleParticles,
        onScaleChange,
        dispose
    };
})();