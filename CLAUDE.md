# Portfolio site conventions

- **Mobile screenshots: always try to show 2 or 3 side by side**, never one alone. Use `.image-row` (same aspect ratios) or `.image-row--fit` with inline `style="flex: <width/height> 1 0%"` per image (mixed aspect ratios, equal heights, no cropping).
- Videos are always embedded (YouTube iframe in `.video-container`), never linked out.
- No em-dashes in body text: use colons, parentheses, or commas. Em-dashes only as separators in Related-work lists and inside verbatim quotes/captions.
- Case-study eyebrow spine: Problem → Insight → Prototype → Failure → Iteration → Design decision → Solution → Outcome.
- Credit collaborators by name; never "Team · 1".
- Never use the phrase "final solution" anywhere on the site (eyebrow is "Solution").
- Home page photo stack in `script.js` references image paths: check it before deleting or renaming images.
