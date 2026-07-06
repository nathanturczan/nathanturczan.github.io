# Ensemble Jammer Case Study Rewrite — Materials

Working doc for rewriting `projects/ensemble-jammer.html`, parallel to `DASHBOARD_PROLOGUE_REWRITE.md`.
**Status: GATHERING. Do not rewrite the case study yet — Nathan pulls the trigger.**

---

## 1. The drone lineage (new material, this session)

Nathan: "You can see that I directly ripped off the drone: a Tanpura Shruti Box drone UI, as well as just the entire codebase from an open source Chrome instrument."

**Provenance, verified from the repo at `/Users/soney/Github/archived/drone/`:**

- The source is **Chromatone Drone** (`github.com/chromatone/drone`, chromatone.center) — "Rich harmonic soundscape synthesizer for music practice, chanting and meditation," an electronic tanpura / shruti box. Vue 3 + Vite + UnoCSS + Tone.js.
- **MIT licensed** (Copyright 2024 Chromatone) — adaptation is fully permitted; attribution is the right move regardless.
- All 23 commits in the local clone are by **davay (Denis Stardov / defucc.me)**, the Chromatone author — this repo is an *unmodified clone of the original*, kept in `archived/` as reference. Nathan's adaptation lives inside the Ensemble Jammer codebase, not here.
- Original interaction model (from the README): pick a root ("the Sa note"), pads for 3 low octaves of the root + 3 fifths above; drag pads vertically for max level (each voice has a random-speed LFO breathing under that ceiling), horizontally for pan center; LP filter slider; spacebar = play/stop.

### Images (Chromatone's own screenshots — the "before")

| Image | Path | What it shows |
|---|---|---|
| Phone portrait | `/Users/soney/Github/archived/drone/public/vertical.png` | D2 root readout (-1%, 73.42 Hz), chromatic root picker row, 3×3 pad grid (A2–A4 / D1–D3 / G2–G4) in red/green/magenta, knobs: VOL · LP · Q · AF FREQ · AF DEPTH |
| Tablet/desktop | `/Users/soney/Github/archived/drone/public/screen.png` | Same instrument, gray theme, pads-first layout with root readout bottom-left, root picker along the bottom |
| Landscape | `/Users/soney/Github/archived/drone/public/horizontal.png` | Green-theme landscape layout, knob row centered at bottom |

### Why this is good case-study material

- **Honest influence story.** The page already credits Nathan Ho's symmetric 7-Venn diagram as an adopted interface; crediting Chromatone Drone extends the same pattern. "I found the best open instrument for the job and wired it into the shared harmonic state" is a *design judgment* story, not a confession — knowing what to build vs. what to adapt.
- **The delta is the design work.** Chromatone Drone is fixed-root and solo: you choose Sa and it stays put. Ensemble Jammer's version presumably subscribes to Dashboard's harmonic state and retunes live under a leader. The interesting writing is exactly what changed in the port: what happens to sounding drone voices when the host changes scale? Does the root picker disappear (the ensemble decides for you)? **Needs Nathan's answers — see open questions.**
- **Before/after spread.** Chromatone's screenshot next to Nathan's EJ drone screenshot shows the adaptation at a glance.

### 1a. Nathan's adaptation, located and read (this session)

