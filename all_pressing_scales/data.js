const data = {
    "scales": {
        "a_acoustic": {
            "root": 9,
            "adjacent_scales": [
                "d_diatonic",
                "e_diatonic",
                "b_harmonic_major",
                "e_harmonic_minor",
                "octatonic_1",
                "whole_tone_2"
            ],
            "pitch_classes": [
                1,
                3,
                4,
                6,
                7,
                9,
                11
            ],
            "scale_class": "acoustic"
        },
        "a_diatonic": {
            "root": 9,
            "adjacent_scales": [
                "d_diatonic",
                "e_diatonic",
                "d_acoustic",
                "e_acoustic",
                "a_harmonic_major",
                "fs_harmonic_minor"
            ],
            "pitch_classes": [
                1,
                2,
                4,
                6,
                8,
                9,
                11
            ],
            "scale_class": "diatonic"
        },
        "a_harmonic_major": {
            "root": 9,
            "adjacent_scales": [
                "a_diatonic",
                "g_acoustic",
                "fs_harmonic_minor",
                "a_harmonic_minor",
                "octatonic_2",
                "hexatonic_1"
            ],
            "pitch_classes": [
                1,
                2,
                4,
                5,
                8,
                9,
                11
            ],
            "scale_class": "harmonic_major"
        },
        "a_harmonic_minor": {
            "root": 9,
            "adjacent_scales": [
                "c_diatonic",
                "d_acoustic",
                "c_harmonic_major",
                "a_harmonic_major",
                "octatonic_3",
                "hexatonic_1"
            ],
            "pitch_classes": [
                0,
                2,
                4,
                5,
                8,
                9,
                11
            ],
            "scale_class": "harmonic_minor"
        },
        "as_acoustic": {
            "root": 10,
            "adjacent_scales": [
                "ds_diatonic",
                "f_diatonic",
                "c_harmonic_major",
                "f_harmonic_minor",
                "octatonic_2",
                "whole_tone_1"
            ],
            "pitch_classes": [
                0,
                2,
                4,
                5,
                7,
                8,
                10
            ],
            "scale_class": "acoustic"
        },
        "as_diatonic": {
            "root": 10,
            "adjacent_scales": [
                "ds_diatonic",
                "f_diatonic",
                "ds_acoustic",
                "f_acoustic",
                "as_harmonic_major",
                "g_harmonic_minor"
            ],
            "pitch_classes": [
                0,
                2,
                3,
                5,
                7,
                9,
                10
            ],
            "scale_class": "diatonic"
        },
        "as_harmonic_major": {
            "root": 10,
            "adjacent_scales": [
                "as_diatonic",
                "gs_acoustic",
                "g_harmonic_minor",
                "as_harmonic_minor",
                "octatonic_3",
                "hexatonic_2"
            ],
            "pitch_classes": [
                0,
                2,
                3,
                5,
                6,
                9,
                10
            ],
            "scale_class": "harmonic_major"
        },
        "as_harmonic_minor": {
            "root": 10,
            "adjacent_scales": [
                "cs_diatonic",
                "ds_acoustic",
                "cs_harmonic_major",
                "as_harmonic_major",
                "octatonic_1",
                "hexatonic_2"
            ],
            "pitch_classes": [
                0,
                1,
                3,
                5,
                6,
                9,
                10
            ],
            "scale_class": "harmonic_minor"
        },
        "b_acoustic": {
            "root": 11,
            "adjacent_scales": [
                "e_diatonic",
                "fs_diatonic",
                "cs_harmonic_major",
                "fs_harmonic_minor",
                "octatonic_3",
                "whole_tone_2"
            ],
            "pitch_classes": [
                1,
                3,
                5,
                6,
                8,
                9,
                11
            ],
            "scale_class": "acoustic"
        },
        "b_diatonic": {
            "root": 11,
            "adjacent_scales": [
                "e_diatonic",
                "fs_diatonic",
                "e_acoustic",
                "fs_acoustic",
                "b_harmonic_major",
                "gs_harmonic_minor"
            ],
            "pitch_classes": [
                1,
                3,
                4,
                6,
                8,
                10,
                11
            ],
            "scale_class": "diatonic"
        },
        "b_harmonic_major": {
            "root": 11,
            "adjacent_scales": [
                "b_diatonic",
                "a_acoustic",
                "gs_harmonic_minor",
                "b_harmonic_minor",
                "octatonic_1",
                "hexatonic_3"
            ],
            "pitch_classes": [
                1,
                3,
                4,
                6,
                7,
                10,
                11
            ],
            "scale_class": "harmonic_major"
        },
        "b_harmonic_minor": {
            "root": 11,
            "adjacent_scales": [
                "d_diatonic",
                "e_acoustic",
                "d_harmonic_major",
                "b_harmonic_major",
                "octatonic_2",
                "hexatonic_3"
            ],
            "pitch_classes": [
                1,
                2,
                4,
                6,
                7,
                10,
                11
            ],
            "scale_class": "harmonic_minor"
        },
        "c_acoustic": {
            "root": 0,
            "adjacent_scales": [
                "f_diatonic",
                "g_diatonic",
                "d_harmonic_major",
                "g_harmonic_minor",
                "octatonic_1",
                "whole_tone_1"
            ],
            "pitch_classes": [
                0,
                2,
                4,
                6,
                7,
                9,
                10
            ],
            "scale_class": "acoustic"
        },
        "c_diatonic": {
            "root": 0,
            "adjacent_scales": [
                "f_diatonic",
                "g_diatonic",
                "f_acoustic",
                "g_acoustic",
                "c_harmonic_major",
                "a_harmonic_minor"
            ],
            "pitch_classes": [
                0,
                2,
                4,
                5,
                7,
                9,
                11
            ],
            "scale_class": "diatonic"
        },
        "c_harmonic_major": {
            "root": 0,
            "adjacent_scales": [
                "c_diatonic",
                "as_acoustic",
                "c_harmonic_minor",
                "a_harmonic_minor",
                "octatonic_2",
                "hexatonic_4"
            ],
            "pitch_classes": [
                0,
                2,
                4,
                5,
                7,
                8,
                11
            ],
            "scale_class": "harmonic_major"
        },
        "c_harmonic_minor": {
            "root": 0,
            "adjacent_scales": [
                "ds_diatonic",
                "f_acoustic",
                "c_harmonic_major",
                "ds_harmonic_major",
                "octatonic_3",
                "hexatonic_4"
            ],
            "pitch_classes": [
                0,
                2,
                3,
                5,
                7,
                8,
                11
            ],
            "scale_class": "harmonic_minor"
        },
        "cs_acoustic": {
            "root": 1,
            "adjacent_scales": [
                "fs_diatonic",
                "gs_diatonic",
                "ds_harmonic_major",
                "gs_harmonic_minor",
                "octatonic_2",
                "whole_tone_2"
            ],
            "pitch_classes": [
                1,
                3,
                5,
                7,
                8,
                10,
                11
            ],
            "scale_class": "acoustic"
        },
        "cs_diatonic": {
            "root": 1,
            "adjacent_scales": [
                "fs_diatonic",
                "gs_diatonic",
                "fs_acoustic",
                "gs_acoustic",
                "cs_harmonic_major",
                "as_harmonic_minor"
            ],
            "pitch_classes": [
                0,
                1,
                3,
                5,
                6,
                8,
                10
            ],
            "scale_class": "diatonic"
        },
        "cs_harmonic_major": {
            "root": 1,
            "adjacent_scales": [
                "cs_diatonic",
                "b_acoustic",
                "cs_harmonic_minor",
                "as_harmonic_minor",
                "octatonic_3",
                "hexatonic_1"
            ],
            "pitch_classes": [
                0,
                1,
                3,
                5,
                6,
                8,
                9
            ],
            "scale_class": "harmonic_major"
        },
        "cs_harmonic_minor": {
            "root": 1,
            "adjacent_scales": [
                "e_diatonic",
                "fs_acoustic",
                "cs_harmonic_major",
                "e_harmonic_major",
                "octatonic_1",
                "hexatonic_1"
            ],
            "pitch_classes": [
                0,
                1,
                3,
                4,
                6,
                8,
                9
            ],
            "scale_class": "harmonic_minor"
        },
        "d_acoustic": {
            "root": 2,
            "adjacent_scales": [
                "g_diatonic",
                "a_diatonic",
                "e_harmonic_major",
                "a_harmonic_minor",
                "octatonic_3",
                "whole_tone_1"
            ],
            "pitch_classes": [
                0,
                2,
                4,
                6,
                8,
                9,
                11
            ],
            "scale_class": "acoustic"
        },
        "d_diatonic": {
            "root": 2,
            "adjacent_scales": [
                "g_diatonic",
                "a_diatonic",
                "g_acoustic",
                "a_acoustic",
                "d_harmonic_major",
                "b_harmonic_minor"
            ],
            "pitch_classes": [
                1,
                2,
                4,
                6,
                7,
                9,
                11
            ],
            "scale_class": "diatonic"
        },
        "d_harmonic_major": {
            "root": 2,
            "adjacent_scales": [
                "d_diatonic",
                "c_acoustic",
                "d_harmonic_minor",
                "b_harmonic_minor",
                "octatonic_1",
                "hexatonic_2"
            ],
            "pitch_classes": [
                1,
                2,
                4,
                6,
                7,
                9,
                10
            ],
            "scale_class": "harmonic_major"
        },
        "d_harmonic_minor": {
            "root": 2,
            "adjacent_scales": [
                "f_diatonic",
                "g_acoustic",
                "d_harmonic_major",
                "f_harmonic_major",
                "octatonic_2",
                "hexatonic_2"
            ],
            "pitch_classes": [
                1,
                2,
                4,
                5,
                7,
                9,
                10
            ],
            "scale_class": "harmonic_minor"
        },
        "ds_acoustic": {
            "root": 3,
            "adjacent_scales": [
                "gs_diatonic",
                "as_diatonic",
                "f_harmonic_major",
                "as_harmonic_minor",
                "octatonic_1",
                "whole_tone_2"
            ],
            "pitch_classes": [
                0,
                1,
                3,
                5,
                7,
                9,
                10
            ],
            "scale_class": "acoustic"
        },
        "ds_diatonic": {
            "root": 3,
            "adjacent_scales": [
                "gs_diatonic",
                "as_diatonic",
                "gs_acoustic",
                "as_acoustic",
                "ds_harmonic_major",
                "c_harmonic_minor"
            ],
            "pitch_classes": [
                0,
                2,
                3,
                5,
                7,
                8,
                10
            ],
            "scale_class": "diatonic"
        },
        "ds_harmonic_major": {
            "root": 3,
            "adjacent_scales": [
                "ds_diatonic",
                "cs_acoustic",
                "c_harmonic_minor",
                "ds_harmonic_minor",
                "octatonic_2",
                "hexatonic_3"
            ],
            "pitch_classes": [
                2,
                3,
                5,
                7,
                8,
                10,
                11
            ],
            "scale_class": "harmonic_major"
        },
        "ds_harmonic_minor": {
            "root": 3,
            "adjacent_scales": [
                "fs_diatonic",
                "gs_acoustic",
                "ds_harmonic_major",
                "fs_harmonic_major",
                "octatonic_3",
                "hexatonic_3"
            ],
            "pitch_classes": [
                2,
                3,
                5,
                6,
                8,
                10,
                11
            ],
            "scale_class": "harmonic_minor"
        },
        "e_acoustic": {
            "root": 4,
            "adjacent_scales": [
                "a_diatonic",
                "b_diatonic",
                "fs_harmonic_major",
                "b_harmonic_minor",
                "octatonic_2",
                "whole_tone_1"
            ],
            "pitch_classes": [
                1,
                2,
                4,
                6,
                8,
                10,
                11
            ],
            "scale_class": "acoustic"
        },
        "e_diatonic": {
            "root": 4,
            "adjacent_scales": [
                "a_diatonic",
                "b_diatonic",
                "a_acoustic",
                "b_acoustic",
                "e_harmonic_major",
                "cs_harmonic_minor"
            ],
            "pitch_classes": [
                1,
                3,
                4,
                6,
                8,
                9,
                11
            ],
            "scale_class": "diatonic"
        },
        "e_harmonic_major": {
            "root": 4,
            "adjacent_scales": [
                "e_diatonic",
                "d_acoustic",
                "cs_harmonic_minor",
                "e_harmonic_minor",
                "octatonic_3",
                "hexatonic_4"
            ],
            "pitch_classes": [
                0,
                3,
                4,
                6,
                8,
                9,
                11
            ],
            "scale_class": "harmonic_major"
        },
        "e_harmonic_minor": {
            "root": 4,
            "adjacent_scales": [
                "g_diatonic",
                "a_acoustic",
                "e_harmonic_major",
                "g_harmonic_major",
                "octatonic_1",
                "hexatonic_4"
            ],
            "pitch_classes": [
                0,
                3,
                4,
                6,
                7,
                9,
                11
            ],
            "scale_class": "harmonic_minor"
        },
        "f_acoustic": {
            "root": 5,
            "adjacent_scales": [
                "c_diatonic",
                "as_diatonic",
                "g_harmonic_major",
                "c_harmonic_minor",
                "octatonic_3",
                "whole_tone_2"
            ],
            "pitch_classes": [
                0,
                2,
                3,
                5,
                7,
                9,
                11
            ],
            "scale_class": "acoustic"
        },
        "f_diatonic": {
            "root": 5,
            "adjacent_scales": [
                "c_diatonic",
                "as_diatonic",
                "c_acoustic",
                "as_acoustic",
                "f_harmonic_major",
                "d_harmonic_minor"
            ],
            "pitch_classes": [
                0,
                2,
                4,
                5,
                7,
                9,
                10
            ],
            "scale_class": "diatonic"
        },
        "f_harmonic_major": {
            "root": 5,
            "adjacent_scales": [
                "f_diatonic",
                "ds_acoustic",
                "d_harmonic_minor",
                "f_harmonic_minor",
                "octatonic_1",
                "hexatonic_1"
            ],
            "pitch_classes": [
                0,
                1,
                4,
                5,
                7,
                9,
                10
            ],
            "scale_class": "harmonic_major"
        },
        "f_harmonic_minor": {
            "root": 5,
            "adjacent_scales": [
                "gs_diatonic",
                "as_acoustic",
                "f_harmonic_major",
                "gs_harmonic_major",
                "octatonic_2",
                "hexatonic_1"
            ],
            "pitch_classes": [
                0,
                1,
                4,
                5,
                7,
                8,
                10
            ],
            "scale_class": "harmonic_minor"
        },
        "fs_acoustic": {
            "root": 6,
            "adjacent_scales": [
                "cs_diatonic",
                "b_diatonic",
                "gs_harmonic_major",
                "cs_harmonic_minor",
                "octatonic_1",
                "whole_tone_1"
            ],
            "pitch_classes": [
                0,
                1,
                3,
                4,
                6,
                8,
                10
            ],
            "scale_class": "acoustic"
        },
        "fs_diatonic": {
            "root": 6,
            "adjacent_scales": [
                "cs_diatonic",
                "b_diatonic",
                "cs_acoustic",
                "b_acoustic",
                "fs_harmonic_major",
                "ds_harmonic_minor"
            ],
            "pitch_classes": [
                1,
                3,
                5,
                6,
                8,
                10,
                11
            ],
            "scale_class": "diatonic"
        },
        "fs_harmonic_major": {
            "root": 6,
            "adjacent_scales": [
                "fs_diatonic",
                "e_acoustic",
                "ds_harmonic_minor",
                "fs_harmonic_minor",
                "octatonic_2",
                "hexatonic_2"
            ],
            "pitch_classes": [
                1,
                2,
                5,
                6,
                8,
                10,
                11
            ],
            "scale_class": "harmonic_major"
        },
        "fs_harmonic_minor": {
            "root": 6,
            "adjacent_scales": [
                "a_diatonic",
                "b_acoustic",
                "fs_harmonic_major",
                "a_harmonic_major",
                "octatonic_3",
                "hexatonic_2"
            ],
            "pitch_classes": [
                1,
                2,
                5,
                6,
                8,
                9,
                11
            ],
            "scale_class": "harmonic_minor"
        },
        "g_acoustic": {
            "root": 7,
            "adjacent_scales": [
                "c_diatonic",
                "d_diatonic",
                "a_harmonic_major",
                "d_harmonic_minor",
                "octatonic_2",
                "whole_tone_2"
            ],
            "pitch_classes": [
                1,
                2,
                4,
                5,
                7,
                9,
                11
            ],
            "scale_class": "acoustic"
        },
        "g_diatonic": {
            "root": 7,
            "adjacent_scales": [
                "c_diatonic",
                "d_diatonic",
                "c_acoustic",
                "d_acoustic",
                "g_harmonic_major",
                "e_harmonic_minor"
            ],
            "pitch_classes": [
                0,
                2,
                4,
                6,
                7,
                9,
                11
            ],
            "scale_class": "diatonic"
        },
        "g_harmonic_major": {
            "root": 7,
            "adjacent_scales": [
                "g_diatonic",
                "f_acoustic",
                "e_harmonic_minor",
                "g_harmonic_minor",
                "octatonic_3",
                "hexatonic_3"
            ],
            "pitch_classes": [
                0,
                2,
                3,
                6,
                7,
                9,
                11
            ],
            "scale_class": "harmonic_major"
        },
        "g_harmonic_minor": {
            "root": 7,
            "adjacent_scales": [
                "as_diatonic",
                "c_acoustic",
                "g_harmonic_major",
                "as_harmonic_major",
                "octatonic_1",
                "hexatonic_3"
            ],
            "pitch_classes": [
                0,
                2,
                3,
                6,
                7,
                9,
                10
            ],
            "scale_class": "harmonic_minor"
        },
        "gs_acoustic": {
            "root": 8,
            "adjacent_scales": [
                "cs_diatonic",
                "ds_diatonic",
                "as_harmonic_major",
                "ds_harmonic_minor",
                "octatonic_3",
                "whole_tone_1"
            ],
            "pitch_classes": [
                0,
                2,
                3,
                5,
                6,
                8,
                10
            ],
            "scale_class": "acoustic"
        },
        "gs_diatonic": {
            "root": 8,
            "adjacent_scales": [
                "cs_diatonic",
                "ds_diatonic",
                "cs_acoustic",
                "ds_acoustic",
                "gs_harmonic_major",
                "f_harmonic_minor"
            ],
            "pitch_classes": [
                0,
                1,
                3,
                5,
                7,
                8,
                10
            ],
            "scale_class": "diatonic"
        },
        "gs_harmonic_major": {
            "root": 8,
            "adjacent_scales": [
                "gs_diatonic",
                "fs_acoustic",
                "f_harmonic_minor",
                "gs_harmonic_minor",
                "octatonic_1",
                "hexatonic_4"
            ],
            "pitch_classes": [
                0,
                1,
                3,
                4,
                7,
                8,
                10
            ],
            "scale_class": "harmonic_major"
        },
        "gs_harmonic_minor": {
            "root": 8,
            "adjacent_scales": [
                "b_diatonic",
                "cs_acoustic",
                "gs_harmonic_major",
                "b_harmonic_major",
                "octatonic_2",
                "hexatonic_4"
            ],
            "pitch_classes": [
                1,
                3,
                4,
                7,
                8,
                10,
                11
            ],
            "scale_class": "harmonic_minor"
        },
        "octatonic_1": {
            "root": 0,
            "adjacent_scales": [
                "c_acoustic",
                "ds_acoustic",
                "fs_acoustic",
                "a_acoustic",
                "d_harmonic_major",
                "f_harmonic_major",
                "gs_harmonic_major",
                "b_harmonic_major",
                "cs_harmonic_minor",
                "e_harmonic_minor",
                "g_harmonic_minor",
                "as_harmonic_minor"
            ],
            "pitch_classes": [
                0,
                1,
                3,
                4,
                6,
                7,
                9,
                10
            ],
            "scale_class": "octatonic"
        },
        "octatonic_2": {
            "root": 1,
            "adjacent_scales": [
                "cs_acoustic",
                "e_acoustic",
                "g_acoustic",
                "as_acoustic",
                "c_harmonic_major",
                "ds_harmonic_major",
                "fs_harmonic_major",
                "a_harmonic_major",
                "d_harmonic_minor",
                "f_harmonic_minor",
                "gs_harmonic_minor",
                "b_harmonic_minor"
            ],
            "pitch_classes": [
                1,
                2,
                4,
                5,
                7,
                8,
                10,
                11
            ],
            "scale_class": "octatonic"
        },
        "octatonic_3": {
            "root": 2,
            "adjacent_scales": [
                "d_acoustic",
                "f_acoustic",
                "gs_acoustic",
                "b_acoustic",
                "cs_harmonic_major",
                "e_harmonic_major",
                "g_harmonic_major",
                "as_harmonic_major",
                "c_harmonic_minor",
                "ds_harmonic_minor",
                "fs_harmonic_minor",
                "a_harmonic_minor"
            ],
            "pitch_classes": [
                0,
                2,
                3,
                5,
                6,
                8,
                9,
                11
            ],
            "scale_class": "octatonic"
        },
        "hexatonic_1": {
            "root": 0,
            "adjacent_scales": [
                "cs_harmonic_major",
                "f_harmonic_major",
                "a_harmonic_major",
                "cs_harmonic_minor",
                "f_harmonic_minor",
                "a_harmonic_minor"
            ],
            "pitch_classes": [
                0,
                1,
                4,
                5,
                8,
                9
            ],
            "scale_class": "hexatonic"
        },
        "hexatonic_2": {
            "root": 1,
            "adjacent_scales": [
                "d_harmonic_major",
                "fs_harmonic_major",
                "as_harmonic_major",
                "d_harmonic_minor",
                "fs_harmonic_minor",
                "as_harmonic_minor"
            ],
            "pitch_classes": [
                1,
                2,
                5,
                6,
                9,
                10
            ],
            "scale_class": "hexatonic"
        },
        "hexatonic_3": {
            "root": 2,
            "adjacent_scales": [
                "ds_harmonic_major",
                "g_harmonic_major",
                "b_harmonic_major",
                "ds_harmonic_minor",
                "g_harmonic_minor",
                "b_harmonic_minor"
            ],
            "pitch_classes": [
                2,
                3,
                6,
                7,
                10,
                11
            ],
            "scale_class": "hexatonic"
        },
        "hexatonic_4": {
            "root": 2,
            "adjacent_scales": [
                "c_harmonic_major",
                "e_harmonic_major",
                "gs_harmonic_major",
                "c_harmonic_minor",
                "e_harmonic_minor",
                "gs_harmonic_minor"
            ],
            "pitch_classes": [
                0,
                3,
                4,
                7,
                8,
                11
            ],
            "scale_class": "hexatonic"
        },
        "whole_tone_1": {
            "root": 0,
            "adjacent_scales": [
                "c_acoustic",
                "d_acoustic",
                "e_acoustic",
                "fs_acoustic",
                "gs_acoustic",
                "as_acoustic"
            ],
            "pitch_classes": [
                0,
                2,
                4,
                6,
                8,
                10
            ],
            "scale_class": "whole_tone"
        },
        "whole_tone_2": {
            "root": 1,
            "adjacent_scales": [
                "cs_acoustic",
                "ds_acoustic",
                "f_acoustic",
                "g_acoustic",
                "a_acoustic",
                "b_acoustic"
            ],
            "pitch_classes": [
                1,
                3,
                5,
                7,
                9,
                11
            ],
            "scale_class": "whole_tone"
        }
    }
}


