// Portfolio Navigator Integration
// Initializes full interactive Navigator with photo stack

// Set stroke option to 3 (no stroke)
window.__strokeOption = "3";

// Stub Redux-style functions for Navigator
var navigatorState = navigatorState || {
    scale: 'a_diatonic',
    main_polygon: null
};

const setScaleData = (payload) => {
    // Handle both formats: string or { scale: string }
    const newScale = typeof payload === 'string' ? payload : (payload && payload.scale);

    if (newScale) {
        navigatorState.scale = newScale;
        console.log('[Portfolio] Scale changed to:', newScale);

        // Notify SnapSequencer of scale change
        if (typeof SnapSequencer !== 'undefined') {
            console.log('[Portfolio] Notifying SnapSequencer of scale change...');
            SnapSequencer.onScaleChange(newScale);
        } else {
            console.log('[Portfolio] SnapSequencer not available for scale change');
        }

        // Notify Explainer of scale change
        if (typeof Explainer !== 'undefined') {
            Explainer.onScaleChange(newScale);
        }
    }
};

const setNavigatorData = (payload) => {
    if (payload && payload.main_polygon) {
        navigatorState.main_polygon = payload.main_polygon;
    }
};



// P5 Sketch with full Navigator
const sketch = (p) => {
    p.setup = () => {
        const canvas = p.createCanvas(400, 400);
        canvas.parent('navigator-canvas');
        p.frameRate(30);

        // Initialize Navigator with full functionality
        init({ p5: p, setNavigatorData, setScaleData });

        console.log('[Portfolio] Navigator initialized');
    };

    p.draw = () => {
        p.clear();

        // Use Navigator's draw function
        navigatorDraw({ p5: p });
    };

    p.mousePressed = (event) => {
        navigatorMousePressed({ p5: p, setScaleData, event });
    };

    p.mouseReleased = (event) => {
        navigatorMouseReleased({ setScaleData, setNavigatorData, event });
    };
};

// Initialize p5
new p5(sketch);

// ------------------------------
// Photo stack interaction (layers on top of navigator)
// - On hover, add an image layer for the project
// - Layer is clickable to that project's href
// - Layer disappears after 20 seconds (no fade)
// ------------------------------
const photoStack = document.querySelector('.photo-stack');
const projectItems = document.querySelectorAll('.project-item:not(.archive)');

const IMAGES_BASE = 'images/';

// Title -> filename mapping (must match titles in index.html exactly)
const projectImageMap = {
    'Airboat': 'airboat.jpg',
    'Scale Navigator Dashboard': 'dashboard/scalenavigatordashboard.png',
    '(((Notes)Chords)Scales)))': 'noteschordsscales.png',
    'To A Wild Rose...': 'wildrose.jpg',
    'Lydia': 'lydianairs.jpg',
    'Modal Intersections': 'MI-2.gif',
    'SOULS': 'sia_souls.jpg',
    'Pandiatonic Autoharp': 'autoharp.jpg',
    'PitchSnap': [
        'pitchsnap/Screenshot 2026-02-10 at 8.51.41 AM.png',
        'pitchsnap/Screenshot 2026-02-10 at 8.51.47 AM.png',
        'pitchsnap/Screenshot 2026-02-10 at 8.52.08 AM.png'
    ],
    'Ensemble Jammer': 'ensemblejammer/ensemblejammer-1.png'
};

// Helper to get filename (handles arrays for random selection)
function getProjectImage(title) {
    const entry = projectImageMap[title];
    if (!entry) return null;
    if (Array.isArray(entry)) {
        return entry[Math.floor(Math.random() * entry.length)];
    }
    return entry;
}

let layerCount = 1;

function random(min, max) {
    return Math.random() * (max - min) + min;
}

const LAYER_LIFETIME_MS = 20000; // 20 seconds
const MAX_LAYERS = 12;

function trimOldLayers() {
    const layers = photoStack.querySelectorAll('.photo-layer');
    const extra = layers.length - MAX_LAYERS;
    if (extra > 0) {
        for (let i = 0; i < extra; i++) {
            layers[i].remove();
        }
    }
}

projectItems.forEach(item => {
    item.addEventListener('mouseenter', function () {
        // Disable photo stacking on mobile
        if (window.innerWidth <= 1024) return;
        
        const titleEl = this.querySelector('.title');
        const title = (titleEl ? titleEl.textContent : '').trim();
        const filename = getProjectImage(title);
        if (!filename) return;

        const href = this.getAttribute('href');
        if (!href) return;

        // Use <a> so the photo itself is clickable
        const layer = document.createElement('a');
        layer.className = 'photo-layer active';
        layer.href = href;

        // If you want new-tab behavior, uncomment:
        // layer.target = '_blank';
        // layer.rel = 'noopener noreferrer';

        // Image styling (no cropping)
        layer.style.backgroundImage = `url("${IMAGES_BASE}${filename}")`;
        layer.style.backgroundSize = 'contain';
        layer.style.backgroundPosition = 'center';
        layer.style.backgroundRepeat = 'no-repeat';
        layer.style.backgroundColor = 'transparent';

        // Random transform vibe
        const rotation = random(-8, 8);
        const scale = random(0.95, 1.05);
        layer.style.setProperty('--rotation', `${rotation}deg`);
        layer.style.setProperty('--scale', scale);

        // Center in the stack (matches your CSS keyframes using translate(-50%, -50%))
        layer.style.left = '50%';
        layer.style.top = '50%';
        layer.style.transformOrigin = 'center center';

        // Must sit above the canvas to be clickable
        layerCount++;
        layer.style.zIndex = layerCount;

        photoStack.appendChild(layer);
        trimOldLayers();

        // Disappear after 20 seconds
        const t = setTimeout(() => {
            layer.remove();
        }, LAYER_LIFETIME_MS);

        // Clean up timer if removed early
        layer.addEventListener('DOMNodeRemoved', () => clearTimeout(t), { once: true });
    });
});

