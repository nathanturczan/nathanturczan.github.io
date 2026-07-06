# Labeled Images Audit Report

**Source directory**: `/Users/soney/Github/Old Scale Navigator Development`
**Audit date**: 2026-07-05
**Auditor**: Claude (automated analysis)

---

## Inventory Summary

| Category | Count |
|----------|-------|
| Total files | 516 |
| Image/video files (PNG, JPG, JPEG, GIF, MOV, MP4) | 509 |
| Non-image files | 7 |
| Duplicates of deployed images | 18 |
| Unique images (not deployed) | 491 |

### Non-image files
- `Untitled-1.psd` — Photoshop file (unknown content)
- `IMG_8289.HEIC` — HEIC photo (needs conversion to view)
- `logo jason gardinier mid-period scalenav_round1.pdf` — Jason Gardinier logo design round 1
- `logo jason gardinier mid-period scalenav_round1 (1).pdf` — duplicate of above
- `scaleNav_icon.psd` — Photoshop icon file
- `scaleNav_icon2.psd` — Photoshop icon file variant
- `.DS_Store` — macOS metadata (ignore)

---

## Duplicates Map

| Archive Filename | Deployed Repo Path | Label Adds/Corrects Info? |
|------------------|-------------------|---------------------------|
| `tonalign scalenav_midivst_local.png` | `images/tonalign/nathan_vst_mockup_v2_local_drift_toggle_feb2022_fullres.png` | Yes — confirms this is Tonalign, not generic |
| `tonalign scalenav_midivst_network.png` | `images/tonalign/nathan_vst_mockup_v2_network_drift_toggle_feb2022_fullres.png` | Yes — confirms Tonalign project |
| `dashboard freeman ui mid-period scale navigator - ensemble - current.png` | `images/_recovered_cache/transcript_dump_nested/L00917_1734_19.png` | Yes — identifies Freeman UI era and "mid-period" |
| `dashboard vanilla notepad (early score) New Project (2).png` | `images/_recovered_cache/transcript_dump/L0955_1743utc_1.png` | Yes — identifies as "vanilla" era, early Score feature |
| `dashboard vanilla notepad (early score) New Project.png` | `images/_recovered_cache/transcript_dump/L0955_1743utc_3.png` | Yes — same as above |
| `dashboard vanilla notepad (early score) New Project (1).png` | `images/_recovered_cache/transcript_dump/L0955_1743utc_2.png` | Yes — same as above |
| `tonalign Screenshot 2026-02-09 at 8.45.23 AM.png` | `images/_recovered_cache/transcript_dump/L0804_1718utc_1.png` | Yes — identifies as Tonalign |
| `dashboard vanilla mobile 225879861_4519890531376201_6534716101612732604_n.png` | `images/_recovered_cache/transcript_dump/L1035_1759utc_1.png` | Yes — identifies as "vanilla" mobile era |
| `dashboard vanilla mobile 221804450_1892424940931094_2936026593262289113_n.png` | `images/_recovered_cache/transcript_dump/L1035_1759utc_3.png` | Yes — vanilla mobile |
| `dashboard vanilla mobile 225903535_115796324026025_7433582322229049547_n.png` | `images/_recovered_cache/transcript_dump/L1035_1759utc_2.png` | Yes — vanilla mobile |
| `dashboard vanilla mobile 224718681_3162223074015238_8350944590393766677_n.png` | `images/_recovered_cache/transcript_dump/L1035_1759utc_4.png` | Yes — vanilla mobile |
| `dashboard network dearly ui orbit rotate 41908402_284425282280037_4608748419710713856_n_254112645289634.gif` | `images/dashboard/prologue/p5_era_orbiting_network_animation.gif` | Yes — "dearly ui" likely a typo for "early" |
| `dashboard network dearly ui orbit rotate 41908402_284425282280037_4608748419710713856_n_284425275613371.gif` | `images/dashboard/prologue/p5_era_orbiting_network_animation.gif` | Internal duplicate + deployed duplicate |
| `dashboard navigator wireframe 2021 messages_0 (1).jpeg` | `images/_recovered_cache/transcript_dump/L1017_1754utc_1.jpg` | Yes — dates wireframe to 2021 |
| `dashboard midi output wireframe 2021 PXL_20211112_211456038.jpg` | `images/dashboard/prologue/midi_output_wireframe_nov2021.jpg` | No — already well-named in repo |
| `IMG-20210923-WA0002.jpg` | `images/_recovered_cache/transcript_dump/L0723_1657utc_1.jpg` | No — generic filename |
| `ensemble jammer ui icons LEONE ERMER CONTRIBUTION Screenshot 2026-03-06 at 11.43.37 AM.png` | `images/ensemblejammer/leone_ermer_single_stroke_icons_before_after_mar2026.png` | Already tracked — confirms Leone Ermer attribution |
| `scale-navigator.png` | `images/_recovered_cache/transcript_dump_nested/L02634_2037_35.png` | No — generic |

