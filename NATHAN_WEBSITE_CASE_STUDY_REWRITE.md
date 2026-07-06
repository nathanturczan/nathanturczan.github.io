# Nathan Website Case Study Rewrite

**Portfolio:** nathanturczan.com
**Date:** 2026-07-04
**Context:** Apple Product Designer / Creator Studio application. Jackson (internal) is looking at the site imminently. The JD explicitly asks for "prototypes, sketches, high-fidelity mockups." Companion doc: `CASE_STUDY_REWRITE_PRIORITY_LIST.md` (text-level fixes, still valid — this doc extends it, doesn't replace it).

**The core diagnosis:** The existing case studies have strong narrative but zero process artifacts — no sketches, no rejected alternatives shown visually, no research trail, almost no motion. The LALORK notation anticipation work has ALL of it, already documented, shipped this week. It fills the exact gap the JD names.

---

## STATUS UPDATE (2026-07-05) — asset situation has changed since this was written

The "zero process artifacts" diagnosis is now outdated for the Scale Navigator projects — the gathering campaign found a large sketch/prototype corpus. Read the companion docs before executing Part 2:

- **Dashboard**: the "if any early prototype screenshots exist" wish (Part 2) is answered — `portfolio/scale_nav_explanation/` contains Nathan's own **April 2020 draft case study** with an End-to-End Design Process section, plus originals of most early screenshots, hand-drawn mind-maps (`process/final_worklow.jpg`), whiteboard wireframes (`process/interactive_orchestra.jpg`), and pre-ship octatonic feature mockups (`process/oct0/1/2.png`). Full inventory + prologue plan: `DASHBOARD_PROLOGUE_REWRITE.md`. Also: the Ondřej Post-it animation spec, Nov 2021 MIDI wireframes, and Lily Clark Figma crit (see `SCALE_NAVIGATOR_EVIDENCE.md`).
- **Tonalign**: both Jan 2022 demo videos found on YouTube — setup https://youtu.be/DyVP5oX4dgU, demo https://youtu.be/lf0BpKuH3hc (titled "…like AutoTune for MIDI" — the tagline predates the rebrand by 4 years; embed both). What-broke/unfinished material gathered in `TONALIGN_REWRITE.md` (all questions closed). The held-notes clip + before/after piano roll still need recording.
- **SNaPS**: ~~Librarian screenshot is blocked~~ — **CLOSED (2026-07-05): there is no Librarian UI; it's a headless tool** (Nathan: "THERE IS NO UI, its headless"). Stop looking for a screenshot; the code lives at `/Users/soney/Github/librarian`. If the Librarian needs a visual, the options are terminal output or the sample→pitch-set data model already sketched in `images/snaps/snaps_canvas_wireframe.png`. Live-performance evidence anchored (Webb Schools pre-show, Feb 4, 2022, audio on disk). Page dates need fixing (2021 start / Mar 2026 plugin). See `SNAPS_REWRITE.md`.
- **Ensemble Jammer / NCS**: `ENSEMBLE_JAMMER_REWRITE.md` (Chromatone/davay + myNoise + Jazz Piano Comper lineage, credits decided) and `NOTESCHORDSSCALES_REWRITE.md` (credit Norris; airboat demo judged weak — replacement clip needed).
- **"Team · 1" metadata is superseded** — Nathan decided to credit collaborators by name; see the 2026-07-05 status update in `CASE_STUDY_REWRITE_PRIORITY_LIST.md`.
- **Video/GIF captures**: ScaleNavigator.com and nathanturczan.com homepage already host videos/animated grabs of most products — reuse before re-recording (repos to be confirmed with Nathan).
- **All rewrites remain GATED on Nathan's trigger** (gathering mode). Part 1 (LALORK) and Part 3 sequencing are unaffected and still current.

---

## PART 1 — NEW CASE STUDY: Notation Anticipation (LALORK)

### Why this is the highest-leverage addition

1. **It's the only project where the full design process already exists as artifacts**: research synthesis (217 sources), rejected alternatives with reasons, user profiles, timing spec with cited thresholds, iteration log, implementation audit, 8 focused commits with rationale in the messages.
2. **It has a genuine design-thesis moment**: "The anticipation system is not an animation system — it's an object-constancy system." That insight forced redesigns across 7+ renderers (Triad Field being the clearest before/after). This is the LALORK equivalent of Arthur's critique in the Dashboard story.
3. **It's interaction/motion design** — the discipline Creator Studio cares about — grounded in perceptual research (Yantis: motion captures peripheral attention, color doesn't; Furneaux/Truitt: musicians read ~1 second / 1 measure ahead).
4. **It shipped**, live in the enter app, with a field test scheduled (Aug 15, Scribble LA).

