---
name: EF McCambridge & Co.
description: Clean, modern site for a director-led chartered accountancy working both sides of the Irish border since 1935.
colors:
  teal: "#12789c"
  teal-ink: "#0d6382"
  teal-dark: "#0a4f69"
  on-teal: "#ffffff"
  bg: "#ffffff"
  surface: "#f2f7f8"
  surface-2: "#e6f1f4"
  ink: "#0f1417"
  muted: "#475960"
  line: "#d8e5e9"
  control-stroke: "#c3d4da"
  on-ink-text: "#cfdde2"
  on-ink-muted: "#9fb3ba"
  on-ink-teal: "#7cc3dc"
  error: "#a32a1c"
typography:
  display:
    fontFamily: "Jost, Futura, Century Gothic, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 1.7rem + 3.4vw, 4.6rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Jost, Futura, Century Gothic, system-ui, sans-serif"
    fontSize: "clamp(2.1rem, 1.6rem + 2.2vw, 3.4rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  title-lg:
    fontFamily: "Jost, Futura, Century Gothic, system-ui, sans-serif"
    fontSize: "clamp(1.55rem, 1.35rem + 0.9vw, 2.1rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Jost, Futura, Century Gothic, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 1.15rem + 0.45vw, 1.5rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.015em"
  lede:
    fontFamily: "Jost, Futura, Century Gothic, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 1.15rem + 0.45vw, 1.5rem)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Jost, Futura, Century Gothic, system-ui, sans-serif"
    fontSize: "clamp(1.08rem, 1.03rem + 0.22vw, 1.22rem)"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Jost, Futura, Century Gothic, system-ui, sans-serif"
    fontSize: "clamp(1.08rem, 1.03rem + 0.22vw, 1.22rem)"
    fontWeight: 500
    lineHeight: 1.2
  small:
    fontFamily: "Jost, Futura, Century Gothic, system-ui, sans-serif"
    fontSize: "clamp(0.9rem, 0.87rem + 0.12vw, 0.98rem)"
    fontWeight: 400
    lineHeight: 1.4
rounded:
  sm: "9px"
  md: "14px"
  lg: "18px"
  pill: "999px"
spacing:
  gutter: "clamp(1rem, 0.6rem + 2vw, 2.5rem)"
  section: "clamp(4rem, 2.8rem + 5vw, 7.5rem)"
  container: "74rem"
components:
  button-primary:
    backgroundColor: "{colors.teal-ink}"
    textColor: "{colors.on-teal}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.8rem 1.25rem"
  button-primary-hover:
    backgroundColor: "{colors.teal-dark}"
    textColor: "{colors.on-teal}"
  button-ghost:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.8rem 1.25rem"
  button-ghost-hover:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
  button-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-teal}"
    rounded: "{rounded.pill}"
    padding: "0.8rem 1.25rem"
  button-light:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.teal-dark}"
    rounded: "{rounded.pill}"
    padding: "0.8rem 1.25rem"
  button-light-hover:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.teal-dark}"
  input:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "0.75rem 0.9rem"
  choice-chip:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.55rem 0.95rem 0.55rem 0.7rem"
  choice-chip-selected:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
  option-row:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0.75rem 0.9rem"
  option-row-selected:
    backgroundColor: "{colors.surface}"
  card:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "clamp(1.25rem, 1rem + 1vw, 1.75rem)"
  card-elevated:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
  monogram:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.teal-dark}"
    rounded: "{rounded.pill}"
    size: "3.5rem"
  closing-band:
    backgroundColor: "{colors.teal-ink}"
    textColor: "{colors.on-teal}"
  footer:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-ink-text}"
    typography: "{typography.small}"
---

# Design System: EF McCambridge & Co.

## Overview

**Creative North Star: "The Front Desk"**

The site behaves like a well-run practice's front desk: tidy, light, unhurried, and always ready with the right phone number. It is the category standard played straight and well, a clean modern professional-services site, and its character comes from usefulness rather than ornament. The nearest office is one tap away: the first viewport links straight to the contact page, which opens on the office map and cards; the two tax systems are laid side by side in plain words; the directors are named.

Visually it is white ground, pale teal-grey bands, black geometric headings that echo the wordmark, and the logo's teal as the single accent. Surfaces are rounded cards with hairline borders and soft, long, blue-tinted shadows. Density is generous: large body text (about 17-20px), wide section padding, short measures. Motion is smooth and quiet: content fades up out of a slight blur as it scrolls in, hero lines rise from a mask, and one authored moment on the cross-border comparison. Everything still reads with motion reduced and with JavaScript off.