### Internal Archive Duplicates (same file, different names)
| Hash | Files |
|------|-------|
| `e4d7af...` | `dashboard dev Screenshot 2026-02-06 at 8.01.34 PM.png` = `Screenshot 2026-02-06 at 8.01.34 PM.png` |
| `cc2d2d...` | `IMG_0807 2.PNG` = `IMG_0807.PNG` |
| `9d5405...` | `dashboard mobile wireframe (squish) IMG-20210831-WA0005.jpeg` = `IMG-20210831-WA0005.jpeg` |
| `8b193d...` | Two copies of the orbiting network GIF (both deployed) |
| `3610ce...` | `PXL_20260317_010232371.MP (1).jpg` = `PXL_20260317_010232371.MP.jpg` |
| `0a29f6...` | `dashboard mobile glitch Screen Shot 2022-08-10 at 1.51.01 PM copy.png` = `dashboard mobile glitch Screen Shot 2022-08-10 at 1.51.01 PM.png` |

---

## Gap Closures

### 1. Children of Children Render (2019 p5.js)
**STATUS: NOT FOUND — RESOLVED BY NATHAN (Jul 5, 2026): stop looking.**

Searched for filenames containing: "children", "2019", "p5", "thesis", "green"
Result: No file in this archive matches the missing "Children of Children" render. The `keyboard_era_green_bg_monitor_photo.png` hash (`6d60d9...`) does NOT appear in this archive.

**Resolution (Nathan, Jul 5, 2026)**: "the children of children is probably best represented by the awesome orbiting gif" — i.e. the Sept 20, 2018 orbiting-network animation (deployed as `images/dashboard/prologue/p5_era_orbiting_network_animation.mp4`, already on the Dashboard page) stands in for this era/piece. Loose end closed; no further sourcing needed.

### 2. Sketchpad Screenshots
**STATUS: CLOSED — 27 screenshots found**

This is a **major gap closure**. The archive contains 27 Sketchpad development screenshots dated Mar–Apr 2026, covering:

| Date | Key Files | Content |
|------|-----------|---------|
| Mar 13, 2026 | 16 screenshots | Sketchpad MVP development — 2D node graphs with scale cards, connection lines, various states |
| Mar 13, 2026 | `sketchpad dev - mobile Screenshot...` | **Mobile Sketchpad UI** — full app with Sketchpad tab selected, showing the workspace on phone form factor |
| Mar 24, 2026 | `sketchpad dev export button...` | Export button feature development with annotation arrows |
| Mar 24, 2026 | `sketchpad dev verse and chorus...` | Complex multi-scale arrangement (verse/chorus structure) |
| Mar 30, 2026 | `dashboard sketchpad Screenshot...` | Sketchpad with vertical scale card arrangement |
| Apr 1, 2026 | `sketchpad dev dashboard plugin automation...` | Ableton Live automation lane showing Dashboard/Sketchpad parameter automation |
| Apr 29, 2026 | Latest screenshot | Recent Sketchpad state |

**Best candidates for deployment:**
1. `sketchpad dev - mobile Screenshot 2026-03-13 at 2.59.03 PM.png` — Shows full mobile UI with Sketchpad tab, perfect for demonstrating the shipped feature
2. `dashboard sketchpad Screenshot 2026-03-30 at 11.06.12 PM.png` — Clean vertical arrangement of scale cards
3. `sketchpad dev dashboard plugin automation Screenshot 2026-04-01 at 12.46.14 PM.png` — Shows DAW integration (Ableton automation)
4. `sketchpad dev verse and chorus Screenshot 2026-03-24 at 11.15.48 PM.png` — Shows real musical use case