### Source material inventory

| Material | Path |
|---|---|
| Full case study (1,470 lines) | `/Users/soney/Github/lalork/research/animate_notation_case_study.md` |
| Design spec (timing, states, presets) | `/Users/soney/Github/lalork/research/NOTATION_ANTICIPATION_SCOPE.md` |
| Implementation audit (architecture decisions) | `/Users/soney/Github/lalork/research/NOTATION_ANTICIPATION_IMPLEMENTATION_AUDIT.md` |
| Shipped code (hooks + styles) | `/Users/soney/Github/lalork-website/enter/src/hooks/`, `enter/src/styles/anticipation.scss` |
| Iteration screenshots (harmonicas v2–v5) | `/Users/soney/Github/lalork-website/harmonicas-*.png` |
| State-capture screenshots | `/Users/soney/Github/lalork-website/.playwright-mcp/*.png` |
| Whiteboard/sketch photos (June 22 session) | `/Users/soney/Github/lalork/PXL_20260622_*.jpg` |
| Session video | `/Users/soney/Github/lalork/PXL_20260622_211316561.TS.mp4` |
| Git history (8 commits, Jul 3–4) | `lalork-website` repo: `9b915ee` → `065ac5f` |

### Step 1 — Capture the animations (FIRST; nothing substitutes for this)

Screenshots cannot show an anticipation system. Open the enter app READ tab, set lookahead to **Rehearsal (2000ms)** so the animation is legible on video. Capture short looping clips (MP4, ~5–10s each):

- [ ] **Piano during a scale change** — incoming pulse (blue) + outgoing fade, the clearest single demo
- [ ] **Pulse vs. Ramp side-by-side** — the A/B design decision made visible
- [ ] **VexFlow staff slot-diff** — only the altered accidental animates (subtle, shows restraint)
- [ ] **Fretboard (guitar or mandolin)** — shows the system generalizing across renderer types
- [ ] **Triad Field before/after** — check out the pre-`c3f65e3` commit to record the broken (non-object-constant) version, then the fix. This is the money shot for the design-thesis section.
- [ ] **The settings UI** — lookahead slider + Pulse/Ramp toggle + Off/Anticipate mode (shows it's a designed, per-performer system, not a hardcoded effect)

Compress for web (H.264 MP4, muted, `autoplay loop playsinline` — same pattern as the SNaPS demo video). Put in `images/anticipation/`.

### Step 2 — Select the sketch/process images

The JD asks for sketches. You have real ones:

- [ ] Review `PXL_20260622_*.jpg` (8 photos) — pick 1–2 legible whiteboard/mockup shots
- [ ] Harmonicas v2→v5 sequence — crop into a single iteration strip or image-row
- [ ] Consider one screenshot of the scope doc's timing table or the four-state diagram, redrawn cleanly if needed (a simple Off/On/Incoming/Outgoing diagram in the site's visual language would take minutes and read as high-fidelity design documentation)

### Step 3 — Write the page (~1,000 words, 8-beat spine)

The research doc maps almost perfectly onto the spine:

| Beat | Content |
|---|---|
| **1. Constraint** | Musicians read about one second — one measure — ahead (eye-tracking: Furneaux, Truitt). When the score changes instantly, that preview buffer is destroyed. |
| **2. Why existing approaches failed** | The system was built for exploration, where instant feedback is right; sight-reading performance needs anticipation. Four rejected alternatives, each with a reason: scrolling score (Guitar Hero), color-only signals, audio-only cue, countdown overlay. |
| **3. First prototype** | The instant-snap notation displays as they existed in rehearsal. |
| **4. What broke** | RASP session: performers hesitated even on musically logical transitions. Surprise, missed notes, the moment of realizing this was a missing feature. |
| **5. Iteration** (eyebrow: `Iteration`) | Four note states — Off / On / Incoming / Outgoing — and two A/B-testable animation styles (Pulse, Ramp), persisted per performer. |
| **6. Design decisions** | (a) Motion for arriving notes, fade for departing — motion captures peripheral attention, color doesn't (Yantis). (b) **Object constancy**: every renderer needs a stable visual object to anchor the animation — piano key, fret location, accidental slot, persisted triad coordinate. The Triad Field had to be redesigned to have one. (c) Client-delayed queueing over a server queue — per-performer lookahead falls out for free, no clock skew. (d) Skill-scaled lookahead presets (2000ms Rehearsal → 300ms Expert), borrowed from rhythm-game difficulty design. |
| **7. Outcome** | Shipped across nine notation renderers (DOM, SVG, VexFlow) in the live LALORK performer app; field test with a room of 50–100 strangers on August 15. |
| **8. Unfinished** | User testing footage awaiting transcription; Staged (conductor-controlled) mode reserved for Dashboard; per-hole flute anticipation deferred. |

