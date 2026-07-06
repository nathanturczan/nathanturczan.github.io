# Tonalign Case Study Rewrite — Materials

Working doc for rewriting `projects/tonalign.html`, parallel to `DASHBOARD_PROLOGUE_REWRITE.md` and `ENSEMBLE_JAMMER_REWRITE.md`.
**Status: GATHERING. Do not rewrite the case study yet — Nathan pulls the trigger.**

---

## 1. PitchSnap — the ancestor artifact (new material, this session)

Originally pasted with the Dashboard Jan-2026 batch; Nathan corrected the filing: **"this one is for the tonalign case study re-write. this one shows me uisng markup to show how the midi flow in / out should be depicted visually."**

### Pasted in chat — needs to be saved to a file

| Image | What it shows | Why it matters |
|---|---|---|
| **PitchSnap plugin window (with markup)** | macOS window titled "PitchSnap/1-MIDI": "Scale Navigator PitchSnap" wordmark, Interrupt checkbox, C diatonic neighborhood in the bold-outline flat style, color-coded piano keyboard C–B with **gray dots above the keys and red dots below them — Nathan's own markup annotating how MIDI flow in / out should be depicted visually** (incoming vs. corrected/outgoing notes). Footer: Scale/Chord dropdown set to "Chord", readout "C M9(add6)", Scale Root "C" + Scale Class "Diatonic" dropdowns | A designer marking up his own running plugin to spec a visualization: the keyboard needs to show *both* what the player sent and what the plugin let through. This is the exact "sketches / annotations on the way to high-fidelity" evidence the Apple JD asks for — and it's design work on the plugin's one hard communication problem (a correction layer is invisible unless the UI shows the in/out delta). |

### Open questions attached to this image

1. ~~What did PitchSnap become?~~ — **ANSWERED (Nathan + git, this session)**: PitchSnap is Tonalign's previous name — "actually its middle name." Full lineage, git-dated in `/Users/soney/Github/Tonalign`: **Scale Navigator MIDI VST** (repo initial commit **Jun 28, 2021**; Brady Boettcher's first commits Jul 1, 2021, via branch `bboettcher3/session_1` — the pair-programming sessions are literally the branch names) → **renamed PitchSnap Jan 26, 2026** (c6ffd7d, "Rename repo to PitchSnap and add macOS pkg installer") → **renamed Tonalign Apr 6, 2026** (5dbe9ef). One repo, three names, five years.
2. ~~Date it.~~ — **BOUNDED by the renames**: the PitchSnap wordmark dates the screenshot to the Jan 26 – Apr 6, 2026 window, consistent with the bold-outline Jan-2026 node style.
3. ~~Did the marked-up in/out visualization ship?~~ — **ANSWERED (Nathan, this session)**: "yes it shipped similarly, but with downward arrows now." So the spread is clean: 2022 three-keyboard mockup → 2026 dots markup → shipped keyboard with downward arrows marking the in/out delta. Pick the Feb 2026 screenshot that shows the arrows for the after-frame.
4. ~~Save the image~~ — **SAVED (2026-07-05)**: `images/tonalign/pitchsnap_plugin_window.png` (recovered from the session transcript during the artifact-preservation sweep).

---

## 1b. The Scale Navigator MIDI VST mockups (2022) — the aspiration artifact

Nathan (this session): "Back when Brady and I were working on this together, we called it Scale Navigator MIDI VST. See attached for what I hoped the Tonalign back in the day could have become." The pasted images are **already on disk**:

| Image | Path | What it shows |
|---|---|---|
| Local-interface mockup | `/Users/soney/Github/Old Scale Navigator Development/scalenav_midivst_local.png` (**Jul 22, 2022**) | Black/yellow Freeman-era branding ("SCALE NAVIGATOR" art-deco face + "MIDI VST"); Local/Network interface toggle; the **navigator neighborhood inside the plugin** (C diatonic + 6 neighbors, pastel-era polygons); ROOT + SCALE CLASS dropdowns (open, showing all 12 roots and all 7 scale classes); "enharmonic drift enabled" checkbox; "reset mapping to default"; and the right-hand payload — **input keyboard → yellow "mapping" keyboard (black keys folded onto white) → output keyboard**, a three-stage signal-flow visualization; "launch SCALE NAVIGATOR DASHBOARD webapp" button |
| Network-interface mockup | `/Users/soney/Github/Old Scale Navigator Development/scalenav_midivst_network.png` (**Jul 22, 2022**) | Identical, but the toggle is set to Network Interface and the left pane shows the **full 57-scale network with edges** inside the plugin window |
| Hard build evidence | Xcode archive `ScaleNavigatorMIDIVST - All 1-7-22, 10.41 AM.xcarchive` (**Jan 7, 2022**, `~/Library/Developer/Xcode/Archives/`) | The plugin was really being built under that name — the mockups are aspiration layered on a working codebase |

