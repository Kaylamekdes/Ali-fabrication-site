# 08 — Responsive design and accessibility

Related: [Design system](02-BRAND-AND-DESIGN-SYSTEM.md) · [Components](07-COMPONENT-SPECIFICATION.md) · [Testing](11-TESTING-AND-ACCEPTANCE.md)

**Important:** the supplied design is desktop-only. Everything below for other viewports is a **proposal derived from the desktop hierarchy** and needs the director's approval (Q-06). Desktop behaviour is fixed by the reference.

## Breakpoints and behaviour
| Viewport | Layout |
|---|---|
| **Wide ≥ 1536** | Same as reference; container capped at 1543 px, centred; heading sizes cap at the reference values |
| **Desktop 1280–1535** | As reference, container 86% with ≥ 72 px margins; headings scale via `clamp()` (H1 ≈ 100–126 px) |
| **Laptop / tablet landscape 900–1279** | 12-column grid kept; section headings still at col 5 down to ≈ 1000 px, then move above content; capability cards stay 3-up until ≈ 1000 px, then 1-up with image left/text right; stats stay 4-up (smaller numerals) |
| **Tablet 600–899** | Header collapses to logo + menu button; utility bar shows status + phone; hero image 16:10; stats 2 × 2; capabilities 1-up; project table keeps two columns; form 1-column |
| **Mobile < 600** | H1 ≈ 44–52 px, H2 ≈ 36–44 px; labels above headings; hero CTAs full width stacked (primary first); hero panel ≈ 4:3 with caption below the image if overlay hurts legibility; stats 2 × 2; process rows keep index + title; form buttons full width; footer single column |
Hierarchy preserved: eyebrow → H1 → lead → CTA → proof, never reordered; the quote CTA stays reachable (nav button on tablet, sticky bottom "Request Quotation" bar on mobile is **not** in the design and is not proposed).

## Keyboard and focus
Skip link to `#main` first in tab order; visible `:focus-visible` rings (gold 2 px); menu toggle and menu operable by keyboard; Esc closes menu; tab order follows visual order; no keyboard traps; `scroll-margin-top` equals header height so focused anchors are not hidden under the sticky header.

## Semantics
`<header>`, `<nav aria-label="Primary">`, `<main id="main">`, one `<h1>`, section `<h2>`s, card titles `<h3>`, `<footer>`. Lists for stats, process, pillars; table or description list for the project rows; real `<label>`s; `<button type="submit">`.

## Colour contrast (verify with measured values at build)
Large text and UI ≥ 3:1, body ≥ 4.5:1. Watch: gold small caps on `#0C0D12`; muted grey captions on `#12161F`; white caption text over the hero photo (add a gradient scrim).

## Images
Meaningful alt text per [04](04-ASSET-MANIFEST.md); decorative overlays (mullion lines, panes) `aria-hidden`; explicit width/height; images never convey text that is not also in HTML.

## Reduced motion
Respect `prefers-reduced-motion: reduce`: no smooth scroll, no transitions beyond colour changes. No auto-playing motion exists in the reference.

## Forms
Programmatic labels, required indicators in text ("required"), error text linked via `aria-describedby`, `aria-invalid` on invalid fields, status in an `aria-live="polite"` region, `inputmode="tel"` and `autocomplete="tel"`/`name`, touch targets ≥ 44 × 44 px, placeholder never the only label.

## Zoom and text size
Layout must survive 200% zoom and 320 px width without horizontal scroll; use `rem`/`clamp()`, not fixed pixel headings below desktop.