The old site's styling is explicitly discarded; nothing here should recall it.

**Key Characteristics:**
- One accent: the logo teal, in three working shades, on buttons, links, selection, focus and one closing band.
- Black Jost headings at weight 600 with tight negative tracking, matching the wordmark.
- White and pale teal-grey alternating section bands; ink-black footer.
- Rounded cards (14px), hairline borders, soft long shadows, pill buttons.
- Smooth scroll-in reveals on one long ease, always off under reduced motion.

## Colors

A cool, nearly monochrome palette: white and teal-tinted greys, near-black ink, and one clear teal taken from the logo's tagline.

### Primary
- **Tagline Teal** (`teal`): the logo's own teal. Used for strokes and marks rather than small text: focus outlines, the nav underline, link underlines, radio and checkbox fills, selected-option borders, input focus border, the scrollbar thumb and text selection. Also the wordmark tagline.
- **Deep Tagline Teal** (`teal-ink`): the teal darkened for text and fills that carry white text. Primary button fill, the hero headline's accent words, office tags, link hover colour, the closing call-to-action band and the "one firm" foot of the cross-border comparison.
- **Harbour Teal** (`teal-dark`): hover state of the primary button, text on light buttons, and monogram initials.

### Neutral
- **Paper White** (`bg`): page ground and the fill of every card, field and option.
- **Mist Band** (`surface`): alternating section bands, selected options and chips, ghost-button hover, the default form status.
- **Teal Mist** (`surface-2`): teal-tinted fills: monogram discs, the hero's single radial wash, light-button hover.
- **Ledger Ink** (`ink`): all headings and body text, the dark call button, the sticky selection bar and the footer ground.
- **Slate Teal** (`muted`): secondary text: ledes, descriptions, captions, definitions, addresses. Tinted toward the teal so greys stay in the family.
- **Hairline** (`line`): card borders, service dividers, fact separators, the scrolled header's bottom rule.
- **Control Stroke** (`control-stroke`): the resting 1.5px border of text inputs, a step darker than the hairline so fields read as fields.
- **On-Ink Text / On-Ink Muted / On-Ink Teal** (`on-ink-text`, `on-ink-muted`, `on-ink-teal`): footer body text, footer legal line, and the footer wordmark's tagline on the ink ground.
- **Error Brick** (`error`): field error text, invalid field borders and the error status (on a pale brick tint).

### Named Rules
**The One Accent Rule.** Teal is the only hue. No second accent colour is introduced; emphasis comes from weight, size and the three teal shades.

**The Ink-for-Text Teal-for-Marks Rule.** Small teal text uses `teal-ink` (6.7:1 on white); the brighter `teal` is for strokes, fills and marks. White text never sits on `teal`, only on `teal-ink` or darker.

**The One Band Rule.** A full teal ground appears once per page, in the closing call-to-action band (and in the narrow foot of the cross-border comparison). Other sections alternate white and `surface`.

## Typography

**Display Font:** Jost (with Futura, Century Gothic, system-ui, sans-serif), self-hosted variable woff2, weights 400-700.
**Body Font:** Jost, same stack. One family throughout.

**Character:** A geometric sans that matches the wordmark's black type, so the headings read as the logo speaking. Weight and tracking do the work a second family would otherwise do.

### Hierarchy
- **Display** (600, fluid 2.5rem to 4.6rem, line-height 1.02, -0.04em): the home hero headline and each inner page's `h1`, capped near 16ch.
- **Headline** (600, fluid 2.1rem to 3.4rem, 1.08, -0.025em): section `h2`s, capped 14-18ch, balanced wrapping.
- **Title Large** (600, fluid 1.55rem to 2.1rem, 1.1): office names, office phone numbers and hero fact figures. Numbers use tabular lining figures.
- **Title** (600, fluid 1.25rem to 1.5rem, -0.015em): card and service headings, director names.
- **Lede** (400, fluid 1.25rem to 1.5rem, 1.5): the paragraph under a display heading, in `muted`, capped 36-44ch.
- **Body** (400, fluid 1.08rem to 1.22rem, 1.6): running text, capped 40-54ch; `text-wrap: pretty`.
- **Label** (500, body size, 1.2): buttons, nav links, chips, comparison values. Field labels and legends step up to 600.
- **Small** (400, fluid 0.9rem to 0.98rem): captions, definitions, hints, errors, director roles, the whole footer.