**Why this is the case study's missing middle:** the 2022 mockups already pose the plugin's one hard communication problem — **input → transformation → output as three keyboards** — which is exactly what Nathan's 2026 PitchSnap markup (§1, gray dots in / red dots out) is still working on four years later. Mockup (2022) → markup (2026) → shipped UI is a single design thread about making an invisible MIDI correction visible. Also visible in the 2022 frames: ambitions that were later cut or moved (whole navigator inside the plugin; local/network modes; enharmonic drift toggle; launch-webapp button) — the shipped Tonalign is this mockup with the navigator amputated, which is itself a scoping story worth one sentence.

**Date reconciliation for the page header**: the page says "2024–present" and the gathering doc guessed "2024 = development start with Brady" — **git says Jun 28, 2021**. The thesis's "Tonalign shipped publicly in January 2026" maps to the PitchSnap-era installers (Jan 22–26, 2026); the Tonalign name itself arrived Apr 6, 2026. Header should probably read 2021–present.

**FIGMA SOURCE FOUND (2026-07-05, EVIDENCE.md §10.1) — the mockups are a year older than their PNG dates.** The Freemans' 2021 Figma file (`FFFxYSi1sgsfta1r26o3ZB`) contains frame **505:1940 "scale navigator VST - Local Interface"** (1600×900) with exactly the `scalenav_midivst_local.png` content: art-deco wordmark + script "VST", Local/Network toggle, navigator neighborhood (C Diatonic + 6 pastel neighbors), ROOT/SCALE dropdowns, **Enharmonic Drift checkbox**, the **input keyboard → yellow "Mapping" panel → output keyboard** flow, Reset Mapping + Launch Webapp buttons. The pastel pink/purple palette places it in the *first* Freeman round (Aug–Sep 2021), and it sits contemporaneous with Nathan's Aug 11, 2021 message to Brady: "Been working with a UI designer… within the realm of possibility for juice and C++?" So the design thread is now: **Figma frame (Aug–Sep 2021) → PNG exports (Jul 2022) → PitchSnap markup (2026) → shipped Tonalign** — the three-keyboard visualization problem was posed by a professional design engagement in 2021, five years before it shipped. The Jul 22, 2022 PNGs are exports of (or derived from) this frame.

---

## 1c. Thesis-rewrite quote bank (Chapter 8 §8.1 is a Tonalign case study)

Source: `/Users/soney/Github/Thesis/thesis-rewrite/Chapters/Chapter8.tex`. All verbatim.

