# 02 — Brand and design system

Related: [Design spec](01-DESIGN-SPECIFICATION.md) · [Responsive](08-RESPONSIVE-AND-ACCESSIBILITY.md)

Labels: **[M]** sampled from the reference image (JPEG, so ±2 per channel), **[P]** stated in the design prompt, **[E]** estimated. None of this is an official company brand specification; the company has not supplied brand guidelines.

## Colour
| Token | Value | Source | Use |
|---|---|---|---|
| `--bg-base` | `#0C0D12` | [M] (prompt says `#0B0D12`) | Page background, alternate sections |
| `--bg-tint` | `#12161F` | [M] = [P] | Stats strip, S5, S7 surfaces |
| `--bg-bar` | `#090A0E` | [M] | Utility bar, footer |
| `--bg-nav` | `#101018` | [M] | Header |
| `--accent` | `#C5A880` | [M] = [P] | Buttons, gold words, labels, numerals |
| `--text` | `#FFFFFF` | [M] = [P] | Headings |
| `--text-muted` | `#9CA3AF` | [P]; body text in the reference looks lighter, ≈ white at ~85% | Body, nav links, captions |
| `--border` | `#1E2533` (prompt); sampled hairlines `#21252E` | [P]/[M] | All dividers |
| `--accent-bronze` | not measured (≈ orange-bronze) | [E] | "MAJOR PROJECT / SCOPE" header only. Sample before build |
| hero panel gradient | `#244D63` → `#45687B` | [M] | Hero image placeholder (will be replaced by photo) |

**Contrast to verify at build:** `#C5A880` on `#0C0D12` (large text OK; small caps labels need checking); `#9CA3AF` on `#0C0D12` passes AA for body; dark text on `#C5A880` buttons passes AA.

## Typography
- **Family:** Plus Jakarta Sans [P: "Plus Jakarta Sans or Inter"]; the letterforms in the reference match Plus Jakarta Sans. Source: Google Fonts, self-host recommended (not testable in my sandbox, which blocks Google Fonts).
- **Numerals:** `font-variant-numeric: tabular-nums` for stats, phone numbers, project metrics [P].
- **Scale (reference px at 1795 wide, [E] from line pitch):**
| Role | Size | Line-height | Weight | Tracking |
|---|---|---|---|---|
| H1 hero | ≈ 126 | 0.98 | 400–500 | ≈ −0.04em |
| H2 section | ≈ 96 | 1.0 | 400 | ≈ −0.04em |
| Form H2 | ≈ 100 | 1.0 | 400 | ≈ −0.04em |
| Lead heading (S5 left) | ≈ 48 | 1.1 | 300 | −0.02em |
| Stat numerals | ≈ 76 | 1.0 | 300 | −0.02em |
| Card title | ≈ 36 | 1.2 | 300 | 0 |
| Process step | ≈ 32 | 1.2 | 300 | 0 |
| Project name | ≈ 24 | 1.3 | 600 | 0 |
| Body / lead | 18–24 | 1.6 | 300–400 | 0 |
| Labels / eyebrows | 13–16 | 1.4 | 600 | 0.14–0.2em, caps |
Proposed fluid mapping (needs approval): `clamp()` between the mobile and desktop sizes.

## Spacing and layout
- Container 1543 px at a 1795 px viewport with 126 px margins [M] → use `width: min(86%, 1543px)` or `padding-inline: clamp(1.25rem, 7vw, 126px)`.
- Header/utility side margin 72 px [M].
- 12-column grid; headings start at column 5 [M].
- Vertical rhythm [M]: section top padding ≈ 180 px; label-to-heading gap 0; heading-to-content ≈ 130 px; row heights 115–127 px.
- Spacing scale (proposal, 8-pt based): 8, 16, 24, 32, 48, 72, 126, 180.

## Shape, borders, shadows
Reference: square corners everywhere, no shadows [M]. **Approved update 2026-10-25** (doc 01, "Approved design updates"):
| Token | Value | Use |
|---|---|---|
| `--radius-sm` | 8px | Buttons, focus rings, small chips |
| `--radius-md` | 16px | Cards, image frames, stat cards, project rows on hover |
| `--radius-lg` | 28px | Hero panel, large containers |
| `--glow-hover` | `0 20px 60px -20px rgba(197,168,128,.25)` | Card hover only; no other shadows |

Still square: section bands, hairline dividers, underline-only form fields. Borders stay 1 px `#1E2533`.

## Buttons
| Variant | Spec |
|---|---|
| Primary | Fill `#C5A880`, dark text (≈ `#0C0D12`) ≈ 18 px semibold, square; nav 212 × 62, hero 270 × 70, form 260 × 70 [M]; trailing ↗ glyph on hero and form |
| Secondary (text) | White text, 1–2 px white underline, ≈ 18 px semibold; trailing ↓ or ↗ |
| Link in cards | White semibold ≈ 17 px, underline, ↗ at far right edge of column |

## Image treatment
Hero: wide panel, mullion-line overlay, bottom gradient for caption legibility [E]. Cards: dark frames with thin navy border [M]. Treatment for photographs: `object-fit: cover`, no filters, no stretching; see [04](04-ASSET-MANIFEST.md).

## Motion
Reference: none. **Approved update 2026-10-25:** load and in-view animations per doc 01, transform and opacity only. Easing token `--ease-out: cubic-bezier(.2,.7,.2,1)`; hover transitions 200–300 ms. No scroll-jacking. Everything is disabled under `prefers-reduced-motion: reduce`, and content is never hidden without JavaScript.

## Breakpoints (proposal; reference is desktop only)
`≥ 1280` desktop (as reference) · `900–1279` laptop/tablet landscape · `600–899` tablet · `< 600` mobile. See [08](08-RESPONSIVE-AND-ACCESSIBILITY.md).

## Logo
AL monogram: a dark rounded-corner-free tile with a diagonal gold bar and white "AL" (header), inverted (light tile, dark AL) in the footer [M]. **The supplied assets do not include logo files.** Source options: crop from the company profile (as done in the earlier concept) or request vectors from the client. The company's official logo (navy/orange "AL" mark) differs from this gold-on-dark variant, which is a design adaptation requiring approval ([12](12-ASSUMPTIONS-AND-OPEN-QUESTIONS.md) Q-08).