### Named Rules
**The Wordmark Echo Rule.** Headings are always Jost 600 in `ink` with negative tracking (-0.015em for titles down to -0.04em for display). No light or italic display weights, no uppercase headings.

**The No-Tracked-Caps Rule.** Tracked uppercase belongs to the logo's tagline alone. No other text is set in spaced capitals.

**The Lockup Rule.** The wordmark is set in live type: the name at 600, -0.035em, and the tagline beneath it at a quarter of the name's size, 0.1em tracked capitals in teal, right-aligned under the name as in the logo. On phones the wordmark takes its own row and grows (up to 1.9rem) so the tagline stays legible. The proportion is a logo reproduction, not a type size for anything else.

## Layout

A single centred container (`container`, 74rem) with a fluid side gutter (`gutter`, 1rem to 2.5rem). Sections stack vertically with fluid padding (`section`, 4rem to 7.5rem) and alternate white and `surface` bands. Inner pages open with a page head (display `h1` plus lede) and the first section after it drops its top padding.

Recurring grids:
- **Hero:** a single text column (lede up to 44ch) with a soft teal wash top right.
- **Section head:** heading left (1.2fr), short muted paragraph right-aligned and bottom-aligned (1fr); stacks at 760px.
- **Split:** text and illustration-card in two near-equal columns; stacks at 860px.
- **Services:** two-column list separated by top hairlines; one column at 720px.
- **Directors and offices:** three equal cards; one column at 860-900px.
- **Footer:** brand column at 1.4fr plus three columns; two columns at 860px, one at 480px.

The header is sticky, 94% white, and tightens its vertical padding (1rem to 0.65rem) and gains a hairline and soft shadow once scrolled. Below 900px the nav wraps under the wordmark and spreads full width; below 480px the call button drops its label to an icon. Anchor targets clear the sticky header with 6rem scroll padding.

## Elevation & Depth

A hybrid: surfaces are mostly flat white on white or on `surface`, separated by hairlines, and depth comes from soft, long, low-opacity shadows tinted toward the teal. Shadows are ambient, never hard or offset.

### Shadow Vocabulary
- **Resting lift** (`box-shadow: 0 1px 2px rgb(15 20 23 / 0.04), 0 12px 32px -12px rgb(13 70 95 / 0.18)`): the enquiry form, the cross-border comparison, and the hover or target state of director and office cards.
- **Raised** (`box-shadow: 0 2px 4px rgb(15 20 23 / 0.04), 0 28px 60px -24px rgb(13 70 95 / 0.32)`): the one most important object on a surface: the sticky service-selection bar.
- **Header** (`box-shadow: 0 8px 24px -18px rgb(13 70 95 / 0.35)`): the masthead once scrolled.
- **Button hover** (`box-shadow: 0 10px 20px -12px rgb(10 79 105 / 0.6)`): filled buttons on hover, with a 1px lift.

### Named Rules
**The One Raised Object Rule.** Each surface has at most one raised object. Everything else sits flat or at resting lift.

**The Single Wash Rule.** Soft radial glows are allowed only as one large, faint wash per band: `surface-2` behind the hero's top right, and 12% white in the closing band. No other gradients.

## Shapes

Gently rounded, consistent corners: 9px (`rounded.sm`) for fields, option rows, status boxes and small selectable rows; 14px (`rounded.md`) for cards; 18px (`rounded.lg`) for the two most prominent containers, the enquiry form. Buttons, chips and the selection bar are full pills; monograms and radio marks are circles; the checkbox mark is a 5px rounded square.

Borders are 1px hairlines in `line`; interactive controls (buttons, inputs, radios) use a 1.5px stroke. The only dashed line in the system is the teal border between the two jurisdictions in the cross-border comparison. Icons are inline SVG line icons on a 24px grid, 1.75 stroke, round caps and joins, inheriting `currentColor`.

## Components

### Buttons
Calm, rounded and confident; the arrow nudges forward on hover.
- **Shape:** full pill (999px), 1.5px border matching the fill.
- **Primary:** `teal-ink` fill, white Label text, 0.8rem 1.25rem padding, optional leading or trailing 1.1em icon.
- **Hover / Focus:** fill and border move to `teal-dark`, the button lifts 1px with the button-hover shadow, a trailing arrow slides 3px right; 0.25s on the system ease. Focus is the global 3px teal outline at 3px offset.
- **Ghost:** transparent with a `line` border and `ink` text; hover fills `surface` and turns the border teal, no shadow.
- **Dark:** `ink` fill with white text. Used for the header call button.
- **Light / Outline-light:** white fill with `teal-dark` text, or a transparent 55%-white outline, for use on the teal closing band.
- **Small:** inside office cards, 0.6rem 1rem padding at Small size.

