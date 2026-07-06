# Things I Changed My Mind About

Interview-prep doc. Every entry is a real reversal from the archive, in the format: **Decision / Why I did it / Why I changed my mind / Result.** The Apple-interview use is direct — "Here's something I believed in 2021 that I no longer believe" is one of the strongest things you can say in a design interview, because it proves you evaluate ideas instead of accumulating them.

**Delivery note for the room:** lead with the belief, not the correction. "I was sure X was right. Then Y happened. Now I do Z." Keep the failure at full strength — the reversal is the credential.

---

## 1. Solo-hero framing → credit collaborators by name

- **Decision:** Present every project as "Team · 1" — one designer-engineer who did everything.
- **Why I did it:** It felt like the strongest portfolio claim. If I built it alone, nobody could ask what my contribution was.
- **Why I changed my mind:** It wasn't true, and the truth was more impressive. The archive is full of other people's fingerprints: Nathan Ho's SuperCollider engine, Brady Boettcher's five years of C++/JUCE pairing, Dylan Freeman's Figma refinements, Arthur Carabott's capture critique, Ben Tillotson asking for the plugin in the first place. Erasing them made the work look smaller and my judgment look worse — knowing who to bring in and which critique to act on *is* the design work.
- **Result:** Deleted "Team · 1" from every page and replaced it with named credits and links, matching the Credits screen the app already shipped. "Credit the prior art and the collaborators by name" is now a standing design principle (#8 in design_principles.md), and the case studies got stronger for it: a reviewed PR into a collaborator's repo is better evidence than a lonely claim.

## 2. Hard-code one glide behavior → expose it as a choice

- **Decision:** Pick the single "correct" behavior for what happens to a held note when the scale changes underneath it, and build that.
- **Why I did it:** One clear default is simpler to build and simpler to explain. Every good tool has an opinion.
- **Why I changed my mind:** There is no universally correct answer. A pianist expects the note to stay. A synth player expects a glide. Orchestral samples may want a clean cut. Hard-coding one meant the plugin would fight every player whose instrument disagreed.
- **Result:** Shipped three modes — glide, stay, cut — with glide as the default because it preserved harmonic continuity in live performance. "There isn't one behavior that's correct for every instrument, so I exposed it as a choice instead of hard-coding one." (Tonalign; the same instinct produced SNaPS's family of glide curves.)

## 3. Put the whole navigator network inside the plugin → amputate it

- **Decision:** Build the full Scale Navigator network into the Tonalign plugin window. It was in the Feb 2022 mockups.
- **Why I did it:** More power in one place. If the network is useful in Dashboard, it should be useful in the plugin too.
- **Why I changed my mind:** A plugin's job is to stay out of the musical moment. The three-keyboard in/map/out flow was already too much surface for a plugin window; the whole network was far too much. The player is performing, not exploring — and Dashboard already *was* the place to explore the network.
- **Result:** Cut it. The shipped Tonalign is the mockup with the navigator amputated; the three-keyboard flow folded down to one keyboard row. Subtraction made it usable.

## 4. Silence the samples that don't fit → give them a theatrical exit

- **Decision:** When a sample's pitch content can't fit the current scale at any transposition, suppress it.
- **Why I did it:** It's the safe move — a note that clashes is worse than a note that's missing. (This was the earlier Scale Rack's approach.)
- **Why I changed my mind:** A muted voice is a hole in the texture and a silent admission that the tool broke. Silence-as-failure hides the most interesting moment: the instant the harmony changes.
- **Result:** In SNaPS a sample that can't fit gets a stutter, filter sweep, or Doppler drop — stackable. The failure became a compositional gesture. "In SNaPS the modulation *is* the event."

## 5. Nearest-tone transposition → a voice-leading cost function

- **Decision:** Move each sample to the nearest scale tone when the harmony changes.
- **Why I did it:** It's the obvious rule and the cheapest to compute.
- **Why I changed my mind:** "Nearest" produces wandering, arbitrary motion — voices leaping in whatever direction is technically closest. Real ensembles don't sound like that; trained voices move by the least sufficient motion with a slight downward gravity.
- **Result:** Replaced the rule with a cost function: size in semitones + a penalty for upward motion, bounded range wider below than above, ties resolve downward. The texture now modulates the way an ensemble does. The deepest design decision in the ecosystem — and it has no UI at all.

## 6. "SuperCollider is my instrument forever" → port to C++/JUCE

- **Decision:** Keep building and performing on the SuperCollider version of SNaPS indefinitely.
- **Why I did it:** It was my primary live instrument for years — everything sample-based I released before 2026 runs on it. It worked.
- **Why I changed my mind:** It hit a hard ceiling. Push it to 16th notes at ~250 BPM and it crashed — a limitation of the SuperCollider language itself, not my code. The Feb 17 2026 debugging session with Ho confirmed the timing math wouldn't hold. The instrument had outgrown its language.
- **Result:** Started the C++/JUCE plugin three weeks later (first commit Mar 8 2026). The crash that I couldn't cleanly solve, I outran by moving to a language where the timing works. The plugin exists *because* the first version broke.

## 7. Manual sample tagging → automatic transcription (and softening a purist stance on ML)

- **Decision (mine):** Tag every sample's pitch content by hand.
- **Why I did it:** Accuracy — I trusted my own ears over any model, and early ML transcription was unreliable.
- **Why I changed my mind:** The corpus grew to thousands of samples. Manual tagging became the single bottleneck blocking the whole instrument from scaling. And Ho — a principled AI skeptic — pointed me at Basic Pitch precisely because it's *data* work, not generative work, which reframed ML from "shortcut" to "the right tool for this specific job."
- **Result:** Built the headless Librarian around Basic Pitch to auto-tag entire libraries (MVP Jan 31 2026). "The interface couldn't scale until metadata became automatic. That unblocked everything." (Honest caveat still on the page: the tagging is only as good as the model.)

## 8. "The interface is the product" → the behavior is the product

- **Decision:** Assume the design work lives in the UI.
- **Why I did it:** It's what "design" means in most portfolios — the mockup is the deliverable.
- **Why I changed my mind:** Across SNaPS, Tonalign, and Dashboard, the interface barely changed from prototype to release while the behavior changed constantly. The glide curves, the exit modes, the cost function, the held-note logic — none of that is visible in a screenshot, and all of it is the actual design work.
- **Result:** Reframed the whole portfolio around decisions and behavior rather than screens. "Almost all the design work happened in the behavior." This is now the thesis that opens the SNaPS case study.

## 9. Exploration is enough → exploration without capture isn't composition

- **Decision:** Build Dashboard as a tool for *navigating* harmonic space.
- **Why I did it:** Navigation was the original thesis — the hard, novel part was making harmonic space walkable.
- **Why I changed my mind:** Arthur Carabott's 2021 critique: a tool that lets you find ideas but not keep or learn from them is only half a tool. Exploration without capture isn't composition.
- **Result:** Years later, built the Sketchpad — save scale/chord pairs, arrange them into progressions. "The critique that started in 2021 ended in 2026." It reframed the entire ecosystem into two eras: Exploration, then Capture.

---

## How to use these in the interview

- **Best single answer to "tell me about a hard decision":** #5 (nearest-tone → cost function). It's the deepest, it's provably behavioral, and it shows you modeling *human* behavior in code.
- **Best answer to "tell me about a time you were wrong":** #6 (SuperCollider ceiling) or #2 (hard-coded glide). Both have a clean failure → correction arc with dates.
- **Best answer to "how do you work with others":** #1 (solo-hero → named credit) and #7 (Ho + Basic Pitch).
- **Best proof you kill your own ideas:** #3 (amputate the navigator) — you cut a feature you designed and liked.
- **Best "I evolved my whole philosophy" answer:** #8 (interface → behavior) and #9 (exploration → capture).

---

*Sources: SNAPS_REWRITE-8.md, TONALIGN_REWRITE-6.md, DASHBOARD_PROLOGUE_REWRITE-2.md, CASE_STUDY_REWRITE_PRIORITY_LIST-10.md, PORTFOLIO_EDITORIAL_GUIDE-4.md, SCALE_NAVIGATOR_EVIDENCE-5.md. Every quote and date is from evidence, not memory.*