---

## New Material by Project

### Dashboard (47 labeled files + related)

**2021 Wireframes & Early Development (high value)**
| Filename | Date | Content | Recommendation |
|----------|------|---------|----------------|
| `dashboard network scale class checkboxes wireframe IMG-20210919-WA0006.jpeg` | Sep 19, 2021 | Pen sketch: ring of scale nodes + handwritten scale class checkbox filter list (diatonic, acoustic, harmonic major, etc.) | Deploy — `images/dashboard/prologue/` — paper prototype evidence |
| `dashboard network scale class checkboxes wireframe IMG-20210919-WA0004.jpeg` | Sep 19, 2021 | Related pen sketch | Notes only — compare with above |
| `dashboard mobile wireframe IMG-20210831-WA0003.jpeg` | Aug 31, 2021 | Mobile wireframe sketch | Notes only — already have mobile wireframes |
| `dashboard mobile wireframe (squish) IMG-20210831-WA0005.jpeg` | Aug 31, 2021 | "Squish" mobile wireframe | Notes only |
| `Dashboard mobile wireframe IMG-20210831-WA0001.jpeg` | Aug 31, 2021 | Mobile wireframe | Notes only |
| `dashboard midi output wireframe 2021 PXL_20211112_211741878.jpg` | Nov 12, 2021 | Second MIDI output wireframe photo | Notes only — have one already |

**Freeman Era / Mid-Period UI (Aug–Sep 2021)**
| Filename | Date | Content | Recommendation |
|----------|------|---------|----------------|
| `Screen Shot 2021-08-27 at 9.14.05 AM.png` | Aug 27, 2021 | Pink/purple gradient mockup — "Scale Navigator Dashboard" with Autopilot slider, Edges/Labels toggles, bottom tab bar (Ens/Tab/Chord/MIDI/Pad/Vis/Abt/Acct) | Deploy — `images/dashboard/prologue/` — Freeman design era |
| `Screen Shot 2021-08-09 at 1.38.32 PM.png` | Aug 9, 2021 | Earlier Freeman-era mockup | Review — may be earlier iteration |
| `IMG-20210923-WA0000.jpg` | Sep 23, 2021 | Full 57-scale network visualization (color-coded shapes, no edges, black background) | Deploy — clean network visualization |
| `IMG-20210923-WA0001.jpg` | Sep 23, 2021 | Similar network view | Notes only — compare |
| `Screen Shot 2021-09-28 at 12.12.45 PM.png` | Sep 28, 2021 | Freeman-era screenshot | Review |
| `Screenshot_20210928-091351.png` | Sep 28, 2021 | Mobile screenshot | Review |

**Back Button Migration (already tracked in notes)**
| Filename | Date | Content | Recommendation |
|----------|------|---------|----------------|
| `dashboard dev - BACK BUTTON IMPORTANT Screenshot 2026-03-18 at 10.27.00 AM.png` | Mar 18, 2026 | Annotated screenshot showing Back button in Chord tab with arrow to navigator transport | Already tracked in DASHBOARD_PROLOGUE_REWRITE.md |

**Vanilla Era UI with Onboarding**
| Filename | Date | Content | Recommendation |
|----------|------|---------|----------------|
| `vanilla dashboard ui with intro onboarding Screenshot 2026-03-18 at 10.03.17 AM.png` | Mar 18, 2026 | Vanilla-era UI with intro modal explaining scale network navigation | Deploy — shows onboarding/tutorial UX |
| 4 more `vanilla dashboard ui with intro onboarding...` screenshots | Mar 18, 2026 | Sequence of onboarding steps | Notes only — one is sufficient |

**SN-OBS (Dashboard OBS Integration) — 44 files**
| Filename | Date | Content | Recommendation |
|----------|------|---------|----------------|
| `sn-obs devScreenshot 2026-02-20 at 2.43.09 PM.png` | Feb 20, 2026 | Full 57-scale network visualization in OBS context | Consider — shows streaming/broadcast use case |
| Series of 40+ sn-obs screenshots | Feb 20–22, 2026 | OBS streaming overlay development | Notes only — one representative is sufficient |

