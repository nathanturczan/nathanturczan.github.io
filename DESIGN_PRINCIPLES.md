# Design Principles

The recurring principles behind the Scale Navigator ecosystem, extracted from a decade of shipped work (2018–2026). These are not features. They're the reusable decisions that show up again and again across Dashboard, Tonalign, SNaPS, Ensemble Jammer, and (((Notes)Chords)Scales))). Each records where it first appeared, the products it governs, and the concrete evidence.

**Rule for keeping this honest:** a principle earns a place here only when it has fired in at least two products AND shaped a real decision (something chosen, something rejected). No aspirational entries.

---

## 1. Behavior over appearance

**The claim:** The interface is rarely where the design work is. The hard part is how a thing *behaves* — how a sound glides, how a note exits, how harmony propagates — not how it looks.

- **First appearance:** SNaPS SuperCollider engine (2021), where the glide-and-exit logic was the entire design surface.
- **Products:** SNaPS, Tonalign, Dashboard.
- **Evidence:** SNaPS page thesis, promoted to the top of the rewrite: "The interface barely changed from prototype to release. Almost all the design work happened in the behavior." Tonalign's deepest decision (held-note glide/stay/cut) is behavioral, not visual. The parsimony cost function is a pure behavioral spec with no UI at all.
- **What it rejects:** UI-first design; treating a screenshot as the deliverable.

## 2. Shared harmonic state (one source of truth)

**The claim:** Harmony is a single state that every instrument subscribes to, not a setting each tool configures independently. State the harmony once; the whole session follows.

- **First appearance:** Scale Navigator integration in SNaPS week one ("Debounce scale changes from MIDI," March 26, 2021) — the engine listening to Dashboard's scale changes.
- **Products:** Dashboard (the broadcaster), SNaPS, Tonalign, Ensemble Jammer (all subscribers).
- **Evidence:** Tonalign "subscribes to Dashboard's shared harmonic state and corrects against whatever chord or scale the room is currently in, no configuration." On the Feb 17 2026 debugging call, Nathan wires it live as routine practice: "I've got Scale Navigator emitting scale class and chord root."
- **What it rejects:** per-tool harmony settings; making the musician re-state the key in five places.

## 3. Subtraction over addition

**The claim:** The strongest version of a tool is usually the one with fewer controls. Amputate features that don't belong in the moment, even ones you designed and liked.

- **First appearance:** Tonalign's shipped UI (2022) — the full navigator network was in the mockups and got cut.
- **Products:** Tonalign, Dashboard (Lily Clark 2026 redesign), Ensemble Jammer.
- **Evidence:** Tonalign "is the mockup with the navigator amputated, because a plugin's job is to stay out of the musical moment." The three-keyboard in/map/out flow folded to one row. The Jan 2026 redesign brief, verbatim: "get rid of all rounded edges. change the font. get a new logo, make it SIMPLE." Lily Clark's note: "remove the black stroke around the shapes entirely."
- **What it rejects:** feature accumulation; keeping something because it was hard to build.

## 4. Continuity across change (never restart)

**The claim:** When the harmony moves, the sound that's already sounding should survive the change — it should lean, glide, or exit on purpose, never silently retrigger.

- **First appearance:** SNaPS glide engine (2021).
- **Products:** SNaPS, Tonalign.
- **Evidence:** "a playing sample should never restart to follow the harmony — it should glide." Tonalign's held-note INTERRUPT toggle re-pitches sustaining voices at the instant of modulation. The whole SNaPS premise: a violin sustaining through a chord change "doesn't restart — it keeps singing through the change."
- **What it rejects:** cut-and-retrigger as the default; treating each note as an isolated event.

## 5. Exploration before capture

**The claim:** A creative tool has two jobs, and they're separable: helping you *find* something, and helping you *keep* what you found. Building the first without the second is only half a product.

