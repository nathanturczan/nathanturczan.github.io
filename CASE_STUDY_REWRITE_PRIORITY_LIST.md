# Case Study Rewrite Priority List

**Portfolio:** nathanturczan.com
**Date:** 2026-06-30
**Status:** Pre-rewrite audit complete

---

## STATUS UPDATE (2026-07-05) — read before executing the checklist

The gathering campaign that followed this audit produced five materials docs + an evidence index. **The text-level guidance below is still valid, but execute it against the gathered facts, and note these supersessions:**

1. **"Team · 1" is now WRONG as written.** Nathan has since decided to credit collaborators by name (matching the app's own shipped Credits list): Jono + Dylan Freeman (UI design, 2021), Jason Gardinier (graphic design), Ondřej Sedláček (p5.js animation contractor, 2021–22), Nathan Ho (SNaPS, Boyd algorithm), Michael Maurer (notation rewrite), Colin Honigman + Dexter Shepherd (CalArts mentors who pair-programmed the earliest build), Chromatone/davay + Michael Norris (adapted/prior-art credits), Lily Clark (Jan 2026 redesign crit — pending 4c decision). And also NATHAN HO helped. The metadata block should distinguish Nathan's role (design + engineering, everything shipped) from credited collaborators — not claim solo. Contractor-exclusion rule still applies (Devereux, Fulcher, Selkani, Fernandes, Tariq never named).
2. **Tonalign missing beats (4, 8) now have material**: JUCE forum origin w/ Brady Boettcher, the D 6/9→Dm11 chord-naming bug, and the Jan 2022 provenance of "AutoTune for MIDI" (YouTube demo title, 4 years pre-rebrand). See `TONALIGN_REWRITE.md` — all questions closed.
3. **SNaPS section**: page/thesis header dates are wrong — 2022→**2021** start, 2024→**Mar 2026** plugin. The "what broke" beat = the Feb 17, 2026 SuperCollider timer crash (16ths @ 250 BPM) that triggered the JUCE port. See `SNAPS_REWRITE.md`.
4. **Dashboard "small polish" is now a bigger job**: a full prologue is planned (`DASHBOARD_PROLOGUE_REWRITE.md`), fed by the recovered April 2020 draft case study + process sketches in `portfolio/scale_nav_explanation/`. Nathan has answered "go as dark as the quote is" on critical feedback.
5. **NCS decision resolved**: keep and expand — credit Michael Norris with link, airboat demo judged weak ("not a good demo") and needs a replacement clip. See `NOTESCHORDSSCALES_REWRITE.md` — all questions answered.
6. **All rewrites remain GATED**: gathering mode until Nathan pulls the trigger.

---

## ROADMAP — Structural improvements (added 2026-07-05, per Nathan; no action yet)

Nathan's directive: "i dont need you to take action on all of this, rather add it to the relevant rewrite priority list and roadmap." These are portfolio-infrastructure ideas, mostly executable after (or alongside) the case-study rewrites:

1. **Tag every artifact.** Every screenshot eventually gets metadata tags (e.g. `navigator, wireframe, 2021, mobile, visualization, iteration, android`) so queries like "show me every visualization redesign" work without relying on filenames. Natural home: a manifest file in `images/` or front-matter per artifact in the evidence index.
2. **`design_principles.md`** — record recurring design principles separately from features. Candidates Nathan already sees everywhere: remove cognitive load, shared harmonic state, behavior over appearance, preserve continuity, exploration before capture, subtraction over addition. Each principle gets: first appearance, products used in, examples. Expectation: the same 8–12 principles recur across a decade.
3. **Collaborator pages (`people/`).** Instead of mentioning Jono Freeman in four places, one page each: `jono-freeman.md`, `ondrej.md`, `brady.md`, `nathan-ho.md`, `dexter.md`, etc. Each: when we worked together, what they owned, projects, links, photos if any. Case studies then reference these. **Source material:** `/Users/soney/Github/scale-navigator-dashboard/COLLABORATOR_CONTACTS.md`, `/Users/soney/Github/marketing/collaborators`, `/Users/soney/Github/lalork/collaborators`, `/Users/soney/Documents/archive/Collaborations`. **Contractor-exclusion rule still applies** (Devereux, Fulcher, Selkani, Fernandes, Tariq get no pages, no mentions).
4. **Ideas that died.** Actively collect removed UI, abandoned interactions, wrong assumptions, failed experiments (removed edges, killed heat map, switched naming). Portfolio material that shows evaluating ideas instead of accumulating them.
5. **`quote-bank.md`.** Collect real quotes: Arthur (already have), the pianists, Jono, Christoph, Nathan Ho — from Slack, emails, texts, comments. Real quotes make case studies feel alive.
6. **Cross-link products ("Related work" section on every page).** Biggest structural improvement: the products currently read as islands. Example on Dashboard: "led to Tonalign / powers Ensemble Jammer / feeds SNaPS / inspired NotesChordScales." Tonalign points back to Dashboard, Ensemble Jammer points to Dashboard, etc. Reinforces one evolving ecosystem, not five unrelated projects.
7. **"Things I Changed My Mind About" document.** For every reversal found in the archive, record: Decision / Why I did it / Why I changed my mind / Result. Interview prep: "Here's something I believed in 2021 that I no longer believe."

---

## Strategic Frame

> Her portfolio says "I know the UX process." Yours says "I invent products."
>
> For Junior UX Designer, you'd copy her. For Apple Product Designer / Creator Studio, you must not move one inch toward her. Every edit should make you more the person who ships real software, not more the person who completed the exercise.

---

## STEAL (from Clarisa Canlas)

### 1. Metadata block on every project

Standardize this format across all five case studies:

```
Role · Designer + Engineer (sole)
Team · 1
Platforms · Web · iOS · Android · Plugin
Duration · 2021–Present
```

**The "Team · 1" line is the strongest thing here.** It silently says "I did all of this alone" without bragging. Keep it on every page even when it feels redundant. Redundancy across pages IS the consistency you want.

### 2. Label your iterations "Iteration"

You already have five of the best iteration stories in any portfolio — you just narrate them instead of tagging them. Add the literal word as a **kicker/eyebrow** above each pivot section:

| Case Study | Eyebrow | Evocative Header (keep) |
|---|---|---|
| Dashboard | `Iteration` | The sketchpad |
| Ensemble Jammer | `Iteration` | The salon test |
| Ensemble Jammer | `Iteration` | The campfire problem |
| Tonalign | `Iteration` | Held notes |
| Downhome Blues | `Iteration` | What Titon taught me |

**Keep your evocative header underneath** — the eyebrow signals to skimmers, the header pulls them in to read. Both, not either.

### 3. Consistency of architecture

This is the big one. One skeleton across all five so it reads as one author, one portfolio. See "The 8-Beat Spine" below.

---

## DO NOT STEAL (from Clarisa Canlas)

### 1. Personas

Portfolio wallpaper. "Emma, 26, Graphic Designer" makes no one believe the design more.

**Your real named humans — Arthur Carabott, Jeff Todd Titon, Nathan Ho, Brady Boettcher, Christoph — are worth more than any invented persona because they're evidence, not decoration.**

Never add a fictional persona.

### 2. Bootcamp checklist headers

POV, HMW, Objectives, Affinity Map as literal section titles — that's the vocabulary of "I completed the assignment," not "I shipped the thing." It signals junior.

**Never use:** POV, HMW, Affinity Map, User Journey, Competitive Analysis as section headers.

### 3. Empty reflective "Wrap Up" paragraphs

Every one of hers ends in fluff ("great design is as much about listening as building"). That's your exact enemy.

Your equivalent — the honest unfinished note — is the opposite and must stay:
> "It still doesn't sound like blues. But it sounds like something."

### 4. Process for its own sake

She documents everything equally. You document the turning points. Don't dilute.

---

## The 8-Beat Spine

This architecture is derived from your own best work — Ensemble Jammer and Downhome Blues already follow it. You're not importing a foreign structure; you're extracting the one your strongest studies discovered and applying it to the weaker three (Tonalign, SNaPS, Dashboard) that currently read as description.

| Beat | What it does |
|---|---|
| **1. Constraint** | One flat sentence, up top, before the essay |
| **2. Why existing approaches failed** | The gap you're filling |
| **3. First prototype** | What you built to start |
| **4. What broke** | The test/failure that exposed the flaw ← *your signature move* |
| **5. Iteration** | Literally labeled |
| **6. Design decisions** | What you chose and rejected |
| **7. Outcome** | Delta + measurement, even if "shipped, used as X" |
| **8. What's still unfinished** | The honest note |

### Current state by case study:

| Case Study | Has all 8? | Missing beats |
|---|---|---|
| Ensemble Jammer | ✓ | — |
| Downhome Blues | ✓ | — |
| Dashboard | Mostly | Constraint not upfront; outcome buried |
| Tonalign | No | Missing 4, 5, 7, 8 |
| SNaPS | No | Missing 4, 5, 7 |

---

## The Meta-Pattern

Across all five case studies, your instinct is to explain **what you built**. The pages get dramatically stronger whenever you instead explain **what decision you had to make**.

This is the sentence-level transformation that needs to happen throughout:

| Current (feature) | Reframe (decision) |
|---|---|
| "It has three glide modes" | "I couldn't find one behavior that felt correct across every musical situation, so I refused to hard-code one" |
| "It supports Bluetooth" | "A backpacking trip exposed that my instrument stopped existing the moment Wi-Fi disappeared" |
| "The sketchpad lets you save ideas" | "Arthur showed me exploration without capture isn't composition" |

**Evidence > Metrics for creative tools:**
- Weak: "427 downloads"
- Strong: "This became the harmonic engine every later Scale Navigator product subscribes to"
- Strong: "This became the instrument I perform with"
- Strong: "Arthur's critique resulted in a feature that now sits at the center of the product"

---

## Scorecard Summary

| Case Study | Score /16 | Main Gaps |
|---|---|---|
| Dashboard | 14 | Constraint not stated upfront; Arthur callback not framed as outcome |
| Ensemble Jammer | 15 | No outcome attached to v2/v3 redesigns |
| Tonalign | 11 | Reads as feature list; zero outcome; held-notes not framed as decision |
| SNaPS | 11 | Great craft buried; reads as release notes; zero outcome |
| Early Downhome Blues | 15 | Fake-profundity ending |

---

## Priority Order

1. **Tonalign** — largest improvement per hour
2. **SNaPS** — second largest improvement
3. **Dashboard** — small polish
4. **Early Downhome Blues** — trim the ending
5. **Ensemble Jammer** — leave almost entirely alone

---

## Detailed Rewrites by Case Study

---

### 1. TONALIGN (Priority: Highest)

**File:** `projects/tonalign.html`

**Current problem:** Reads almost like documentation. The interesting part isn't "it snaps MIDI to a scale" — that's obvious. The interesting part is the held-notes edge case, which is currently stated as a feature, not a decision.

#### Change A: Rewrite the "Held notes" section

**Current text (lines 52-56):**
```
What happens when you're holding a note and the scale changes underneath you? You can choose whether held notes glide to the new pitch, cut off, or stay put.
```

**Replace with:**
```
What happens when you're holding a note and the scale changes underneath you?

There isn't a universally correct answer. A pianist expects the note to stay where it is. A synth player might expect it to glide. Someone triggering orchestral samples may want the old note cut off entirely.

Rather than pick one behavior, I shipped three modes—glide, stay, and cut—with glide as the default because it preserved harmonic continuity during live performance.
```

**Why:** Now shows ambiguity → tradeoff → decision → default → rationale. This is exactly what hiring managers look for.

#### Change B: Add outcome sentence

**Current:** Page ends with download/video links and "Related projects"

**Add before "Related projects":**
```
<div class="project-text-section">
    <h3>Where it is now</h3>
    <p>
        Tonalign ships as part of the Scale Navigator ecosystem and is the MIDI correction layer used in every live session I run.
    </p>
</div>
```

**Why:** You don't need download numbers. "Used in every live session I run" is evidence.

---

### 2. SNaPS (Priority: High)

**File:** `projects/snaps-plugin.html`

**Current problem:** Contains your deepest engineering work but reads like release notes. The structure (Tagging → Behavior → Glide curves → Exit modes) is feature-organized, not story-organized.

#### Change A: Restructure around decisions

**New structure:**
1. **The constraint** — "Samples shouldn't restart when harmony changes"
2. **The first bottleneck** — manual tagging blocked scale
3. **The second bottleneck** — behavior (glide curves, exit modes)
4. **What I shipped**

#### Change B: Move thesis sentence to opening

**Current location:** Buried in "Behavior" section (line 66-67):
```
The interface barely changed from prototype to release. Almost all the design work happened in the behavior.
```

**Move to:** Opening of "Behavior" section, or better, make it the thesis of the entire case study after the intro.

**Why:** This is the best sentence on the page. It signals senior-level thinking: "The hard part wasn't the UI."

#### Change C: Add outcome

**Current ending (line 98-99):**
```
I've performed with it for years; the plugin port brings that to any DAW.
```

**Strengthen to:**
```
I've performed with the SuperCollider version for years—it's my primary live instrument. The plugin port packages that workflow for any DAW. Released free alongside Dashboard.
```

---

### 3. DASHBOARD (Priority: Medium)

**File:** `projects/scale-navigator-dashboard.html`

**Current state:** Already excellent. Two small changes.

#### Change A: State constraint immediately

**After (line 38-39):**
```
What if the interface where I make that decision is itself a map of where harmony can go?
```

**Add:**
```
The constraint: it had to work while someone was making music, not after.
```

**Alternative phrasing:**
```
The constraint: the interface had to be useful mid-performance, not just for exploration.
```

#### Change B: Close Arthur's story as resolved narrative

**Current (lines 69-73):**
```
It took years to get right, but I eventually built a sketchpad where you can save scale/chord pairs and arrange them into progressions. You explore the network, find something you like, and drag it in.

I emailed Arthur again in 2026 to tell him the feature finally existed. He'd moved to Splice by then and was writing a book on music UI.
```

**Replace with:**
```
It took years to get right, but I eventually built a sketchpad where you can save scale/chord pairs and arrange them into progressions. You explore the network, find something you like, and drag it in.

The critique that started in 2021 ended in 2026. The two missing pieces Arthur identified—capturing ideas and learning from them—became the sketchpad. I emailed him to tell him the feature finally existed. He'd moved to Splice by then and was writing a book on music UI.
```

**Why:** Now it's a complete narrative with a resolved outcome, not just an anecdote.

---

### 4. EARLY DOWNHOME BLUES (Priority: Low)

**File:** `projects/early-downhome-blues.html`

**Current state:** Tied for strongest case study. One trim needed.

#### Change A: Cut the fake-profundity ending

**Current ending (lines 97-100):**
```
I started thinking I was building an interface for a musicological model. I finished realizing that musical style lives in far more than pitch transitions.
```

**Delete entirely.** The stronger ending already exists two paragraphs up:

```
And honestly, it still doesn't sound like blues. But it sounds like something — an interesting abstraction of blues, a machine's interpretation of the rules without the feel.
```

**Why:** "I started thinking / I finished realizing" is the AI-cadence pivot structure Nathan's style guide explicitly forbids. The plainer version is more memorable because it doesn't try to sound profound.

---

### 5. ENSEMBLE JAMMER (Priority: Lowest)

**File:** `projects/ensemble-jammer.html`

**Current state:** Your best case study. Already has the Simon Pan structure: real problem → build → test that revealed a flaw → redesign in response. Twice (v1→v2, v2→v3).

#### Change A (Optional): Add one qualitative outcome after v2 redesign

**After (line 76, currently empty):**
```
At the next session, players spent noticeably more time looking at one another than looking at their screens.
```

**Why:** Even qualitative observation counts as evidence. But honestly, this page works without it.

#### Change B: Fix empty HTML elements

**Line 75-76:** Empty `<p></p>` tag — delete or populate
**Line 103:** Truncated text section — complete or delete

---

## Additional Issues

### SOULS (not scored, but noted)

**File:** `projects/souls.html`

**Current problem:** Zero narrative. Just images, videos, and external links. No problem, no process, no contribution.

**Options:**
1. Write it properly (explain your contribution to procedural audio for 10,000 unique characters)
2. Demote to a simpler "client work" treatment with 2-3 sentences max
3. Remove from main navigation, keep in archive only

### (((Notes)Chords)Scales))) (not scored, but noted)

**File:** `projects/notes-chords-scales.html`

**Current problem:** 80+ word description crammed into the header tagline. Body is just bullet points. The airboat composition mentioned in the description is intriguing but unexplained.

**Fix:**
- Move the long description into body text
- Add 2-3 paragraphs explaining the airboat composition and what the tool revealed
- Or demote to archive-only if this isn't a priority project

### Image/Caption Association

**Pattern across all pages:** Images follow text sections but lack explicit `<figcaption>` elements. For scanning readers, it's unclear which images relate to which story beats.

**Options:**
1. Add `<figcaption>` elements to key images
2. Consolidate image/text pairs more tightly
3. Leave as-is (current structure works for linear reading)

---

## Checklist

### Structural Changes (STEAL)

- [ ] **All 5 pages:** Add standardized metadata block (Role · Team · Platforms · Duration)
- [ ] **All 5 pages:** Include "Team · 1" line
- [ ] **Dashboard:** Add `Iteration` eyebrow above "The sketchpad" section
- [ ] **Ensemble Jammer:** Add `Iteration` eyebrow above "The salon test" section
- [ ] **Ensemble Jammer:** Add `Iteration` eyebrow above "The campfire problem" section
- [ ] **Tonalign:** Add `Iteration` eyebrow above "Held notes" section
- [ ] **Downhome Blues:** Add `Iteration` eyebrow above "What Titon taught me" section

### Content Rewrites

- [ ] **Tonalign:** Rewrite held-notes section as decision (ambiguity → tradeoff → decision → default → rationale)
- [ ] **Tonalign:** Add outcome sentence ("MIDI correction layer used in every live session I run")
- [ ] **Tonalign:** Add "What broke" beat (currently missing)
- [ ] **Tonalign:** Add "What's still unfinished" beat (currently missing)
- [ ] **SNaPS:** Move "interface barely changed" thesis to opening
- [ ] **SNaPS:** Restructure around constraint → bottlenecks → shipped
- [ ] **SNaPS:** Strengthen outcome sentence ("primary live instrument")
- [ ] **SNaPS:** Add "What broke" beat (currently missing)
- [ ] **Dashboard:** Add constraint sentence after "map" line
- [ ] **Dashboard:** Rewrite Arthur callback as resolved narrative
- [ ] **Downhome Blues:** Delete "I started thinking / I finished realizing" sentence
- [ ] **Ensemble Jammer:** Add qualitative outcome after v2 (optional)
- [ ] **Ensemble Jammer:** Fix empty HTML elements (lines 75-76, 103)

### Decisions Needed

- [ ] **SOULS:** Decide: write it properly, demote it, or archive it
- [ ] **(((Notes)Chords)Scales))):** Move description to body, explain airboat
- [ ] **All pages:** Add `<figcaption>` elements? (optional)

---

## Time Estimate

| Task | Time |
|---|---|
| Add metadata blocks to all 5 pages | 20 min |
| Add `Iteration` eyebrows to all 5 pages | 15 min |
| Tonalign rewrites (content + missing beats) | 45 min |
| SNaPS restructure | 45 min |
| Dashboard polish | 15 min |
| Downhome Blues trim | 5 min |
| Ensemble Jammer fixes | 10 min |
| **Total (core 5)** | **~2.5 hours** |

SOULS and NotesChordScales are separate decisions that can wait.
