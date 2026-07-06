# Scale Navigator Evidence Database

Living archive index. **Evidence only — no narrative.** Case-study docs (DASHBOARD_PROLOGUE_REWRITE.md etc.) query this instead of re-excavating. Built from git archaeology + file metadata, 2026-07-05. Standing rule: exhaust this archive before asking Nathan; questions to Nathan are "pick between candidates," not open recall.

---

## 1. Repos

| Repo (local path) | Remote | First commit | Last commit | Commits | What it is |
|---|---|---|---|---|---|
| `/Users/soney/Github/scale-navigator-dashboard` | github.com/nathanturczan/scale-navigator-dashboard | **2021-07-23** "Initial commit" (Nathan) | 2026-06-23 "iOS 1.0.7: BLE ensemble hosting release" | 876 | The React app, still live. First commit = the React pivot, same week as Ondřej's contract (repo access Jul 23) |
| `/Users/soney/Github/archived/ensemble` | github.com/nathanturczan/scale-navigator-ensemble | 2021-04-21 "adding all" | 2021-08-07 | 19 | **The vanilla era.** Git starts Apr 2021 as a bulk import; file mtimes reach back to Jan 2021 (vexflow, lilypond.js, flute/guitar/mandolin scripts Jan 2–9, 2021; `.firebase` Jan 10, 2021; `Wild Wolf.woff` Aug 31, **2020**). Vanilla JS + p5.js + VexFlow + Firebase; `3d.html`/`3d.js` (3D network view existed in vanilla!); scale_classes SVGs already include octatonic/hexatonic/whole_tone (57-universe present) |
| `/Users/soney/Github/archived/dashboard` | same remote (scale-navigator-ensemble) | 2021-04-21 | 2021-07-19 "add tabs" | 6 | Earlier clone of the same vanilla repo |
| `/Users/soney/Github/archived/pressing_scale_navigator` | github.com/nathanturczan/pressing_scale_navigator | 2021-07-06 "Initial commit" (Nathan) | 2021-07-30 | 37 | **Ondřej's navigator animation lab.** README: "working on animating this thing." 29/37 commits by rudytak. Jul 8: "Total rework," polygon class, click/hover animations; Jul 9: "gen 3 preview," "all done"; Jul 25: "Added autopilot," "Transfer to object oriented navigator"; Jul 29: tablature hookup |
| `/Users/soney/Github/archived/heptatonic_demo` | github.com/nathanturczan/heptatonic_demo | 2021-07-09 (single commit, "add files") | same | 1 | One-shot demo, Jul 2021 (not yet inspected in depth) |
| `/Users/soney/Github/archived/drone` | github.com/chromatone/drone | — | — | 23 (all davay) | Unmodified reference clone of Chromatone Drone (see EJ doc) |
| `/Users/soney/Github/Tonalign` | (Tonalign) | **2021-06-28** "Initial commit" (Nathan) | active | — | **One repo, three names**: Scale Navigator MIDI VST (2021; Brady Boettcher from Jul 1, 2021, branch `bboettcher3/session_1`) → renamed **PitchSnap Jan 26, 2026** (c6ffd7d) → renamed **Tonalign Apr 6, 2026** (5dbe9ef). PitchSnap-era installers Jan 22–26, 2026 = the thesis's "shipped publicly in January 2026." Xcode archive `ScaleNavigatorMIDIVST - All 1-7-22` (Jan 7, 2022) proves 2022 builds under the old name |

Note on identities: "Seraphina Oney <soney@…>" and "nturczan-calarts" are Nathan's own local git identities (machine account / CalArts account).

## 2. Contributors — scale-navigator-dashboard (876 commits)