const scale_names = ["a_acoustic"
, "a_diatonic"
, "a_harmonic_major"
, "a_harmonic_minor"
, "as_acoustic"
, "as_diatonic"
, "as_harmonic_major"
, "as_harmonic_minor"
, "b_acoustic"
, "b_diatonic"
, "b_harmonic_major"
, "b_harmonic_minor"
, "c_acoustic"
, "c_diatonic"
, "c_harmonic_major"
, "c_harmonic_minor"
, "cs_acoustic"
, "cs_diatonic"
, "cs_harmonic_major"
, "cs_harmonic_minor"
, "d_acoustic"
, "d_diatonic"
, "d_harmonic_major"
, "d_harmonic_minor"
, "ds_acoustic"
, "ds_diatonic"
, "ds_harmonic_major"
, "ds_harmonic_minor"
, "e_acoustic"
, "e_diatonic"
, "e_harmonic_major"
, "e_harmonic_minor"
, "f_acoustic"
, "f_diatonic"
, "f_harmonic_major"
, "f_harmonic_minor"
, "fs_acoustic"
, "fs_diatonic"
, "fs_harmonic_major"
, "fs_harmonic_minor"
, "g_acoustic"
, "g_diatonic"
, "g_harmonic_major"
, "g_harmonic_minor"
, "gs_acoustic"
, "gs_diatonic"
, "gs_harmonic_major"
, "gs_harmonic_minor"]