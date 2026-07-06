# Portfolio Editorial Guide

The style guide for every case-study page on nathanturczan.github.io. Created 2026-07-05, the day the evidence archive froze (`evidence-complete-2026-07-05`). Every rewrite, edit, and new page follows this document. When a rule here conflicts with an old page, the page is wrong.

**Role change, recorded**: the archaeology question was "what happened?" The editorial question is "what deserves to be remembered?" This guide answers the second question consistently across pages.

---

## 1. The meta-story (the spine every page hangs on)

The portfolio is one ecosystem, not six unrelated apps. The through-line, in four eras:

| Era | Question | Projects that answer it |
|---|---|---|
| **Exploration** (2018–2020) | How do people navigate harmonic space? | Scale Navigator (thesis, vanilla era), Dashboard origins |
| **Sharing** (2021–2022) | How do multiple people inhabit the same harmonic space? | Dashboard (React/Firebase), the ensemble vanilla era, first plugin attempts |
| **Performance** (2022–2024) | How do existing instruments connect to that space? | Tonalign, Pitch Class Router, Scale Awareness Bridge, NotesChordScales |
| **Capture** (2024–2026) | How do you keep the discoveries made inside that space? | Score, Sketchpad, SNaPS, Ensemble Jammer sessions |

Each case study should locate itself in this arc, ideally in one sentence, without belaboring it. The reader should finish the portfolio feeling the four questions, even if they're never listed.

## 2. Mandatory page structure

Every project page answers the same questions in the same order. Readers should never have to relearn the structure.

1. **Problem** — the situation, in behavior ("I kept losing chords I'd found"), not concepts
2. **Insight** — the idea that reframed it
3. **Prototype** — at least one image of an early/rough state (sketch, wireframe, first build)
4. **Iteration** — what changed and why, with the crit or evidence that drove it
5. **Failure** — at least one honest miss, named plainly
6. **Final solution** — what shipped
7. **Outcome** — usage, testimony, demos, downstream effects
8. **Related work** — see §5

A page may merge adjacent sections when the material demands it, but no section may be silently absent. If a page has no prototype image, the fix is to find or make one, not to skip the section.

## 3. Content rules

- **Show behavior, not just UI.** Screenshots of interfaces are inventory; a person doing something with the interface is evidence. Prefer the airboat harmonizing, the dinner-party soloists, the usability-test transcript moment.
- **At least one moving artifact per page** (GIF, video embed, or screen recording). Static-only pages are incomplete.
- **At least one prototype/sketch/early artifact per page.** The Apple JD asks for "prototypes, sketches, high-fidelity mockups" — the pages must visibly contain the middle of the process, not just the end.
- **At least one failure per page**, stated without cushioning. ("The first Dinner Party Jam video had too many issues; the crit said scrap it and start again. It was right.")
- **Credit prior art by name, with links.** Michael Norris (Pressing Scale Explorer → NotesChordScales), Nathan Ho (Venn7), Chromatone Drone, Tymoczko (everywhere), Chordie (tablature-tab germ). "I used the best available tool for years, then built the version that keeps up with a performance" is a design-judgment arc, not a confession.
- **Credit collaborators and advisors by name** when their contribution shaped a decision: Ben Tillotson (plugin demand, saturated root colors), Arthur Carabott (the capture reframe), Lachlan (footage review), Elvis Bates (usability test), Michael Maurer (early React architecture), Dmitri Tymoczko (foundation, and the 2022 + 2026 meetings). Never write "Team · 1."
- **EXCLUSION LIST (absolute)**: Devereux, Fulcher, Selkani, Fernandes, Tariq are never named anywhere on the site. Seraphina is never featured in public case-study text. Lachlan's personal-life material stays out of public text; his design contributions are fine.
- **Dates come from SCALE_NAVIGATOR_EVIDENCE.md**, never from memory. Anything dated on a page must trace to an evidence-section entry.

## 4. Consistency canon (check every page against this)

Terminology:
- **Scale classes, not modes.** Never describe the system in mode vocabulary.
- **"57-scale network"** is fine in technical/case-study context (it's documentation, not a marketing headline).
- Product names, exactly: **Scale Navigator Dashboard** (or "Dashboard" after first mention), **Tonalign** (never PitchSnap on current pages; the rename chain is itself a story and may be told as history), **Ensemble Jammer**, **NotesChordScales** — styled **(((Notes)Chords)Scales)))** only in its own page's title treatment — **SNaPS**, **Scale Awareness Bridge**, **Pitch Class Router**.
- **"Harmonic middleware"** is banned in resume/application copy (scrubbed claim) — on the portfolio use behavioral descriptions ("one interface that tells the rest of the session what the harmony is").

Anchor dates (canonical, from EVIDENCE.md):
- Vanilla ensemble era file dates back to Aug 2020/Jan 2021; earliest external share Feb 27, 2021
- Dashboard React repo first commit **Jul 23, 2021**
- Arthur Carabott feedback Aug 2021; Tristan Whitehill QA report Aug 21, 2021
- Shopify launch push Jan 19, 2022; Tymoczko meetings **Feb 23, 2022** and **Feb 23, 2026**
- Nathan leaves job ~Nov 2025; Ensemble Jammer first commit Dec 2, 2025
- Ben Tillotson session Dec 30, 2025 (plugin demand; color crit)
- JUCE plugin wrap complete by Feb 13, 2026; Score ships Feb 2026; Sketchpad Mar 2026
- Dashboard iOS on App Store Mar 29, 2026; Elvis Bates usability test Mar 23, 2026
- CalArts talk Apr 20, 2026; Dinner Party Jam + crit May 2026; LALORK begins, first public event Aug 15, 2026

## 5. Related Work (mandatory footer, every page)

Every project page ends with a Related Work block linking sibling case studies, each with a one-line reason the reader should care ("Tonalign — the same scale state, enforced on live MIDI"). Every project becomes evidence for every other project. Suggested default order: Dashboard → Tonalign → Ensemble Jammer → NotesChordScales → SNaPS, minus the current page.

## 6. Prose style (from Nathan's writing rules — binding)

- Colons over em-dashes for introducing elaborations; forward slashes for synonyms; Oxford comma
- Flowing, continuous prose: relative clauses over fragments; stitch short sentences into longer connected ones; verbs that activate nouns
- **Banned**: "Not X, it's Y" pivot structures; theatrical fragments ("And I listen."); manufactured revelation cadences; em-dashes for drama; explanatory tails the reader doesn't need
- Tone: a musician observing what happened, not someone framing a contribution. Understated. Let the musical situation carry the theory.
- No emojis. No superlatives about own work; let testimony carry praise (Miša: "probably the first midi generator that I actually enjoyed").

## 7. Tighten pass (mandatory, last)

After a page is "done": cut 20%. Then cut another 10%. The story gets stronger. Things that survive the cut: dated facts, named people, behavior, images. Things that don't: throat-clearing, restated theory, second adjectives.

## 8. Media checklist (per page)

- [ ] 1+ prototype/sketch/early-state image
- [ ] 1+ moving artifact (GIF / video / screen recording)
- [ ] 1+ image showing a person or performance, where one exists
- [ ] Before/after or timeline graphic where the page claims iteration
- [ ] All images have alt text; all embeds have a one-line caption saying what to notice

## 9. Definition of done (per page)

1. All eight structure sections present (§2)
2. Consistency canon pass (§4): names, dates, terminology
3. Exclusion-list scan (§3)
4. Related Work footer present (§5)
5. Media checklist satisfied (§8)
6. Tighten pass done (§7)
7. Nathan has read and approved the page before merge to the default branch