**Suggested title/tagline direction:** something like "Notation Anticipation — telegraphing harmonic change to a room of sight-readers" (working; refine in draft).

**Metadata block** (per the STEAL rules):
```
Role · Designer + Engineer (sole)
Team · 1
Platform · Web (live performance app)
Duration · 2026
```

### Curation rules — what must NOT carry over from the research doc

- **No bootcamp headers.** The research doc literally contains "Point of View," "How Might We," "Affinity Mapping," "User Profiles" as section titles. Per the DO-NOT-STEAL list, never use these as headers. Use the *content* (the insight, the rejected alternatives), never the vocabulary.
- **No AI-session-log framing.** The "Prompt 1…Prompt 16" appendix structure stays in the research repo. The portfolio presents conclusions and artifacts, not the conversation that produced them.
- **Style guard:** the research doc contains "This is not a bug—it's a missing feature" — that's the forbidden "not X, it's Y" pivot. Rephrase (e.g., "The instant snap was a missing feature: the system had been designed for exploration and never for sight-reading"). Also: colons over em-dashes, flowing prose, describe behavior not concepts, Oxford comma.
- **Cite research lightly.** One or two parenthetical researcher names read as rigor; a bibliography reads as homework. Link out to the full research doc/bibliographies for anyone who wants depth (this is a legitimate flex — "217 sources" as a single linked line, not a section).

### Step 4 — Build the page

1. Copy `projects/scale-navigator-dashboard.html` as the template → `projects/notation-anticipation.html`
2. Drop in text + clips + images (video pattern from `snaps-plugin.html`)
3. Add to `index.html` project list — **consider placing it first or second**; it's the freshest and most JD-aligned work
4. Add to `script.js` photoStack `projectImageMap`
5. Prev/next nav links; check dark mode + mobile

### Stretch (only after 1–4 ship): live embedded demo

The portfolio is plain HTML/JS and the anticipation system is web code. A single piano row transitioning between two scales, with the lookahead slider and Pulse/Ramp toggle, embedded in the case study page, would make it a *playable* case study — consistent with the interactive hero, and very Creator Studio. Do not let this block the video version.

---

## PART 2 — FLESHING OUT THE EXISTING CASE STUDIES

Two layers of work. **Layer 1 (text)** is already fully specified in `CASE_STUDY_REWRITE_PRIORITY_LIST.md` — execute its checklist as written (metadata blocks, Iteration eyebrows, Tonalign held-notes decision reframe, SNaPS restructure, Dashboard constraint + Arthur resolution, Downhome Blues ending trim, Ensemble Jammer HTML fixes). **Layer 2 (below) is what that doc doesn't cover: process and visual assets** — the "prototypes, sketches, high-fidelity mockups" the JD asks for. Every page currently shows only final-state screenshots.

### Tonalign (`projects/tonalign.html`) — text score 11/16, weakest assets

Missing beats: What broke, Iteration, Outcome, Unfinished (text fixes in priority list). Asset plan:

- [ ] **Held-notes demo clip with audio** — the page's one real design decision is invisible as static screenshots. Record a short clip cycling glide / stay / cut on the same held note while the scale changes. This single asset transforms the page.
- [ ] **Before/after piano roll** — uncorrected MIDI vs. Tonalign-corrected output (screenshot pair, captioned)
- [ ] Optional: one screenshot from the Virtuoso video work (`dropbox-assets/virtuoso/`) as evidence of real-world use — "remixing world-class performances through Tonalign" is a vivid outcome image
- [ ] **What-broke material to mine:** the JUCE forum origin with Brady Boettcher, and the recently fixed chord-naming bug (D 6/9 displaying as Dm11) — a concrete, honest "edge cases still surface" note for beat 8

### SNaPS (`projects/snaps-plugin.html`) — text score 11/16, deepest work most buried