**Interlocking Rings Visualization**
| Filename | Date | Content | Recommendation |
|----------|------|---------|----------------|
| `interlocking harmonic major to harmonic minor rings Screenshot 2026-03-22 at 8.12.24 PM.png` | Mar 22, 2026 | Two interlocking rings (harmonic major + harmonic minor scales) with color-coded parallelograms | Deploy — beautiful visualization of scale relationships |
| `interlocking harmonic major to harmonic minor rings Screenshot 2026-03-22 at 7.59.24 PM.png` | Mar 22, 2026 | Similar | Notes only |

**Network Views**
| Filename | Date | Content | Recommendation |
|----------|------|---------|----------------|
| `dashboard hide scale classes in navigator based on network checkboxes (ben tillotson) Screenshot 2026-02-09 at 11.53.32 AM.png` | Feb 9, 2026 | Scale class filter checkboxes feature (credits Ben Tillotson) | Deploy if not already shown — feature attribution |

---

### Ensemble Jammer (28 files)

**Logo Ideation (Apr 9, 2026) — 8 files**
| Filename | Content | Recommendation |
|----------|---------|----------------|
| `ensemble jammer logo ideationScreenshot 2026-04-09 at 9.15.32 AM.png` | Interlocking circles design (pink/purple gradient) | Deploy — logo exploration |
| `ensemble jammer logo ideationScreenshot 2026-04-09 at 10.01.36 AM.png` | Ghost/blob outline (single white stroke) | Notes only — exploration |
| `ensemble jammer logo ideationScreenshot 2026-04-09 at 9.26.14 AM.png` | Logo variant | Notes only |
| `ensemble jammer logo ideationScreenshot 2026-04-09 at 9.54.53 AM.png` | Logo variant | Notes only |
| 4 more logo ideation screenshots | Various explorations | Notes only — select best 1–2 |

**Leone Ermer Icons (already tracked)**
| Filename | Content | Recommendation |
|----------|---------|----------------|
| `ensemble jammer ui icons LEONE ERMER CONTRIBUTION Screenshot 2026-03-06 at 11.43.37 AM.png` | Before/after of Leone's single-stroke icon redesign | Already deployed to `images/ensemblejammer/` |

**Development Screenshots**
| Filename | Date | Content | Recommendation |
|----------|------|---------|----------------|
| `ens jammer dev Screenshot 2026-02-14 at 12.32.17 PM.png` | Feb 14, 2026 | Ensemble Jammer development | Review |
| `ens jammer snaps dev mobile Screenshot 2026-02-14 at 1.36.07 PM.png` | Feb 14, 2026 | Mobile Ensemble Jammer + SNaPS integration | Review — shows cross-product integration |
| `ensemble jammer Screenshot 2026-03-10 at 12.37.07 PM.png` | Mar 10, 2026 | Ensemble Jammer screenshot | Review |

---

### Tonalign (31 files)

**Logo Ideation (Mar 20, 2026)**
| Filename | Content | Recommendation |
|----------|---------|----------------|
| `tonalign logo ideation Screenshot 2026-03-20 at 4.37.14 PM.png` | Hand-drawn keyboard with pink/magenta arrows pointing in/out — conceptual sketch of pitch correction | Deploy — `images/tonalign/` — shows design thinking |
| `tonalign logo ideation Screenshot 2026-03-20 at 4.37.33 PM.png` | Logo variant | Notes only |
| `tonalign logo ideation Screenshot 2026-03-20 at 4.37.37 PM.png` | Logo variant | Notes only |

**PitchSnap Development (Feb 2026)**
| Filename | Date | Content | Recommendation |
|----------|------|---------|----------------|
| `tonalign dev Screenshot 2026-02-11 at 4.43.28 PM.png` | Feb 11, 2026 | "Scale Navigator PitchSnap" UI — network view + keyboard with pink scale-tone highlights, Scale/Chord dropdown, C Hexatonic | Deploy — shows early PitchSnap (Tonalign predecessor) interface |
| `tonalign dev Screenshot 2026-02-10 at 8.52.54 AM.png` | Feb 10, 2026 | Earlier PitchSnap development | Review |
| Series of `tonalign dev Screenshot 2026-02-10...` | Feb 10, 2026 | 5 screenshots from same session | Notes only — select best |

**Apr 2026 Development**
| Filename | Date | Content | Recommendation |
|----------|------|---------|----------------|
| `tonalign dev Screenshot 2026-04-08 at 12.55.13 PM.png` | Apr 8, 2026 | Later Tonalign development | Review |
| Series of Apr 8 screenshots | Apr 8, 2026 | 12+ screenshots from intensive dev session | Notes only — select best |