**Suppression → motion (the design lineage the current page doesn't tell):**
> "Its ancestor is visible in Chapter 5: the Scale Rack that filtered *INTERSTICES*' electronic performers was a blunt instrument that *suppressed* foreign notes... Tonalign replaces suppression with motion. A note outside the current collection is not muted but moved to its nearest available neighbor, which converts the enforcement of harmony into a voice-leading act performed on the player's own material."

**The Interrupt toggle — and it's IN the PitchSnap screenshot (§1):**
> "The feature that earns Tonalign its place in this chapter is a toggle labeled INTERRUPT. With it engaged, notes already sounding when the scale or chord changes are re-pitched at the moment of change: the modulation itself becomes an audible event in every held voice... the system finally saying, in the one modality no performer can ignore, *this is the note that moved*."

The PitchSnap window shows an "Interrupt" checkbox — strong evidence PitchSnap is pre-release Tonalign (partially answers §1 open question 1; confirm with Nathan). The Interrupt framing also answers the 2018 sight-reader survey ("a highlight indicating which note has changed") in sound instead of notation — an eight-year request arc the case study can draw.

**Held-note consent (the thesis's version of the page's held-notes section):**
> "There is no single correct behavior for a held note at a modulation — an organ pad should glide, a plucked instrument should perhaps be left alone, a synthesizer line might best be cut — so the plugin exposes the held-note behavior as a player-facing choice rather than hard-coding one, in the author's words at the time: 'There isn't one behavior that's correct for every instrument, so I exposed it as a choice instead of hard-coding one.'"

**Ship date:** "Tonalign shipped publicly in January 2026 and has since served as the MIDI correction layer in every live session the author runs, including the Ensemble Jammer deployments." (~~Reconcile "2024–present"~~ — **git settles it**: repo starts Jun 28, 2021 as Scale Navigator MIDI VST, Brady from Jul 1, 2021; Jan 2026 = PitchSnap-era public release; Apr 6, 2026 = Tonalign name. See §1b.)

---

## 1d. Brady Messenger thread (Facebook export, mined 2026-07-05) — the 2021–22 dev diary

276KB thread; the Tonalign-relevant beats, dated:

- **Jul 8, 2021**: "Scale Navigator - VST dev session 3" — the pair-programming sessions are named and dated in chat, matching the `bboettcher3/session_N` branch names in the repo (§1).
- Jul 12, 2021: the MIDI-in/MIDI-out DAW-support problem surfaces (some DAWs can't route MIDI out of a MIDI-effect plugin); Max-device embed floated as workaround.
- Jul 21–22, 2021: JUCE MouseListener debugging; `nathanturczan/ScaleNavigatorVST/todo.md` — todo-driven workflow.
- **Jul 25, 2021**: "when correcting notes, if 2 notes are corrected to the same midi note, how to handle that case" — **the collision problem, posed in week 4, is the same "overlapping corrections in fast passages" edge case the current page lists as still-being-tuned in 2026**. Five-year-old open design problem, receipts at both ends.
- **Jul 28, 2021**: Nathan: "lol I have a crazy idea, what if we embed a WebBrowserComponent in the plugin" — **the webview-plugin architecture that Dashboard-Plugin/NCS actually shipped with, proposed four years early**.
- Jul 29, 2021: Ableton crash triage via plugin host ("The trigger was caused by MIDI throughput").
- **Aug 3, 2021**: notarization pain: "I'm surprised that I can't even share a beta version of this plugin with a friend" — pairs with the 2026 shipped signed/notarized installers (CLAUDE.md-era workflow); a learning arc.
- Aug 5, 2021: "I'm writing out requirements for how I imagine this sprint to go" — Nathan writing sprint specs.
- Aug 11, 2021: "Been working with a UI designer… do you think this is within the realm of possibility for juice and C++?" — Freeman-era UI designs feasibility-checked with Brady; connects the §1b mockups to the engineering conversation.
- Sep 30, 2021: "raise some more money and get the MIDI VST to a minimum level of functionality."
- Dec 24, 2021: "I broke the plugin… crashes ableton."
- **Jan 6–7, 2022**: Shopify launch-day play-by-play (scale-navigator.myshopify.com/products/scale-navigator-midi-vst) — the MIDI VST was **publicly sold in Jan 2022**, four years before the Tonalign-branded release. Header framing implication: shipped 2022, reshipped 2026.
- Jan 10–13, 2022: LinnStrument re-highlighting branch; Jan 13 "Super early / low production value demo" video — **FOUND (see §4 Q4)**: https://youtu.be/lf0BpKuH3hc "Scale Navigator MIDI VST is like AutoTune for MIDI" + setup companion https://youtu.be/DyVP5oX4dgU, both public on @scalenavigator. The "AutoTune for MIDI" tagline dates to Jan 2022.
- Feb 1–2, 2022: Brady's two NIME submissions ("MIDI dataset analysis to see how scales are typically navigated").
- Jun 2022: Brady evangelizing scalenav to Ableton folks in Berlin; Aug 18, 2023: Brady proposes his own "Scale Weaver" interface — the collaboration generated independent momentum.

## 1e. The earliest shipped screenshots (Nathan pasted, 2026-07-05) + framing answers

Nathan: "That's the earliest screenshot I can find of what Brady and I shipped together." Two screenshots of the **running plugin in a DAW** (window title `ScaleNavigatorMIDIVST/1-ScaleNavigatorMIDIVST`, Ableton-style chrome):

**What shipped** (both variants): gray plugin window with the **navigator neighborhood live inside the plugin** — C Acoustic center, with F Diatonic (salmon hexagon), C Octatonic (decagon), D Harmonic Major (lavender parallelogram), G Harmonic Minor, C Whole Tone (square), G Diatonic (hexagon) — the **shape-per-scale-class encoding running in shipped software**, in the pastel first-round Freeman palette; Root: C / Scale Class: Acoustic dropdowns; yellow art-deco "SCALE NAVIGATOR" + "MIDI VST" wordmark; and **one annotated keyboard widget** — white keys labeled C D E E G A A#, black keys C D F# G A# in red — i.e. the folded mapping display for C Acoustic (C D E F# G A B♭): F folds to E, B folds to A♯. **The mockups' three-keyboard in→mapping→out flow shipped as a single folded keyboard.**

**Two layout variants = shipped UI iteration**: v1 keyboard top-right / wordmark bottom-right; v2 keyboard bottom-right / wordmark top-right + the **"launch SCALE NAVIGATOR DASHBOARD webapp" button** — the Figma frame's Launch Webapp concept (§1b) made it to shipped software. Not shipped from the design: Local/Network toggle, Enharmonic Drift checkbox, in-plugin full network.

**Dating**: pastel palette (first Freeman round, Aug–Sep 2021) + the Jan 7, 2022 xcarchive + the Jan 2022 Shopify launch bracket these as **late 2021 / early 2022**.

**✅ IMAGES RECOVERED AND HARD-DATED (2026-07-05, second pass)**: after being lost to conversation compaction (cache/transcript/disk all came up empty), both screenshots were found in the **Brady Facebook Messenger thread's photo attachments** (`facebook-turczan-2025-01-10-sWSGEeM9/.../inbox/bradyboettcher_10161330170659152/photos/`) — Nathan had originally shared them with Brady. Saved to the repo, with exact Messenger dates:

- **v1** → `images/tonalign/scalenavigatormidivst_shipped_daw_v1_keyboard_top.png` — posted **Jan 6, 2022, 10:17 pm** with the message "**changed background colour and added logo!**"
- **v2** → `images/tonalign/scalenavigatormidivst_shipped_daw_v2_launch_button.png` — posted the next morning, **Jan 7, 2022** ("NVM, I totally did it!!!!", Brady reacting 😮 at 11:07 am)

**And the pair now tells a dated overnight design-build story**: Jan 6, 10:17 pm — v1 posted (new background + logo). Jan 6, 10:18 pm — "the last thing I'm trying to do is make the logo into a clickable URL link that opens the user's browser and takes them to my webapp"; "do you have any advice? I'm poking around in here" + link to JUCE's `URL` class docs. Jan 6, 10:29 pm — "something like this I think:" + a screenshot of **JUCE's own Projucer source** (`launchTutorialsBrowser()` with `launchInDefaultBrowser()` highlighted) — Nathan reading the framework's source to find the pattern (**SAVED**: `images/tonalign/juce_launchindefaultbrowser_research_snippet.png`). Jan 7, ~9:27 am — "**NVM, I totally did it!!!!**" + v2 showing the shipped "launch SCALE NAVIGATOR DASHBOARD webapp" button. The Figma frame's Launch Webapp concept (§1b) went from open question to shipped feature **overnight, self-taught from framework source**, with the receipts timestamped at both ends. This also pins the two layout variants ~13 hours apart — the "shipped UI iteration" was a single working night.

**Bonus recovery (same sweep)**: Brady's **whiteboard interface sketch** (**SAVED**: `images/tonalign/brady_whiteboard_interface_sketch_jan2022.jpg`), posted **Jan 8, 2022, 10:02 am** with "mind if I bounce another interface idea off of ya?" — a touch-surface concept for C Diatonic: "main pitch selection surface… divided into n sections based on # pitches in current scale," a "network connections — swipe to swap" row (Ga, Fa, Gd, Ahm, ChM, Fd), and an "octave sliding" strip. Hard evidence the collaboration ran both directions: Brady sketching scale-nav interfaces on his own whiteboard, two days after Nathan's launch-button night. (Same exchange, Jan 8: Nathan — "I've got a couple UI designers that I worked with for the web app that I would love to ask to red[esign]…")

Note: `images/tonalign/scalenavigatormidivst.png` (file date May 29, 2022) is a separate **marketing composite** (MacBook Pro device mockup, Ableton chrome, pastel node UI, art-deco wordmark, folded keyboard row, launch-webapp button) — its own 2022-era artifact, not part of this pair.

**Bonus disk find (same sweep)**: `/Users/soney/Github/Tonalign/Builds/VisualStudio2019/ScaleNavigatorMIDIVST.sln` + VS2022 equivalents — **Windows VST3 builds were part of the 2021–22 effort**, still in the repo. Cross-platform ambition, receipted.

**Framing answers (Nathan, 2026-07-05):**
- **"First real plugin" as frame?** — "You're allowed to say that it was my first plugin. That's fine, but that's really not the main star of the story. It has nothing to do with design or product design. But it's worth noting that this is the first time I seriously started working with JUCE and with C++. And it's also important to note **the beginning of my collaboration with my very good friend Brady**." → The rewrite leads with the in/out visualization design problem; "first plugin / first serious JUCE+C++ / Brady begins" is one supporting sentence, not the spine.
- **Brady featured more prominently?** — YES.
- **More pre-2026 artifacts?** — "Not at this time"; these screenshots are the earliest.

## 2. What the current page already has (baseline)

Current structure of `projects/tonalign.html`:

- **Header**: Role · Designer & developer; Team · 2 (with Brady Boettcher); VST3/AU/AAX; 2024–present.
- **Origin**: "the MIDI equivalent of AutoTune — my first real plugin"; knew almost no JUCE/C++; met Brady Boettcher via a JUCE forum post, mid-pandemic, different time zones; pair-programmed the first version — "Brady brought the C++ and JUCE expertise, I brought the design and the Dashboard integration concept."
- **What it does**: snaps out-of-scale MIDI notes to the nearest in-scale note; subscribes to Dashboard's harmonic state when present.
- **Iteration — Held notes**: what happens when the scale changes under a held note; no universal answer (pianist = stay, synth = glide, orchestral samples = cut); shipped three modes with glide as default.
- **Images**: five screenshots dated Feb 10, 2026 (`images/tonalign/Screenshot 2026-02-10 at 8.5*.png`).
- **Links**: download, demo video, walkthrough video.
- **Where it is now**: ships in the ecosystem, used in every live session; edge cases still being tuned (overlapping corrections in fast passages, mid-sustain scale changes).

The page currently has **no early/process artifacts** — it jumps from the origin story straight to Feb 2026 screenshots. PitchSnap is the first pre-final artifact for this case study, and it lands directly on the page's central design problem (making an invisible correction visible).

---

## 3. Candidate use in the rewrite (sketch only)

- Insert a short **process beat** between "What it does" and "Held notes": the PitchSnap-era window with markup, captioned around the in/out visualization problem — the plugin's whole job is a delta between what you played and what sounded, and the UI has to draw that delta.
- **The visualization shipped** (downward arrows on the keyboard) — pair PitchSnap (marked-up) with the Feb 2026 screenshot showing the arrows as a markup → shipped spread. And the 2022 `scalenav_midivst_*.png` mockups (§1b) extend the thread backward: three artifacts, one communication problem, four years.
- The lineage sentence is now confirmed and git-dated (Scale Navigator MIDI VST 2021 → PitchSnap Jan 2026 → Tonalign Apr 2026) — it explains both the "Scale Navigator PitchSnap" wordmark in the markup image and the "SCALE NAVIGATOR MIDI VST" wordmark in the 2022 mockups.

---

## 4. Open questions for Nathan (beyond §1)

1. ~~Any more pre-2026 Tonalign/PitchSnap artifacts~~ — **ANSWERED (2026-07-05)**: "not at this time" — but Nathan supplied **the earliest screenshots of the shipped plugin** (two DAW-window variants, see §1e). ~~Chore: save the two pasted images; locate originals~~ — **RECOVERED from the Brady Messenger thread photos and SAVED (2026-07-05)**: v1 = Jan 6, 2022, 10:17 pm; v2 = Jan 7, 2022 morning. See §1e for the full overnight launch-button story + two bonus artifacts (JUCE research snippet, Brady whiteboard sketch).
2. ~~Brady featured more prominently~~ — **ANSWERED: YES.**
3. ~~"First real plugin" frame vs design problem~~ — **ANSWERED (§1e)**: design problem is the star; first-plugin is a permitted aside; must note first serious JUCE/C++ work and the start of the Brady friendship/collaboration.
4. ~~The Jan 13, 2022 demo video — where does it live?~~ — **ANSWERED (2026-07-05): BOTH FOUND on YouTube, public, on the Scale Navigator channel (@scalenavigator)**:
   - **Setup video**: https://youtu.be/DyVP5oX4dgU — "How to set up Scale Navigator MIDI VST in Ableton Live"
   - **Demo video**: https://youtu.be/lf0BpKuH3hc — **"Scale Navigator MIDI VST is like AutoTune for MIDI"**
   - **Major finding**: the demo's title IS the Tonalign tagline. "AutoTune for MIDI" — the 2026 product's core positioning — was already the pitch in **January 2022**. The rewrite can now show the concept, the shipped plugin, AND the positioning all predating the 2026 rebrand by four years. These are the earliest moving-image artifacts of the plugin; embed both on the page.
5. ~~Acknowledge the Jan 2022 Shopify release in the header/timeline?~~ — **ANSWERED (2026-07-05): NO** — "eehhh no, ignore the shopify release." The commercial Shopify storefront stays out of the case study; the 2021–22 build/ship story is told through the screenshots (§1e) and the YouTube demos (Q4), not the store.