Text: restructure around constraint → bottleneck 1 (tagging) → bottleneck 2 (behavior) → shipped; promote the thesis sentence ("The interface barely changed. Almost all the design work happened in the behavior."). Asset plan:

- [ ] **Glide-curve family visualization** — the "mechanical → expressive" curve family is a designed system with no image. Even a simple annotated curve diagram in the site's visual language reads as high-fidelity design documentation.
- [ ] **Exit-modes demo clips** — stutter decay vs. filter sweep vs. doppler drop, three short clips or one montage with captions. This is behavior design; it needs motion + audio.
- [x] ~~**Librarian screenshot**~~ — **CLOSED (2026-07-05): no UI exists, the Librarian is headless** (Nathan confirmed; stop looking). If a visual is wanted, use terminal output from `/Users/soney/Github/librarian` or the sample→pitch-set list already in `images/snaps/snaps_canvas_wireframe.png`.
- [ ] Optional: a photo/still from a live SuperCollider-era performance ("primary live instrument" evidence)

### Dashboard (`projects/scale-navigator-dashboard.html`) — text score 14/16, best assets already

Text: constraint sentence upfront, Arthur callback resolved (priority list). Asset plan:

- [ ] **Sketchpad interaction clip** — "explore the network, find something you like, drag it in" is described but never shown moving. One short capture closes the Arthur narrative visually.
- [ ] **3D vs. 2D layout toggle** — a decision mentioned in text with no comparison image; side-by-side screenshot pair
- [ ] If any early prototype/web-era screenshots exist in `_archive/` or old repos, one "where it started" image gives the 2021→2026 arc a visual anchor

### Early Downhome Blues (`projects/early-downhome-blues.html`) — text score 15/16

Text: delete the "I started thinking / I finished realizing" ending (priority list). Asset plan:

- [ ] **The r/blues failure is the best beat and has no artifact.** If the thread still exists, a tasteful screenshot (or a quoted line, anonymized) is evidence of the signature what-broke move.
- [ ] **Titon correspondence** — if he'd permit a short excerpt, one sentence of his critique as a captioned pull-quote is worth more than any persona. Ask first (per external-communication rules: draft the ask, get approval before sending).
- [ ] **Audio pair** — before (pitch-transitions only) vs. after (formalization rules applied). The whole story is audible; let it be heard.

### Ensemble Jammer (`projects/ensemble-jammer.html`) — text score 15/16, leave text mostly alone

- [ ] **Motion-controls clip** — tilt/shake/pirouette is currently words only; a 5-second phone-in-hand clip shows it
- [ ] Salon-test video already exists on YouTube — consider pulling one 10-second moment inline (the "everyone staring at phones" shot if it exists is the what-broke beat made visible)
- [ ] Fix the empty HTML elements (lines 75–76, 103) while in the file

### SOULS + (((Notes)Chords)Scales))) — decisions, not rewrites

- **SOULS:** demote. Two to three sentences on the actual contribution (procedural audio for 10,000 unique characters) + press links. Writing it "properly" competes for time with higher-leverage pages and it's the least design-process-relevant project. Revisit after the application window.
- **NCS:** move the 80-word tagline into body text, add two paragraphs (including the unexplained airboat composition), or demote to archive. Small job; do it in the same session as Layer 1 text fixes.

### Site-wide

- [ ] Metadata block with `Team · 1` on every project page (now six pages including the new one)
- [ ] `<figcaption>` on every image/clip added in this round — captions are where process narration lives for skimmers; make them decision-flavored ("v3: fixed grid so returning notes reappear in the same place"), not descriptive ("harmonica interface")
- [ ] Consistent video pattern: muted, looping, playsinline, compressed

---

## PART 3 — SEQUENCING (Jackson window first)

Ordered by leverage per unit of effort, given internal people are looking now:

1. **Layer 1 text fixes** on existing pages (priority list checklist) — smallest effort, already fully specified, improves what Jackson sees even if he looks before anything else lands
2. **LALORK screen recordings** (Part 1, Step 1) — Nathan records; nothing else can substitute
3. **LALORK case study page** — draft can be written in parallel with #2 from the research docs
4. **Tonalign held-notes clip + SNaPS exit-modes clips** — the two asset additions that most change their pages
5. **Remaining asset plan** (Dashboard sketchpad clip, Downhome Blues audio pair, Ensemble Jammer motion clip)
6. **SOULS/NCS demotions**
7. **Stretch: live anticipation demo embed**

Items 1 and 3 are writing/markup and can be delegated; items 2, 4, 5 need Nathan at the instrument/screen.
