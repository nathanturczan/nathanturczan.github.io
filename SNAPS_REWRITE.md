# SNaPS Case Study Rewrite — Materials

Working doc for rewriting `projects/snaps-plugin.html` (and reconciling `projects/snaps.html`), parallel to the Dashboard / Ensemble Jammer / Tonalign / NotesChordScales gathering docs.
**Status: GATHERING. Do not rewrite the case study yet — Nathan pulls the trigger.**

---

## 1. Git archaeology — `/Users/soney/Github/snaps` (remote: **github.com/nhthn/snaps** — hosted under Nathan Ho's account, not Nathan's)

93 commits total. The early log, verbatim:

| Date | Hash | Author | Commit |
|---|---|---|---|
| **Mar 21, 2021** | 85650a9 | Nathan Ho | "Initial commit" |
| Mar 22, 2021 | d54ced2 | Nathan Ho | "Add README" |
| Mar 24, 2021 | 67b37cd | Ho | "Rename SnapsSample -> SnapsParticle" (the particle metaphor arrives on day 4) |
| Mar 24, 2021 | 7041308 | Ho | "Add maxParticles and particlesPerSecond" |
| Mar 26, 2021 | da12c07 | Ho | "Debounce scale changes from MIDI" (Scale Navigator integration is there in week one) |
| **Apr 14, 2021** | 0b55d31 / 1c7f987 | **Nathan T.** (Seraphina Oney machine identity) | "standardize json metadata" / **"snaps.scd with all the samples!!!!"** |
| Apr 14, 2021 | 82d040c | Ho | "Add multi-player support" |
| Dec 13, 2021 | 22620d3–20d7f42 | Nathan T. | **srcID feature, PR #17, merged by Ho** — Nathan contributing engine code to Ho's repo |
| Feb 15, 2022 | 390e9c4 | — | "Add preliminary looping" |
| Feb 15, 2022 | 8c6b3aa | — | "Add loop player support to snaps.scd and nt.scd" (`nt.scd` = Nathan's personal performance file, in the repo) |
| Mar 13, 2022 | — | — | SnapsLoopPlayer fixes |

**Division of labor is legible in the log**: Ho builds the engine (particles, players, glides); Nathan owns the sample corpus, metadata standard, and his own performance file (`nt.scd`), and lands one engine feature (srcID) through a reviewed PR. This matches the page's honest framing ("Nathan built the entire engine; I kept pushing the interaction and product") and adds receipts.

**The repo lives under `nhthn/`** — Nathan performs for years out of an instrument hosted in his collaborator's account. Nice concrete detail for the collaboration story.

## 1b. The payment ledger — PayPal receipts to Nathan Ho (Gmail sweep, 2026-07-05)

Nathan: "hope your also tracking all my payments to nathan ho over the years for SNAPS and other projects." 12 payments from Scale Navigator, LLC, ~$1,703 total; the notes are a feature-level dev log:

| Date | Amount | Note |
|---|---|---|
| Aug 14, 2021 | $460 | "Scale Mav - Chord …" (Dashboard-era chord notation work) |
| Aug 24, 2021 | $200 | "chord notation - …" |
| Sep 8, 2021 | $145 | "invoice #22" |
| Dec 12, 2021 | $120 | "SNaPS update" — **one day before the srcID PR #17 merge (Dec 13, 2021)** |
| Aug 16, 2022 | $60 | "snaps - pan" |
| Oct 29, 2022 | $70 | "SNaPS development -…" |
| Nov 3–4, 2022 | $200 + $35 | "SNaPS alphanumeric…" / "alphanum sort!!" |
| Nov 6, 2022 | $60 | "fix loopplayer" (SnapsLoopPlayer, landed in git Feb–Mar 2022) |
| Nov 11, 2022 | $60 | **"SNaPS: rhythm!!!!"** |
| Feb 22, 2023 | $113 | "latest rhythmic sn…" |
| Feb 17, 2026 | $180 | **ANSWERED (Nathan, 2026-07-05): SuperCollider timer debugging** — see §1c |

**Use in the rewrite**: the collaboration wasn't just friendship — Nathan commissioned engine work, feature by feature, over five years, and the receipts read like a changelog ("fix loopplayer," "alphanum sort!!," "SNaPS: rhythm!!!!"). **The ledger-as-changelog claim is now literally git-verified — payments match commits to the day**: Oct 29, 2022 payment ↔ Oct 29 transposition-limit commits; Nov 3–4 "alphanum" payments ↔ Nov 3–4 alphanumeric-player commits; Nov 6 "fix loopplayer" ↔ Nov 6 "Fix bugs restarting SnapsLoopPlayer"; **Nov 11 "SNaPS: rhythm!!!!" ↔ Nov 11 `dc0744c` "Add rhythm support"**; Feb 22, 2023 "latest rhythmic sn…" ↔ Feb 22 "Add quantization to quarter notes" + "Increase rhythmMaxSubdivision to 16."

### 1c. The rhythm engine + the SuperCollider ceiling (Nathan's answers, 2026-07-05, git-verified)

**What the rhythm engine was** (Nathan): "There used to be no concept of rhythm… previously, sample particles would spawn depending on what the millisecond slider was set to, and then Nathan [Ho] kind of created a little timer grid thing for them to be scheduled on." So: free-running density (particles-per-ms) → **scheduled grid** (Ho's timer). Git dates it exactly: **"Add rhythm support" Nov 11, 2022** (`dc0744c`, same day as the "SNaPS: rhythm!!!!" payment), refined **Feb 22, 2023** ("Add quantization to quarter notes," "Increase rhythmMaxSubdivision to 16" — same day as the "latest rhythmic sn…" payment).

**Nathan later extends it himself, vibecoding (Nov 2025, Scotland window)**: commits `edf8f3e` "adding global 'Clock Divide / Multiply' param" (Nov 21), `5c55ac4` groundwork for humanize rhythm (Nov 21), `70cadac` "tweak humanize rhythm… global clock multiply / divide to make it actual polyrhythmic subdivisions / superdivisions" (Nov 24, 2025) — inside the same window as the 547-message "Supercollider SNaPS project" ChatGPT conversation (Nov 18, 2025). The commissioned 2022 grid becomes Nathan's own polyrhythm system in 2025.

**The Feb 17, 2026 $180 payment = the ceiling, and the plugin's origin story** (Nathan): "This was for the SuperCollider SNaPS thing. I was just trying to figure out what the hell was wrong with the timer. When I would push it to 16th notes and then push the BPM to like 250, the whole thing would crash. That's because of a limitation with the language of SuperCollider itself. Obviously very excited to move everything to C++ JUCE land, where everything just works perfectly." Note the chain: the crash parameter (16th notes) is exactly the 2023 commit's `rhythmMaxSubdivision = 16`; the debugging session with Ho is Feb 17, 2026; **the snaps-plugin repo's first commit is Mar 8, 2026 — three weeks later**. The last SuperCollider payment is the C++ port's causal trigger: *the instrument outgrew its language.* That's the plugin case study's missing "why now" sentence.

## 2. Date discrepancies (three conflicting claims — must reconcile before rewrite)

| Source | Claim |
|---|---|
| `projects/snaps.html` (archive page) | "2020-Current" |
| **git** | **First commit Mar 21, 2021** |
| Thesis Ch. 8 §8.1 | "SNaPS began in 2022 as a SuperCollider instrument… a plugin version followed in 2024" |
| `projects/snaps-plugin.html` header | Plugin "2024–present" |

**RESOLVED (Nathan + git, 2026-07-05):**
- SuperCollider instrument: **2021** — Nathan: "just go with 2021" (git: Mar 21, 2021). Drop "2020"; fix the thesis's "2022."
- Plugin: Nathan — "It is so extremely unlikely that it started in 2024. I mean, I didn't even have vibe coding tools in 2024, right?" **Git agrees: `/Users/soney/Github/snaps-plugin` first commit Mar 8, 2026** ("Initial commit: SNAPS plugin skeleton"), design system + parametric looper + sequencer layout the next day, v1.0.2 by Jun 15, 2026. **Both the thesis ("a plugin version followed in 2024") and the page header ("2024–present") are wrong by two years — the plugin is 2026.** Corrected timeline: SuperCollider 2021 → Librarian vibecoding Jul 2025 → EJ browser ports Dec 2025 → plugin Mar 2026.
- (`snaps-develop` is a clone of the same 2021 repo; `snaps-librarian` dir is empty except `.claude` — **RESOLVED: the Librarian lives at `/Users/soney/Github/librarian`**, see Q10 in §8.)

## 3. Thesis Ch. 8 §"SNaPS: the Edges as Sound Design" — quote bank (verbatim)

**The premise:**
> "a granular collage engine whose samples are tagged in advance with their pitch content (a companion tool transcribes sample libraries automatically), so that every particle of sound is born knowing what pitches it contains---and can therefore be born *into* the current scale."

**The three-way decision + the money quote:**
> "If the sample's pitch content is already a subset of the current scale, it plays as it is. If it can be transposed into the scale, it is transposed by varispeed. If it cannot fit at all, it is not suppressed---the Scale Rack's mistake---but given a theatrical exit: a stutter, a filter sweep, a Doppler-style pitch drop… in SNaPS the modulation *is* the event, a texture of dozens of voices leaning, each by its own small interval, into the new harmony."

**Parsimony as arithmetic (the cost function):**
> "the cost of a candidate transposition is its size in semitones plus a fixed penalty for upward motion, candidates are confined to a bounded range wider below than above, and ties resolve downward. Small moves beat large ones; downward moves beat upward ones of equal size; the aggregate texture therefore modulates the way trained voices do, by the least sufficient motion, with the slight downward gravity that corpus studies find in real voice leading."

**The Ho curve (already credited on the page; thesis gives the precise behavior):**
> "one hand-designed curve, named after Ho, that encodes how instrumentalists actually connect pitches: a large ascending glide first dips a quarter semitone in preparation before rising, and a descending glide overshoots half a semitone below its target and settles up into it."

**The lineage sentence (chapter close):**
> "the critic's missing voice-leading continuity became SNaPS's glide engine and its parsimony arithmetic"

## 4. The 2025 port sprint (Ensemble Jammer + plugin era)

- **SnapSequencer** ported into Ensemble Jammer **Dec 24, 2025** (`58cdaf0`); **SnapsLooper Dec 29, 2025** (`4064a04`) — the SuperCollider engines become browser instruments over Christmas week 2025.
- ChatGPT export corroborates a deep SNaPS work block just before: **"Supercollider SNaPS project" (547 messages, Nov 18, 2025)** — the single largest conversation in the whole 1,151-conversation export — plus "SNaPS system context" (156 msgs, Nov 24, 2025). The port was designed/spec'd in Scotland-era vibecoding sessions.
- **SNAPS Librarian origin, dated**: ChatGPT "Vibe coding help," **Jul 16, 2025** — "help me with a bit of vibe coding for music. I have a folder called samples… contains its own folder of samples, and a json…" Nathan's **first personal vibecoding session on record** — SNaPS Librarian territory is where Nathan learned to vibecode.
- **The Ho Basic Pitch call — dated by Nathan (2026-07-05): "Probably January or February of 2026."** Note the sequence this implies: the Jul 2025 session was corpus/JSON management; the Basic Pitch (Spotify's ML transcription) recommendation came later, right before the plugin era (first plugin commit Mar 8, 2026) — and plausibly in the same window as the **Feb 17, 2026 $180 payment to Ho** (§1b; still confirm the receipt note, but the dates line up).
- **Why the call is worth a sentence on the page** (Nathan): "This is just very interesting to note, just because of Nathan [Ho]'s general stance toward AI. He is cool with AI used for data purposes — obviously medical purposes and data-entry type stuff. This definitely falls under that category." A principled AI skeptic recommending an ML tool *because* it's data work, not generative work — a precise, honest beat for the Tagging section.

## 5. Process artifact — the canvas wireframe (SAVED 2026-07-05)

**SAVED: `images/snaps/snaps_canvas_wireframe.png`** (re-pasted by Nathan 2026-07-05; recovered from chat image cache). Contents: a digital canvas sketch (Freeform/notes-app style) of the plugin concept — an arrangement-timeline screenshot with four staggered **jicello clips** (`6–jicello_Minor3rd @114%`, `5–jicello_Major… @128%`, `4–jicello_Perfect4th @110%`, `3–jicello_Perfec… @140%`, the 114% clip repeated at bar 11), annotated with hand-drawn marks: a double-headed horizontal arrow (time-stretch), a play-button triangle, and a stop square. Below it, a dark terminal-style sample-library list pairing sample names with pitch content in LilyPond-style note names: `holst_cello_1 [c, d, e]`, `paolo_8 [df, f, af]`, `cageone_15 [f,fs, b]`, `cageone_14 [ds, fs]`, `desplat_17 [bf, d, f]`, `chen_violin_3 [a, fs, d]`, `paolo_7 [cs, e, gs]`, `grieg_3 [b, e]`, `aGong_Eb5_128_OTO [ef]`, `strings_majChord [a, cs, e]`, `cageone_10 [b, a]`, `pixies [ds, e]`, `cageone_1 [ds, cs]` — i.e., the Librarian's core data model (sample → pitch-class set) sketched right on the concept canvas. This is the only pre-final visual artifact for the SNaPS case study; the page itself admits "The interface barely changed from prototype to release. Almost all the design work happened in the behavior" — so behavior artifacts (glide-curve sketches? cost-function notes? `nt.scd` itself as an artifact?) matter more than UI mockups here.

## 5b. Live-performance evidence (Nathan's answers, 2026-07-05) — the "primary live instrument" claim, anchored

- **The discography IS the evidence.** Nathan: "pretty much everything on my YouTube and my SoundCloud before 2026 that's sample based (aka everything) is running SNaPS SuperCollider." The case study doesn't need to hunt for one anchor video — the entire pre-2026 sample-based output is SNaPS. Pick 1–2 embeds and state the claim at full strength.
- **The studio workflow, in his words**: "I could route multiple tracks from SuperCollider via Loopback into different tracks in Ableton and kind of manage everything separately" — SNaPS wasn't just a live instrument, it was a multitrack *source* feeding a DAW mix. (Loopback = Rogue Amoeba's virtual audio routing.) Good one-sentence workflow beat.
- **The Webb Schools dance show (verified on disk)**: pre-show improvised set as the audience seated themselves, collaborating with Michael Szanyi [Nathan's spelling "szayni" — confirm]. Nathan: "Just as the audience was seating themselves for this dance show, which was really cool, I got to kind of spin my own improvised Scale Navigator music." Audio: `/Users/soney/Music/Tracks/WebbDanceShow_Centum02.04.22.aif` — **687MB AIFF, file-dated Feb 4, 2022, matching the filename** — i.e., ten days before the "Add preliminary looping" commits (Feb 15, 2022): the loop player was being built in the same season the instrument was gigging.
- Case-study use: a dated, real-world deployment between the podium era and the plugin era; "my primary live instrument for years" becomes checkable.

## 6. What the current pages have (baseline)

- **`projects/snaps.html`** (archive stub): "2020-Current," SuperCollider, lydianairs.jpg, two YouTube embeds, GitHub link. Tagline credits Ho.
- **`projects/snaps-plugin.html`** (already a real case study, the strongest of the current pages): violin-sustain framing; Origin (honest credit split); Tagging (Basic Pitch librarian); three engines (Emitter/Looper/Sequencer); Behavior (glide + exit); two Design-decision blocks (Glide curves with Ho credit + link to his oddvoices dev log; Exit modes); demo video; Where it is now (preset-system open problem).

**Gaps the rewrite can fill**: no dates anywhere (and the dates that exist conflict, §2); no git receipts for the collaboration story; no process artifacts; the parsimony cost function — arguably the deepest design decision in the whole ecosystem — isn't on the page at all; the Librarian/vibecoding origin story; the Dec 2025 EJ ports showing the engine's third life (SuperCollider → plugin → browser).

## 7. Candidate use in the rewrite (sketch only)

- Fix the timeline: SuperCollider instrument 2021 (git), Nathan's live instrument since (Webb show Feb 2022, §5b); rhythm engine 2022–23 (§1c); Librarian Jul 2025; EJ browser ports Dec 2025; SC timer ceiling Feb 2026 → plugin Mar 2026. One engine, three bodies — and the third body exists *because* the first one crashed at 250 BPM.
- Add a **"Voice leading as arithmetic"** design-decision block using the thesis's cost-function language (size + upward penalty, bounded range wider below, ties resolve downward) — it's the clearest example in the portfolio of a *behavioral* design spec.
- Strengthen Origin with the receipts: repo under `nhthn/`, "snaps.scd with all the samples!!!!" (Apr 14, 2021), srcID PR #17 merged by Ho (Dec 13, 2021), `nt.scd` in-repo.
- Pair "the modulation *is* the event" with the demo video.
- ~~Save the canvas wireframe~~ — DONE: `images/snaps/snaps_canvas_wireframe.png` (§5).

## 8. Open questions for Nathan

1. ~~Start date~~ — **ANSWERED (2026-07-05)**: "just go with 2021." (Fix the thesis's "2022" too.)
2. ~~Plugin repo + first commit~~ — **ANSWERED + git-verified**: Nathan doubted 2024 ("I didn't even have vibe coding tools in 2024"); `/Users/soney/Github/snaps-plugin` first commit **Mar 8, 2026**. Page header and thesis both need the 2024→2026 fix (§2).
3. ~~Ho Basic Pitch call~~ — **ANSWERED**: "Probably January or February of 2026," + the AI-stance framing (data work vs. generative work) worth a sentence on the page (§4).
4. ~~Canvas wireframe~~ — **ANSWERED + SAVED (2026-07-05)**: "yes absolutely" — date it, name it, publish. Saved to `images/snaps/snaps_canvas_wireframe.png` (full description in §5).
5. ~~Ho comfortable with expanded collaboration story~~ — **ANSWERED**: yes.
6. ~~Live recordings~~ — **ANSWERED, richly** (§5b): all pre-2026 sample-based YouTube/SoundCloud output is SNaPS SuperCollider; Loopback multitrack workflow; **Webb Schools dance show pre-show improv, Feb 4, 2022** (audio verified on disk), with Michael Szanyi [confirm spelling].
7. ~~The rhythm engine~~ — **ANSWERED + git-verified** (§1c): ms-slider density → Ho's timer grid ("Add rhythm support" Nov 11, 2022; quantization + 16th subdivisions Feb 22, 2023); Nathan's own polyrhythm/humanize extensions Nov 2025. (Nathan asked "There wasn't a git commit message for that?" — there was; payments match commits to the day.)
8. ~~Feb 17, 2026 $180~~ — **ANSWERED** (§1c): SuperCollider timer debugging (16ths @ ~250 BPM crash = language limitation) → the C++ JUCE port begins three weeks later. The plugin's "why now."
9. ~~Michael Szanyi spelling~~ — **ANSWERED + CORROBORATED (2026-07-05)**: "yes confrimed" = **Michael Szanyi**. Nathan pasted Szanyi's Cate School faculty bio: English & Humanities Instructor + Dean for Faculty at Cate (appointed 2023), previously **12 years at The Webb Schools** (Dean of Faculty, **Dance Program Director**), 8 years teaching dance at Pomona College — independently corroborates the Feb 4, 2022 Webb Schools dance-show pre-show improv beat (§5b).
10. ~~SNAPS Librarian code location~~ — **ANSWERED + git-verified (2026-07-05)**: **`/Users/soney/Github/librarian`**. Initial commit **Jan 31, 2026 "Initial commit: SNaPS Sample Librarian MVP"**; Feb 7, 2026 `--octave-down`; Mar 30, 2026 "Add sketchpad progression matcher and ALS generator"; **May 27, 2026 "Add Basic Pitch wrapper"** (aligns with the Ho Basic Pitch call, Q3's "Jan/Feb 2026" recommendation → wrapper landed later). Contents: `librarian.py`, `basic_pitch_wrapper.sh`, `chord_parser.py`, `sketchpad_matcher.py`, `als_generator.py`, `als_inject.py`, `progression_analyzer.py`, `sample_sequencer.py`, `midi_audio_sync.py`, `filename_pitch_parser.py`, `server/`, `web/`, `tests/`. NOTE: the Jul 16, 2025 ChatGPT "Vibe coding help" session (§3) predates this repo — the Jan 31, 2026 repo is the MVP consolidation of work that began as loose vibecoding in mid-2025; keep both dates in the timeline. **Librarian visuals CLOSED (2026-07-05): there is no UI — it's headless** (Nathan: "THERE IS NO UI, its headless"). No screenshot exists or ever will; if the case study wants a Librarian visual, use terminal output or the sample→pitch-set list in `images/snaps/snaps_canvas_wireframe.png` (§4).
