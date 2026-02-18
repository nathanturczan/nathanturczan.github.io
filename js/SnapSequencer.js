// SnapSequencer.js
// Headless sequencer that plays back samples with scale-aware transposition

const SnapSequencer = (() => {
    // Firebase Storage configuration
    const FIREBASE_STORAGE_BUCKET = "scale-navigator-ensemble.appspot.com";

    // Sample folders (same as Ensemble-Jammer)
    const SAMPLE_FOLDERS = [
        "elin_voice",
        "jicello",
        "lyre_short",
        "prayerbowls",
        "prophet_false",
        "stavros_guitar",
        "marimba_trems",
        "toy_bell"
    ];

    const SAMPLES_PER_FOLDER = 2;
    const DEFAULT_LOOP_LENGTH = 12;

    // Portamento parameters based on vocal research
    const PORTAMENTO_BASE_TIME = 0.7;
    const PORTAMENTO_TIME_SCALE = 0.025;
    const OVERSHOOT_SEMITONES = 1.0;
    const OVERSHOOT_TIME_RATIO = 0.55;
    const PREP_SEMITONES = 0.7;
    const PREP_TIME_RATIO = 0.2;

    // Prefer downwards transposition (and near-0 shifts) first
    const TRANSPOSITION_PREFERENCE = [0, -1, 1, -2, -3, 2, -4, 3, -5, 4, -6, 5, -7, 6];

    // State
    let loopConfig = null;
    let sampleManifests = new Map(); // folder -> {filename: {note_names, pcs}}
    let players = new Map(); // key -> Tone.Player
    let activeVoices = new Map(); // voiceId -> {player, pcs, transposition}
    let glideIntervals = new Set();
    let loopEvent = null;
    let masterBus = null;
    let isInitialized = false;
    let currentScale = null;

    const mod12 = (n) => ((n % 12) + 12) % 12;

    // Get Firebase Storage URL
    // For fetch() calls (manifests), we need to encode the path
    // For Tone.Player, we should NOT pre-encode because Tone encodes internally
    function getFirebaseStorageUrl(folder, filename, forTonePlayer = false) {
        const isManifest = filename.endsWith(".json");
        const path = isManifest
            ? `samples/${folder}/${filename}`
            : `samples/${folder}/samples/${filename}`;

        if (forTonePlayer) {
            // Same encoding as fetch - we'll fetch ourselves and create blob URLs
            return `https://firebasestorage.googleapis.com/v0/b/${FIREBASE_STORAGE_BUCKET}/o/${encodeURIComponent(path)}?alt=media`;
        }

        // For fetch() calls, encode the whole path
        return `https://firebasestorage.googleapis.com/v0/b/${FIREBASE_STORAGE_BUCKET}/o/${encodeURIComponent(path)}?alt=media`;
    }

    // Build default loop config by randomly selecting samples from each folder
    async function buildDefaultLoopConfig() {
        const tracks = [];
        const numFolders = SAMPLE_FOLDERS.length;
        const totalSamples = numFolders * SAMPLES_PER_FOLDER;

        for (let folderIndex = 0; folderIndex < SAMPLE_FOLDERS.length; folderIndex++) {
            const folder = SAMPLE_FOLDERS[folderIndex];

            // Load manifest to get available samples
            const manifest = await loadSampleManifest(folder);
            const sampleNames = Object.keys(manifest).filter(name => !name.endsWith('.wav'));

            if (sampleNames.length === 0) {
                console.warn(`[SnapSequencer] No samples found in ${folder}`);
                continue;
            }

            // Shuffle and pick samples
            const shuffled = [...sampleNames].sort(() => Math.random() - 0.5);
            const selected = shuffled.slice(0, Math.min(SAMPLES_PER_FOLDER, shuffled.length));

            selected.forEach((name, indexInFolder) => {
                // Distribute evenly: folder 0 samples at 0, 8; folder 1 at 1, 9; etc.
                const slot = folderIndex + indexInFolder * numFolders;
                const startTime = (slot / totalSamples) * DEFAULT_LOOP_LENGTH;

                tracks.push({
                    folder,
                    filename: name.endsWith('.wav') ? name : `${name}.wav`,
                    startTime
                });
            });
        }

        console.log(`[SnapSequencer] Built default config with ${tracks.length} tracks`);
        return { loopLength: DEFAULT_LOOP_LENGTH, tracks };
    }

    // Map note names to pitch classes
    function noteNameToPC(noteName) {
        const noteMap = {
            'c': 0, 'c#': 1, 'cs': 1, 'db': 1, 'df': 1,
            'd': 2, 'd#': 3, 'ds': 3, 'eb': 3, 'ef': 3,
            'e': 4,
            'f': 5, 'f#': 6, 'fs': 6, 'gb': 6, 'gf': 6,
            'g': 7, 'g#': 8, 'gs': 8, 'ab': 8, 'af': 8,
            'a': 9, 'a#': 10, 'as': 10, 'bb': 10, 'bf': 10,
            'b': 11
        };
        return noteMap[noteName.toLowerCase().trim()] ?? null;
    }

    // Calculate transposition to fit sample PCs into scale PCs
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

    // Quarter-sine easing function
    function quartSineEase(t) {
        return Math.sin(t * Math.PI * 0.5);
    }

    // Calculate portamento parameters
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

    // Apply realistic portamento
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
                `[SnapSequencer] ${voiceId}: ${oldTransposition} -> ${newTransposition} semitones ` +
                `(${isAscending ? 'ascending' : 'descending'})`
            );
        }
    }

    // Load a sample's manifest to get its pitch classes
    async function loadSampleManifest(folder) {
        if (sampleManifests.has(folder)) {
            return sampleManifests.get(folder);
        }

        try {
            const url = getFirebaseStorageUrl(folder, "samples_data.json");
            const response = await fetch(url);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);

            const data = await response.json();
            // Convert note names to pitch classes
            const processed = {};
            for (const [key, value] of Object.entries(data)) {
                const noteNames = value.note_names || [];
                const pcs = noteNames.map(noteNameToPC).filter(pc => pc !== null);
                processed[key] = { ...value, pcs };
                // Also store with .wav extension
                processed[key + '.wav'] = { ...value, pcs };
            }
            sampleManifests.set(folder, processed);
            console.log(`[SnapSequencer] Loaded manifest for ${folder}`);
            return processed;
        } catch (e) {
            console.error(`[SnapSequencer] Failed to load manifest for ${folder}:`, e);
            return {};
        }
    }

    // Initialize
    async function init() {
        if (isInitialized) {
            console.log('[SnapSequencer] Already initialized');
            return;
        }

        console.log('[SnapSequencer] Initializing...');

        // Create master bus (same as Ensemble Jammer: gain -> limiter -> destination)
        const masterLimiter = new Tone.Limiter(-3).toDestination();
        masterBus = new Tone.Gain(0.6).connect(masterLimiter);
        console.log('[SnapSequencer] Created master bus');

        // Build default loop config (randomly selects samples like Ensemble-Jammer)
        loopConfig = await buildDefaultLoopConfig();

        // Mark as initialized so playback can start (samples load progressively)
        isInitialized = true;
        console.log('[SnapSequencer] Initialized (samples loading in background)');

        // Load samples progressively - don't await, let them load in background
        // Each sample becomes available for playback as soon as it loads
        loopConfig.tracks.forEach(async (track) => {
            const key = `${track.folder}/${track.filename}`;
            if (players.has(key)) return;

            const url = getFirebaseStorageUrl(track.folder, track.filename, true);

            try {
                // Fetch audio ourselves with correctly encoded URL
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
                }
                const blob = await response.blob();
                const blobUrl = URL.createObjectURL(blob);

                // Pass blob URL to Tone.Player (no encoding issues)
                const player = new Tone.Player({
                    url: blobUrl,
                    onload: () => console.log(`[SnapSequencer] Ready: ${key}`),
                    onerror: (err) => console.error(`[SnapSequencer] Failed to decode ${key}:`, err)
                }).connect(masterBus);

                players.set(key, player);
            } catch (err) {
                console.error(`[SnapSequencer] Failed to fetch ${key}:`, err);
            }
        });
    }

    // Start playback
    async function start() {
        console.log('[SnapSequencer] start() called');

        if (!isInitialized) {
            console.warn('[SnapSequencer] Not initialized');
            return;
        }

        if (!window.__audioEnabled) {
            console.log('[SnapSequencer] Audio disabled');
            return;
        }

        await Tone.start();
        console.log('[SnapSequencer] AudioContext resumed');

        // Don't wait for all samples - start immediately, play whatever is loaded
        // Unloaded samples will be skipped and will join playback once they load
        const loadedCount = Array.from(players.values()).filter(p => p.loaded).length;
        const totalCount = loopConfig?.tracks?.length || 0;
        console.log(`[SnapSequencer] Starting with ${loadedCount}/${totalCount} samples loaded`);

        stop();

        Tone.Transport.bpm.value = 60;
        currentScale = navigatorState.scale;
        console.log('[SnapSequencer] Current scale:', currentScale);

        const loopDuration = loopConfig.loopLength;

        loopEvent = new Tone.Loop((time) => {
            console.log('[SnapSequencer] Loop tick');

            const scalePCs = getScalePCs(currentScale);

            for (const track of loopConfig.tracks) {
                Tone.Transport.scheduleOnce((scheduledTime) => {
                    const key = `${track.folder}/${track.filename}`;
                    const basePlayer = players.get(key);

                    if (!basePlayer || !basePlayer.loaded || !basePlayer.buffer) {
                        console.warn(`[SnapSequencer] Player not ready: ${key}`);
                        return;
                    }

                    // Get pitch classes from manifest
                    const manifest = sampleManifests.get(track.folder) || {};
                    const nameWithoutExt = track.filename.replace(/\.[^/.]+$/, '');
                    const sampleData = manifest[track.filename] || manifest[nameWithoutExt] || {};
                    const pcs = sampleData.pcs || [0];

                    const transposition = calculateTransposition(pcs, scalePCs);
                    if (transposition === null) {
                        console.warn(`[SnapSequencer] ${key} doesn't fit scale, skipping`);
                        return;
                    }

                    const playbackRate = Math.pow(2, transposition / 12);

                    const voice = new Tone.Player().connect(masterBus);
                    voice.buffer = basePlayer.buffer;
                    voice.playbackRate = playbackRate;

                    const voiceId = `${key}@${scheduledTime.toFixed(3)}`;

                    activeVoices.set(voiceId, {
                        player: voice,
                        pcs,
                        transposition
                    });

                    voice.start(scheduledTime);

                    console.log(`[SnapSequencer] Playing ${key} at ${transposition >= 0 ? '+' : ''}${transposition} semitones`);

                    const duration = voice.buffer.duration / voice.playbackRate;
                    setTimeout(() => {
                        const v = activeVoices.get(voiceId)?.player;
                        if (v) {
                            try { v.stop(); } catch (e) {}
                            try { v.dispose(); } catch (e) {}
                        }
                        activeVoices.delete(voiceId);
                    }, duration * 1000 + 50);
                }, time + track.startTime);
            }
        }, loopDuration).start(0);

        Tone.Transport.start();
        console.log('[SnapSequencer] Started');
    }

    // Stop playback
    function stop() {
        if (loopEvent) {
            loopEvent.stop();
            loopEvent.dispose();
            loopEvent = null;
        }

        Tone.Transport.stop();
        Tone.Transport.cancel();

        activeVoices.forEach(({ player }) => {
            try { player.stop(); } catch (e) {}
            try { player.dispose(); } catch (e) {}
        });
        activeVoices.clear();

        console.log('[SnapSequencer] Stopped');
    }

    // Handle scale change
    function onScaleChange(newScale) {
        console.log('[SnapSequencer] onScaleChange:', newScale);

        if (!isInitialized || newScale === currentScale) return;

        const oldScale = currentScale;
        currentScale = newScale;

        console.log(`[SnapSequencer] Scale change: ${oldScale} -> ${newScale}`);

        const newScalePCs = getScalePCs(newScale);

        // Update currently playing voices
        activeVoices.forEach((data, voiceId) => {
            const { player, pcs, transposition: oldTransposition } = data;
            const newTransposition = calculateTransposition(pcs, newScalePCs);

            if (newTransposition === null) {
                console.log(`[SnapSequencer] ${voiceId}: no longer fits scale`);
                return;
            }

            if (newTransposition !== oldTransposition) {
                applyPortamento(player, oldTransposition, newTransposition, voiceId);
                activeVoices.set(voiceId, { ...data, transposition: newTransposition });
            }
        });
    }

    // Cleanup
    function dispose() {
        stop();

        glideIntervals.forEach(interval => clearInterval(interval));
        glideIntervals.clear();

        players.forEach(player => player.dispose());
        players.clear();

        if (masterBus) {
            masterBus.dispose();
            masterBus = null;
        }

        if (finalReverb) {
            finalReverb.dispose();
            finalReverb = null;
        }

        sampleManifests.clear();
        loopConfig = null;
        isInitialized = false;

        console.log('[SnapSequencer] Disposed');
    }

    return {
        init,
        start,
        stop,
        onScaleChange,
        dispose
    };
})();
