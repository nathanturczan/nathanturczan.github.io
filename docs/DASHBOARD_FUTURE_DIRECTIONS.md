# Dashboard Case Study: Future Directions

**Date:** 2026-07-01
**Status:** Notes for future revision

---

## The Core Insight

There are **two different stories** getting tangled together:

### Story A: Why Scale Navigator Exists (Founder Story)

This is the origin story of your entire body of work. It goes:

1. Read Dmitri Tymoczko's work on scale networks
2. Realized these weren't just music theory diagrams — **they were design specs**
3. Wanted to build the interface
4. First question: **Explore** (how do I navigate harmonic space?)
5. Second question: **Share** (how do multiple people inhabit the same harmonic space?)
6. Arthur eventually revealed the missing third piece: **Capture**

This story explains:
- Dashboard
- Tonalign
- SNaPS
- Ensemble Jammer
- LA Laptop Orchestra
- Even Downhome Blues, to some extent

**This belongs somewhere prominent** — About page, homepage, dedicated "Origin" page, or a short founder essay. NOT buried inside Dashboard.

### Story B: Dashboard (Product Case Study)

Much narrower. It's:

1. If harmony is a network, what should the interface actually be?
2. Arthur's critique
3. Sketchpad
4. Plugin
5. Platform

That's a product case study. Keep it focused.

---

## The Three Questions (True Architecture)

The project has always had three questions:

1. **How do I explore harmonic space?**
2. **How do I let multiple people inhabit the same harmonic space?**
3. **How do I remember what I found?**

### Chronology

**Explore (2018-ish)**
- Read Tymoczko — not as theory, as implementation
- "Someone already figured out the geometry. I just have to build the interface."
- That's Dashboard

**Share (already brewing)**
- CalArts milieu: Ajay Kapur, Perry Cook, Ge Wang, Spencer Salazar
- Laptop orchestras, ChucK, Micro Nutrients with Richard Ahn
- Charlie Carl Bergen's "Grids, Beats, and Groups" class
- The question becomes: "How do we share harmony?"
- Eventually becomes Ensemble Jammer → LA Laptop Orchestra → your whole public practice

**Capture (the missing piece)**
- Arthur comes along during the pandemic
- He doesn't invent the project — he notices the missing corner
- You can explore, you can share, but if you discover something beautiful... it's gone
- Capture completes the triad

### The Real Structure

```
             Scale Navigator

        Explore     Share
             \       /
              \     /
             Capture
```

Not chronology — the three recurring questions you've spent almost a decade answering in different ways:
- **Dashboard** answers Explore first, eventually Capture
- **Ensemble Jammer** answers Share
- **LA Laptop Orchestra** is Share at the scale of an entire room

---

## Strongest Lines to Use

> "I realized these weren't just music theory diagrams. They were design specs."

That's the whole thing. Most people read Tymoczko and think "interesting theory." You thought "somebody forgot to build the software." That's an identity.

> "What happens if I give other people the keys?"

The transition from Dashboard → Ensemble Jammer → LALORK → basically your whole career.

---

## What to Add to Dashboard (Minimal)

One sentence like:

> "The project began after I encountered Dmitri Tymoczko's geometrical model of harmonic space and realized it wasn't just music theory — it was a blueprint for an interface."

Then stop. Don't continue into laptop orchestras, ensemble networking, CalArts, Micro Nutrients — that makes the story bigger than Dashboard.

---

## What's Missing from the Portfolio

A **founder story**. Not a company history. Not an About page. A 500-800 word essay answering:

> **Why have I spent almost a decade building interfaces for harmony?**

That's where Dmitri belongs.
That's where Debussy belongs.
That's where CalArts belongs.
That's where "these aren't music theory diagrams — they're design specs" belongs.
That's where "what happens if I give other people the keys?" belongs.

That essay would make every case study richer because the reader would already understand your motivation before opening any of them.

---

## The Exciting Insight (For Later)

What's really exciting about Scale Navigator is **collapsing the daylight between exploring and capturing**. They can be the same thing — two modes of the same interface, or one feeling like the other.

- A composed piece can sound like exploration
- Exploration done with foreknowledge can sound pre-composed
- The interface can switch between both and yet be both at the same time

---

## Key Decision

**Protect the Dashboard case study.**

Don't let it become responsible for explaining your entire philosophy. Its job is much smaller:

> Show me how you designed one really important product.

The philosophy behind *why* you keep building products around harmony is a separate story — strong enough to stand on its own.

---

## Raw Notes: Origin Story Details

### Reading Tymoczko

> "I was reading Dimitri's scale networks and Debussy's paper, which just immediately twigged to me: 'Oh wow, here's such a clear geometrical description of a really famous composer who is specifically famous for their harmonic language.' Right here is a really clear geometrical model that describes their pre-compositional approach to writing and probably improvising music as well."

### The Design Specs Impulse

> "These are design specs for me to build. I can build this, I can build the car, and then I'm curious to know what happens if I drive that car really fast. What happens if I drive it off a cliff? What happens if I take it to its logical conclusion? What if I make it interactive, and then the main thing, what happens if I give other people the keys?"

