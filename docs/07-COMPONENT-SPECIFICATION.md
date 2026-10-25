# 07 — Component specification

Related: [Design spec](01-DESIGN-SPECIFICATION.md) · [Functional requirements](05-FUNCTIONAL-REQUIREMENTS.md) · [Responsive/a11y](08-RESPONSIVE-AND-ACCESSIBILITY.md)

A single page does not need a component framework; these are HTML/CSS patterns, defined to keep markup consistent. Class names are proposals.

| Component | Purpose / inputs | Layout and responsive behaviour | States | Accessibility |
|---|---|---|---|---|
| `UtilityBar` | 3 text items: status line, Experience Center address, phone/email | 46 px, three-column flex; below 900 px keep status + phone only, hide centre | links: hover underline | Phone/email are real links; decorative dot `aria-hidden` |
| `SiteHeader` | Logo, 4 nav links, CTA | 118 px sticky; < 900 px: logo + toggle button, menu panel full width | link hover/active; toggle open | `<nav aria-label>`, toggle `aria-expanded`, Esc closes, focus returns |
| `Logo` | Tile + wordmark; variants dark/light | 64 px tile; footer light variant | n/a | text alternative via `aria-label` on link, tile `alt=""` or SVG `role="img"` with title |
| `Button` | label, href, variant (primary/text), icon (↗/↓) | fixed heights per reference (62/70); icons as inline SVG | hover, focus-visible, active | real `<a>` for navigation, `<button>` for submit |
| `SectionHeader` | index (`01`), label, H2 | label col 1–4, heading from col 5; below 900 px stacked, label above heading | n/a | One `h2` per section; label is not a heading |
| `Hero` | eyebrow, H1, lead, CTAs, `HeroPanel` | Grid with lead in col 5–8, CTAs right; stacks on mobile | n/a | One `h1` only |
| `HeroPanel` | image (IMG-01), caption, project name, subtitle, WhatsApp link | 2.83:1 desktop, 16:10 tablet, 4:5 or 4:3 mobile (proposal); mullion overlay is CSS lines | n/a | image alt per doc 04; caption text real text, contrast over gradient ≥ 4.5:1 |
| `StatsStrip` | 4 × (value, label) | 4 columns desktop, 2 × 2 tablet/mobile | n/a | `<dl>` or list; values are text |
| `CapabilityCard` | index, image, title, copy, link | 3 columns with hairlines; stacks on mobile | link hover | Link text distinct ("Request aluminium windows"); image alt non-empty |
| `ProjectRow` | name, location, scope (+ optional image) | two-column row, hairline separators; stacked on mobile | hover tint | table semantics (`<table>` or `<dl>`) with headers MAJOR PROJECT / SCOPE |
| `PillarItem` | index, title, copy | 3 columns | n/a | list |
| `ProcessStep` | index, title | row with index left, title col 5 | n/a | ordered list `<ol>` |
| `QuoteForm` | fields, 2 buttons, status region | 2 columns desktop; stacked mobile; fields underline-only | focus, error, ready | `<label for>`, `aria-describedby` errors, `aria-live="polite"` status, `autocomplete` (name, tel), 44 px targets |
| `ContactList` | label/value rows | hairline rows | n/a | `<dl>` |
| `SiteFooter` | logo, address, contacts, links, legal | 2 columns; stacked on mobile | n/a | `<footer>` landmark |
| `ConceptBanner` | "Design concept by TheCompany.design — not the official Ali Fabrication website" | Slim top or footer notice; **required while unapproved** (not in the reference; added for compliance, Q-12) | n/a | visible text, not an image |

Dependencies: tokens in doc 02; copy in doc 03; images in doc 04. No shared JS framework.