**Mockups (duplicates of deployed)**
- `tonalign scalenav_midivst_local.png` — duplicate
- `tonalign scalenav_midivst_network.png` — duplicate
- `tonalign plugin_1.png`, `tonalign plugin2.png` — Review if not deployed

---

### SNaPS (42 files)

**Plugin Development**
| Filename | Date | Content | Recommendation |
|----------|------|---------|----------------|
| `snaps plugin Screenshot 2026-03-09 at 2.27.21 PM.png` | Mar 9, 2026 | SNAPS plugin UI — Emitter/Looper/Sequencer tabs, Vol/Glide sliders, Library panel with samples | Deploy — shows shipped plugin interface |
| `snaps plugin emitter Screenshot 2026-03-31 at 12.45.40 PM.png` | Mar 31, 2026 | "Particle Sampler" Emitter view — multiple sample rows with red dot visualization, Source/Chord controls | Deploy — shows Emitter workspace |
| `snaps plugin emitter wireframe Screenshot 2026-03-29 at 5.29.26 PM.png` | Mar 29, 2026 | Wireframe for Emitter | Deploy — shows design process |
| `snaps dev Screenshot 2026-02-12 at 5.36.22 PM.png` | Feb 12, 2026 | Early SNaPS development | Review |
| Series of Mar 8–9 screenshots | Mar 8–9, 2026 | Plugin development sprint | Notes only — select best |

**Looper/Sequencer Views**
- Multiple screenshots showing different tabs | Review for coverage |

---

### NotesChordScales
No files explicitly labeled "NotesChordScales" or "NCS" found in this archive.

---

### Other / Miscellaneous

**Early Downhome Blues (29 files)**
| Filename | Date | Content | Recommendation |
|----------|------|---------|----------------|
| `early downhome blues dev Screenshot 2026-02-26 at 12.01.19 PM.png` | Feb 26, 2026 | Score workspace with musical staff, "Export LilyPond/MusicXML/PDF" buttons, scale sequence below — annotated with green "X" and arrows | Review — shows Score export feature |
| `early downhome blues mobile WhatsApp Image 2026-01-26 at 20.53.05.jpeg` | Jan 26, 2026 | Mobile screenshot | Review |
| Series of Feb–Mar 2026 screenshots | Feb–Mar 2026 | Development of "Downhome Blues" feature/demo | Notes only — appears to be a musical demo project |

**Bender (Pitch Bend Tool) — 2 files**
| Filename | Date | Content | Recommendation |
|----------|------|---------|----------------|
| `bender dev Screenshot 2026-04-08 at 2.52.30 PM.png` | Apr 8, 2026 | "Scale Navigator Bender" — MPE pitch-bend tool with Scale/MPE/Poly dropdowns, Synth Bend Range slider, keyboard | Flag for new product documentation — not in known product list |
| `bender dev Screenshot 2026-04-08 at 2.52.25 PM.png` | Apr 8, 2026 | Same session | Notes only |

**April 2022 Scale Navigator Improv**
| Filename | Date | Content | Recommendation |
|----------|------|---------|----------------|
| `april 2022 scale nav improv Screenshot 2026-04-22 at 1.21.11 PM.png` | Apr 22, 2026 | Historical screenshot labeled "april 2022" | Review — may show 2022-era interface |

**Output Arcade Reference**
| Filename | Content | Recommendation |
|----------|---------|----------------|
| `output arcade rhthm and sequencer Screenshot 2026-03-09 at 10.51.50 AM.png` | Output Arcade rhythm/sequencer interface | Notes only — competitor/reference screenshot |

**Strudel**
| Filename | Content | Recommendation |
|----------|---------|----------------|
| `strudel Screenshot 2026-04-23 at 5.17.27 PM.png` | Strudel live coding interface | Notes only — reference/inspiration |

**ChatGPT Year in Review**
| Filename | Content | Recommendation |
|----------|---------|----------------|
| `chatgpt - year in review - 2025 Screenshot 2025-12-23 at 9.30.17 AM.png` | ChatGPT year-in-review stats | Notes only — personal/meta |

