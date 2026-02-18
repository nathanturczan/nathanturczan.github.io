// Helper utilities
window.Helper = {};

// HSV to RGB conversion
window.Helper.hsvToRgb = (h, s, v) => {
    var r = 0,
        g = 0,
        b = 0;

    var i = Math.floor(h * 6);
    var f = h * 6 - i;
    var p = v * (1 - s);
    var q = v * (1 - f * s);
    var t = v * (1 - (1 - f) * s);

    if (i % 6 === 0) {
        r = v;
        g = t;
        b = p;
    } else if (i % 6 === 1) {
        r = q;
        g = v;
        b = p;
    } else if (i % 6 === 2) {
        r = p;
        g = v;
        b = t;
    } else if (i % 6 === 3) {
        r = p;
        g = q;
        b = v;
    } else if (i % 6 === 4) {
        r = t;
        g = p;
        b = v;
    } else if (i % 6 === 5) {
        r = v;
        g = p;
        b = q;
    }

    return [r * 255, g * 255, b * 255];
};

// Official Scale Navigator colors from ScaleUtils.h
// Indexed by pitch class (0-11): C, Db, D, Eb, E, F, F#, G, Ab, A, Bb, B
// From: 0xffRRGGBB format in JUCE
window.Helper.PITCH_CLASS_COLORS = {
    0:  [0xff, 0x49, 0x6d],  // C  - #ff496d - red-pink
    1:  [0x01, 0xcb, 0x91],  // Db - #01cb91 - teal
    2:  [0xda, 0x8e, 0xff],  // D  - #da8eff - lavender
    3:  [0xfb, 0xe9, 0x06],  // Eb - #fbe906 - yellow
    4:  [0x01, 0x7a, 0xe6],  // E  - #017ae6 - blue
    5:  [0xee, 0x7a, 0x3c],  // F  - #ee7a3c - orange
    6:  [0x08, 0xd2, 0xd1],  // F# - #08d2d1 - cyan
    7:  [0xff, 0x73, 0xcb],  // G  - #ff73cb - magenta-pink
    8:  [0x8e, 0xff, 0x04],  // Ab - #8eff04 - lime green
    9:  [0x87, 0x7d, 0xf9],  // A  - #877df9 - violet
    10: [0xff, 0xab, 0x00],  // Bb - #ffab00 - amber
    11: [0x03, 0xa6, 0xd0],  // B  - #03a6d0 - cyan-blue
};

// Get node color array for a given root and scale class
window.Helper.getNodeColorArray = (root, scaleClass) => {
    if (root == null) root = 0;

    // Grayscale for symmetric scales
    if (scaleClass === "whole_tone") {
        const v = 200 - (root % 2) * 50;  // 200 or 150
        return [v, v, v];
    } else if (scaleClass === "octatonic") {
        const v = 200 - (root % 3) * 33;  // 200, 167, or 133
        return [v, v, v];
    } else if (scaleClass === "hexatonic") {
        const v = 200 - (root % 4) * 33;  // 200, 167, 133, or 100
        return [v, v, v];
    }

    // Use OKLCH palette for chromatic scales
    return window.Helper.PITCH_CLASS_COLORS[root % 12] || [200, 200, 200];
};

window.Helper.default_animation_duration = 1;

// Also create non-window reference for convenience
const Helper = window.Helper;