// Click on blank space to clear photo stack
document.addEventListener('click', (e) => {
    // Don't clear if clicking on a photo layer, project item, or corner button
    if (e.target.closest('.photo-layer') || 
        e.target.closest('.project-item') || 
        e.target.closest('.corner-btn')) {
        return;
    }
    const layers = photoStack.querySelectorAll('.photo-layer');
    layers.forEach(layer => layer.remove());
});

// Audio toggle
(() => {
    const btn = document.getElementById('audio-toggle');
    if (!btn) return;

    // init: audio OFF
    window.__audioEnabled = false;
    btn.classList.remove('is-on');
    btn.classList.add('is-off');

    let toneLoaded = false;

    // Set tooltip based on viewport
    const updateTooltip = () => {
        if (window.innerWidth <= 1024) {
            btn.setAttribute('data-tooltip', '');
        } else {
            btn.setAttribute('data-tooltip', 'listen');
        }
    };
    
    updateTooltip();
    window.addEventListener('resize', updateTooltip);

    // Load Tone.js dynamically
    function loadToneJS() {
        return new Promise((resolve, reject) => {
            if (toneLoaded) {
                resolve();
                return;
            }

            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/tone/14.8.49/Tone.js';
            script.onload = () => {
                toneLoaded = true;
                console.log('[Portfolio] Tone.js loaded');
                resolve();
            };
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }

    // Pre-load Tone.js and initialize SnapSequencer in background on page load
    // This way audio is ready when user clicks (only need to call start())
    let sequencerReady = false;
    let initPromise = null; // Track ongoing initialization to prevent double-init

    async function ensureSequencerReady() {
        // If already ready, return immediately
        if (sequencerReady) return;

        // If init is already in progress, wait for it
        if (initPromise) {
            await initPromise;
            return;
        }

        // Start initialization
        initPromise = (async () => {
            if (!toneLoaded) {
                console.log('[Portfolio] Loading Tone.js...');
                await loadToneJS();
            }

            if (typeof SnapSequencer !== 'undefined') {
                console.log('[Portfolio] Initializing SnapSequencer...');
                await SnapSequencer.init();
                sequencerReady = true;
                console.log('[Portfolio] SnapSequencer ready');
            }
        })();

        await initPromise;
    }

    // Pre-load in background on page load
    ensureSequencerReady().catch(err => {
        console.error('[Portfolio] Pre-load failed:', err);
    });

    // Shared toggle function for both click and keyboard
    async function toggleAudio() {
        console.log('[Portfolio] Audio toggled. Current state:', window.__audioEnabled ? 'ON' : 'OFF');

        window.__audioEnabled = !window.__audioEnabled;

        // is-on => slash hidden
        btn.classList.toggle('is-on', window.__audioEnabled);
        btn.classList.toggle('is-off', !window.__audioEnabled);

        console.log('[Portfolio] New audio state:', window.__audioEnabled ? 'ON' : 'OFF');

        // Start/stop SnapSequencer
        if (typeof SnapSequencer !== 'undefined') {
            if (window.__audioEnabled) {
                console.log('[Portfolio] Enabling audio...');

                // Wait for initialization (instant if already done, waits if in progress)
                await ensureSequencerReady();

                console.log('[Portfolio] Starting SnapSequencer...');
                await SnapSequencer.start();
                console.log('[Portfolio] SnapSequencer started');
            } else {
                console.log('[Portfolio] Disabling audio...');
                SnapSequencer.stop();
                console.log('[Portfolio] SnapSequencer stopped');
            }
        } else {
            console.warn('[Portfolio] SnapSequencer not defined');
        }
    }

    btn.addEventListener('click', toggleAudio);

    // F8 keyboard shortcut to toggle audio (macOS play/stop)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'F8') {
            e.preventDefault();  // Prevent any default F8 behavior
            toggleAudio();
        }
    });

    // Cleanup on page unload
    window.addEventListener('beforeunload', () => {
        if (typeof SnapSequencer !== 'undefined') {
            SnapSequencer.dispose();
        }
    });
})();

// Explainer toggle
(() => {
    const btn = document.getElementById('explainer-toggle');
    if (!btn) return;

    // Initialize Explainer
    if (typeof Explainer !== 'undefined') {
        Explainer.init();
    }

    btn.addEventListener('click', () => {
        const isOpen = typeof Explainer !== 'undefined' ? Explainer.toggle() : false;
        btn.classList.toggle('is-open', isOpen);
        console.log('[Portfolio] Explainer toggled:', isOpen ? 'open' : 'closed');
    });
})();