**Physical Photos (PXL_ files)**
| Filename | Date | Content | Recommendation |
|----------|------|---------|----------------|
| `PXL_20260308_014255168.jpg` | Mar 8, 2026 | Physical photo | Review — may be setup/demo photo |
| `PXL_20260312_231912813.jpg` | Mar 12, 2026 | Physical photo | Review |
| `PXL_20260317_010232371.MP.jpg` | Mar 17, 2026 | Physical photo (duplicate exists) | Review |

**Mockups**
| Filename | Content | Recommendation |
|----------|---------|----------------|
| `mockuuups-smartphone-podcast-mockup.jpeg` | Smartphone mockup template | Notes only — marketing asset |
| `desktop.png` | Desktop mockup | Review |

**Unlabeled Screenshots (~111 files)**
Many `Screenshot 2026-...` files without project labels. Would need individual review to categorize. Likely a mix of development screenshots across all projects.

---

## Flags

### Exclusion List Check
**RESULT: NO MATCHES FOUND**

Searched all filenames for: Devereux, Fulcher, Selkani, Fernandes, Tariq, Seraphina
**None of these names appear in any filename.**

### Items Requiring Attention

1. **"Bender" tool** — `bender dev Screenshot 2026-04-08...` shows a "Scale Navigator Bender" product not listed in the known Scale Navigator ecosystem. Appears to be an MPE pitch-bend utility. ~~Confirm if this should be documented as a product~~ — **RESOLVED (Nathan, Jul 5, 2026): notes only, ignore for case studies.** "Eventually it will probably get subsumed into Tonalign" / merged. Do not build a page or beat around it; if the Tonalign case study is ever revised after a merge happens, revisit then.

2. **Jason Gardinier PDFs** — `logo jason gardinier mid-period scalenav_round1.pdf` contains logo design work. **These are design artifacts that may be useful for credits/attribution documentation.**

3. **Ben Tillotson attribution** — `dashboard hide scale classes in navigator based on network checkboxes (ben tillotson)...` credits Ben Tillotson for the scale-class filter feature. **Confirm if this attribution should appear in case study credits.**

4. **111 unlabeled screenshots** — Many `Screenshot 2026-...` files have no project prefix. Recommend Nathan do a quick visual scan to identify any important ones.

5. **HEIC file** — `IMG_8289.HEIC` cannot be viewed without conversion. May contain relevant content.

---

## Summary

| Metric | Value |
|--------|-------|
| Total archive files | 516 |
| Duplicates of deployed images | 18 |
| Unique images for review | 491 |
| **Sketchpad screenshots found** | **27** (gap closed) |
| Children of Children render found | **0** (gap NOT closed) |
| Exclusion list violations | 0 |
| New products discovered | 1 (Bender) |

### Top 10 Deployment Recommendations

1. **`sketchpad dev - mobile Screenshot 2026-03-13 at 2.59.03 PM.png`** — Mobile Sketchpad UI, perfect for Dashboard case study "Sketchpad" section
2. **`dashboard network scale class checkboxes wireframe IMG-20210919-WA0006.jpeg`** — Sep 2021 pen sketch showing scale-class filter concept
3. **`Screen Shot 2021-08-27 at 9.14.05 AM.png`** — Freeman-era pink/purple gradient mockup
4. **`IMG-20210923-WA0000.jpg`** — Clean full 57-scale network visualization
5. **`interlocking harmonic major to harmonic minor rings Screenshot 2026-03-22 at 8.12.24 PM.png`** — Beautiful interlocking scale rings visualization
6. **`tonalign dev Screenshot 2026-02-11 at 4.43.28 PM.png`** — Early "PitchSnap" UI (Tonalign predecessor)
7. **`tonalign logo ideation Screenshot 2026-03-20 at 4.37.14 PM.png`** — Hand-drawn keyboard concept sketch
8. **`snaps plugin Screenshot 2026-03-09 at 2.27.21 PM.png`** — SNAPS plugin interface
9. **`snaps plugin emitter Screenshot 2026-03-31 at 12.45.40 PM.png`** — SNAPS Particle Sampler Emitter view
10. **`ensemble jammer logo ideationScreenshot 2026-04-09 at 9.15.32 AM.png`** — Interlocking circles logo exploration

---

*Report generated by automated audit. Recommendations are suggestions pending Nathan's review.*