Nathan: the reference clone is `/Users/soney/Github/archived/drone`; **his version is `/Users/soney/Github/Ensemble-Jammer/src/instruments/TanpuraDrone.tsx`** (React + Tone.js, ~1700 lines — a full rewrite in EJ's stack, not a fork of the Vue code).

**What survived from Chromatone (read from the code):**
- The pad-grid interaction: **drag a voice pad vertically for volume, horizontally for pan**, tap to toggle — Chromatone's signature gesture, reimplemented in React pointer events.
- The **"breathing"**: each voice gets its own random-rate volume LFO (0.05–0.2 Hz), a slow pan-drift LFO, and a tiny detune LFO — the organic tanpura shimmer.
- The knob row: **LP · Q · AF FREQ · AF DEPTH** (Chromatone's exact set, minus VOL which moved to standard controls, plus a new RESON knob).
- Spacebar/global play-toggle behavior (exposed as `__droneToggle` for EJ's shell).

**The delta — what the port actually changed (this is the case-study writing):**
- **Fixed Sa → shared harmonic state.** Chromatone's chromatic root picker is gone; the note selector only offers **notes of the current scale or chord** broadcast by the host (`buildInstrumentNotes(room.scaleData / room.chordData)`), spelled with correct enharmonics for the current scale and colored with the ecosystem's root colors. A **"Root" checkbox locks the drone to the host's current chord root** — the ensemble can decide your Sa for you.
- **Voice architecture re-derived from harmony.** Chromatone's 3×3 root+fifths grid becomes four rows — **Root / Third / Fifth / Seventh** — whose intervals are *computed from the current collection* with graceful fallbacks (third tries 4→5→3 semitones; fifth 7→8→9; seventh 10→11; a row shows "not available" if the scale offers no candidate). The drone isn't a fixed chord; it's a query against the shared state.
- **What happens to sounding voices when the host changes scale: they glide.** Each voice synth has user-controlled portamento (up to 1s); on a scale change, `setNote` slides the sounding voice to its new pitch — and the outgoing **MIDI mirrors the glide** as note-off/note-on pairs. (Answers open question 2; same voice-leading-as-motion philosophy as Tonalign.)
- **Added instrument-grade plumbing Chromatone never needed:** MIDI out bus with a MIDI-only mode (the drone can drive hardware/DAW synths silently), gamepad control (sticks → filter cutoff/Q, AF rate/depth, resonator level; A button toggles root lock), a scale-quantized high-register "resonator" shimmer pad, a pink-noise buzz layer, mixer registration, and stuck-note panic handling.
- The AutoFilter's fixed LFO was replaced with a **smooth random-walk ("stray") modulation** whose rate/range the AF knobs steer.

Resolves open questions 1 (location; screenshot of Nathan's version still wanted for the before/after) and 2 (port delta, from code — Nathan can confirm/color the *why*).

### 1b. Nathan's answers on the port (this session) + code verification

**Root picker — kept, but re-derived from the shared state.** Two modes, in Nathan's words: (1) "pick one of the scale tones to be the root, and then, when the scale changes, pick the closest scale degree to the previous scale degree that you had as root in the new scale... oftentimes that's just, you know, the root stays the same"; (2) "have the root be determined just by the root of the current chord." Code confirms both: `baseNoteIndex` persists as an index into the current scale's note list (`scaleNotes[baseNoteIndex % scaleNotes.length]` — degree-position persistence across scale changes), and the `useChordRoot` checkbox switches to the host chord's root (TanpuraDrone.tsx:83–247).

**The motivating design fiction — the living shruti box (best quote of the batch):**
> "If Scale Navigator is on autopilot, then wouldn't it be cool just to have this kind of dynamically living shruti box? Normally, when you're playing a raga or something, you just set the shruti box up... to have it going while you practice. What if you were modulating between different scales, scale classes, different chords? How might that change?"

This is the case study's framing sentence for the whole port: Chromatone built the shruti box; Nathan asked what happens when the drone's ground moves.

**Sounding voices on scale change**: retune to the nearest available chord/scale tone — confirmed in code (§1a: portamento glide, mirrored MIDI).

**What was kept (breathing LFOs, pad-drag)**: Nathan, disarmingly honest — "Out of laziness, I guess? I honestly should completely redesign that stuff." Portfolio-usable as a candid adopt-vs-redesign judgment, or just quietly framed as "kept what worked." He also "believe[s] I did add in the partials thing" — **not found in TanpuraDrone.tsx** (only a `fatsawtooth` oscillator + sine resonator; no user-facing partials control). Evidence-first flag: either it lives elsewhere or the memory is of an unshipped experiment — don't claim it on the page.

**Attribution**: YES — name Chromatone / davay (Denis Stardov) with a link (resolves open question 3).

**Other adapted instruments (resolves open question 5) — "build vs. adapt" is a policy, with a stated rule:**
- **X/Y Lead ← Saucillator** (Green Noise LLC): "I didn't want to copy them too much, so just pitch on the y-axis and timbre on the x-axis, although I didn't go much deeper than that." Code confirms the axes (XYLead.tsx:439: "Normal: Y = pitch, X = timbre").
- **Venn diagram ← Nathan Ho** (already credited on the page).
- **Drone ← Chromatone** (§1a).
- **The adaptation rule, verbatim**: "For any instrument that I adapt, I'm always making major structural changes to include the possibility for scale change. And including rules and workflows and things to happen for when pitches change on their own, and trying to make that expressive and have it not be too imposing on the user." That sentence is nearly ready-to-publish as the case study's design-policy statement: every borrowed instrument gets rebuilt around the question *what does this do when the harmony moves under it?*

### 1c. Nathan's answers, round 2 (2026-07-05) + git verification

**Timeline — RESOLVED, git-exact.** Nathan: "The clone of this drone is completely irrelevant… I only needed to look at it when I was googling stuff for Ensemble Jammer shruti box and found it. Ensemble Jammer's development definitely started in December of 2025, I think." Git confirms and sharpens: **initial commit Dec 2, 2025** ("Initial Vite setup for scale-navigator-ensemble-jammer"), a five-commit day-one sprint (Firebase auth + room join + TouchHarp; tab bar + instrument picker; MelodyMaker + Saucillator; note-placement-on-scale-change logic — the adaptation rule is in the codebase from day one). **TanpuraDrone lands Dec 4, 2025** — two days in. Cross-corroboration: the ChatGPT export has "Scale Navigator UX plan" / "Ensemble Jammer setup" conversations on **Dec 2, 2025** (EVIDENCE.md §9.2). The Nov 2024 date on the Chromatone clone is just the upstream repo's own history — a reference copy, not a milestone.

**Inspiration lineage beyond Chromatone (extends open question 5):**
- **La Selva ← myNoise / Stéphane Pigeon.** Nathan: "I'm extremely inspired by Amfivolía and myNoise. It's created primarily by Stéphane Pigeon. That's what Ensemble Jammer La Selva is about." The instrument is real and shipped: `src/instruments/LaSelva/` — git **Feb 6, 2026 "Add Nature instrument (rainforest soundscape)"** (flat-design overhaul Feb 14). Code: a synthesized rainforest of creature voices — `Cricket`, `TreeFrog`, `Owl`, `Nightjar`, `Dripping` (+ `BaseCreature`, and a `PitchSnapper.ts` — the Tonalign-family naming appears inside EJ) — that reads `pressing_scale_dict.json` + `chords_no_supersets.json`, i.e. **the rainforest sings in the current shared harmony**. Same adaptation rule applied to a *soundscape* instead of an instrument: myNoise built the generative jungle; Nathan asked what happens when the jungle has to follow the ensemble's scale.
- **Jazz Piano Comper ← players, not software.** `src/instruments/JazzPianoComper.tsx`, git **Feb 2, 2026 "Add Jazz Piano instrument, MIDI output system, and MIDI-only mode"** (+ Feb 5 polish: chord/scale toggle controls bass root). Nathan: "That's not really software inspired, more just like **Bill Evans** and other stuff, and people like **Ji Min** and **Dorothy**" (his correction: Ji Min + Dorothy, not "Jeannie and Dorothy") — "I'm also thinking of **En Blanc et Noir**, just other YouTubers who make great piano content, harmony stuff."
- Framing note: Nathan called these "future directions," but git shows both *shipped* Feb 2026 — the future-directions part is where he wants to take them (deeper myNoise-style generative depth; better comping). Case-study-wise this gives the adapt-policy section a third column: **adapt software (Chromatone, Saucillator, Venn7) / adapt a soundscape (myNoise → La Selva) / adapt a musician's ear (Evans, Ji Min, Dorothy, En Blanc et Noir → Jazz Piano Comper)**.

---

## 1b. Thesis-rewrite quote bank (Chapter 7 is an Ensemble Jammer case study)

Source: `/Users/soney/Github/Thesis/thesis-rewrite/Chapters/Chapter7.tex`. All verbatim.

**The 7-byte constraint (the BLE rewrite, told better than the current page tells it):**
> "Bluetooth Low Energy advertisements allow very little payload, so the entire shared harmonic state had to be compressed into a broadcast of seven bytes. Seven bytes proved sufficient... The shared field now travels in a pocket, and the latency and connectivity worries that networked-music research has documented since its beginnings are simply not incurred, because nothing leaves the room."

**The founding complaint (origin of motion controls — sharper than the page's "no eye contact" phrasing):**
> "at a group jam, one participant said, 'it sucks to be on your phone'" — and the design response "pushed the interaction model past the screen entirely... the tilt of the phone in the hand, or the compass direction the participant faces, selects position within the current scale, so that a crowd's bodies — where people turn, how they lean — become the performance, and the shared state is played rather than read."

**The 2019 prophecy fulfilled:** a gallery visitor imagined "distance sensors and accelerometers being used as the form of navigation through the scales" — "describing, seven years early and nearly component for component, the motion-controlled Ensemble Jammer instrument."

**LALORK / Share Harmony (May 2026):** LA Laptop Orchestra founded 2026; inverts the PLOrk/SLOrk tradition — "the audience *is* the ensemble." First event: "eleven participants, most of them without music-theory background, sustained a networked session of over half an hour." Kat Macdonald (London City Laptop Orchestra) consulted: listen more than you play; distribute sound through the room (personal communication, June 2026).

**The nine-year-old (best anecdote in the archive):**
> "A nine-year-old participant kept steering the shared state to a bright, unresolved harmony that the trained adults present would never have chosen. The room leaned into it; the pianist found a line over it; when it finally broke open, everyone laughed, and she immediately asked to do it again."

**Expert critiques (May 2026, honest-feedback material):** Nathan Ho — "indistinct wall"; sessions "would have breathed with many more timbres, each resting most of the time"; participants can't stare at screens. Ben Tillotson — "too many issues; scrap it and start again from a developed brief" (small ensemble ~4, distinct voices/registers, visible communication, intentional arc).

**RASP protocol (July 2026, two pianists, four hands):** Explore, Keep, Compose, Realize, Reflect. Three findings:
1. **Anticipation request**: "it would be easier if you switch, we play the chord, and then you have ten seconds" — the 2018 sight-readers asked to see what *had changed*; the 2026 pianists asked to see what's *about to change*. (Cross-links to Notation Anticipation.)
2. **Advisory, not enforced**: a player nudged his partner's hand aside to play outside the scale; Nathan's on-the-spot ruling — playing outside is always within the players' purview — "made the advisory character explicit policy... playing inside the harmony becomes audible as a choice."
3. **The Poulenc effect**: "anytime you try to do a Baroque sounding thing with this kind of harmonic language, it sounds like Poulenc" — the vocabulary exerts a gravity of its own.

---

## 1d. Recorded live demo, Mar 22, 2026 (Tristan Whitehill call — advisors archive, EVIDENCE.md §12.4)

A dated, transcribed demo of Ensemble Jammer working end-to-end (`business/09_Advisors/stany_tristan_whitehill/Mar 22 at 10-04 AM/Mar 22 at 10-04 AM.txt`): harp instrument, the Venn-diagram melody pad (Nathan Ho's Venn7 lineage), and the **MusicXML score-drop feature demonstrated live — Terry Riley's "In C" dropped in and auto-retuned to the current scale on the call**, plus Beethoven. Also on the record: the C++ sampler port rationale ("JavaScript cannot handle that shit… porting everything to JUCE and C++"), the Electron wrapper + planned **Steam release** (Steam Deck), and mobile live on iOS + Google Play. Distribution beats and the score-drop demo are candidates for the rewrite's later sections.

---

## 1e. The Dinner Party Jam crit, May 2026 (`business/09_Advisors/dinner-party-jam-feedback.md` + ADVISOR_FEEDBACK.md; EVIDENCE.md §12.6)

A real, documented **design crit of an Ensemble Jammer session video** (youtu.be/lUCmZuWv9R0) — Nathan solicited critique from two advisors after a session that "still feels lackluster" despite added sound design:
- **Nathan Ho — negative space**: "Every instrument going 100% of the time = indistinct wall… Use 10x the number of timbres/textures, but each one resting 90% of the time. It will breathe more." Plus meta-strategy (collect reference tracks, identify desirable properties), a steady-pulse alternative (Reich / Göttsching E2-E4), and participation constraints ("Can't have people looking at screens"; "Best music comes from mostly professional musicians").
- **Ben Tillotson — the hard verdict + redo brief**: "Too many issues. Scrap it and start again with a more developed brief." Brief: ~4 players (3 phones/iPad, 1 piano), sonically distinct sounds per range, visible communication ("musicians trading solos… visibly loving it"), intentional arc. Positive: "Impressed you got all these folks together and onto the platform."
- Reference tracks logged: Debussy, Reich, E2-E4, Kristen Roos *Universal Synthesizer Interface*, Michael Cella Wax demo, David Lang "crowd out."

**Case-study value**: the honest-iteration beat — shipping the platform wasn't the end; the *musical output* got critiqued and sent back for a redo with a written brief. Pairs with the MoPhO-research design principle Nathan adopted in ADVISOR_FEEDBACK.md: **"Visible consequence within 2 seconds"** — if participants can't hear their effect immediately, they silently disengage.

---

## 1f. Provenance point: a proto-Ensemble-Jammer idea in the Feb 23, 2022 Tymoczko meeting (EVIDENCE.md §12.7)

The retrospective writeup of Nathan's first Tymoczko Zoom (`business/09_Advisors/dmitri_tymoczko/tymoczko-feedback-2022-02-23.md`) records, among the meeting's ideas: **"Use iPhones to jam with sax (Ensemble Jammer concept?)"** — the participatory-phones-as-instruments idea was on the table with the field's foundational researcher in **February 2022**, 3.5+ years before Ensemble Jammer development started (first commit Dec 2, 2025). The parenthetical is Nathan's own 2026 annotation connecting the dots. Candidate use: a one-line provenance beat showing the idea's long gestation — sketched in conversation 2022, shipped 2025–26.

---

## 1g. Recorded walkthrough, Feb 9, 2026 (Brady Boettcher call — EVIDENCE.md §12.9)

An earlier transcribed EJ demo than the Mar 22 Tristan one (§1d), to an Apple Core Audio engineer, with design rationale on tape:
- **The Venn Melody Maker explained in Nathan's own words, with credit**: "each region is a pitch… overlapping regions represent the two pitches… the thing about a seven-fold Venn diagram is you can get all seven… this is based on some work that my friend Nathan Ho did." Plus the voice-leading detail: "**I'm telling it: try to stack yourself in thirds wherever you can**" — press the center region and get "this seven-note stacked-in-thirds chord"; "as you're updating the scale, the regions are updating themselves, one at a time."
- **Pitch-tagged samples, plainly stated**: "I'm tagging these samples in terms of what their pitch content is… this loop has C, C#, and E♭ in it, and so… the whole thing needs to be transposed down a half step" — with the engineering honesty: "I'm just using basic sample rate to change this. I'm not doing any FFT stuff."
- **The participatory vision quotes**: the banjo scenario ("all you got to do is subscribe to the Ensemble, and then you're gonna be in the same harmony as I am"), "routing other MIDI to a player piano 50 miles away," and "an immersive jam session… in some public place, kind of like a **flash mob in Union Station**" (Brady: "that'd be a good video for it" — "It's part of the plan").
- **The AirPods choir-piece idea** (adjacent participatory concept, pitched to a Core Audio engineer): C3LA singers wearing AirPods, phone shows pitch-up/pitch-down against a live keyboard; questions about voice-isolation DSP and bone-conduction sensing; the framing principle: "**I want to build technology for what everyone already has in their pocket.**"

Candidate use: the design-rationale quotes (Venn stacking, pitch tagging) for the instrument sections; the pocket-technology principle as a thesis line.

## 1h. The music-educator field interview, Feb 15, 2026 (Tanner Pfeiffer — `business/09_Advisors/tanner_pfeiffer/Feb 15 at 4-45 PM.txt`; EVIDENCE.md §12.11)

Tanner (middle/high-school music teacher; also the *earliest* ensemble-app tester — Feb 27, 2021 share) gives Nathan an in-person field interview on what a real general-music classroom looks like. This is the EJ education-market user research, on tape:

- **The assumption-shattering moment, in Nathan's own words**: Tanner describes students with no music at home ("They don't know how to tap their toe to the beat… they'll be in sixth or seventh grade, I'm their first music teacher ever"). Nathan, mid-call: "I guess I have to come to grips with the fact that that's really more the reality. **So I'm operating on some bad assumptions, maybe.**" A designer revising his model of the user out loud.
- **Why beginners quit — the retention insight**: "People are usually excited to start an instrument… and then they discover that it is difficult. **The discovery of difficulty is kind of like a dark night of the soul situation** — they kind of give up." Tanner stopped teaching guitar/piano to middle-schoolers entirely (pinky strength, collapsed hand shapes). EJ's remove-the-difficulty premise, stated by a teacher from the failure side.
- **Deployment constraints learned**: middle-schoolers surrender phones to advisors; high-schoolers keep them all day; admin resistance ("we're really more interested in singing and the instruments, so we don't want to bring technology into this"); prior art in classrooms (Chrome Music Lab et al.); mixed-ability classes solved with self-paced units.
- **Nathan pitches the EJ model live, against those constraints**: "Everyone's got a phone in their pocket… scan a QR code, go to a website and just start making music together. **It's like a Kalimba that's free** — already on that student's phone." Plus the equity caveat unprompted: "maybe some kids don't have a phone because they can't afford one, and then ideally [you'd have] phones to hand out… iPads or whatever."
- **Tanner's design counter**: "Some kind of physicality, like the responsiveness, is important — that's sort of like where the Orba found its success."
- **The strategic conclusion, dated**: "Maybe any project that we work on… people need to self-select for already being interested in music. Which makes me feel like the music education thing is just way more of an uphill battle." (EJ's later positioning follows this.)
- **Venn7 line**: "Nathan Ho and I have been talking a lot about turning the Venn7 [transcribed 'vent 7'] interface into something real" — six days *after* the Feb 9 Brady demo of the Venn Melody Maker (§1g), so "something real" likely means a further/standalone form; quote neutrally.
- **Live demo reactions** (tail of the transcript; speaker labels garbled — attribute cautiously): "**I feel like I'm more playing an instrument when I get to do this**"; "I'm excited to compose with this, too"; the full aggregate read as "**a seven-note pivot chord** — you have everything in there… the motion to anything else"; feature wish: "**I really want to play some Bach inventions through this to see it visualized**" (with the voices discussion: inventions are 2–3 voices, "even a fugue is only ever four… so you'd only ever get that deep"); "I love this thing. This thing's really fun. And I MIDI out, too, so we can control other instruments." And the mission line: "**I just want to bring this to people… a lot of schools, a lot of really bored people out there** who are dying [for] someone with some passion… bring it to them and have a fun hour or so."

Candidate use: the field-research beat (designer interviews a teacher, revises assumptions, extracts constraints: phones-in-pockets vs. phone bans, physicality, self-selection) is exactly the research-informed-design evidence the Apple JD wants; "dark night of the soul" + "Kalimba that's free" are the quotable pair.

---

## 1i. The footage-review call, Apr 19, 2026 (Lachlan Turczan — `business/09_Advisors/lachlan_turczan/lachlan-talk0april19-2026.txt`; EVIDENCE.md §12.12)

Phone call with Lachlan (Nathan's brother; working artist). Nathan is reviewing EJ session footage on the call, and this transcript is the **dated origin of the screen-removal / motion-control design conviction** that the current page presents as v2's premise:

- **The insight, in Nathan's words, while watching his own footage**: "the fact that my thumb is even on a screen is taking me out of this moment of being together with people — what if it's just the accelerometer, the screen isn't even based on anything, and everyone's moving these things around." And bluntly: "I am learning a lot. I do not want people on their fucking phones. I hate seeing everybody on their fucking phones. It looks bad."
- **Lachlan's crit lands the same direction independently**: in the footage, "people were literally looking up at you and not looking at their finger, and the finger was able, through the simplicity of that arm thing, to just go up and down based off of your emotions… look at the conductor. What you did in that moment is break that — do as much as you can in the future to continue to remove the screen and the phone from that… like a Tai Chi exercise… this is going away from music and more towards gesture."
- **Nathan connects it to his own performance-practice thesis** (the CalArts line): "when you're performing digital music, you need to get rid of your laptop… turning knobs is about 7,000 times better than being on your laptop… eventually it'll just be full-on dancing — **that is literally the instrument**."
- **The roadmap statement, dated**: "I would much rather be sitting down and improving Ensemble Jammer, integrating the accelerometer, integrating tilt and yaw, integrating the cardinal points of the compass, and all of those things that the iPad can do." (This precedes the shipped v2 tilt/shake/pirouette controls — design conviction → roadmap → shipped feature.)
- **Honest UX-failure observation from the footage**: "Zoey at one point accidentally swipes over to some other app and just kind of confused for 30 seconds" — a real field-observed failure mode of phone-based ensemble instruments (OS chrome competes with the instrument), which the motion-control direction also answers.
- **Convergent advice pattern**: Lachlan's Apr 19 "remove the screen and the phone" is independently echoed weeks later by Nathan Ho's May crit "you can't have people looking at screens" (§1e / EVIDENCE §12.6). Two advisors, same conclusion, from different evidence (footage review vs. Dinner Party Jam) — strong case-study material for research-triangulation.
- **2022 provenance**: the call also dates the earlier ensemble shoot — "that big scale navigator thing with all those musicians back in 2022… Fit and Bendy's studio with Giles"; footage by Lachlan, Giles, Rocco, and Zoe; Nathan reviewing it in Apr 2026: "it is really good. There is some beautiful music… incredible musicians… incredible moments."

Candidate use: the strongest "how the design changed and why" beat in the EJ archive. The page currently asserts the no-eye-contact insight; this transcript is the tape of the insight being *had*, with the motion-sensor roadmap stated in the same breath.

---

## 2. What the current page already has (baseline)

Current structure of `projects/ensemble-jammer.html`: premise (remove harmony as a problem) → v1 suite (Touch Harp, X/Y Lead, Melody Maker, drones, synths, sequencers, loops; Nathan Ho Venn7 credit) → salon test + "no eye contact" insight → v2 motion controls (tilt/shake/pirouette) → v3 campfire problem, Firebase→BLE rewrite → iOS metrics (16% conversion, 299 downloads) → links.

The drone is currently a one-word mention in the v1 instrument list. The lineage story would expand it into a named beat.

---

## 3. Open questions for Nathan

1. ~~Where does the adapted drone live~~ — **ANSWERED**: `/Users/soney/Github/Ensemble-Jammer/src/instruments/TanpuraDrone.tsx` (see §1a). ~~Still wanted: a screenshot of Nathan's version~~ — **SAVED (2026-07-05)**: `images/ensemblejammer/tanpura_drone_portrait.png` + `tanpura_drone_landscape_1.png` + `tanpura_drone_landscape_2.png` (recovered from transcript; D2 root at 73.42 Hz, pitch-class row A–G♯, root-colored pads A2/A3/A4 · D1/D2/D3 · G2/G3/G4). Ready for the before/after against Chromatone's.
2. ~~What exactly changed in the port~~ — **ANSWERED from code** (see §1a): chromatic root picker → scale/chord-constrained picker + chord-root lock; sounding voices **glide** on scale change (portamento + mirrored MIDI); kept the pad-drag vol/pan gesture, breathing LFOs, and knob set. Nathan can still add the *why* / any design stories behind these choices.
3. ~~Attribution on the page~~ — **ANSWERED (2026-07-05): YES**, name Chromatone / davay (Denis Stardov) with a link, same treatment as Nathan Ho.
4. ~~Timeline~~ — **ANSWERED (2026-07-05)**: the clone date is irrelevant (reference copy found while googling "Ensemble Jammer shruti box"). EJ development started December 2025 — **git-exact: Dec 2, 2025 initial commit; TanpuraDrone Dec 4, 2025**; ChatGPT "Ensemble Jammer setup" conversation same day (§1c).
5. ~~Other adopted/adapted instruments~~ — **ANSWERED across §1b + §1c**: Saucillator → X/Y Lead; Nathan Ho Venn7 (already credited); Chromatone → drone; **myNoise/Stéphane Pigeon (Amfivolía) → La Selva** (shipped Feb 6, 2026); **Bill Evans + Ji Min + Dorothy + En Blanc et Noir → Jazz Piano Comper** (shipped Feb 2, 2026). Build-vs-adapt is a policy with a stated rule (§1b) and three flavors: software, soundscape, musician's ear.
6. ~~PitchSnapper lineage~~ — **ANSWERED from code (2026-07-05)**: `src/instruments/LaSelva/creatures/PitchSnapper.ts` implements the Tonalign design pattern in TypeScript — `closestPc()` (circular pitch-class distance), `snapMidiToPcNear()` (octave-preserving snap), and `snapFrequencyToPitchClass(frequency, pitchClasses, snapStrength)` where **snapStrength 0→1 is a continuous correction amount** — Tonalign's core interaction (snap-to-collection with adjustable strength) reappearing inside a rainforest soundscape so the creatures sing in tune with the ensemble. Cross-link sentence justified; phrase as "the same snapping behavior as Tonalign, reimplemented for La Selva's creatures" (TS reimplementation, not shared code).
7. ~~Ji Min / Dorothy / En Blanc et Noir links~~ — **ANSWERED (2026-07-05)**: https://www.youtube.com/@en-blanc-et-noir and https://www.youtube.com/@Jimindorothy. Use for the Jazz Piano Comper inspiration credits.
