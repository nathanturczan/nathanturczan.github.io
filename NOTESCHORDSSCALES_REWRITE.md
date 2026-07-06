# NotesChordScales Case Study Rewrite — Materials

Working doc for rewriting `projects/notes-chords-scales.html`, parallel to the Dashboard / Ensemble Jammer / Tonalign gathering docs.
**Status: GATHERING. Do not rewrite the case study yet — Nathan pulls the trigger.**

---

## 1. Prior art: Michael Norris's Pressing Scale Explorer

Nathan: "this website extremely useful to me for a long time before i subsumed it."

- **URL**: https://www.michaelnorris.info/resources/pressing-scale-explorer/
- Michael Norris (composer/theorist, NZ) built an interactive explorer of the Pressing scale collections — the same 57-scale universe Tymoczko's theory and Scale Navigator use.
- **Interaction model** (from the three screenshots): a clickable piano keyboard (select any pitch-class set, Check All / Uncheck All), a "Change collection to [DIA] on [C]" dropdown pair, and a **"Collection:" subset readout** — for the selected notes, a list of every Pressing scale they're a subset of, each with its missing notes spelled out ("Subset of C DIA — missing C, E, F, A"; "Subset of OCT(1,2) — missing C#, E, F, Ab, Bb"; HEX(2,3), HARM MAJ/MIN, ACOU...). Plus a "Modes of this collection" section.

### Screenshot on disk

| Image | Path | What it shows |
|---|---|---|
| Norris explorer, 3-view collage | **SAVED (2026-07-05)**: `images/noteschordsscales/norris_pressing_scale_explorer_collage.png` (copied/renamed from `/Users/soney/Music/korean_autoharp.png`, original file date **Nov 8, 2022** — hard evidence Nathan was actively using Norris's tool in 2022, pre-NCS) | Three captures of the Pressing Scale Explorer: keyboard with selected notes, the Change-collection dropdowns, and three different subset readouts for three different note selections |
| NCS early three-panel screenshot | **SAVED (2026-07-05)**: `images/noteschordsscales/ncs_three_panel_early.png` (recovered from session transcript during the artifact-preservation sweep) | Early NotesChordScales UI: the three-panel notes → chords → scales layout |

### Why this matters for the case study

- **"Subsumed" is the story.** Norris's explorer answers exactly the question NotesChordScales automates: *given these notes, which scales contain them?* But it's batch and manual — you click notes on a webpage keyboard and read a list. NotesChordScales moves the same inference into real time, driven by live MIDI (or audio-to-MIDI from an airboat engine), adds the chord layer in between (note → chord → scale via Boyd ranking), and renders the hierarchy live with D3.
- **Honest influence, same pattern as the other case studies**: Nathan Ho's Venn7 (Ensemble Jammer), Chromatone Drone (Ensemble Jammer), Tymoczko's papers (Dashboard) — and now Norris's explorer. "I used the best available tool for years, then built the version that keeps up with a performance" is a design-judgment arc, not a confession.
- **Concrete workflow contrast for the writing**: Norris = stop playing, click the notes you remember, read the subsets. NotesChordScales = keep playing, the subsets follow you.

---

## 2. What the current page already has (baseline)

`projects/notes-chords-scales.html` is currently a stub-level archive page (reached via "Back to Archive," not the main nav):

- Title: (((Notes)Chords)Scales))); year 2025; Web App / AU Plugin; React / Vite / JUCE.
- Description paragraph: play notes → system finds candidate chords → finds candidate scales; "surf multiple layers of the harmonic hierarchy"; Boyd chord-ranking; D3 visualization; the airboat anecdote (12-minute video harmonizing with an airboat engine at sunrise in a Florida swamp).
- One screenshot (`images/noteschordsscales.png`), one YouTube embed, Launch App link (noteschordsscales.vercel.app).
- No process material, no prior-art credit, no design narrative.

Note: the thesis mining pass (see agent report, this session) found **no dedicated thesis coverage of NotesChordScales** — so unlike EJ/Tonalign/SNaPS, this case study's material has to come from Nathan directly and from artifacts.

---

## 3. Open questions for Nathan

1. **Timeline**: when did you start using Norris's explorer, and when did NotesChordScales replace it in your own workflow? A: I started using Norris's explorer as soon as I found out about the Dimitri Tymoczko pressing scales. I Googled "pressing scales" and tried to find out everything I could about it and see who else had done stuff. I happened upon this website and it became a really incredible tool for me for a long time when writing music. 
2. **Credit**: name Michael Norris with a link on the page, same treatment as Nathan Ho / Chromatone? A: Yes I think we should credit him. One thing in particular that he inspired me about also is the way that he doesn't give a root to the modes of limited transposition. "Subset of OCT(0,1) — missing F♯, G, A, B♭" -- That example of how he classifies octatonic I found to be extremely awesome and instructive and so I ran with that. 
3. **What Norris's tool couldn't do** that you needed — is real-time the whole delta, or also the chord layer / Boyd ranking / MIDI input / integration with Dashboard's shared state? A: Exactly. Norris' tool is not a real-time tool. It also doesn't think of chords. 
4. **Process artifacts**: any early sketches/screenshots of NotesChordScales itself (D3 experiments, first chord-inference prototypes, the AU plugin UI)? A: Basically it was the branching tree that would show possible subsets or, going the other way, possible supersets, that kind of a thing. It was just in my head. I kind of vibe coded it very quickly in like one day. 
5. **The airboat video**: is that the strongest demo beat, and should the rewrite expand it (it's currently one sentence)? A: The Airboat video is basically the only good demo and to be honest it's not a good demo sadly. 
6. ~~Save/rename `/Users/soney/Music/korean_autoharp.png` into the repo~~ — **DONE (2026-07-05)**: saved as `images/noteschordsscales/norris_pressing_scale_explorer_collage.png`. Bonus: the original's file date is **Nov 8, 2022**, dating Nathan's active Norris usage.
