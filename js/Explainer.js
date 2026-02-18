// Explainer.js
// Whiteboard-style annotations for the portfolio site
// VexFlow notation copied from Dashboard's TrebleStaff.js

const Explainer = (() => {
    let isOpen = false;
    let currentScaleKey = 'a_diatonic';

    // Pitch tokens for parsing scale keys
    const PITCH_TOKENS = new Set([
        "a", "b", "c", "d", "e", "f", "g",
        "as", "bs", "cs", "ds", "es", "fs", "gs",
    ]);

    // Map scale key root token to display name (matching Dashboard's mapSharp)
    // Using C# instead of Db per user request
    function mapSharp(r) {
        switch (r) {
            case "as": return "B\u266D";   // Bb
            case "bs": return "B\u266F";   // B#
            case "cs": return "C\u266F";   // C# (user requested instead of Db)
            case "ds": return "E\u266D";   // Eb
            case "es": return "E\u266F";   // E#
            case "fs": return "F\u266F";   // F#
            case "gs": return "A\u266D";   // Ab
            case "a": return "A";
            case "b": return "B";
            case "c": return "C";
            case "d": return "D";
            case "e": return "E";
            case "f": return "F";
            case "g": return "G";
            default:
                return r ? r.charAt(0).toUpperCase() + r.slice(1) : "";
        }
    }

    // Modes of limited transposition - symmetrical scales without a traditional root
    const LIMITED_TRANSPOSITION_MODES = ["whole_tone", "hexatonic", "octatonic"];

    // Format scale key for display (matching Dashboard's formatScaleName)
    function formatScaleName(scaleKey) {
        if (!scaleKey || typeof scaleKey !== "string") return "";
        const scaleData = ScaleData[scaleKey];
        const parts = scaleKey.split("_");
        const maybeRoot = parts[0];
        const hasRootToken = PITCH_TOKENS.has(maybeRoot);
        const classTokens = hasRootToken ? parts.slice(1) : parts;
        const classLabel = classTokens.join(" ").toLowerCase();

        // For limited transposition modes, show first two pitch classes instead of root
        if (scaleData && LIMITED_TRANSPOSITION_MODES.includes(scaleData.scale_class)) {
            const pc = scaleData.pitch_classes;
            const scaleClassLabel = scaleData.scale_class.replace("_", " ");
            return `[${pc[0]},${pc[1]}] ${scaleClassLabel}`.trim();
        }

        if (hasRootToken) {
            const root = mapSharp(maybeRoot);
            return `${root} ${classLabel}`.trim();
        }
        return classLabel;
    }

    // Render scale notation using VexFlow - copied from Dashboard's TrebleStaff.js
    function renderScaleNotation(scaleKey) {
        // Render to both desktop (fixed) and mobile (inline) containers
        renderScaleNotationToContainer(scaleKey, 'scale-notation');
        renderScaleNotationToContainer(scaleKey, 'scale-notation-mobile');
    }

    function renderScaleNotationToContainer(scaleKey, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        // Clear previous notation
        while (container.lastChild) {
            container.removeChild(container.lastChild);
        }

        if (!scaleKey || !ScaleData || !ScaleData[scaleKey]) {
            console.warn('[Explainer] Scale not found:', scaleKey);
            return;
        }

        const k = ScaleData[scaleKey];
        if (!k.spelling || k.spelling.length === 0) {
            console.warn('[Explainer] No spelling for scale:', scaleKey);
            return;
        }

        // Check if VexFlow is loaded
        if (typeof Vex === 'undefined' || !Vex.Flow) {
            console.warn('[Explainer] VexFlow not loaded yet');
            setTimeout(() => renderScaleNotation(scaleKey), 100);
            return;
        }

        try {
            const VF = Vex.Flow;
            const renderer = new VF.Renderer(container, VF.Renderer.Backends.SVG);

            // Responsive width - matching Dashboard logic
            // Adjust for number of notes (octatonic has 8)
            const numNotes = k.spelling.length;
            const baseWidth = numNotes > 7 ? 500 : 400;  // wider for 8+ notes

            let stave_width;
            if (window.innerWidth <= 600) stave_width = Math.min(baseWidth, 320);
            else if (window.innerWidth <= 960) stave_width = Math.min(baseWidth, 400);
            else if (window.innerWidth <= 1280) stave_width = Math.min(baseWidth, 450);
            else stave_width = baseWidth;

            renderer.resize(stave_width, 150);

            const context = renderer.getContext();
            context.setFont("Arial", 10, "");

            const stave = new VF.Stave(10, 20, stave_width - 20);
            stave.addClef("treble");
            stave.setContext(context);

            // Conversion maps - exactly from Dashboard
            const convert_inflection = { s: "#", ss: "##", f: "b", ff: "bb", "": "n" };
            const convert_octavation = { "''": "/6", "'": "/5", "": "/4" };

            const notes = [];
            k.spelling.forEach((element) => {
                const m = element.match(/^([a-g])(s|ss|f|ff|)?('|''|)?$/);
                if (!m) return;
                const [, base, infl = '', oct = ''] = m;
                const n = new VF.StaveNote({
                    clef: "treble",
                    keys: [base + (convert_octavation[oct] || '/4')],
                    duration: "q",
                });
                // VexFlow 4.x: addAccidental doesn't return the note, so call separately
                if (infl) {
                    n.addModifier(new VF.Accidental(convert_inflection[infl]), 0);
                }
                notes.push(n);
            });

            if (notes.length > 0) {
                const voice = new VF.Voice({
                    num_beats: k.pitch_classes.length,
                    beat_value: 4
                });
                voice.addTickables(notes);

                new VF.Formatter()
                    .joinVoices([voice])
                    .format([voice], stave_width - 80);

                stave.draw();
                voice.draw(context, stave);

                // Center the notation based on actual rendered content
                // Get the SVG element and measure its content bounds
                const svg = container.querySelector('svg');
                if (svg) {
                    // Use getBBox to get the actual drawn content bounds
                    const bbox = svg.getBBox();
                    // Calculate the visual center of the content vs the SVG center
                    const contentCenterX = bbox.x + bbox.width / 2;
                    const svgCenterX = stave_width / 2;
                    const offset = svgCenterX - contentCenterX;
                    // Apply the offset to center the content
                    svg.style.transform = `translateX(${offset}px)`;
                }
            }

        } catch (e) {
            console.error('[Explainer] VexFlow error:', e);
        }
    }

    // Update all explainer content
    function update(scaleKey) {
        currentScaleKey = scaleKey || currentScaleKey;

        if (!isOpen) return;

        // Scale name is now rendered inside the p5 polygon (Polygon.js)
        // Only render notation here
        renderScaleNotation(currentScaleKey);
    }

    // Toggle explainer visibility
    function toggle() {
        isOpen = !isOpen;

        const content = document.getElementById('explainer-content');
        if (content) {
            if (isOpen) {
                content.classList.add('visible');
                update(currentScaleKey);
            } else {
                content.classList.remove('visible');
            }
        }

        console.log('[Explainer] Toggled:', isOpen ? 'open' : 'closed');
        return isOpen;
    }

    // Handle scale change from Navigator
    function onScaleChange(newScale) {
        console.log('[Explainer] onScaleChange called with:', newScale);
        currentScaleKey = newScale;
        if (isOpen) {
            update(newScale);
        }
    }

    // Initialize
    function init() {
        console.log('[Explainer] Initialized');

        // Set initial scale from navigator state
        if (typeof navigatorState !== 'undefined' && navigatorState.scale) {
            currentScaleKey = navigatorState.scale;
        }
    }

    return {
        init,
        toggle,
        update,
        onScaleChange,
        isOpen: () => isOpen
    };
})();