### Chips
- **Style:** pill-shaped radio or checkbox labels with a 1px `line` border, a 1.15rem mark and Label weight text.
- **State:** hover tints the border toward teal; selected fills `surface` with a teal border.

### Option rows
Full-width selectable rows (the services-page picks): 9px corners, `line` border, a custom 1.35rem radio mark whose teal dot scales in over 0.35s. Selected rows fill `surface` with a teal border.

### Cards / Containers
- **Corner Style:** 14px; 18px for the enquiry form.
- **Background:** white, on either white or `surface` bands.
- **Shadow Strategy:** flat with hairline at rest for director and office cards, which gain resting lift on hover (directors also rise 3px); the comparison and form sit at resting lift.
- **Border:** 1px `line`; office cards tint the border toward teal on hover and go full teal when targeted by an anchor.
- **Internal Padding:** fluid, about 1.25rem to 2rem.

### Inputs / Fields
- **Style:** white fill, 1.5px `control-stroke` border, 9px corners, 0.75rem 0.9rem padding, body-size text, teal caret. Labels sit above at 600; optional markers in `muted` at 400; hints in Small `muted`.
- **Focus:** border turns `teal` with a 4px, 18% teal halo; no outline.
- **Error:** border and a Small 500-weight message in `error`; a form-level status box uses a pale brick tint.

### Navigation
Four text links at Label weight in `ink`. A 2px teal underline grows from the left (scaleX, 0.35s) on hover and stays drawn on the current page. The header call button sits at the end of the nav.

### Cross-Border Comparison (signature)
A two-column card comparing Northern Ireland and the Republic of Ireland as definition lists, divided by the dashed teal border, with a full-width `teal-ink` foot reading as one firm across both. This carries the system's one authored scroll moment: the columns slide in from opposite sides (36px), the dashed border draws downward, then the foot opens from the centre, and the card's shadow arrives last.

### Director Card
White card with a 3.5rem `surface-2` monogram disc of initials in `teal-dark`, the name at Title and the role at Small `muted`.

### Selection Bar
On the services page, a sticky pill bar in `ink` with white text and a raised shadow, pinned 1rem above the bottom, carrying the count and the call to action. It becomes a rounded rectangle with a full-width button below 520px.

### Motion
One ease for everything: `cubic-bezier(0.16, 1, 0.3, 1)`. State changes run 0.2-0.4s. Scroll reveals fade up 28px from a 6px blur (0.9s opacity, 1.1s movement) with 90ms stagger steps, triggered when 12% of an element is visible. Hero headline lines rise from a clipping mask over 1.15s, staggered 110ms. Content is visible by default and only hidden when JavaScript has run and the visitor has not asked for reduced motion; under reduced motion all transitions are effectively instant and smooth scrolling is off.

## Do's and Don'ts

### Do:
- **Do** keep teal the only accent, and use `teal-ink` for any teal text or any fill carrying white text.
- **Do** set every heading in Jost 600 `ink` with negative tracking, balanced wrapping and a ch-based cap.
- **Do** alternate white and `surface` section bands, with the teal band used once, at the close.
- **Do** put phone numbers in tabular lining figures and make each one a `tel:` link.
- **Do** use 14px rounded white cards with 1px `line` borders and the teal-tinted soft shadows from the vocabulary.
- **Do** use pill buttons and inline 24px line icons at 1.75 stroke.
- **Do** run all motion on the one long ease, keep content visible without JavaScript, and switch motion off under `prefers-reduced-motion`.

### Don't:
- **Don't** introduce a second accent hue, or set white text on the brighter `teal`.
- **Don't** set text in tracked uppercase; that treatment belongs to the logo tagline alone.
- **Don't** use hard, offset or dark-edged shadows; depth is soft, long and teal-tinted.
- **Don't** add gradients beyond the single faint radial wash per band.
- **Don't** raise more than one object per surface with the raised shadow.
- **Don't** add another authored scroll sequence; the cross-border comparison is the one, and everything else uses the standard fade-up reveal.
- **Don't** bring back any styling from the firm's old site.