- **First appearance:** Arthur Carabott's 2021 critique of Dashboard — that exploration without capture isn't composition — resolved as the Sketchpad in 2026.
- **Products:** Dashboard (Sketchpad), Librarian (sketchpad progression matcher), the "Capture" era of the whole ecosystem (2024–26).
- **Evidence:** Dashboard's Arthur arc: "The two missing pieces Arthur identified — capturing ideas and learning from them — became the sketchpad." Portfolio meta-story explicitly frames Capture (2024–26) as its own era: "How do you keep the discoveries made inside that space?"
- **What it rejects:** navigation-only tools that let good ideas evaporate.

## 6. The failure is the instrument

**The claim:** When something can't fit the rules, don't hide it or mute it. Make the failure audible and expressive — a gesture you can compose with, not an error state.

- **First appearance:** SNaPS exit modes (2021) — samples that can't fit the scale.
- **Products:** SNaPS, Tonalign.
- **Evidence:** A sample that can't fit "is not suppressed — the Scale Rack's mistake — but given a theatrical exit: a stutter, a filter sweep, a Doppler-style pitch drop." The thesis line: "in SNaPS the modulation *is* the event." Tonalign's INTERRUPT turns a silent background shift into an audible event.
- **What it rejects:** silence as a failure state; the tool pretending nothing broke.

## 7. Least sufficient motion (parsimony)

**The claim:** When many voices must move, each should move by the smallest interval that works, with a slight downward gravity — the way trained ensembles actually voice-lead. Model behavior on how humans do it, not on what's technically nearest.

- **First appearance:** SNaPS cost function (thesis-era, formalized in the engine).
- **Products:** SNaPS; conceptually echoed in Tonalign's "nearest available neighbor" correction.
- **Evidence:** "the cost of a candidate transposition is its size in semitones plus a fixed penalty for upward motion… ties resolve downward… the aggregate texture therefore modulates the way trained voices do, by the least sufficient motion." The Ho glide curve encodes how instrumentalists physically connect pitches.
- **What it rejects:** naive nearest-tone transposition; arbitrary leaps.

## 8. Credit the prior art and the collaborators by name

**The claim:** Name who built what, link to them, credit the sources you adapted. Honest attribution is a design value, not a legal afterthought.

- **First appearance:** SNaPS, 2022 — crediting Nathan Ho unprompted in a private text ("a super collider back end coded by Nathan ho").
- **Products:** every case study; the app's own shipped Credits screen.
- **Evidence:** the Ho glide curve credited on-page with a link to his oddvoices dev log; Tonalign crediting Brady Boettcher and the Freemans; the app Credits list matching the case-study bylines.
- **What it rejects:** the "Team · 1" solo-hero framing; silently absorbing others' work.

## 9. Design as a specification of movement, not a mockup

**The claim:** For a creative-tools designer, the artifact is often a rule, a curve, or a cost function — a precise description of how something should move — rather than a picture.

- **First appearance:** the Ho glide curve spec (quarter-semitone dip before an ascending glide; half-semitone overshoot on descent).
- **Products:** SNaPS, Tonalign.
- **Evidence:** the cost-function arithmetic (§7); the glide-curve behavior; Tonalign's in/out delta drawn as a signal-flow spec (three keyboards → one folded row).
- **What it rejects:** equating "design" with "high-fidelity Figma frame."

---

## Candidates not yet promoted (need a second product before they qualify)

- **"Vibecode to learn the tool"** — the Jul 2025 Librarian sessions were Nathan's first personal vibecoding; strong story, but so far mostly one product's origin.
- **"The ledger is the changelog"** — the PayPal-notes-as-dev-log pattern is vivid but is documentation practice, not a design principle.
- **Remove cognitive load** — plausible across Dashboard + the Lily redesign, but currently overlaps too much with #3 (Subtraction). Merge or split once there's a distinct decision it uniquely explains.

---

*Sources: SNAPS_REWRITE-8.md, TONALIGN_REWRITE-6.md, SCALE_NAVIGATOR_EVIDENCE-5.md, DASHBOARD_PROLOGUE_REWRITE-2.md, PORTFOLIO_EDITORIAL_GUIDE-4.md. Every quote is from evidence, not memory.*