| Person | Commits | Active window | What the log shows |
|---|---|---|---|
| Nathan Turczan (all identities) | ~410 | 2021-07 → present | — |
| **Max Fishman** | 103 | **2025-10-24 → 2025-11-04** | Intense 10-day sprint: Firestore security lockdown (removed public key, rules rewrite), Google Sign-In integration, forgot-password flow, ensemble messaging with threaded replies, realtime polygon/room fixes, member counts. "Add Max to About section" Nov 3, 2025 |
| **Ondřej Sedláček** (rudytak) | 64 | **2021-08-08 → 2022-10-21** | Navigator/visualization; **"breadcrumbs added" 2022-01-22**, merged via **PR #128 "visualization-fixes-v2" 2022-01-24** (matches PayPal receipts range Jul 2021–Oct 2022 exactly) |
| **Nate Ben** (netanelbeny + mtr574) | 47 | netanelbeny **2021-08-31 → 2021-11-16**; mtr574 **2022-09-02 → 2022-10-27** | Two stints; the 2022 window coincides with the Android app screenshots (Oct 2022) |
| **Scott Devereux** | 45 | 2021-09-27 → 2021-10-20 | Not in shipped credits list — check with Nathan |
| **Michael Maurer** | 38 | **2021-08-19 → 2021-11-14** | Built the React tablature suite (banjo/ukulele/mandolin/guitar/flute/piano/autoharp, Aug 19–23), notation ("Add notation" Aug 21, crash fixes), workspace ("Basic workspace" Aug 23), made the p5 navigator "more Reacty" (Aug 20), **first MIDI output feature (Nov 11–14, PRs #122/#124)** |
| **Nathan Ho** | 29 | 2021-08-13 → 2021-09-14 | Committed code in the React repo (beyond the Venn7 credit) |
| **Carter Fulcher** | 27 | 2021-08-09 → 2021-09-08 | Not in shipped credits — check |
| **Youssef Selkani** | 14 | 2021-08-11 → 2021-08-13 | Not in shipped credits — check |
| **Mexson Fernandes** | 11 | 2022-08-05 → 2022-09-24 | Not in shipped credits — check |
| **Saad Tariq** (HakunaMatata5151) | 4 | 2022-10-16 → 2022-10-29 | Not in shipped credits — check |

Vanilla-repo cameos: **Brady Boettcher** "adds cloud functions to project" **2021-07-28** (branch `bboettcher3/session_10` — the $45/session model visible in a branch name; Brady predates Tonalign here); rudytak 3 commits (incl. "Finished autopilot" Jul 25).

## 3. Feature dating (consolidated)

| Feature | Sketch/spec evidence | First shipped | Later evolution | Confidence |
|---|---|---|---|---|
| **Navigator animation** (hover-to-preview children, migration) | Post-it note `messages_0 (1).jpeg` (file saved 2021-08-24; drawn earlier) | pressing_scale_navigator sprint Jul 6–30, 2021 (rudytak); "gen 3 preview" Jul 9 | Merged into React app; rudytak in dashboard repo from Aug 8, 2021 | High |
| **MIDI output (multiple, routable)** | **Pen wireframes `PXL_20211112_211456038.jpg` + `PXL_20211112_211741878.jpg` — Nov 12, 2021, 9:14/9:17 PM** | **Nov 11–14, 2021**: Maurer "Add midi output feature to chords pane" (7d478729d, PR #122) → "Make midi persist, add channel / type, and allow for multiple midi outputs" (f8fc7a941, PR #124). **Sketch-to-ship: 48 hours** | **Nov 1, 2025**: "MIDI routing refactor: dynamic output mapping, octave shift fix, Ableton channel alignment" (d791cff46; 619 insertions across Chord.js/Midi.js/MidiOutputSettings.js/MidiPersist.js) + "fix(midi): restore full scale data lookup for MIDI outputs (pitch classes, root, class, **video index**)" (33f004afb) — the sketch's source list, restored 4 years later. Matches Nathan's Scotland Nov-2025 memory | High |
| **Breadcrumb trail** | `breadcrumb_trail.png` Jul 27, 2021 (heat-fade concept) | **Jan 22, 2022** rudytak "breadcrumbs added" (a402f3951); merged **Jan 24, 2022** PR #128 | Shipped without heat-fade (per Nathan); sketch→ship ≈ 6 months | High |
| **Notepad → Score** | Notepad wireframes `New Project*.png` Aug 20, 2021 | **Feb 14, 2026** "Add Chord History feature with export capabilities" (a38772fcd) → renamed "**Score** workspace" Feb 15, 2026 (91dfe5506) | Sync to ensemble Mar 4, 2026. **Sketch→ship: 4.5 years** | High |
| **Sketchpad** | — | **Mar 13, 2026** "Sketchpad MVP: Save and recall harmonic states from 2D graph" (b9f8cc567, PR #341) | Polish through Jun 2026 (plugin rehydration) | High |
| **Tablature (React)** | vanilla-era tabs existed by Jul 2021 ("add tabs" Jul 19) | Maurer Aug 19–23, 2021 (banjo Aug 20 — **so the banjo tablature in the "vanilla" screenshots was vanilla-era Nathan's; Maurer's React banjo came 3 weeks after the screenshots**) | guitarOpenG/DropD + transposition counters Nov 5, 2025 | High |
| **Autopilot** | — | rudytak "Added autopilot" Jul 25, 2021 (pressing_scale_navigator) + "Finished autopilot" Jul 25 (ensemble repo) | BPM sync improvements Jan 2026 | High |
| **3D network view** | — | vanilla era: `3d.html`/`3d.js` (mtime Jul 19, 2021; dataset3d.json Feb 25, 2021) | React 3D visualization, colors/opacity Jan 2026 | Medium-high |
| **Notation** | vanilla: VexFlow + lilypond.js from Jan 2021 | Maurer "Add notation" Aug 21, 2021 (React) | "fix vexflow notation for chords" + grand-staff brace Nov 7, 2025 | High |
| **Ensemble/cloud functions** | — | Brady Boettcher Jul 28, 2021 (vanilla repo) | BLE hosting iOS 1.0.7 Jun 23, 2026 | High |
| **Scale Awareness Bridge / Ableton** | — | Jan 10, 2026: "Add Ableton Scale Awareness MIDI output type," "+12 offset," "Add Scale Navigator Bridge Max for Live device"; Ableton Link (experimental) Jan 9, 2026 | — | High |

## 4. Artifact dates confirmed by metadata (kMDItemWhereFroms / birth)

| Artifact | Path | Date | Source |
|---|---|---|---|
| 4 vanilla-era phone screenshots | `Old Scale Navigator Development/2258…/2259…/2218…/2247…_n.png` | **Downloaded Aug 2, 2021** (11:25 + 11:41 AM); fbcdn URLs + referrer facebook.com in kMDItemWhereFroms | Facebook (Messenger thread); depict the app at the vanilla→React handoff |
| Navigator Post-it | `Old Scale Navigator Development/messages_0 (1).jpeg` | Saved **Aug 24, 2021** (drawn earlier; Ondřej's animation sprint began Jul 6) | Messenger-style export filename |
| MIDI-output pen wireframes (2) | `Old Scale Navigator Development/PXL_20211112_211456038.jpg`, `PXL_20211112_211741878.jpg` | **Nov 12, 2021** 9:14/9:17 PM (Pixel camera) | Resolves the "PXL_20211112 = podium?" question: NO — they're the MIDI wireframes |

## 5. Uncatalogued artifacts spotted in `Old Scale Navigator Development/` (dated, not yet reviewed)

| File | Date | Guess (unverified) |
|---|---|---|
| `IMG_20210726_140044.png` | Jul 26, 2021 | Phone screenshot, Ondřej-sprint week |
| `plugin_webapp_diagram.png` | **Aug 1, 2021** | Architecture diagram — plugin/webapp split imagined in 2021(!) |
| `scalenav_round1.pdf` (+ copy Aug 10) | Aug 2, 2021 | Jason Gardinier logo round 1 |
| `Frame.png` | Aug 11, 2021 | ? |
| `desktop.png` | Aug 17, 2021 | Desktop layout mockup? |
| `scale-navigator.png` | Aug 25, 2021 | ? |
| `Screen Shot 2021-08-27…` (2) | Aug 27, 2021 | App state during Maurer workspace era |
| `scale navigator - chords.png`, `- ensemble - logged in/out.png`, `pdf*.png` | Aug 30, 2021 | Freeman pink/purple mockup round (already partly catalogued) |
| `Screenshot_20210928-091351/-091403.png` | Sep 28, 2021 | Android-format screenshots — app on a phone, Sep 2021 |
| `scaleNav_icon*.png/.psd`, `512x512*.png`, `Untitled-1.psd`, `Vector 17.png`, `New Project (3).png`, `scale-navigator (1)(2).png` | Sep 29, 2021 | App-icon design session (PSDs = working files) |
| `_icon (4).png` | Oct 1, 2021 | Icon finalist |
| `logo.png`, `logo2-01/-02.png` | Jan 11, 2022 | Logo iteration round 2 |
| `frame copy.png` | Jan 20, 2022 | ? |
| **`Screen Shot 2022-01-27 at 10.21.00 PM.png`** | **Jan 27, 2022** | **3 days after PR #128 — may show the shipped breadcrumbs** |
| `274537107…_n.jpg` | Feb 28, 2022 | Another FB-CDN download |
| **`plugin_1.png`, `plugin2.png`** | **Feb 24, 2022** | **Early plugin UI — 4 years before the shipped plugin** |
| `Screen Shot 2022-02-26 / 02-28` | Feb 2022 | ? |
| `scalenav_midivst_local.png`, `scalenav_midivst_network.png` | **Jul 22, 2022** | **IDENTIFIED (Nathan, this session)**: aspirational UI mockups for Scale Navigator MIDI VST (= pre-PitchSnap Tonalign) — "what I hoped the Tonalign back in the day could have become." Navigator/57-network inside the plugin, input→mapping→output keyboard flow, enharmonic drift toggle. Catalogued in `TONALIGN_REWRITE.md` §1b |
| `New Project (6).png` | Dec 24, 2025 | ? |
| `New Project (7)–(11).png` | Jan 7, 2026 | Leone/Lily redesign era mockups? |
| `WhatsApp Image 2026-01-08/22/26/27…` (13 files) | Jan 2026 | Redesign-era exchanges (Leone Ermer / Lily Clark?) |
| `Screenshot 2026-02-09/10/11…` (24 files) | Feb 2026 | Current-era captures |

## 6. Open questions FOR NATHAN (evidence-first phrasing)

1. ~~**Chord MIDI, 2021 vs 2025**~~ — **RESOLVED (Nathan + Gmail, 2026-07-05)**: "the only MIDI output that ever functioned properly was the scale MIDI." Full documentary chain:
   - Nov 11–14, 2021: Maurer ships chords-pane MIDI *UI* (PRs #121/#122/#125). His own Nov 12 PR comment: "One thing I forgot to do is make the midi sending persist if you change tabs (like the Chord). i'll address this."
   - Nov 16, 2021: Nathan email "Last MIDI issue!"
   - **Aug 17, 2022**: Nathan emails Maurer offering **$100/hr** to finish chord MIDI → Ableton (attachment `Screen Shot 2022-08-17 at 12.16.46 PM.png`). Maurer swamped, offers a friend.
   - Aug 19–30, 2022: **Ethan Starcher** (they/them, ethanstarcher@hotmail.com) intro'd; one Zoom Aug 22; contract sent Aug 25 ("finishing the MIDI output feature"); **ghosted** after Aug 30 follow-up (confirmed by Nathan).
   - **Nov 1, 2025**: Nathan fixes it himself, vibecoding with ChatGPT — the "MIDI routing setup" conversation (213 messages, same day as commits `39bcb8c5` "MIDI routing refactor" + `9f43e5f4` "restore full scale data lookup"). **The broken-for-4-years feature was Nathan's first big solo vibecoding win.**
2. ~~**Uncredited contributors**~~ — **RESOLVED (Nathan, 2026-07-05)**: Scott Devereux, Carter Fulcher, Youssef Selkani, Mexson Fernandes, Saad Tariq were excluded from credits **on purpose**: "i worked with them but they were useless. not worth mentioning or remembering. i paid good money for nothing in return." **Rule for all case studies: never name them; keep to credited collaborators only.** (If the hiring story is ever told, it's anonymous: "not every contractor worked out.")
3. **`plugin_webapp_diagram.png` (Aug 1, 2021)** and **`plugin_1/plugin2.png` (Feb 24, 2022)**: is this the Dashboard *plugin* being designed 4 years before it shipped? — **Strongly corroborated by Figma (§10.1)**: the 2021 file contains a full 1600×900 frame **"scale navigator VST - Local Interface" (505:1940)** with the in→Mapping→out keyboard flow, Enharmonic Drift checkbox, and Local/Network toggle. The plugin was being *designed* in Aug 2021. Remaining for Nathan: confirm the PNGs are exports/precursors of this frame.
4. Nate Ben = netanelbeny AND mtr574 (two accounts)? — **Mostly answered by email (§7.7)**: mtr574's Sep–Oct 2022 window = Netanel's responsive-navigator/css stint ($610 paid Oct 11, 2022). First stint also now characterized: the Sep 2021 thread (incl. the Sep 16, 2021 Figma-handoff email, §10.1) shows React front-end pair programming — InfoBox/NavBar layout and padding.
5. ~~**Lily Clark redesign artifacts**~~ — **Mostly RESOLVED (Figma + WhatsApp transcript, 2026-07-05, §10.2–10.3)**: the redesign trail = WhatsApp crit loop Dec 21, 2025 – Jan 7, 2026 (Grilli Type monospace, remove black strokes / uniform stroke width, yellow→gray accent, "hexagonal logo could be sick", "you're 99% there") + Figma file `hrEW0uBnuPfPhjjndbivWY` (invite Jan 1, 2026). **Leone = the nathanturczan.com website overhaul (Dec 2025), not the Scale Navigator redesign.** Remaining: caption the `WhatsApp Image 2026-01-*` files and `New Project (7)–(11).png` against this timeline (5-minute session).
6. **Feb 17, 2026 $180 payment to Nathan Ho** (§7.10) — what was it for? (Plugin-era SNaPS work? Check the full PayPal receipt note.)

## 7. Email evidence (Gmail sweeps, 2026-07-05; tool: `~/scripts/gmail-check.py`)

### 7.1 Ondřej Sedláček — PayPal-dated work log (his entire engagement, itemized)

Contract: **Jul 9, 2021** "Scale Navigator Web App - NDA and Contractor Agreement" — "I've really liked working with you, you're an excellent programmer and very professional." Same day as the Messenger "I LOVE Ondrej." Revised Jul 20 (rate per task), countersigned + repo access Jul 23, 2021 (= dashboard repo's first commit day).

| PayPal date | Amount | Nathan's payment note |
|---|---|---|
| Jul 9, 2021 | Kč1,045 + Kč627 | "scale navigator a…" (first payments, pressing_scale_navigator sprint) |
| Jul 27, 2021 | Kč624 | "adding autopilot" |
| Jul 30, 2021 | $80 | "Rearranging, gettin…" |
| Aug 8, 2021 | $60 + $30 | **"port to react - tha…"** (dates the React port payment) |
| Aug 16, 2021 | $140 | "6 hour…" |
| Aug 24, 2021 | $110 | "THANK …" |
| Aug 29, 2021 | $50 | "Font, b…" |
| Sep 3, 2021 | $30 | "Autopil…" |
| Sep 11, 2021 | $70 | "Sorry f…" |
| Sep 23, 2021 | $275 | "scale …" (sent as Scale Navigator, LLC) |
| Oct 21, 2022 | $60 | to **Kateřina Sedláčková** (final payment, matches rudytak's last commit Oct 21, 2022) |

Also: Aug 23, 2022 Ondřej emails containing raw SVG (785px…) — visualization work artifacts. **Mar 17, 2026** Nathan thank-you: "I quit my job a few months ago and I've been working full time on Scale Navigator, and the visualization you built is still at the core…"

### 7.2 Michael Maurer (previously filed; headline items)
$290 PayPal Nov 15, 2021 (4 hrs); W-9 via CPA Lorie Nicolas Apr 2022; 1-hr React consultation Apr 2023; Mar–Apr 2026 update thread ("I've actually been keeping tabs on scale navigator still, and still find it very unique").

### 7.3 Brady Boettcher
- **Form 1099-NEC sent Apr 19, 2022** ("Thanks again for your contribution to this project") — Brady paid via Venmo, entered in Scale Navigator LLC QuickBooks (CPA thread Apr 2022).
- **Feb 2026 reunion**: Brady invites Nathan to `StrangeLoopsAudio/grainbow2` (Feb 9); "Nate + Brady musictech catchup" Google Meet Mon Feb 9, 2026; Nathan sends "gRainbow2 Build txt & Scale Nav plugin installers" Feb 10–11, 2026 ("gRainbow2 is up and running on my machine! See attached for a txt document that outlines everything my ai agent did to get it building"). Collaboration is alive and reciprocal in 2026.

### 7.4 Arthur Carabott — outside design crit, Aug 2021 (Dashboard case-study beat)
Thread "Seeking Advice / Crit for Musical Harmony Software UI": Arthur (then at Output, arthur.carabott@output.com) replies Aug 8, 2021 ("really glad to hear you found the MUI work inspiring. I really like the concept of opening up harmony…"); Zoom crit call **Fri Aug 20, 2021, 5:30 PM PDT**. Bookend: Mar 18, 2026 Nathan thank-you ("thanks for your feedback on my Scale Navigator Dashboard project 5 years ago") → Apr 2, 2026 Arthur: "Congrats on shipping!"

### 7.5 Colin Honigman
Oct 1, 2021 "Feedback on Scale Navigator Web App and Landing Page?" → feedback call ~Tue Oct 5, 2021, 2 PM (Colin = Creative Technologist, VT Pro Design). Also 2019 NIME-era correspondence.

### 7.6 Dylan + Jono Freeman — the "UI team" era, Aug–Sep 2021 (STRONG Apple-JD evidence)

Thread chain "Scale Navigator Design" → "Scale Nav - UI priorities 8/24/2021" → "Scale Navigator UI notes - 09/02/2021":
- **Aug 9, 2021** — Jono Freeman (jono@jono.is): "This is super cool… I love the floating shapes/glowing dude. I was going to say, it'd be magical to…" (design-crit exchange on Nathan's concepts).
- **Aug 11, 2021** — Nathan: "Just wanted to share a quick attempt at a **lo-fi wireframe for Scale Navigator desktop**" — **Nathan's own wireframe, dated; almost certainly = `Frame.png` (Aug 11, 2021) in Old Scale Navigator Development** (§5).
- Aug 11–15, 2021 — typography direction rounds ("the header font for Direction 1… I still want to keep looking for something equally…"; "Glow Better font .otf").
- **Aug 25, 2021** — "UI priorities" email: praises the team's "login to access" screen; cites HEPTATONIC as chord-UI prior art; "I want to have a conversation about **mobile** (See attached image)."
- **Aug 27, 2021** — Nathan writes a verbatim mobile IA spec: "Rough Sketch for Mobile: Mobile Landing page is just logo, navigator, settings, and tabs. once the user clicks a tab: The tab becomes highlighted…" + "Ui meet" call with both Freemans (dylanafreeman@gmail.com, jono@jono.is).
- **Sep 2, 2021** — UI notes: "**Check / implement all comments in figma**" — Figma-based design workflow documented in 2021.
- **Sep 7, 2021** — $1,050 PayPal to Dylan Freeman (Scale Navigator, LLC) + another "Ui" meeting.
- Context: **Jono Freeman was a UI designer at Microsoft** (per Nathan's Apr 2022 referral email to Minmin Shi: "I recently worked with Jono Freeman, who was a UI designer…").
- The Freeman pink/purple mockups (`scale navigator - chords.png` etc., Aug 30, 2021, §5) fall exactly inside this thread's window.

**Why it matters**: this is Nathan *directing a design team* — writing priorities docs, making lo-fi wireframes, specifying mobile IA in words, managing Figma comments, paying real money — in 2021. Directly answers the Apple JD's "sketches → high-fidelity" and design-leadership asks.

### 7.7 Nate Ben = Netanel Ben(yoram), netanelbeny@gmail.com
- **Oct 2022 stint confirmed = the responsive-navigator work**: "Hi! 😎 css help?" thread Oct 11–27, 2022 — dynamic/reactive navigator sizing, Safari/iOS breakage, workspace-container overflow — matching the `mtr574` commit window (Sep 2 – Oct 27, 2022) exactly. **$610 PayPal to "Netanel Benyoram" Oct 11, 2022** ("navi…"). Effectively answers §6 Q4: mtr574 = Netanel's second stint.
- NDA/Contractor Agreement thread exists ("Scale Navigator - NDA and Contractor Agreement"; his Dec 24, 2023 reply looking for work).
- Mar 24, 2023: Nathan email "MIDI routing React-Native help"; Apr 2023: "1 hr consultation?" → 1-hr Zoom on "a particular react problem from scale navigator."
- 2024 GitHub housekeeping by Nate: closes Issues #114/#136/#142 May 4, 2024; **closes PR #125 "MIDI Stuff :)" Aug 3, 2024** — the Maurer-era chord-MIDI PR finally closed unmerged, more evidence for the §6.1 chain.

### 7.8 Lily Clark — negative email result (redesign lives elsewhere)
No Scale Navigator email trail. Lily Clark = **family** (married Lachlan Turczan; "Lily & Lachlan's Wedding" threads 2025–26; artist — "Lily Clark & Taylor Kibby: There's a light somewhere" show, May 2026). The Jan 2026 "lily redesign" collaboration happened over WhatsApp — **confirmed: full transcript + Figma file now filed in §10.2–10.3**; the 13 `WhatsApp Image 2026-01-*` files in Old Scale Navigator Development (§5) are its artifacts.

### 7.9 Incidental: Apple "Music Creation Apps" interview, summer 2022
Recruiter Sherry Sharif thread Jun 15 – Jul 6, 2022: phone screen with Andy (Sr. Content Developer) Jun 16, 2022; technical tasks issued Jul 6, 2022. Context for the current application's "I've been circling Apple for years" thread — Nathan told Sherry about Logic sound-library content work. (Career context, not Scale Navigator evidence.)

### 7.10 Nathan Ho — PayPal-dated work log (SNaPS + Dashboard chord work, 2021–2026)

12 payments, all from "Scale Navigator, LLC" (~$1,703 total). Nathan (2026-07-05): "hope your also tracking all my payments to nathan ho over the years for SNAPS and other projects." The payment notes are a feature-level SNaPS dev log:

| PayPal date | Amount | Nathan's payment note |
|---|---|---|
| Aug 14, 2021 | $460 | "Scale Mav - Chord …" (chord work — Dashboard-era chord notation) |
| Aug 24, 2021 | $200 | "chord notation - …" |
| Sep 8, 2021 | $145 | "invoice #22" |
| Dec 12, 2021 | $120 | "SNaPS update" (≈ the srcID PR #17 window, Dec 13, 2021) |
| Aug 16, 2022 | $60 | "snaps - pan" |
| Oct 29, 2022 | $70 | "SNaPS development -…" |
| Nov 3, 2022 | $200 | "SNaPS alphanumeric…" |
| Nov 4, 2022 | $35 | "alphanum sort!!" |
| Nov 6, 2022 | $60 | "fix loopplayer" (SnapsLoopPlayer — loop support landed Feb–Mar 2022 in git) |
| Nov 11, 2022 | $60 | **"SNaPS: rhythm!!!!"** (Monrovia address on receipt) |
| Feb 22, 2023 | $113 | "latest rhythmic sn…" (rhythm work continues) |
| Feb 17, 2026 | $180 | **RESOLVED (§12.10)**: "SNAPS session - FEB 17, 2026, 2hrs +20$" — paid 2-hr pair-debugging session on the SuperCollider timer crash (transcript in `nathan_ho/`) |

**Why it matters**: (a) hard receipts for the SNaPS collaboration being a real, paid, multi-year engagement, complementing the nhthn/snaps git log; (b) the Aug 2021 "chord notation" payments show Ho also contributed to Dashboard-side chord work; (c) the Nov 2022 "rhythm!!!!" cluster dates a SNaPS rhythm-engine push that isn't yet in any case-study narrative; (d) Feb 17, 2026 payment shows the collaboration is still live in the plugin era. → Also filed in `SNAPS_REWRITE.md`.

## 8. Messenger evidence (Facebook export, `/Users/soney/Documents/Social Media Data/facebook-turczan-2025-01-10-sWSGEeM9`)

### 8.1 Seraphina Oney thread = dated design diary (2018–2024), key entries

> **Handling note (2026-07-05)**: this is an ex-partner thread (relationship ended 2024/2025). Use it strictly as a **dated diary source** — the timestamps and Nathan's own words are the evidence. Do not feature her as a character in any case-study narrative; no relationship color in public-facing text.

**Deep scan completed 2026-07-05** (3 message files, ~75 keyword hits mined with timestamps):

- **Nov 28–29, 2018 — the silent-score confusion, first recorded instance**: Nathan shares youtu.be/grc49x7XfB8; response: "I can't hear any sound? But it looks awesome and super clear and focused" → Nathan: "There is no sound, it's a score!!! For the ensemble." **Identical mental-model gap to Richard's May 2021 usability-test question ("it's not supposed to output sound, right?") — a recurring UX insight three years apart.** (→ cross-ref §8.6)
- Nov 30, 2018: thesis plan articulated — "3 chapters… 1 influences chapter, 1 chapter that will also be a NIME paper, 1 chapter that will also be a TENOR paper."
- **Jan 12, 2019: NIME paper DRAFT sent as PDF** (`NathanTurczanSNN_141511976736138.pdf`) — draft-in-progress with placeholder self-talk in the running text ("talk to colin and dexter about this???? maybe doesnt need to be a chapter"; "4. CONCLUSION — in which i conclude everything"; "UI design for scale nav–other thoughts?"). Contains Nathan Ho's chord-algorithm description (Bill Boyd *Jazz Chord Progressions* dataset + voice-leading fitness function), Network Impressions (premiered **Dec 1, 2018**, Chordas, 16 scales), INTERSTICES (Dec 6, 2018), and full Modal Intersections description. §3.3 Issues in the draft: "sight reading is hard. The sight-reader's attention must not be diverted." **Saved to `images/_recovered_cache/nime_paper_draft_jan12_2019.pdf`.**
- **Jan 23, 2019, 6:24–6:42pm**: live copyediting of the paper — the sentence "The Scale Navigator has proven to aid composers during the pre-compositional phase of writing music" iterated through ~6 versions in chat; LaTeX fragments of Network Impressions pasted (SATB, premiered December 1st 2018, Chordas, "toetoba corpus of english sentences").
- **Mar 20, 2019, 11:09pm: NIME peer reviews pasted verbatim** — positive: "All in all, I think the system is interesting enough to be presented at NIME, especially as a demo"; **usability criticism that prefigures years of design work**: "the conductor (presumably the author) repeatedly changes scales in the Navigator so quickly that no human can possibly keep up with it. If there were any trust in the system on the part of the musicians before, this is sure to greatly diminish it"; harsh reviewer: "besides a very small contribution in providing a novel visualisation for Tymoczko's key space, it does not present any added value to the existing literature"; "R4 was disappointed by the quality of the improvised musical performance." **The "too fast for humans" trust criticism connects directly forward to autopilot BPM / smoothness controls.**
- Apr 7, 2019: r/musictheory post link shared (dates the Reddit post); Apr 10, 2019: "forgot that finalized paper was due at midnight tonight" (camera-ready deadline).
- Jun 12, 2019: "Been working on this old clarinet orchestral sound with the scale navigator… Did you see my previous insta TV mashup?"
- Jan 3, 2020: "Chrome removed midi functionality :("
- **Jul 21, 2020 — the Figma "hobbyist" moment**: asked by a recruiter if he can use Figma → Nathan: "Ah, no… Which I can't… I guess I am more of a hobbyist :(" + links `nathanturczan.com/apps/scale_navigator_HEPTATONIC/index` ("Which was the subject of my thesis… As a means to an end to create a music education tool"). **Arc: couldn't use Figma in July 2020 → directing a Figma design team by late 2021.**
- Mar 22, 2021: solfeg.io shared and compared ("Similar to Scale Navigator education but more basic?") — informal competitive scan.
- **May 11, 2021, 9:35pm**: scale-navigator-ensemble.web.app shared — 8 days before the Richard usability test (§8.6).
- **Jul 1, 2021**: "Yay! Just finished up my pair programming session with Brady, he's awesome"
- **Jul 9, 2021**: 9:46 AM "I LOVE Ondrej"; **3:46:15 PM: "I've also been looking into UI designers to help make the Scale Navigator Ensemble workspace feel more slick"** — a month before the Freeman outreach; 3:46:40 muz.li "excellent dashboards" gallery; gallery picks in reply: "dashboard_dark… **and the pink/purple one**… and the RoboAdvisor_Dash… I also like Pastel Projects" (Nathan: "i liked the robo one too") — **the pink/purple gallery pick presages the Freemans' pink/purple design round**; 3:55:16 "ok. This is the kind of redesign I want to do for Scale Navigator Ensemble." Same day: "Once I'm finished with the projects with Brady and Ondrej, I am going to apply to ALL of these [artist residencies]."
- Jul 12, 2021: "now im reaching out to people for help re: latest plugin hurdle… just had a quick meeting with a web student."
- Aug 2, 2021 11:41 AM: the four vanilla screenshots sent (matches CDN download metadata exactly)
- Aug 14, 2021: shares `github.com/nathanturczan/scale-navigator-dashboard/issues/14` — GitHub-issues-driven workflow visible mid-2021.
- Sep 30 + Oct 1, 2021: shares `facebook.com/scalenavigator` — FB page live during the advice-tour week (§8.6).
- **Jan 7, 2022**: Shopify **product page live** — `scale-navigator.myshopify.com/products/scale-navigator-midi-vst` + "My goal is to have this plugin up on the store by 3" — matches the Jan 7, 2022 Xcode archive. (The Jan 19 date elsewhere = announcement/launch push; the page itself was up Jan 7.)
- Jan 19, 2022: "Spencer's advice gave me the idea to use scale navigator to start scoring memes!!! On tiktok"
- Mar 4, 2022: Thor Magnusson (Sussex) profile shared — "He presented at NIME!"
- Thread `files/` also holds `OPUS1_*.pdf`, `theotherone_*.pdf`, 3 WDI CalArts cover letters (unexamined; likely not case-study relevant).

### 8.2 Podium provenance
Marketplace thread `nathanpodium_3634724099886554`: bought **Sep 12, 2019** from PB Swanson, Neighborhood Christian Fellowship church, 18821 E Arrow Hwy, Covina (left on porch, payment under welcome mat). Listing photo in the thread's `photos/` dir.

### 8.3 Brady Boettcher thread (276KB — the MIDI VST / Tonalign development diary, 2021–2023)

- **Jul 8, 2021**: "Scale Navigator - VST dev session 3" — the pair-programming sessions have names and dates in chat, matching the `bboettcher3/session_N` branch names in the Tonalign repo.
- Jul 12, 2021: the MIDI-in/MIDI-out VST DAW-support problem surfaces; idea floated to embed in a Max device.
- Jul 21–22, 2021: JUCE MouseListener debugging; `github.com/nathanturczan/ScaleNavigatorVST/blob/main/todo.md` — a todo.md-driven workflow in 2021.
- **Jul 25, 2021**: Nathan poses the core design problem: "when correcting notes, if 2 notes are corrected to the same midi note, how to handle that case" — the collision question that's still Tonalign's "overlapping corrections" open problem in 2026.
- **Jul 28, 2021**: cloud-functions day (matches Brady's same-day commit) + Nathan: "lol I have a crazy idea, what if we embed a WebBrowserComponent in the plugin" — **prefigures the shipped webview plugin architecture by ~4 years**.
- Jul 29, 2021: Ableton crash triage via plugin host ("The trigger was caused by MIDI throughput").
- **Aug 3, 2021**: Apple notarization pain: "I'm surprised that I can't even share a beta version of this plugin with a friend."
- Aug 5, 2021: "I'm writing out requirements for how I imagine this sprint to go" — Nathan writing sprint specs in 2021.
- Aug 11, 2021: "Been working with a UI designer… do you think this is within the realm of possibility for juice and C++?" — the Freeman-era designs being feasibility-checked with the engineer.
- Sep 30, 2021: re-engagement — "raise some more money and get the MIDI VST to a minimum level of functionality."
- Dec 24, 2021: "I broke the plugin… crashes ableton."
- Jan 5, 2022: the Swune track — "the scalenavigator track that im most proud of."
- **Jan 6–7, 2022**: Shopify launch-day play-by-play (NIME paper links, JUCE URL docs, scale-navigator.myshopify.com/products/scale-navigator-midi-vst) — corroborates §8.1's Jan 7 entry and the Jan 7 Xcode archive.
- Jan 7, 2022: Brady offers plugin GUI redesign; Nathan: "I've got a couple UI designers that I worked with for the web app."
- Jan 10–13, 2022: LinnStrument re-highlighting branch; Brady: "Pretty nuts that nobody has tried to make an interface for this type of scale navigation before I found nothing in the papers that cite tymoczkos."
- Jan 13, 2022: "Super early / low production value demo of Scale Nav midi VST" + "The web app is also sending midi to supercollider… ambient drone samples" (Dashboard→SuperCollider→SNaPS pipeline live in early 2022).
- Feb 1–2, 2022: Brady submits **2 NIME papers** ("MIDI dataset analysis to see how scales are typically navigated").
- Jun 15–20, 2022: Brady evangelizing scalenav to Ableton people in Berlin.
- Jul 3, 2023: Brady offers cross-platform builds; Aug 18, 2023: Brady proposes his own "Scale Weaver" interface.

→ Tonalign-specific items also filed in `TONALIGN_REWRITE.md`.

### 8.4 Colin Honigman + Dexter Shepherd threads (2018–2019, pre-history)
- Colin: **Nov 5, 2018** Nathan shares the MIDI client page (github nathanturczan/client); **Jan 15, 2019**: "really built out the chordal functionality."
- Dexter: **Oct 31, 2018** sends Nathan the Google MAESTRO dataset link; **May 4, 2019** shares his own track "rosehead/walking-the-scale-navigator" on SoundCloud — third-party music made *with* Scale Navigator in 2019.
- **Dexter thread deep-mine (2026-07-05)** — the 2018 origins, dated to the minute:
  - **Oct 4, 2018, 4:27–4:39pm — pair-programming session**: Dexter posts a test deploy (`phobic-orange.surge.sh`, "click it") and a refactor gist — "crawlPoints and calculatePoints are the important part," "I refactored the main recursive thing. We can go over it next week." Gist **still live** (gist.github.com/DexterShepherd/fef32d0a288ae1b420639f331395fc32): 401-line p5.js `sketch.js`, `curr_scale = "c_diatonic"`, keyboard event handlers — **copy saved to `images/_recovered_cache/dextershepherd_gist_sketch_refactor_oct04_2018.js`**. Dexter: "I didn't touch any of the keyboard stuff so we still need to dig into that" (keyboard era, in code). Nathan: "This shit is dope af… I'm gonna be working on this all night." Also a recursion tutorial moment: "Why is it useful to flatten?" → nested-array explanation.
  - **Oct 26, 2018 — earliest known video documentation**: Nathan sends "Rough cut of the documentation," **vimeo.com/297374703/d64205d271, title "Modal_Intersections_V1" — STILL LIVE in 2026**. Nathan: "Sound is bad though :("; Dexter: "This looks really nice… Looks like your new site is up btw."
  - **Jan 15, 2019**: "yo check it, I've really built out the chordal functionality of the scale navigator" + `nathanturczan.com/visualizer/index.html` — same-day as the Colin message; dates the chord layer and the `/visualizer` URL.
  - **Apr 18, 2019**: Dexter recommends Glitch over Heroku for the node server — hosting deliberations, pre-NIME.
  - **May 4–5, 2019**: "just reading through all your chord code. That stuff is rad… I'm going to try to implement some chuck entry point for it"; "I need to implement your voice leading stuff at some point" — first outside developer reading the code, planning a ChucK port. SoundCloud track **still live**.
  - Thread photo folder: one image (3D-print joke), not relevant.

### 8.5 Dylan + Jono Freeman threads (small; kickoff only — the work moved to email/Figma, §7.6)
- **Aug 5, 2021** — Nathan to Dylan: "Hey Dylan, this is Nathan. I reached out to you and your brother about doing some UI design for this music harmony software suite I'm working on" — the UI-team engagement's opening line, dated.
- Aug 6, 2021 — **Nathan** (attribution corrected 2026-07-05; full thread re-read): "I think the YouTube videos I sent over in the email will also illustrate just a slice of the kind of music it's possible to create with Scale Navigator" — the pitch went out by email with YouTube demos. Jono: "do you want to quickly chat with Dylan and I at some point between 3 and 3:30PST, we have a bit to show" — first design review call, **Aug 6, 2021**, one day into the engagement.
- Full dylanalexanderfreeman thread (re-read 2026-07-05, complete): Aug 5, 3:31pm Dylan — "Hey man!! Yes absolutely on board. Have a big project thats wrapping today but I'm hopping on the phone with jono this evening for him to bring me up to speed" (Jono = Dylan's brother, first contact point); Aug 6, 10:26am — "We had a good talk about it last night and are about to get cracking on it! We will check in with you EOD :)". No photos in this thread.

### 8.6 Perry Cook + Parag Mital + Richard Dickyan threads (mined 2026-07-05)

**Richard Dickyan (`inbox/richarddickyan_10156969608384152`) — ChucK precursors + a 2021 remote usability test:**
- **Nov 2017 — the earliest recovered code in the lineage**: Nathan sends Richard ChucK source files for a **19-note just-intonation MIDI-knob instrument** (ratio table 1/1, 25/24, 15/14 … 2/1; Rhodey + PulseOsc/Echo soundchains; knobs mapped to subdivision/waveform/gain). Nov 3: Richard "damnnnn that works really well" / Nathan "I have a lot more plans for this… gonna add a ton more knobs haha." Nov 4, 3:27am: Nathan — "Here comes the harmony!!! have fun with your 3 knobs." **Nathan's three `.ck` files saved** to `images/_recovered_cache/` (see §11.1); Richard's own files in the thread's `files/` folder deliberately NOT copied to this public repo.
- **Apr 30, 2018**: Richard, listing topics to discuss: "you said interface design sucks?" — Nathan complaining about the interface at project start; also "us co-teaching an algorithmic composition class would be really fun."
- **May 19, 2021, 3:14–3:32pm — remote usability test of the ensemble app**: Nathan walks Richard through `scale-navigator-ensemble.web.app` ("about to go live") — live host/join walkthrough (ensemble "Kronos"; "there can be only 1 host"). Richard's probe: "it's not supposed to output sound, right?" (confirming the silent-controller mental model needed explaining). Feature elicitation in-session: Richard — "could you do clarinet in the same way you did flute?" → Nathan commits to clarinet fingerings on the spot. Context: plans for a "MASSIVE improvised music event" / weekly improv sessions. **This is a dated, recoverable usability-test transcript from the vanilla era — cross-reference for the Ensemble Jammer case study too.**

**Perry Cook (`inbox/perrycook_10102234325216162`) + Parag Mital (`inbox/paragkmital_10104768265499624`) — the Oct 2021 advice tour:**
- **Oct 1, 2021, same morning** — identical MVP pitch sent to Perry (10:16am) and Parag (11:12am): `scale-navigator-dashboard.vercel.app` + `scalenavigator.com`, tagline "Chords suggest new scales, scales suggest new chords." Ensemble copy verbatim: "a host can control the current scale for all members… Keeps everyone harmonically synchronized over a constantly modulating scale progression." Nathan also linked his improv video (**youtu.be/f-xj-TuUaUU, "Scale Navigator: Improv 2021-04-18 @ 12:44pm" — still live**).
- Perry Cook's read: "This sorta feels like something EDM folks could use live… make a song or two pretty much live in the app." Nathan on business model, Oct 2021: "I want to monetize, but vaguely."
- Colin call scheduled Oct 5 — Perry/Parag/Colin in one week = a deliberate **advisor tour** of the freshly-Reactified Dashboard, five weeks after the Arthur Carabott crit.
- **Parag, earlier**: **Nov 9, 2018** — Nathan sends the YouTube "Modal Intersections" documentation (**youtu.be/dmfJexDdbV0 — still live**); Parag: "Genius… Looks so incredible." **Apr 7–8, 2019**: "Parag, I have been accepted to NIME with my scale network paper!" + the r/musictheory launch post (`reddit.com/r/musictheory/comments/balblt`, liveness unverified — Reddit blocks bots); Parag: "Congrats man!!! It's excellent work can't wait to read the paper"; Nathan: "still need to get it up and running on browsers other than Chrome 😅."
- **Oct 6, 2021**: Parag — "wow man!… so impressive." **Jan 11, 2022** (launch week): Nathan sends the Instagram demo `instagram.com/tv/CYm6W7HMwrL`.

### 8.7 McLean Macionis thread (`inbox/mcleanmacionis_10155167270827065`, mined 2026-07-05) — CalArts cohort peer + NIME travel companion

- **Aug 3–9, 2017 — course selection, pre-CalArts**: Nathan: "Decided to take the intro to programming classes and the web dev class **even though they will be very similar in content to the coursera/kadenze online classes**" (evidence of pre-CalArts self-teaching); also eyeing "Algorithmic Practices I (ATEK-635-01)" and Composition for Robots (McLean: "I'm eager to hear how Composition for Robots goes"). **Attribution note: the "Interface Design (MTEC-630-01)" plans in this exchange are McLean's list, NOT Nathan's — do not claim Nathan took Interface Design.**
- Nov 6, 2017: robot-jam planning ("Do you have any synths or drum machines with MIDI in?… we should bring in our own robots") — Machine-Orchestra-era color, same month as the ChucK JI instruments (§8.6).
- Jun 25, 2018: "this chord progression is really cool… check it" + audio clips — mid-2018 chord-progression sharing.
- **Apr 6, 2019**: Nathan sends `traveltoNIMEbudgetSheet1_811966855852040.pdf` — a **self-made NIME travel budget spreadsheet** (in thread `files/`; NOT copied to this public repo — personal finances; fact recorded here).
- **Apr 22–23, 2019 — self-funded NIME logistics**: "my ticket was only $808!"; "i have a 12 hour layover in colombia tho :("; "i arrive in porto alegre at 5:30 am on june 3rd, so i will probably go straight to the conference that day"; McLean: "I'm honestly pumped to travel with you!" — grad students self-funding their own conference run.
- **May 30, 2019, 10:02–10:06am — the NIME poster FedEx exchange**: McLean (who also had a NIME 2019 paper): "**NIME Poster 2019 - 24 x 36 in. I put my order in at FedEx yesterday (Wednesday) and they had it ready by 9am this morning (Thursday)**" + photo; Nathan: "You had it printed at Kinko's?" → McLean: "FedEx Office"; Nathan: "Did you leave a lot out? From your paper" → "Yeah I left out most of it. I just included the stuff I thought people might be interested in" — peer poster-production logistics + editorial philosophy, one week before flying. (Nathan's own poster files: the Dropbox placeholders he still owes hydration on.)
- Jun 3–4, 2019: on the ground in Porto Alegre — restaurant planning around conference sessions.
- Sep 13, 2019: "I'll see you on Friday for **Chordas**" — McLean sang in the ensemble that premiered Network Impressions (Dec 1, 2018).
- **Apr 4, 2021, 4:41:59pm**: Nathan shares `scale-navigator-ensemble.web.app` — ~~the earliest known share of the ensemble web app~~ **SUPERSEDED (2026-07-05): the Tanner Pfeiffer thread has a Feb 27, 2021 share (§8.8)** — still 5 weeks before the May 11 share and 6 weeks before the Richard usability test (May 19, §8.6).
- Thread `audio/` holds `NathanTurczanWagnerProgressionscopy_*.mid`, `Minimal_OrganProg_*.mid`, `minimalMIDI_guitProg_*.mid` — Wagner-progression / minimal-organ MIDI experiments (undated in-thread; not copied).

### 8.8 Tristan Whitehill (`inbox/stanybebe_10161433595844152`) + Tanner Pfeiffer (`inbox/tannerpfeiffer_10157282584779152`) threads (mined 2026-07-05)

**Tristan Whitehill (stanybebe) — an Aug 2021 cold outreach that dates the public vercel deploy:**
- **Aug 17, 2021, 10:50am — referral-driven cold outreach**: "after a conversation I had with Thomas Royal — he mentioned that you might be interested in collaborating" — Nathan reaching outward during the collaborator-wave summer, via a named referral (Thomas Royal). Phone call arranged for Aug 18.
- **Aug 18, 2021, 11:22am — three photos sent** (all recovered + saved, see §11.1): the **high-res per-pitch-class color-system diagram** (Example hexagon swatches + Main/Outline/BG1/BG2 rows — a cleaner copy of the Aug 17 Freeman diagram), the **pink/purple Freeman tablature mockup** ("SCALE NAVIGATOR DASHBOARD" wordmark, hexagon navigator left, tablature grid right — the pink/purple round in circulation as a pitch asset mid-August, five weeks before black/yellow won), and a **scanned voicing-range figure** ("For the best sound, the voicings should fall within the range indicated below" — likely Bill Boyd's *Jazz Chord Progressions*, the chord-algorithm source book from the NIME paper, §11.1 PDF).
- **Aug 18, 2021, 9:20pm**: "Just wanted to share a live version of the currently in-progress React web app:" + `scale-navigator-dashboard.vercel.app` — **dates the public vercel deploy of the React Dashboard to Aug 18, 2021**, less than four weeks after the repo's first commit (Jul 23) and six weeks before the Oct 1 advice tour used the same URL.
- **Jan 27, 2022 (launch month) — organic word-of-mouth**: Tristan: "i was talking about your stuff in the discord" + an invite to the FROGMOD Discord — unprompted community evangelism three weeks after launch.

**Tanner Pfeiffer — Chordas logistics + the new earliest ensemble-app share:**
- **Feb 27, 2021, 3:01:39pm**: Nathan shares `scale-navigator-ensemble.web.app` (preceded at 3:01:26pm by Instagram TV `instagram.com/tv/CLllTMpn-fx`) — **the earliest known share of the ensemble web app**, supersedes the Apr 4, 2021 McLean share (§8.7). Pins the ensemble app's public existence to **late February 2021** — before the `scale-navigator-ensemble` repo's own bulk import (Apr 21, 2021).
- **Aug 27, 2019, 5:01pm — the ArtShare LA tech rider** (show "tentatively october 4th" 2019), verbatim: "We require: •1 DI Box •House mixer with 7 available channels (can do 2 channels if absolutely necessary…)" / "We are able to provide but would prefer to have provided: •5 Shure SM58s or other high quality dynamic vocal mic •5 XLR-to-XLR cables •5 tripod boom mic stands" / "We will provide: •computer •USB Hub •**5 MIDI controllers**" — **5 vocal mics + 5 MIDI controllers = Chordas performing with the Scale Navigator system**, a production-logistics receipt for the live networked-performance practice two months after NIME. Same exchange: projections discussion ("do we want to do projections at artshare?"; Nathan owns a 45"×80" projector screen but no stand); same day, a CalArts Pool Performance Application (Qualtrics) and "Chloe has offered us $100 per 3hr rehearsal session at the rec."
- **Sep 16, 2020 — Chordas pandemic hiatus**: Nathan: "chordas hiatus is a bummer"; Tanner: "It's the 'us-ness' of the music making that I miss the most" — dates the ensemble's pandemic pause; also links to *The Just Man* cantata (youtu.be/hSv8xIPllFE; github.com/nathanturczan/The-Just-Man/blob/master/justman.pdf; #chordascollective).
- **Mar 13–15, 2019** — thesis-era research color: Nathan shares **Vochlea Dubler** (voice-to-MIDI; Tanner: "the MIDI input from actual sung voices could be put through to effect the playback of the sample libraries!") and the **Louvain community-detection method** (dataskeptic podcast) — graph-clustering reading while writing the scale-network thesis.
- Mar 4, 2018: Blackwood microtonal etudes + a 16-note-tuning YouTube shared (JI/microtonal thread continuing from the 2017 ChucK era, §8.6).
- Thread assets unexamined: `files/InBogsFeb18_10157673051984152.pdf`, 1 audio clip, 13 photos, 3 videos.

Collaborator/advisor threads mined to date: brady, colin, dexter, dylan, jono, perry, parag, richard, mclean, tristan (stanybebe), tanner (11).

## 9. ChatGPT export (Dropbox/Career, exported Jun 28, 2026) — the vibecoding era, dated

1,151 conversations, Feb 2023 → Jun 2026 (12 JSON files + chat.html + ~2,000 asset files). Nathan: "I believe the MIDI breakthroughs happened here… before I learned about Claude, so I worked on each code file individually with ChatGPT."

### 9.1 The Max Fishman arc (hired dev → vibecoding realization → Nathan takes over)
- **Aug 25, 2025**: Ajay recommends Max Fishman — first for Nathan's *day job* (FutureCare / Wave of Wellness); NDA signed Aug 27, 2025.
- **Oct 2025**: Max hired personally for Scale Navigator Dashboard sprints (Sprint 2 budget "up to $1,400"): Firebase sign-in/up, CSS/front-end, member counts, host-scale Firestore fix, ensemble URL naming (PRs #173–#189).
- Oct 16, 2025: Nathan "just landed in the UK" (Scotland trip start) — managing Max remotely via WhatsApp.
- **Oct 25–28, 2025: the FishmanBranchFinal crisis** — PR #175: **41 commits, +7,095,737 lines, 82,903 files changed**; commit messages "1," "first," "29," "vercel fixes"; revert waves ("Revert 'Vercel Fixes for Fishman Add Ons'"); Vercel accidentally connected to Max's fork. Nathan does the cleanup himself with ChatGPT: `test-deploy` branch, `chore/repo-cleanup`, `.env.production` DISABLE_ESLINT_PLUGIN, `.nvmrc` Node 22, and writes Max a commit-hygiene message ("fix: Google SSO / feat: sync host scale / chore: update node version. Please avoid large 'revert' waves.") — **the PM learns git hygiene by having to enforce it**.
- Nathan also adds "Add credit for Max Fishman in About.js" during his own cleanup.
- Nov 4, 2025: "Payment and sprint rules" conversation — engagement wraps (git shows Max's last commit Nov 4, 2025).

### 9.2 Vibecoding lineage (how Nathan got here)
- Apr 9, 2025: day-job AI recap ("Cinergy AI Tech Recap") introduces the term — Ari Supran: "vibe coding… speak to AI like a junior developer."
- **Jul 16, 2025: first personal vibecoding session** — "Vibe coding help": "help me with a bit of vibe coding for music. I have a folder called samples… contains its own folder of samples, and a json" (**= SNAPS Librarian territory**). Jul 20: "Vibe coding abjad music."
- Sep 15, 2025: Nathan quotes "$140/hr… I'll be using AI dev tools (e.g. Claude Code) to accelerate repetitive coding tasks" in a day-job contracting bid — aware of Claude Code before adopting it personally.
- **Oct 27 – Nov 1, 2025**: ChatGPT-vibecoding takeover of the Dashboard: "Vercel CRA deploy issue" (65 msgs, Oct 27) → "Chord note diffing update" (101, Oct 30) → "Fix host banner logic" (305, Oct 31) → **"MIDI routing setup" (213, Nov 1) = the MIDI breakthrough, same day as commit `39bcb8c5`**.
- Nov–Dec 2025 sprint titles map 1:1 onto git: "Fix undo granularity" (Nov 2), "Pivot modulation function" (Nov 3), "Tab transposition feature" (Nov 5 = guitarOpenG/DropD commits), "VexFlow chord alignment" (Nov 7), MIDI panic/stop/presets (Nov 19), **"Supercollider SNaPS project" (547 msgs, Nov 18)** + "SNaPS system context" (156, Nov 24), "Scale Navigator UX plan" / "Ensemble Jammer setup" (Dec 2), **"ScaleGraph3D breakdown" (Dec 6 = the 3D red-edge-trail commits Dec 6–7)**, "R&D Documentation for C-Corp" (Dec 23).
- Scotland corroboration inside the export: "Museum options Edinburgh" Oct 24, "Edinburgh event suggestions" Oct 31, "Isle of Skye itinerary" Nov 9, "Morning flight plan" Nov 11.
- **Jan 27, 2026: "Claude permissions fix"** — the ChatGPT→Claude transition moment; ChatGPT dev conversations thin out after Jan 2026 while commit velocity rises (Jan 2026 redesign, Score, Sketchpad all land post-transition).

## 10. Figma evidence (MCP mining + Nathan's screenshots + Lily WhatsApp transcript, 2026-07-05)

Account: nathanturczan@gmail.com, handle "nano", team **"Scale Navigator UI"** (the team name itself is an artifact — a Figma team created *for* this project). Caveats: the Figma MCP cannot read version history or per-layer authors, so authorship is inferred from invites, emails, and style; a **rate limit** ("View seat on the Professional plan") cut off screenshot calls partway — Nathan compensated with manual screenshots.

### 10.1 File `FFFxYSi1sgsfta1r26o3ZB` "Scale-Navigator" — the Freeman brothers' 2021 UI file

**Provenance receipt found in Gmail BEFORE Nathan sent the link**: Sep 16, 2021 email "scale navigator UI design" from Nathan to Netanel Ben containing `figma.com/file/FFFxYSi1sgsfta1r26o3ZB/Scale-Navigator?node-id=282%3A1231` — and node **282:1231 = the mobile-home frame**. That email is a dated **design→engineer handoff**: Nathan pointing his developer at a specific mobile artboard, three weeks after writing the mobile IA spec in words (§7.6, Aug 27, 2021).

Pages: `0:1` "Current" (mined), `153:1456` "Components" (unexplored — rate limit). Top-level frames on Current:

| Node | Frame | Size |
|---|---|---|
| 80:2 / 287:1819 | tablature (pink / black rounds) | 1600×900 |
| **505:1940** | **"scale navigator VST - Local Interface"** | 1600×900 |
| 145:90 | ensemble - logged out | 1600×900 |
| 209:909 / 287:1460 | chords (pink / black rounds) | 1600×900 |
| 231:855 / 287:1389 | about (pink / black) | 1600×900 |
| 206:793 / 287:1661 | ensemble - logged in (pink / black) | 1600×900 |
| 302:2152 | ensemble-current | 1600×900 |
| 271:941 / 287:1563 | login prompt (pink / black) | 1600×900 |
| 155:824 | tab-modules | 926×648 |
| 282:1231, 282:1862, 282:1931 | mobile-home | 375×812 |
| 282:2046 / 302:2085 | mobile-login / "mobile-login $$" | 375×812 |
| 282:1651 / 282:1524 | mobile-menu / mobile-tabs | 375×812 |

**Key findings (MCP screenshots + Nathan's full-canvas screenshot):**
- **Two complete design rounds coexist as parallel artboard sets**: the pink/purple round and the black/yellow round — confirmed by comparing 209:909 vs 287:1460 (identical chords layout, two skins). The design *iteration* is preserved in place, not overwritten.
- **The VST frame (505:1940)** — **DATING CORRECTED (2026-07-05, dylanandjono thread; see TONALIGN_REWRITE.md §1b/§1f)**: this frame is **Dylan's Mar 7–10, 2022 Figma refinement of Nathan's own Feb 24, 2022 mockups**, not a 2021 design (the node just lives in the 2021 file). Contents: "SCALE NAVIGATOR MIDI VST" wordmark (art-deco caps + script "VST"), **Local Interface / Network Interface toggle**, navigator neighborhood (C Diatonic center; F Diatonic, F Acoustic, A Harmonic Minor, G Diatonic, G Acoustic, C Harmonic Major, pastel pink/purple), ROOT/SCALE dropdowns, an **"Enharmonic Drift" checkbox**, and the signal-flow visualization **input keyboard → "Mapping" panel (yellow keys) → output keyboard**, with "Reset Mapping" and "Launch Webapp" buttons. This is the in→out pitch-mapping visualization Tonalign/PitchSnap still uses. The rate-limit gap is also closed: the frame is recovered as an image (`images/tonalign/freeman_figma_redesign_local_interface_mar2022_node505-1940.png`). The plugin *ambition* is still 2021-contemporaneous (Nathan's Aug 11, 2021 message to Brady: "Been working with a UI designer… within the realm of possibility for juce and C++?"), but the mockup authorship is Nathan's, Feb 2022 — a stronger Apple-JD claim than "a designer drew it."
- **mobile-home (282:1231)**: black bg, SCALE NAVIGATOR wordmark + yellow script "DASHBOARD", hamburger, pastel navigator neighborhood, ROOT C / SCALE Diatonic pills + Autopilot checkbox + slider pinned at bottom — **precisely what shipped in the Oct 2022 Android screenshots** (design→ship chain with a 13-month gap, receipts at both ends).
- **Canvas-level process artifacts** (Nathan's screenshot): two **color-system diagrams** top-left (Main Color / Outline Color / BG Color 1 / BG Color 2 rows + "Example" strips — the node color language designed as a *system*, not per-screen); a **giant red prohibition sign drawn over a pink ensemble frame** (a rejected direction, killed in-canvas); a frame labeled **"What goes here? chat? ads?"** (open product questions living in the design file).
- Still un-captured (rate limit): 155:824 tab-modules, 302:2085 "mobile-login $$", 302:2152 ensemble-current, Components page 153:1456.

### 10.2 File `hrEW0uBnuPfPhjjndbivWY` "lily-redesign" — Jan 2026

- **Invite email dated Jan 1, 2026, 19:58 UTC** ("Lily has invited you to Untitled") — matches the WhatsApp transcript exactly (Nathan asks for the Figma 11:49 AM Jan 1; Lily "Just sent!" 11:59 AM).
- Single frame `0:3` (1440×900): left half black, "Scale Navigator Dashboard" in a plain white grotesque, **flat unstroked primitive shapes** (red triangle, green circle, blue triangle, white circle, yellow rectangle), hard-edged C / Diatonic / autopilot / 120bpm 2×2 grid; right half dark gray, tabs "Ensamble [sic] / Tablature / Chords / Visualization", "Join an Ensemble", Name field + white "Create Ensemble" button, six hard-edged white-outline cards ("Tony Hawk / Pro Skater 3 / Host: Tony Hawk / 4 Members") with colored circle avatars.
- The frame embodies the brief verbatim. **Nathan's summary of the Lily/Leone direction: "get rid of all rounded edges. change the font. get a new logo, make it SIMPLE. lily obsessed with margins and padding and consistency."**

### 10.3 Lily Clark WhatsApp conversation (Nathan pasted verbatim, 2026-07-05) — resolves most of §6 Q5

This is the missing design-crit trail §7.8 predicted ("the collaboration evidently happened over WhatsApp"). Key dated beats:

- **Jul 15, 2025** — birthday exchange (relationship context: family — see §7.8).
- **Dec 21, 2025** — Nathan: "Leone helped me overhaul my website. What do you think?… https://www.nathanturczan.com/" → **Leone's role = the nathanturczan.com website overhaul (Dec 2025), NOT the Scale Navigator redesign.** Corrects the earlier assumption.
- **Dec 22, 2025** — Nathan: "desperately need your advice on a Scale Navigator family of apps branding / redesign. For the typeface etc — this shit is so embarrassingly bad right now lol." Lily: "I'd be so down to sit with you this Thurs… Btw that **hexagonal logo could be sick**."
- Lily's two core notes (minimal, precise): "keep it a **mono space**… something a bit more intentional like this one by **Grilli Type**" and "same **stroke width** around the shapes (or even better… **remove the black stroke** around the shapes entirely)." Nathan implements uniform border stroke width; the Figma frame (§10.2) shows the strokes fully removed.
- **Dec 26, 2025** — Lily: "Left align 'about'" → Nathan instead **removes the About heading entirely** ("already obvious because the user clicked on the tab") and swaps the **yellow accent for gray** per her suggestion — designer-to-designer crit where the response exceeds the note.
- **Jan 1, 2026** — Nathan: "Can you email me the figma for this? just want to get all the numbers perfect" (11:49 AM) → Lily: "Just sent! You can copy and paste the whole thing into your figma" (11:59 AM) = the §10.2 invite email, same hour.
- Lily's verdict: "**you're 99% there, and just a few lil tweaks will go far.**"
- Jan 7, 2026 — "Got a second for a chat?" (collaboration continuing into the redesign's ship window; the redesign commits land Jan 2026, §9.2).

**Why it matters**: a dated, quotable design-crit loop — brief → typographic direction (Grilli Type monospace) → systematic consistency notes (stroke width, margins/padding) → Nathan implementing and *editing beyond the note* (About-heading removal, yellow→gray) → Figma handoff "to get all the numbers perfect." It is the Jan 2026 redesign's paper trail, and it shows Nathan receiving and metabolizing crit, not just giving it (complements §7.4 Carabott and §7.6 Freeman).

---

## 11. Saved-artifact index (portfolio repo, as of 2026-07-05)

All pasted/recovered artifacts now live in `/Users/soney/Github/nathanturczan.github.io/images/` with descriptive filenames. Cross-reference for the rewrite phase.

### 11.1 Dashboard prologue (`images/dashboard/prologue/`)
- `keyboard_era_green_bg_monitor_photo.png` — green-bg build photographed on a monitor (date/place unconfirmed, Nathan owes)
- `keyboard_era_green_bg_full_network_screenshot.png` — landscape full network, `as_diatonic` center, "Type on your keyboard 1 through 6…!!!!" footer
- `p5_era_orbiting_network_animation.gif` — **Sept 20, 2018** (FB-dated, Jeff Huang collab; the only animated 2018 artifact; originals in `Old Scale Navigator Development/41908402_*.gif`)
- `2019_p5_children_of_children_render.png`
- `plywood_table_build_photo.jpg`
- `2020_a_diatonic_bm6_killmidi.png`, `2020_a_diatonic_pastel.png`, `2020_c_diatonic_webmidi_iac.png`, `2020_c_octatonic_dodecagon.png`, `2020_c_hexatonic_chords_autopilot.png`
- `mobile_pen_wireframe_1.jpg` / `_2.jpg` / `_3_squish.jpg` — the mobile "squish" pen-wireframe sequence
- `midperiod_visualization_tab.jpg`, `midperiod_chords_workspace.png`
- `2026_node_exploration_a.png` / `_b.png`
- `2026_phone_mockup_plain_wordmark.png` / `_psychedelic_wordmark.png`
- `network_full_graph_concentric.png`
- `midperiod_android/midperiod_android_1..10.png` (Oct 2022 Android)
- `vanilla_era_mobile/vanilla_mobile_1..4.png`
- **Freeman-engagement artifacts (Aug 2021, recovered from the dylanandjono Messenger thread 2026-07-05):** `font_option_f37_wicklow_aug2021.png`, `font_option_recoleta_alt_medium_aug2021.png`, `font_option_f37_f51_orange_chosen_aug2021.png`, `font_option_glow_better_serif_chosen_aug2021.png`, `font_option_f37_drago_aug2021.png`, `font_option_f37_incise_aug2021.png` (Aug 15 font session — chosen: Glow Better + F51, "And orange"), `glow_better_font_license_purchase_aug2021.jpg` (Aug 15, 22 min later), `freeman_color_diagram_pitch_class_system_aug2021.png` (Aug 17, Main/Outline/BG1/BG2 per pitch class), `freeman_direction_1_juicy_brand_board.jpg` (Aug 11), `backend_requirements_outline_aug2021.png` (Aug 5)
- **stanybebe-thread artifacts (Aug 18, 2021, 11:22am; recovered 2026-07-05, see §8.8):** `freeman_color_diagram_pitch_class_system_hires_aug2021.png` (high-res copy of the per-pitch-class color-system diagram — cleaner than the Aug 17 dylanandjono copy above), `freeman_pink_purple_tablature_mockup_aug2021.png` (pink/purple round as a circulating pitch asset: "SCALE NAVIGATOR DASHBOARD" wordmark, hexagon navigator + tablature grid), `bill_boyd_voicing_range_scan_aug2021.png` (scanned "the voicings should fall within the range indicated below" figure — likely Bill Boyd's *Jazz Chord Progressions*, the chord-algorithm source book)
- `reddit_ambient_launch_week_support_jan2022.png` (Jan 12, 2022)
- **Deliberately NOT saved to this public repo (privacy):** PayPal receipt screenshots for the **$1,050 payment to Dylan Freeman, Sep 7, 2021, from the Scale Navigator, LLC account, note "THANK YOU UI"** — they contain Nathan's home address; the fact is recorded here and in DASHBOARD_PROLOGUE_REWRITE.md §5, images stay in the FB export (dylanandjono thread, posted Sep 20, 2021)
- `images/_recovered_cache/dextershepherd_gist_sketch_refactor_oct04_2018.js` — copy of Dexter's **Oct 4, 2018** refactor gist (still live upstream; see §8.4): 401-line p5.js `sketch.js`, `crawlPoints`/`calculatePoints`, `curr_scale = "c_diatonic"` — the oldest recovered code artifact of the project
- **ChucK precursors, Nov 2017 (recovered from the richarddickyan thread `files/` folder; see §8.6)** — the earliest recovered code in the whole lineage, a year before the p5 network:
  - `images/_recovered_cache/chuck_19note_just_intonation_19NOTES4RICHARD_nov04_2017.ck` — the version sent to Richard Nov 4, 2017 ("Here comes the harmony!!!"): 19-note JI ratio table + a 2-chord harmony array ("this gives the piece the effect of being 3 chords"), PulseOsc → Echo feedback chain, 4 MIDI knobs
  - `images/_recovered_cache/chuck_19note_just_intonation_19_nov2017.ck` — simpler sibling: same 19-ratio table, SinOsc + Pan2, knob-driven subdivisions
  - `images/_recovered_cache/chuck_voicform_solo_2017.ck` — VoicForm (vocal-formant) solo instrument: 13-row 2D array of alternate JI tunings per pitch class, knob-selected phonemes — the "many tunings per note" idea in source
  - Richard's own `.ck` files from the same folder deliberately NOT copied to this public repo
- `images/_recovered_cache/nime_paper_draft_jan12_2019.pdf` — **the NIME 2019 paper DRAFT** (sent via Messenger Jan 12, 2019; see §8.1): "Scale Navigator: a System for Networked Algorithmic Harmony," authors Turczan/Kapur/Ho/Honigman/Sheperd [sic]. A process artifact — placeholder self-talk still in the text ("talk to colin and dexter about this????", "in which i conclude everything", "UI design for scale nav–other thoughts?"), plus the Nathan Ho chord-algorithm description, the three 2018–19 deployments in contemporaneous words, and the pastel E-diatonic UI + client-page + INTERSTICES-video-score figures

### 11.2 Ensemble Jammer (`images/ensemblejammer/`)
- `tanpura_drone_portrait.png`, `tanpura_drone_landscape_1.png`, `_2.png` (D2 root 73.42 Hz; before/after against Chromatone planned)

### 11.3 Tonalign (`images/tonalign/`)
- `pitchsnap_plugin_window.png` — the marked-up PitchSnap window (Jan–Apr 2026 window)
- `scalenavigatormidivst_shipped_daw_v1_keyboard_top.png` — **Jan 6, 2022, 10:17 pm** ("changed background colour and added logo!"; recovered from Brady FB thread photos)
- `scalenavigatormidivst_shipped_daw_v2_launch_button.png` — **Jan 7, 2022, ~9:27 am** ("NVM, I totally did it!!!!" — launch-webapp button built overnight; Brady 😮)
- `juce_launchindefaultbrowser_research_snippet.png` — Jan 6, 2022, 10:29 pm; Nathan reading Projucer source to learn `launchInDefaultBrowser()`
- `brady_whiteboard_interface_sketch_jan2022.jpg` — Jan 8, 2022; Brady's touch-surface concept ("main pitch selection surface… swipe to swap… octave sliding")
- `brady_scale_weaver_concept_aug2023.png`, `brady_android_pitch_pads_aug2023.png` — Brady's Aug 2023 concept round
- `scalenavigatormidivst.png` — **marketing composite** (MacBook mockup, file date May 29, 2022) — separate from the raw pair
- **The Feb–Mar 2022 VST design round (dylanandjono thread, recovered + dated 2026-07-05; full arc in TONALIGN_REWRITE.md §1f):**
  - `juce_prototype_first_screenshot_jul2021.png` — **Jul 26, 2021** (Piepenbrink thread) — earliest artifact in the whole Tonalign lineage, "Made with JUCE" badge
  - `vst_current_state_before_redesign_feb2022.png` — Feb 23, 2022, the current-state brief Nathan sent the Freemans
  - `nathan_vst_mockup_local_interface_feb2022.png` / `_network_interface_feb2022.png` — **Nathan's own hi-fi mockups, Feb 24, 2022, 11:46 am**
  - `nathan_vst_mockup_v2_local_drift_toggle_feb2022.png` / `_network_drift_toggle_feb2022.png` — v2 iteration ~80 min later (1:05 pm), Enharmonic Drift toggle added; `_fullres` variants of both = the full-resolution originals found on disk (`Old Scale Navigator Development/scalenav_midivst_local/network.png`, 1783×1630)
  - `freeman_figma_redesign_local_interface_mar2022_node505-1940.png` — **Dylan's Mar 10, 2022 Figma refinement = node 505:1940** (resolves the §10.1 rate-limit gap: the frame is recovered as an image; note §10.1's "designed in Figma in 2021" for 505:1940 is corrected to **Mar 2022, Dylan refining Nathan's Feb 2022 mockups** — see TONALIGN_REWRITE.md §1b)
- five `Screenshot 2026-02-10*.png` (current page), `tonalign-1.png`

### 11.4 NotesChordScales (`images/noteschordsscales/`)
- `ncs_three_panel_early.png`
- `norris_pressing_scale_explorer_collage.png` — original file date **Nov 8, 2022** (dates Nathan's Norris usage pre-NCS)

### 11.5 SNaPS (`images/snaps/`)
- `snaps_canvas_wireframe.png` (Librarian is headless — no UI exists or ever will; CLOSED 2026-07-05)

### 11.6 LOST to compaction — Nathan must re-paste or locate originals
1. A diatonic glitched screenshot (early-UI batch item ⑤)
2. F♯ diatonic dark keyboard-only build (item ⑥ — possibly moot now that the green-bg landscape sibling is saved)
3. ~~Tonalign §1e pair~~ — **RECOVERED (2026-07-05) from the Brady FB Messenger thread photo attachments**, hard-dated Jan 6–7, 2022; saved with two bonus artifacts (see §11.3 and TONALIGN_REWRITE.md §1e). Lesson: FB per-thread `photos/` folders are a recovery source for anything Nathan ever shared on Messenger.

### 11.7 Late email finds (2026-07-05, filed in DASHBOARD_PROLOGUE_REWRITE.md credits section)
- **Netanel Ben (Nate Ben)**, Oct 27–29 2021: host/member ensemble sync work ("Setting Host Scale Data and Updating Navigator UI for Ensemble Members" thread), Firebase inconsistency + Navigator race condition, "the only issue is with P5. The way it's built isn't fit react and it's state," PR delivered Oct 29, paid $235 + $425
- **Colin Honigman crit emails**: Aug 9 2021 "Seeking Crit / Feedback on Latest Scale Navigator Stuff!" + Sep 30 2021 "Feedback on Scale Navigator Web App and Landing Page?" → crit call Tue Oct 5 2021 2pm. Call notes NOT found digitally; Nathan to check Google Docs/Keep/Apple Notes/paper.

## 12. Advisors archive (`/Users/soney/Github/business/09_Advisors/`) — call transcripts, QA reports, meeting notes

**Nathan's directive (2026-07-05): "i think you should mine my entire advisors folder for material for the case studies."** The folder is a 2026 advice-tour paper trail: **37 advisor folders**, most with a PROFILE.md and/or call recordings (m4a/wav) + Whisper transcripts (txt), plus two root files (`ADVISOR_FEEDBACK.md`, `dinner-party-jam-feedback.md`). Convention for this section: **source files stay in the private business repo; verbatim quotes + canonical paths only here** (several contain advisor emails / personal detail).

### 12.1–12.2 Elvis Bates, Mar 2026 (the Dashboard Plugin beta / first recorded UAT)

Source: `/Users/soney/Github/business/09_Advisors/Elvis_Bates/` — two raw Whisper transcripts (no speaker labels; Nathan/Elvis identifiable by content) + audio (332MB .wav, 20MB .m4a). Nathan flagged these 2026-07-05: "my first user acceptance test or maybe a beta test? with elvis… this is re: dashboard as a plugin." Assessment: **yes — the Mar 23 call is the only recorded, moderated, think-aloud usability test of the Dashboard Plugin in the archive.**

### 12.1 Mar 19, 2026 — advisory call (`elvis_bates_meeting_march19-2026.txt`, 1547 lines)
Who: Elvis Bates — ex-Output (~7 years, instrument creation), introduced by Ben (Output colleague who knows Nathan from CalArts); had just run a beta for his own choir product.
- **The plugin origin beat — Ben's ultimatum**: Ben told Nathan "don't show me this until it's a plugin… dude, I don't care until it's a plugin" → Nathan: "I finally then took the plunge and told Claude… can we port this to C++ and make this a VST3?… Then I did it with AI and now it's done." (Also: closed-source decision — "consumer facing product… it used to be open source back when it was my thesis.")
- **Nathan's self-aware validation framing**: "I was a product manager… at Headspace… I have not validated it as much as I should… I'm really building this thing for myself… that's what this beta is all about."
- **Elvis's beta methodology** (professional playbook, adopted): two test types — "initial gut reaction… the experience of a new user" (the more important one) vs expert nitty-gritty; protocol = "get a bunch of new people that have never used your product before… Google Zoom, record it for 45 minutes… written-out script… recording their reaction." Elvis commits to testing in **Cubase, Ableton, and Logic**; offers to help structure the Google-form questionnaire. Arcade (Output) discussed as precedent; Spencer meeting planned.

### 12.2 Mar 23, 2026 — the recorded moderated usability test (`elvis_bates_meeting_Mar 23 at 11-35 AM.txt`, 1381 lines)
Artifact under test: **"Dashboard beta 1.1" VST3**. Structure: install → guided product tour (think-aloud) → MIDI routing attempt → web-app fallback → orchestration walkthrough.
- **Install troubleshooting first** (~lines 110–300): Elvis's Ableton shows **zero plugins** ("it looks like you have no plugins whatsoever") → they verify the `.vst3` on disk ("It should be called Dashboard. Dashboard beta 1.1"), find a disabled VST3-folder setting, rescan ("if you have a ton of plugins, it might take a long time to rescan"); Cubase discussed as fallback.
- **Nathan's moderator protocol, verbatim** (line ~371): "basically, from here on out I'm gonna shut up, but I will be watching and then you can… speak through your process… I'll press record on my phone so I can get your thought process if that's okay." And: "Okay, I'm shutting up."
- **Think-aloud findings during the tour**: hover states noticed and praised ("even if I hover, there's a cool little hover State"); grayed-out polygons noticed; tour blocks interaction ("all of that stuff should be clickable… it's not") → Elvis: "if you have like a little helper… you should still be able to access everything"; tablature color legend confusion ("My eye goes straight to the red… weird line break") → Nathan's on-the-spot fix decision: "I'm just gonna make chord root be the font be red, chord tones the font be orange, and that'll be much more obvious"; Elvis's **legend/helper-mode suggestion**: "kind of a legend or something… helper mode… some plugins have that where they have like a little icon… helps remind you of the terminology because it's a lot of information" → Nathan: "That's a great idea."
- **Logged usability defect, on the record**: Nathan — "I just want to say for the recording. It's very annoying for you to have to close the intro tour every single time you open it." Elvis (from Output experience): "There was like some XML file… you'll get it like once it's been enabled. Just takes one time."
- **State-loss bug found live**: "closing it means that everything gets lost, and it might even forget the ability to connect to MIDI ports… I bet you these will be gone when you click again… Yeah, ports are gone, fuck."
- **Design decision born in-session** (line ~1028): "I think what I need to do, right, is not have it be just random ass IAC driver stuff. It needs to be connecting directly to MIDI tracks in Ableton… like this dropdown should be like 2-MIDI."
- **Isolation test**: plugin MIDI too broken → falls back to the web app (Chrome → IAC → Ableton) to separate plugin bugs from environment issues; MIDI flows, Elvis plays it.
- **Nathan teaching the product's orchestration model, verbatim**: chord-root output rationale ("in jazz comping a lot of times the piano player won't play the root because they know the bass player will play the root"); voice-leading smoothness ("all of the held tones are going to stay… common tones will stay so it can be very expressive from chord to chord"); "this is your orchestration workstation basically… it's your automatic tenor alto soprano bass chorale machine." Elvis's reading: "it's almost like a modular [effect]… you have voice leading, but you have it out to different tones."
- Feature probe: Elvis asks for a **pentatonic layout** → Nathan explains why pentatonic isn't a scale class in the network (pentatonic collections appear as 5-note chords).
- Elvis exits committed: "I know enough to close this, open it up and start fucking around with it because I'm really excited."

**Case-study value**: closes the arc *Ben's "I don't care until it's a plugin" → AI-assisted C++/VST3 port → structured beta program with a professional methodology → recorded moderated UAT with logged defects and same-session design decisions*. Maps directly to the Apple JD's research/prototyping/iteration language.

### 12.3 Tristan Whitehill — the Aug 21, 2021 written QA report (earliest external QA of the plugin line)

Source: `/Users/soney/Github/business/09_Advisors/stany_tristan_whitehill/` — `PROFILE.md` + **`Scale Navigator QA NOTES_.pdf`** ("First Reactions 8/21/2021"). PROFILE.md contact history: **VST prototype sent Aug 18, 2021 → written QA notes returned Aug 21, 2021** — i.e. **the same week as the FB thread's vercel-deploy share (§8.8) and one day after the Aug 20 Notepad-tab wireframes and the Arthur Carabott crit call**. This is the earliest known *external, written* QA test of the plugin line, five months before the Jan 2022 ship. PROFILE quote: "I had a great time messing around in the VST, was interesting and made unexpectedly cool results."

The report itself is structured like a professional QA doc (Tristan tested blind, then with Nathan's docs):
- **Test rig recorded**: macOS Mojave 10.14.6, MacBook Pro Retina 15" Mid-2015, 2.5GHz i7, 16GB. VST3 loaded properly.
- **Onboarding finding**: "The initial setup inside the users DAW was not exactly clear when approaching blind and needed the documentation provided by Nathan. This product will require some supplemental training or previous knowledge." (The 2021 statement of the onboarding problem the 2026 intro tour + Elvis's "helper mode" suggestion, §12.2, still circle.)
- **Positioning insight, unprompted**: "Scale Navigator is a methodology as it provides an encyclopedia of most western harmony."
- **Bugs logged**: map-sorted chord buttons not returning a chord change (root moved to mouse position); previous chord tone bleeding into the following chord (with an Ableton screenshot).
- **THE CAPTURE-PROBLEM QUOTE**: "Once the data was recorded… I couldn't remember the buttons I had pressed in succession so the process of documenting the chords might require a system like the newest static web build." — an external tester independently articulating the capture problem **one day after** Nathan sketched the Notepad-tab progression-table wireframes (Aug 20, 2021). The feature that answers it (Score) ships Feb 2026 — a 4.5-year requirement-to-ship trace with receipts at both ends.
- **Competitive scan included**: Scaleomat, Chordbot, KordBot. Design inspiration: a Tonnetz torus image.

### 12.4 Tristan Whitehill — Mar 22, 2026 call (the loop closes: same tester, 4.5 years later)

Source: `.../stany_tristan_whitehill/Mar 22 at 10-04 AM/Mar 22 at 10-04 AM.txt` (675-line Whisper transcript). Nathan demos the full 2026 ecosystem to the same person who QA'd the 2021 VST. Highlights:
- **Sketchpad origin stated on the record**: Nathan — "one of the biggest pieces of feedback was just like, Hey, it's cool to just explore. But like what happens when I like something" → demos the Sketchpad → Tristan: "That's fucking sick." **Tristan's own Aug 2021 capture-problem note (§12.3) is the earliest written instance of that feedback; the person who articulated it gets the demo of the answer.**
- Ecosystem demo contents: Dashboard "circle of fifths on steroids"; scale-class framing verbatim ("I'm really thinking just in terms of a collection, not as like a root"); 3D view; chord generator + filters ("allowable root movements… it's literally jazz"); score view + export; transposing-instrument tablature (banjo); ensemble "Athens" via Firebase; **Ensemble Jammer** — harp instrument, Venn-diagram melody pad, **MusicXML score drop with Terry Riley's "In C" auto-retuned live**, Beethoven; C++ sampler port in progress ("JavaScript cannot handle that shit… porting everything to JUCE and C++"); **PitchSnap ↔ Dashboard plugin shared-memory sync** ("It's just something that my LLM told me I could do") — including a live demo failure and recovery on the call.
- **Architecture rationale, quotable**: Nathan — "I'm sharing harmonic state and then based on the harmonic state, they can get the MIDI from that"; Tristan — "you've offloaded all the work onto the user system… that's fucking smart."
- Product framing: "never play a wrong note… give this MIDI controller to a child"; everything free except the Dashboard plugin ($40 at the time of the call): "you're paying for the ability to automate the parameters"; Procreate comparison; Ensemble Jammer wrapped in Electron with a Steam release planned; mobile app live on iOS + Google Play.
- **The encouragement arc (Nathan's framing: "more encouragement")**: Nathan — "back when I was like terrible… you were very encouraging. So thank you." Tristan — "You deserve your flowers… you've solved many, many, many problems by sticking with this… you really achieved something by just sticking with it one project."
- Tristan's actionable advice: Superbooth / convention booths ("get your ass to the booth"), Peter Kirn (CDM), Richard Boulanger, laptop orchestras (Stanford + Princeton intros pending), "hire a flautist" in Berlin for demos. Sign-off: "Super booth 2027."
- PROFILE.md action item: "Reach out for Dashboard Plugin beta testing (Mar 2026)" — the call *is* that item executing; Tristan spans QA 2021 → evangelism Jan 2022 (§8.8 FROGMOD Discord) → beta-era advisor 2026.

**Case-study value (12.3+12.4 together)**: the single strongest feedback-loop arc in the archive — *external tester writes the capture problem (Aug 21, 2021) → Nathan had sketched the wireframe answer the day before (Aug 20, 2021) → Score ships Feb 2026 → Sketchpad ships → Nathan demos both back to the same tester (Mar 22, 2026), citing the feedback verbatim*. One relationship spans referral outreach, prototype QA, launch-month word-of-mouth, and beta-era advisory.

### 12.5 Advisors-folder survey (2026-07-05) — mining queue

37 folders. Transcript/notes-bearing folders to mine (priority order): `brady_boettcher/` (8 files incl. `Torrey_Walker_Apple_MIDI.md` — potentially Apple-relevant, `LinnStrument_ScaleNavigator_M4L_Project.md`, Feb 9 + Mar 20 + Mar 29 + May 25 2026 items), `dmitri_tymoczko/` (6 files incl. `MEETING_SUMMARY_2026-02-23.md` and `tymoczko-feedback-2022-02-23.md` — check whether that filename's 2022 is a typo for 2026), `spencer_salazar/` (Mar 24, 2026 advice notes — the Output-CTO meeting Nathan told Tristan about on Mar 22), `nathan_ho/` + `nathan-ho/` (Feb 17 call + late-May wav), `tanner_pfeiffer/` (Feb 15, 2026 call), `lachlan_turczan/` (Apr 19 + May 3 2026 talks — Nathan's brother), `jake_penn/` (Feb 13 call), `scott_anderson/` (Apr 10 analysis + call), `joshua_warner/` (Apr 21 call), `brendan_rincon/` (Mar 3 call), `ben_tillotson/` (Dec 30 call), `rose_rutledge/` (May 18 + Jun 18), `ujin_kim/` (Apr 1), `charles_schiermeyer/` (Feb 13 Discord). PROFILE.md-only: ajay_kapur, archie_carey, brendan_zelikman, ethan_hein, frank_stauffer, jeffrey_trevino, mark_nelson, misa_skalskis, parag_mital, philip_meyer, stevie_schmidt, subhraag_infinitone, thomas_royal, trevor_baca, michael_maurer, richard_devine, ucsc_mentors. Root files: `ADVISOR_FEEDBACK.md`, `dinner-party-jam-feedback.md`. Mined so far: Elvis_Bates (§12.1–12.2), stany_tristan_whitehill (§12.3–12.4), root files (§12.6), dmitri_tymoczko (§12.7 — the 2022 filename is NOT a typo; genuine Feb 23, 2022 meeting), spencer_salazar (§12.8), brady_boettcher (§12.9 — privacy-sensitive; Nathan-side material only), nathan_ho + nathan-ho (§12.10 — late-May wav still audio-only/untranscribed).

### 12.6 Root files: `ADVISOR_FEEDBACK.md` (consolidated, created Jun 29, 2026) + `dinner-party-jam-feedback.md` (May 2026)

`ADVISOR_FEEDBACK.md` is Nathan's own consolidation of 25+ advisor folders + LALORK research — proof the 2026 advice tour was a *structured research program*, synthesized into a findings doc. Case-study-relevant items:
- **Arthur Carabott, the critical reframe (dated 2026-02-22 in the doc)**: Arthur's Aug 2021 feedback ("If I am in a scale, I'd like to explore it with more control" / "Once I've found a chord I like, I want to learn that or save it") re-read five years later as strategy: **"This isn't UI feedback. This is the business model… The gap Arthur described IS the product."** With a free-vs-plugin framing table (Click, explore, hear / Commit, automate, save; "Easy to lose what you had" / "Memory, recall, reproducibility"). This is the capture problem graduating from UI defect (2021) to product thesis (2026) — the third articulation alongside the Notepad wireframes and Tristan's QA line.
- **Scott Anderson (Apr 10, 2026), the cognitive-model-inversion critique**: "Scale Navigator describes scales-to-chords but functional harmony often goes chords-to-scales… compositionally useful but pedagogically inverted. Consider: can the interface support both directions?" — the sharpest *conceptual* design critique in the archive; case-study honesty material.
- **The advice-tour pattern itself**: Jake Penn (Minimal Audio founder, Feb 13 — launch sequencing, own-your-data, "make people beg for the plugin"), Charles Schiermeyer (Chordie, Feb 13 Discord — licensing architecture; the Lemon Squeezy rec that became the locked platform decision), Ujin Kim (Apr 1 — "the free tier isn't just a lead magnet; it's where users build mental models. The plugin should feel like 'unlocking' capabilities they already understand"), Rose Rutledge (May 18 / Jun 18 — "Harmonic Engine" B2B licensing framing), Philip Meyer (Feb 12, coffee at Steep — Risset "Super cool, needs to exist in MIDI Tools world"; Ableton velocity-nonlinearity note).
- **Participatory-music design principles (LALORK / Ensemble Jammer-adjacent)**: MoPhO/Freeman research — **"Visible consequence within 2 seconds. If people can't see/hear their effect immediately, they silently disengage"** (labeled "The Single Most Important Design Principle"); Kat Macdonald (LCLO, Jun 16, 91-min call) — conductor as "pure help desk," loudness wars solved architecturally ("phones are quiet"), "there needs to be a location for challenge"; R Tyler (Jun 15) — 25%-silence masking patterns, bass-frequency management; failure-mode tables (network/onboarding/social) with mitigations ("Browser-based, no download"; "QR → web app"; "beginning-middle-end structure is non-negotiable").

`dinner-party-jam-feedback.md` (May 2026; video youtu.be/lUCmZuWv9R0) — **a real design crit of an Ensemble Jammer session video**, filed in ENSEMBLE_JAMMER_REWRITE.md §1e: Nathan Ho (negative space — "10x the number of timbres… each one resting 90% of the time"; reference-track meta-strategy; "can't have people looking at screens"; Reich / E2-E4 direction) + Ben Tillotson (verdict: "Too many issues. Scrap it and start again with a more developed brief," then a concrete 4-point redo brief — ~4 people, distinct sounds per range, visible communication, intentional arc; positive: "Impressed you got all these folks together and onto the platform"). Reference tracks logged: Debussy, Reich, Göttsching E2-E4, Kristen Roos Universal Synthesizer Interface, Michael Cella Wax demo, David Lang "crowd out."

### 12.7 Dmitri Tymoczko (`dmitri_tymoczko/`) — the foundational researcher, two meetings exactly 4 years apart

Sources (quotes + paths only; files stay in the private business repo): `PROFILE.md`, `tymoczko-feedback-2022-02-23.md`, `MEETING_SUMMARY_2026-02-23.md`, `dmitri-meeting-feb23-2026-braindump.txt`.

**Why he matters**: PROFILE.md states it plainly — "Dmitri Tymoczko's research IS Scale Navigator's core IP… Scale Navigator is essentially: 'What if Tymoczko's academic research became an interactive tool for musicians?'" (*Scale Networks and Debussy*; the NIME 2019 paper builds on his 57-scale network.)

**The arc** (all dates verified in-file):
- **Sept 2021** — initial outreach during the first Dashboard build. He suggested a hierarchical approach and asked to see the sample library. 2022-era quotes: "I don't want to discourage you from making apps… I just suspect the music theory will have to be a bit more in the background"; "**Pay more attention to the Zing of it all**"; "I am pro app."
- **Feb 23, 2022 — 30-min Zoom** (`tymoczko-feedback-2022-02-23.md`; the file was created Feb 16, 2026 — a retrospective writeup one week before the reconnect, so the 2022 in the filename is genuine, not a typo). Advice: "Less software, more music — five-year plan"; "Make better music software as a stepping stone to making music"; Princeton PhD odds "4/150 = lottery"; "Density of texture leads to 'killer piece'"; on Nathan personally: "Passion, non-linear interaction, audio experiences. That describes Nathan." Praise: "Love your work because it makes the idea of a harmonic language very tactile." **And a proto-Ensemble-Jammer idea, 3.5+ years before EJ development started (Dec 2, 2025): "Use iPhones to jam with sax (Ensemble Jammer concept?)"** — the participatory-instrument idea was on the table with the field's foundational researcher in Feb 2022. Technical topics: glissando, microtonality ("more Messiaen-related than EDO or JI"), playing outside the scale.
- **Feb 23, 2026 — reconnect Zoom, exactly 4 years later to the day** (PROFILE.md flags it: "(exactly 4 years later!)"). Per MEETING_SUMMARY: "Not polite-positive… he engaged, suggested, followed up multiple times, and gave concrete design directives." Verbatim email thread in the braindump: Dmitri 2:05 PM — "**What about the idea of integrating your stuff with Harmonia? That would be super cool… There's a ton of potential there. You and Brendan should talk**" (Brendan Zelikman); Dmitri 2:58 PM — "**Yup, my pleasure, your stuff looks good!**"; then a **6:56 AM next-morning follow-up: "You need to add one more operation to your spaces, which is a complete loop around the ring… scalar transposition"** — the foundational researcher sending feature requests the morning after seeing the product. Design directives from the call: loop-around ring operation, flats clockwise, even/odd polarity toggle ("killer demo feature"). Community advice: "**Stop thinking like a solo builder. Build a nerd cluster**… Harmony tools are underserved. DSP dominates the discourse." Bottom line per the summary: "**A+… That's mentorship-level engagement. You're in the field now.**" Launch discipline noted: "Launch sequence stays intact. Post-launch patch sequence absorbs suggestions. That's adult product discipline."
- Color: Nathan took meeting notes directly into his copy of Tymoczko's *Tonality*; browser history reconstructs the call's shared screens (arca, multichord, settheory.pdf, dashboard.scalenavigator.com, tonejs sampler); Nathan's own reflection — "in his OG communications he was hesitant to comment… Now he is giving me all these ideas and really being kind of insistent."

**Case-study value**: the strongest external-validation arc in the archive — the researcher whose theory the product operationalizes moved from polite hesitancy (2021) to "your stuff looks good" + unsolicited morning-after feature requests + a proposed integration with his own lab's tool (2026). Also hands DASHBOARD a Feb 23, 2022 timeline row and EJ a 2022 proto-idea provenance point.

### 12.8 Spencer Salazar (`spencer_salazar/spencer_meeting_advice_notes_march24-2026.md`) — Mar 24, 2026, research-methodology + architecture advice

Raw live meeting notes (typos intact in source). Spencer Salazar (ChucK developer; the meeting Nathan told Tristan about on the Mar 22 call, §12.4). Case-study-relevant quotes:
- **User research method**: "product market fit — sitting down with users, watching what they do"; "how do people use this??"; "power user — expose it to someone"; "**'can you jam on this for hours' - GET OTHER PEOPLE TO DO THAT**."
- **The blocker framing**: "'something in the way of each persons user journey' - what is the blocker… somewhere between them dl and installing, and them jammin for hours"; "figure out the top 10 things."
- **The feedback-validity flag** (sharp PM insight): "**dont trust when feedback is stuff you alredy thought of. if its NOT on the roadmap, that should be a FLAG!!!!!!**" — plus beta-tester blind spots, length of feedback loop, effort-vs-impact.
- **Architecture advice that maps to the shipped plugin design**: JUCE webviews — "can transmit data to host plugin, store entire state model — send the blob of state down to plugin everytime modified, close and reopen — REHYDRATE"; "juce webviews has everything i need. take everything output did and made it avail."
- Marketing: "VIDEO THATS suggestive of what you can accomplish as a musician"; "work with musicians — leads to content"; "it's ok to allow for a lesser MIDI functionality at first"; "when people are demanding windows, good problem."
- Logistics: CCRMA open house in spring; LALORK Aug 15 invite sent Jun 14 via IG DM.

**Case-study value**: dated evidence that Nathan sought and absorbed formal user-research methodology mid-beta (watch users, find the journey blocker, distrust confirming feedback) — pairs with the Elvis Bates moderated usability test (§12.2) executed the same month.

### 12.9 Brady Boettcher (`brady_boettcher/`) — Feb–May 2026: the Apple Core Audio peer, the CoreMIDI feedback channel, and the identity quote

Sources: `2026-02-09_Brady_Boettcher_conversation.txt` (recorded + transcribed, 743 lines), `2026-03-29_Brady_FB_Chat.md`, `2026-05-25_Brady_Correspondence.md`, `Brady_Boettcher.md`, `Torrey_Walker_Apple_MIDI.md`, `LinnStrument_ScaleNavigator_M4L_Project.md`, `2026-03-20_gbow2Intro_transcription.txt`. **Privacy note: the folder contains personal and employer-sensitive detail about Brady (side-project plans, relocation) that must never appear in public case-study text — only Nathan-side material is quoted here.** Brady is a grad-school-era collaborator (music-tech Masters, C++/JUCE) now on Apple's Core Audio routing team; he and Nathan built the original PitchSnap together ("your pitch snap… In my project" / Nathan: "pitch snap, which is yours. In my project").

**Feb 9, 2026 call — a full ecosystem demo on tape, to a professional audio-framework engineer:**
- The plugin epiphany, on the record 5 days before Score ships: "I finally got Scale Navigator dashboard wrapped in webview in JUCE, so it lives inside of Ableton now… really really happy that it's finally found its best form factor… living as a web app for so long, I kind of got used to how clunky it was to route MIDI in and out… now I can automate all these awesome parameters."
- The demo tour verbatim: chord-generator checkboxes ("surf the wave of harmony, so to speak"), 3D network view, multiple MIDI outs, the Ableton scale-awareness M4L shim ("that was really important to me to have sort of that native integration"), PitchSnap shared-memory architecture in plain words: "**there's this shared memory space for plugins that's basically just a little notepad that can be read, written to and read from… PitchSnap is always just sort of subscribed to whatever Dashboard is up to**."
- **PitchSnap chord mode + the Virtuoso-series precursor demo**: "throwing in really gorgeously recorded MIDI from like the Chopin competition… then just completely using PitchSnap to mangle it and force it into the chord that I'm currently playing, which I think is really, really fun" — the remix-a-virtuoso idea demonstrated live, months before the marketing series.
- Honest UI self-critique on tape: PitchSnap "I still don't think it's very cute… in general I'm a little bit bummed out by it."
- Business model on the record: "I'm gonna release all versions of Dashboard for free, except for the plug-in version." App Store review anecdote: "Apple was like, you should have Apple sign in, and I'm like, of course."
- Ensemble vision quotes: banjo-in-the-living-room scenario; "routing other MIDI to a player piano 50 miles away"; "immersive jam session… kind of like a flash mob in Union Station."
- Ensemble Jammer walk-through: the seven-fold Venn Melody Maker with credit on tape ("based on some work that my friend Nathan Ho did") + the voice-leading detail ("I'm telling it: try to stack yourself in thirds wherever you can"); pitch-tagged Looper/sequencer ("this loop has C, C#, and E♭ in it… the whole thing needs to be transposed down a half step" — "I'm just using basic sample rate… I'm not doing any FFT stuff").
- Vibecoding honesty: "I get to 80% of every single project and… this last 10% is very hard"; "I get addicted to the quick-win dopamine."
- **The identity quote (Apple-JD gold)**: "**That's a big part of this vibecoding thing — I was like, if I'm a product manager who can't prototype, then I'm nothing.**" Plus: "making music software is all I ever want to do."
- The AirPods choir-piece idea, pitched to a Core Audio engineer: singers wearing AirPods, phone displays pitch-up/pitch-down targets against a live keyboard; questions about voice-isolation DSP and bone-conduction/contact-mic sensing; framing principle: "**I want to build technology for what everyone already has in their pocket.**"
- Reciprocal QA: Nathan beta-tests Brady's granular synth in return — and later (Mar 2026) finds, reproduces, and files a crash bug (grain duration = 0). QA-giving peer, not just QA-receiving.

**Mar 29, 2026 FB chat — the CoreMIDI feedback channel (directly Apple-relevant):**
- Dashboard iOS live on the App Store: apps.apple.com/us/app/scale-navigator-dashboard/id6757498960.
- Brady has a meeting with the Apple engineer who owns CoreMIDI (per `Torrey_Walker_Apple_MIDI.md`: Senior Audio/MIDI Framework Engineer, holder of patent US 10042802 "Inter-device digital audio" = the IDAM feature) and asks Nathan for developer-experience feedback to relay: "any questions or ideas you want me to ask about??… plz send any and all gripes."
- Nathan supplies a written DX critique list: why Network MIDI requires manual enable in Audio MIDI Setup every session; an API for programmatic Network MIDI session activation; streamlined iOS "instrument mode" over USB; guidance for Capacitor/web-wrapped MIDI apps; Web MIDI API in iOS Safari — plus a recorded demo video of the exact pain point (youtu.be/76Eq1Q_OUqw) and his own workaround, the **CapacitorMidiSender plugin he built** (github.com/nathanturczan/CapacitorMidiSender). Brady: "damn that's a cool video wow… will take some notes and ask about this process, see what the reasoning is and if it can be improved."
- Nathan's summary of the ask: "how to make it easier for developers to build instruments, webapps, etc… with super intuitive routing. That doesn't require users to have to do so much setup." And the graceful caveat: "honestly I am super grateful for Apple to even have it at all. It's all 3rd party for PC and Linux."
- Also logged: Spencer/Output validation echo ("really heartening to hear from a legit music tech CTO that I'm on the right track"); a potential harmony-architecture gig (founder = former head of innovation at Spotify, via a boarding-school connection); React Native rebuild trade-off analysis.

**May 25, 2026 — LinnStrument × Scale Navigator M4L concept** (`LinnStrument_ScaleNavigator_M4L_Project.md`): a designed hardware-integration spec — LinnStrument User Firmware Mode relights cells per current scale, remaps notes in-scale, and shows **pitch-bend direction arrows for out-of-scale notes** (↑/↓ semitone, ↑↑/↓↓ whole tone) with a color legend (pink=root, cyan=bend target, yellow=auxiliary); four worked example layouts; data-flow diagram Dashboard → MIDI/Sysex → M4L → LinnStrument. Evidence of hardware-interface design thinking with the same per-pitch-class visual language.

**Case-study value**: (1) the identity quote — the cleanest self-articulation of the PM-who-prototypes stance in the whole archive, dated and on tape; (2) an end-to-end ecosystem demo transcript from the week the plugin form factor landed; (3) Nathan writing developer-experience critique of Apple's own MIDI stack — with demo video and a shipped workaround plugin — and getting it relayed toward the framework owner; (4) the Chopin-mangle demo as Virtuoso-series provenance; (5) reciprocal QA and a hardware-integration design spec.

### 12.10 Nathan Ho (`nathan_ho/` + `nathan-ho/`) — the Feb 17, 2026 SNaPS pair-debugging tape + May 2026 EJ crit (mined 2026-07-05)

Two folders. `nathan-ho/README.md` (Jun 2, 2026) = the Dinner Party Jam crit already filed via the root `dinner-party-jam-feedback.md` (§12.6, EJ §1e) — negative space ("10x the number of timbres… each one resting 90% of the time"), "can't have people looking at screens," reference-track meta-strategy; plus an unmined late-May advisory call (`nathan-ho-talk-lateMay.wav`, 182MB, audio only — **transcribe with whisper if needed**).

`nathan_ho/` holds the **Feb 17, 2026 SNaPS session**: transcript `Feb 17 at 11-03 AM.txt` (~800 lines; full audio in `.m4a` + `nathanho-conversation.wav`) + `sessions.md` payment record (2hrs @ $80/hr + $20 tip = $180, PayPal 6PD276259F388271A, note "SNAPS session - FEB 17, 2026, 2hrs +20$") — **this resolves the §7.10 ledger's last open row**: the Feb 17, 2026 payment was a paid 2-hour pair-debugging session on the SuperCollider timer crash. `sessions.md` also confirms Ho's W9 (2022) and 2021 contractor history — the "real, paid, multi-year engagement" claim has its paper trail. Transcript highlights (full extraction in `SNAPS_REWRITE.md` §1d):

- Ho's test-engineer method on tape: parameter-range interrogation, running notes, worst-case arithmetic aloud — 180 BPM × Tempo Factor 2 × 32nd notes = "**one note every 5.2 milliseconds. So, yeah, I can see why this would cause problems.**"
- Nathan explaining his own particle engine fluently from memory (Max Particles 1–40 per library; the self-avoiding alphanumeric sampler; Tempo Factor as JI-ratio BPM multiplier "to get polyrhythms"; the 300-sample sax-slap-tone stress library).
- The hypothesis fails honestly: Ho can't repro at max settings ("180 times 2 BPM and it's fine. Wow"), Nathan's Mac crashes without pushing BPM; Ho's suspect is the `waitTime.max(0.001)` floor in the humanize routine — code **Nathan himself vibecoded Nov 2025** (SNAPS_REWRITE §1c).
- The Nancarrow digression (tempo dissonance, phase vs. polyrhythm, Ho's Risset-rhythm connection; Nathan: "He basically invented MIDI also").
- Middleware-in-practice: "I've got Scale Navigator emitting scale class and chord root" on MIDI ch. 6 to SNaPS, mid-debugging, as routine setup.

---

## 13. Marketing research archive (`/Users/soney/Github/marketing/research/`) — the design-research paper trail

Surveyed 2026-07-05 at Nathan's request ("is there anything to be mined for case study in this research folder?"). **Yes — this folder is the evidence that the product decisions in the case studies sit on top of documented research practice**: competitive teardowns, proxy user research, design-system reverse-engineering, and launch-strategy analysis, all dated Mar–Jun 2026. Convention as in §12: source files stay in the marketing repo; quotes + canonical paths only here.

### 13.1 The proxy-user-research method (April 2026) — `ableton/scale-awareness/ANALYSIS.md`

The standout artifact. Nathan downloaded **10 YouTube tutorial transcripts** about Ableton Live 12's Scale Awareness (official Ableton tutorial, Ned Rush, abletondrummer's Toby, etc. — raw DownSub .txt transcripts preserved alongside) and mined them as **proxy user interviews**, extracting pain points with attributed verbatim quotes:
- Core finding, stated as a thesis: "**Everyone thinks Scale Awareness is global. It's not.** It's per-clip."
- Nine numbered limitations, each with sourced quotes — e.g. Toby: "The whole scale awareness is not really made for changing stuff afterwards"; "I was expecting… 'Oh cool, I can quickly change the whole scale of my full Ableton Live set.' It's not possible"; Ned Rush on the off-by-one scale-degree UI: "One scale degree means D, but D is the second note… which confuses me."
- Ecosystem validation logged: Toby "built an entire suite of Max for Live devices specifically because native Scale Awareness couldn't do what he wanted… He sells these as a paid product. This is direct validation that the native system is insufficient for power users."
- Output: a 9-row differentiator table (per-clip scope vs session-wide state; "Redundant modes (C Ionian = D Dorian)" vs scale classes) **and** tone guidance for how to talk about it — "Don't say: 'Better than Scale Awareness'… Do say: 'Does this annoy anyone else?'… Position as: **Commiseration, not competition**."

**Case-study value**: a cheap, repeatable user-research method (educators as proxy interviewees), executed with quote-level rigor, feeding directly into the Dashboard/Scale Awareness Bridge positioning. This is the research artifact behind the "one source of truth" framing.

### 13.2 Full-market competitive analysis (Jun 24, 2026) — `COMPETITORS.md` + 10 `competitors/intel_*.md` reports

A master competitor sweep ("plugins, DAWs, hardware, mobile/iOS, AI/generative, Max for Live, and academic/experimental harmony interfaces") synthesized from ten sub-reports. Method on display:
- **A falsifiable moat framework**: "Scale Navigator's defensible moat = all four at once: DAW-agnostic; broadcasts to third-party VST3/AU; Tymoczko scale-network map; live, navigable, shared harmonic state. Every competitor below fails at least one."
- **Three threat tiers + an academic/lineage tier** ("These are your ancestors and proof of seriousness, not rivals") — Tymoczko's ChordGeometries named as "the direct scientific precursor."
- **White-space conclusion**: "Across plugins, DAWs, hardware, mobile, AI, and M4L, **no product does all four**."
- **Intellectual honesty as a deliverable**: pitch-deck implication #1 is a self-correction — "Drop 'no exploration' against Scaler — Scaler 3 has an Explore Page; **the claim is now false and a credibility risk**."

### 13.3 Design-system reverse-engineering (Mar 5, 2026) — `freemium-models/ffosso/DESIGN-SYSTEM.md`

Nathan saved FFOSSO's (Orchestral Tools) shipped pages locally and **extracted its entire design system from the production CSS** "for reference in Scale Navigator redesign": full color-token palette (`--OBSIDIAN-BLACK: #282828`, `--INDIGO: #5a57ff`…), the Suisse Intl / Suisse Intl Mono type pairing with responsive heading scales and tracking values, the 12px/24px mobile/desktop spacing rhythm, button/chip/nav/form/lightbox component specs (including the `mix-blend-mode: difference` fixed-nav trick), breakpoints, and `prefers-reduced-motion` handling — closing with a distilled design-philosophy summary ("Minimal color… Subtle interactions — opacity changes on hover, not color changes"). **Case-study value**: token-level study of a professional design system as design-craft practice — the kind of artifact that shows *how* a designer learns from shipped work.

### 13.4 Business-model + launch-strategy teardowns (Mar 5–6, 2026) — `freemium-models/ffosso/FFOSSO-ANALYSIS.md`, `freemium-models/chromola/CHROMOLA-ANALYSIS.md`, `tamber.md` (May 2026)

- **FFOSSO**: freemium teardown with the transferable insight stated up front — "**They gate content, not features.** The free tier has full functionality—you just get fewer instruments" — mapped into four explicit monetization options for Scale Navigator.
- **Chromola**: a competitor's Reddit beta launch observed in the wild (7-subreddit posting matrix with upvote counts, incentive-structure analysis: "Beta expires June 1st… lifetime access for anyone who provides constructive feedback"), ending in a concrete recommendation — "**Yes, create a Scale Navigator Discord before beta launch**" with a proposed channel list. **The Discord was subsequently created with almost exactly that channel structure** (#announcements, #general, #support, #beta-feedback, #feature-requests) — a documented research → recommendation → shipped-decision loop.
- **Tamber** ($5M Adobe-backed launch, May 2026): threat triage (direct competition LOW, synergy HIGH) plus honest self-critique of Nathan's own naming: "Their names are warmer. Ours are more technical."
- Also present: `REDDIT_POST_EXAMPLES.md` (annotated community-launch post patterns + a drafted Scale Navigator template) and `ffosso-intro-transcript.txt` (transcribed competitor launch video). Minor; method context only.

**Section 13 case-study value**: dated proof that the 2026 beta/launch decisions were research-backed — a designer-shaped evidence trail (proxy user research → competitive white-space → design-system study → strategy recommendation that shipped) rather than post-hoc rationalization.