### Explore

> "The project really started with exploring harmony. This just seemed like such a fun thing to explore, but it was really hard for me to keep it all in my brain to memorize what all maximally intersecting neighbor scales are for a given scale. It is a lot of dimensions to hold in your brain at once. You can write it out on paper, and then you can have an interface that provides you the answer to those things, like something deterministic that's like a thesaurus."

### Share (CalArts Milieu)

> "The distribute thing was something that was always in the back of my mind from the milieu and vibe at CalArts, especially with Ajay Kapur and his good friends Perry Cook and Ge Wang, and Spencer Salazar doing networked computer performance with Auraglyph. Harmony is really important. There needs to be a networking protocol. There needs to be some way to share this. There needs to be some way to get us all on the same page."

### Share (Even Earlier)

> "Share was even maybe before this project, because it was something I was doing with Charlie Carl Bergen in his Grids, Beats, and Groups class. It's a class where you're grouped up into groups of two and three, and you're told to start a band. I started one with Richard Ahn. We were called Micro Nutrients, and we wrote some interface stuff in ChucK and then performed some microtonal stuff."

### The Laptop Orchestra People

> "This idea of coming up with systems that more than one person can network together, play together, sandboxes for ensembles, was always in the back of my mind. I majorly looked up to laptop orchestra people."

### Capture (Arthur, Pandemic)

> "Years later, after I had graduated and the pandemic hit, I reached out to Arthur, and then Arthur suggested capture — sort of like the locus, the empty cell that was suggested by the other two cells being filled in, like Sudoku."

---

## The Chord-Across-the-Scale-Boundary Problem (Issue #412)

Anchored on GitHub issue #412. This is a live product-design thread, captured for a later case study.

### The Thought That Started It

> "current scale's chords are easily revealed by the chord network interface. however i cannot consciously select what the next chord is from a new scale -- That scale's chords are invisible to me Until I actually get inside the scale or select that scale, then I can see. See attachment for a stupid idea that I know is stupid, but it has to be mentioned. What if you could see the chord network of the next scale that you're about to choose by hovering over that neighbor scale? Of course, this would be impractical to do for the navigator, somewhat easier to do but still impractical and weird looking, and even more impractical to do this for the network visualization. Still, I just want to put it on the board so we can anchor around it."

### Surfing the Quadruple Hierarchy

The goal is not scale-first thinking. It is surfing all four levels at once.

> "The thing I've been trying to completely get out of is the scale-first thinking. At the end of the day, surfing the quadruple hierarchy means surfing all four at once. It's not a problem to do voice-level surfing, moving around. That's what Ensemble Jammer does really well. Now let's talk about scale. We have the ability to surf local scales with a navigator or far-flung, distant scales with a network. Great. Now, with this chord network, all roots of the current scale are available to us to pick from visually, so we can do that. That only works within the current scale. I cannot, with the same fluency and accuracy and intention, pick the scale of a chord that I'm not in yet right now. Unless I do some really specific filtering with the allowable next chord checkboxes and stuff, but that sucks. That's been a thorn in my side, as proven by many, many people: bad design. There has to be a better way. This is the way."

The four levels being surfed:
- Voice / note level, handled well by Ensemble Jammer.
- Chord level, the chord network, which currently shows all roots of the current scale only.
- Scale level, surfed locally with the navigator or far-flung with the network.
- The chromatic universe / macro level (see scope note below).

### The Current Scale Acts Like a Membrane

The chord network is clipped to the active scale. Inside that boundary, chord selection is fluent and visual. Outside it, the chords of a neighboring scale are opaque until you actually cross into that scale. The current scale acts like a membrane: everything within it is legible, everything past it is invisible until entered. The fluency discontinuity lives exactly at that membrane.

The fix is to make the chord network continuous across the membrane, so that reaching toward a chord in a scale you have not yet entered co-moves you into that scale in a single gesture. Hovering a specific neighbor also disambiguates: a shared chord belongs to several scales, and the direction of reach picks which scale-reading you mean, moving chord and scale together rather than one and then the other.

### The Membrane Is Useful and Should Stay Permeable

The membrane is not a bug to delete. It is an inherent consequence of the scale being a higher level of the hierarchy, and that grouping is exactly what makes it useful. The design goal is to keep that usefulness while making the membrane permeable to information and interactivity.

> "The thing is, the membrane is an unfortunate artifact of this sort of scale, a higher level of the hierarchy. By definition, it is grouping things and clustering them and siloing them off from the wider universe of all possibilities. Yet it's also important to be able to break that membrane or treat it as entirely permeable, at least as regards to information and interactivity, while still recognizing the usefulness of that membrane. Keeping that usefulness."

### Scope Note: Microtonality Is Out

> "In surfing the chromatic universe, changing that on the fly is microtonality, which is not in scope right now, so ... Yeah."

Changing the underlying chromatic universe on the fly is the outermost level, and it is explicitly out of scope for now.

---

## Summary

Dashboard is a chapter. The origin story is the prologue. Don't paste the prologue into Chapter 1.
