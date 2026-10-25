# 01 — Design specification

Related: [Design system](02-BRAND-AND-DESIGN-SYSTEM.md) · [Content](03-CONTENT-AND-SECTION-SPECIFICATION.md) · [Assets](04-ASSET-MANIFEST.md) · [Responsive](08-RESPONSIVE-AND-ACCESSIBILITY.md)

**Source of truth:** `reference/design-reference-desktop.jpg`, a 1795 × 8000 px desktop capture. All pixel values below were measured from that image at its native width and are labelled **[M]** measured, **[E]** estimated (derived from the image, e.g. font size from line pitch) or **[P]** from the prompt. The capture's device pixel ratio is unknown, so treat pixel values as "reference pixels at a 1795 px wide viewport". Where the prompt and the reference differ, the reference wins and the difference is recorded in [12](12-ASSUMPTIONS-AND-OPEN-QUESTIONS.md).

**Not supplied:** tablet and mobile designs, hover/focus/success/error states, animation specs. See section "Responsive" and doc 08.

## Page map (top to bottom, reference y-positions [M])
| ID | Section | y start | height |
|---|---|---|---|
| S0 | Utility bar | 0 | 46 |
| S1 | Sticky navigation | 46 | 118 |
| S2 | Hero | 164 | ~1474 (to stats strip) |
| S3 | Stats strip | 1638 | 300 |
| S4 | Capabilities (`01`) | 1938 | ~1420 |
| S5 | Landmark projects (`02`), tint surface | 3357 | 1205 |
| S6 | Contractor confidence (`03`) | 4562 | 909 |
| S7 | Execution process (`04`), tint surface | 5471 | 949 |
| S8 | Request for quotation | 6420 | 1102 |
| S9 | Footer | 7522 | ~478 |

## Global layout rules
- **Content container [M]:** left edge 126 px, right edge 1669 px, i.e. 1543 px wide (≈ 86% of 1795, 126 px margins). The utility bar and header use a narrower 72 px side margin. Footer content aligns to the 126 px container.
- **Grid [E]:** 12 columns. Section labels sit in columns 1–4. Section headings and the content of S4/S6/S7 start at x = 642, which is exactly one third of the container (column 5). Three-up grids split the container into thirds.
- **Surfaces [M]:** alternating near-black (`#0C0D12`) and slightly lighter navy-charcoal (`#12161F`); hairline borders (`≈ #1E2533–#21252E`) separate sections, columns and rows. No shadows, no rounded corners anywhere (all edges square).
- **Section header pattern [M]:** a small index and gold caps label at left (`01  CAPABILITIES`) and a large light-weight white heading starting at column 5, followed by a hairline and content.

## S0 — Utility bar
- 46 px high, background ≈ `#090A0E`, 1px bottom border. Three text items, 13 px [E] letter-spaced, muted: left a small gold dot + "East Africa's Premier Architectural Fabricator"; centre "Experience Center · GW Brook Business Park, Westlands, Nairobi"; right "(+254) 721 691 786 · info.alifab@gmail.com". Items spaced across 72 px margins.
- Content flags: "Premier" is the company's own profile wording but a superlative; the address is disputed ([12](12-ASSUMPTIONS-AND-OPEN-QUESTIONS.md)).

## S1 — Navigation
- 118 px high, background ≈ `#101018`, bottom hairline. Sticky [P].
- Left: square AL logomark (≈ 64 px; dark tile, diagonal gold bar, white "AL"), then wordmark "ALI FABRICATION" (≈ 20 px, caps, tracked, white) over "MASTER CRAFTSMANSHIP" (≈ 11 px, caps, tracked). Logo files are not in the supplied assets; see [04](04-ASSET-MANIFEST.md).
- Centre links at x ≈ 651–1196: Capabilities, Major Projects, Why Us, Experience Center. ≈ 18 px, muted silver, spaced ≈ 40 px.
- Right: solid champagne button "Request Quotation", 212 × 62 px [M] at x 1511–1723, fill `#C5A880` [M], dark text ≈ 18 px semibold, square corners.

## S2 — Hero
- Eyebrow at y ≈ 289: "INSTITUTIONAL GRADE ARCHITECTURAL FENESTRATION", ≈ 16 px, caps, letter-spacing ≈ 0.2em, gold.
- H1, two lines, light-medium weight, tracking tight (≈ −0.04em [E]): "Master Craftsmanship in" (white) / "Aluminium & Glass." (gold `#C5A880`). Line pitch ≈ 125 px [M] → font size ≈ 124–128 px [E], line-height ≈ 0.98. Left edge 126 px; first line spans ≈ 126–1480 px.
- Lower row, y ≈ 650–840: paragraph starting at x = 651 (column 5–8, ≈ 410 px wide), ≈ 24 px, line-height ≈ 38 px (1.6), white-ish: "East Africa's fabricators of high-performance aluminium windows, panoramic sliding doors, and structural curtain walling—engineered for the region's climate." CTAs at right: primary "Start Your Project ↗" (270 × 70 px [M], x 1241–1510, fill `#C5A880`, dark text) and secondary text link "View Track Record ↓" with a white underline (x 1552–1716).
- **Hero image panel [M]:** x 126–1669, y 937–1483 → 1543 × 546 px (aspect ≈ 2.83 : 1). In the reference it shows a blue-teal gradient with white mullion lines (3 vertical, 1 horizontal) as a placeholder. Overlaid bottom-left at x 173: small caps caption "FEATURED PROJECT · GIGIRI", title "Lion Villas" (≈ 36 px, white), subtitle "Acoustic glazing · Slim-profile fenestration" (≈ 36 px semibold). Overlaid bottom-right: "+254 721 691 786" and "WhatsApp" (≈ 18 px).
- **Image frame IMG-01** lives here. The mullion-line overlay is part of the design intent and should remain over the photograph, subtly.

## S3 — Stats strip
> **Superseded 2026-10-25** by the bento stats section in "Approved design updates" below. The original measurements are kept for reference.

- Full-width band, y 1638–1938, background `#12161F`, 1px top border; 4 equal cells of ≈ 386 px at x = 126, 511, 897, 1283, 1669 with vertical hairlines (also a faint cell beyond each edge).
- Numerals: light weight, gold, ≈ 76 px [E], tabular figures: "25+", "100+", "2011—23", "10 year". Labels under each, ≈ 14 px caps tracked, muted: YEARS OF EXCELLENCE · COMMERCIAL & RESIDENTIAL LANDMARKS · VERIFIED PROJECT RECORD · STRUCTURAL GUARANTEE.
- **Content blocked:** "25+" and "100+" are unsupported by sources; "structural guarantee" overstates the folding-door-only guarantee. See doc 03.

## S4 — Capabilities
- Label `01 CAPABILITIES` at y ≈ 2120. H2 at x 642, two lines, ≈ 96 px [E] (line pitch 96), white: "Precision / Architectural Systems."
- Hairline at y ≈ 2385 across the container. Three columns separated by vertical hairlines at x = 639 and 1154 (widths ≈ 513, 515, 515 [M]); each column has an index (`01`/`02`/`03`, gold, ≈ 14 px), an image frame, a title (≈ 36 px light), a 3-line description (≈ 18 px, line-height 30 px, muted white), and an underlined link with a small ↗ at far right.
- Image frames [M], y 982–1318 + 1500 offset = 2482–2818 (336 px high): card 1 x 126–600 (474 × 336), card 2 x 680–1114 (434 × 336), card 3 shows three tilted translucent panes at x 1215–1605 and overlaps the title ("Curtain Wal…uts" is hidden behind the pane graphic — a visible defect in the reference; see doc 12 Q-10).
- Frames in the reference are dark placeholder tiles (three vertical panels in a navy border). They are the intended locations of **IMG-02, IMG-03, IMG-04**.
- Below the grid, y ≈ 3188, full-width sentence ≈ 20 px: "Specification support includes glass selection, hardware, water-tightness, acoustic performance and façade interfaces." (unverified service claim).

## S5 — Landmark projects
- Surface `#12161F`. Label `02 VERIFIED TRACK RECORD`; H2 "Landmark Projects Across East Africa." (≈ 96 px, x 642).
- Left block (x 196–750): small caps "2011—2023 COMPLETIONS", ≈ 48 px light heading "Specified for commercial, institutional and high-value residential buildings.", ≈ 20 px muted paragraph "Selected projects demonstrate capability across structural glazing, medical fenestration and commercial curtain walling."
- Right table (x 969–1669): header row MAJOR PROJECT / SCOPE (≈ 13 px caps, **orange-bronze**, not the champagne gold); three rows separated by hairlines, each row ≈ 127 px: name (≈ 24 px semibold white) + location (≈ 16 px muted) at left, scope (≈ 20 px semibold white) at right:
  - Cathedral Mall · Kakamega Town · Structural glazing
  - Tenwek Hospital · Bomet County · Medical fenestration
  - Highway Mall · Uhuru Highway, Nairobi · Curtain walling
- **No image frames are drawn in this section in the reference.** The large empty area under the left label suggests space; whether rows are meant to carry thumbnails is Q-04.

## S6 — Contractor confidence
- Label `03 CONTRACTOR CONFIDENCE`; H2 "Built for accountable project execution." (≈ 96 px).
- Three borderless columns (separators at x ≈ 634, 1154) each with gold index, title (≈ 28 px light), body (≈ 17 px muted): Complex-site coordination · Structural assurance · Physical consultation. Body copy per reference (doc 03).

## S7 — Execution process
- Surface `#12161F`. Label `04 EXECUTION PROCESS`; H2 "From blueprint to final QA." Three rows (x 126–1669) each ≈ 115 px high with hairline separators: index at x 126, step title at x 641 (≈ 32 px light): Consultation & blueprint review · Precision Nairobi fabrication · On-site installation & QA.

## S8 — Request for quotation
- Two columns. Left (x 126–740): gold caps label "REQUEST FOR QUOTATION", H2 "Bring your project into focus." (≈ 100 px, 3 lines), paragraph (≈ 19 px): "Share the project location, required system and available drawings. Your details open as a prepared WhatsApp or email message for Ali Fabrication's estimation team; nothing is stored on this page." Below, a 3-row definition list with hairlines: Call / WhatsApp +254 721 691 786 · Email info.alifab@gmail.com · Visit "Experience Center · address to confirm".
- Right (x 919–1669): underline-only fields, labels ≈ 13 px caps gold tracked: FULL NAME / COMPANY (placeholder "Name or organisation"); PHONE OR WHATSAPP (prefilled "+254"); WHAT DO YOU NEED? (select, default "Aluminium Windows", chevron) beside PROJECT LOCATION IN KENYA ("County / town"); PROJECT DETAILS (OPTIONAL) textarea ("Tell us about the opening, dimensions or timeline"). Buttons: primary "Send on WhatsApp ↗" (260 × 70 px, champagne fill) and text link "Send by email ↗" with underline.

## S9 — Footer
- Background ≈ `#090A0E`, top hairline at y 7522. Left: inverted logo tile (light square with dark AL), wordmark, address "GW Brook Business Park / Brookside Groove, Westlands, Nairobi", "(+254) 721 691 786 · info.alifab@gmail.com". Right: 2 × 3 link grid at x 940 and 1317: Capabilities, Major Projects, Why Us, Request Quotation, "Operating hours: confirm with team". Bottom hairline and small legal line: "Ali Fabrication Solutions Ltd · Architectural fenestration, façades and glass systems for East Africa."

## Typography [E from reference; fonts are the prompt's Plus Jakarta Sans]
Display headings: light-to-regular weight, very tight tracking (≈ −0.04em), white. Gold accent on key words. Labels: caps, 0.14–0.2em tracking. Numerals: tabular. Details in [02](02-BRAND-AND-DESIGN-SYSTEM.md).

## Interactions (reference does not specify; derived from the prompt)
Sticky nav; anchor scrolling from nav and CTAs; quotation form validation and hand-off; success state; arrow glyphs ↗ ↓ on CTAs. Hover, focus, motion: proposals only, in [05](05-FUNCTIONAL-REQUIREMENTS.md) and [08](08-RESPONSIVE-AND-ACCESSIBILITY.md).

## Responsive
**Not supplied.** Desktop reference only. Mobile and tablet behaviour is a proposal (doc 08) and needs the director's approval.

## Visual acceptance criteria (summary; full list in doc 11)
At 1795 px wide, section order, container edges (126/1669), column starts (642), heading line breaks, button sizes (≈ 212×62, 270×70, 260×70), colours and hairlines must match the reference within an agreed tolerance, verified by side-by-side screenshots.

---

## Original design prompt (preserved in full, verbatim)

Source file: [`reference/original-design-prompt.txt`](reference/original-design-prompt.txt). The text below is reproduced exactly as supplied, including its original run-together formatting and spelling ("Craftmanship", "Crisp Crisp White").

```text
Design Brief / Prompt: Ali Fabrication Solutions Ltd — Architectural Fenestration & Facade FlagshipRole: Lead B2B Industrial Product Designer & Conversion StrategistTarget Audience: Commercial property developers, institutional architects, main construction contractors, and high-net-worth residential homeowners in Kenya and East Africa.Core Objective: Position Ali Fabrication as East Africa's premier institutional-grade aluminium and glass contractor, build absolute trust through verified landmark projects, and capture structured Request for Quotation (RFQ) leads.   1. Visual Direction & Design SystemAesthetic Style: Industrial Luxury & Architectural Precision. High-end Swiss/Scandinavian architectural design language.Color Palette:Canvas / Backgrounds: Deep Obsidian / Structural Charcoal (#0B0D12 and #12161F) for high-end contrast.Accent / Highlights: Refined Industrial Champagne / Bronze (#C5A880) representing anodized aluminium finishes and premium hardware.Text / Neutral Surfaces: Crisp Crisp White (#FFFFFF) headings and Muted Silver/Slate (#9CA3AF) body copy.Typography: Clean geometric sans-serif (Plus Jakarta Sans or Inter). Strict use of tabular numerals (tabular-nums) for project metrics, square footage, and contact specifications.Layout Structure: 12-column grid, intentional whitespace, asymmetrical portfolio showcase cards, and sharp border structures (#1E2533).2. Required Section-by-Section Component ArchitectureA. Top Corporate Utility BarLeft: Live status badge ("East Africa’s Premier Architectural Fabricator") + Experience Center notice ("GW Brook Business Park, Westlands, Nairobi").   Right: Verified corporate channels ((+254) 721 691 786 | info.alifab@gmail.com).   B. Sticky Global NavigationBrand Logo: Distinctive "AL" geometric logomark in champagne gold gradient with typography: "ALI FABRICATION — Master Craftmanship".   Menu Links: Capabilities, Major Projects, Why Us, Experience Center.Primary Action: Solid champagne accent button — "Request Quotation".C. Hero Section — "Master Craftsmanship in Aluminium & Glass"Badge: "Institutional Grade Architectural Fenestration".Headline: "Master Craftsmanship in Aluminium & Glass".Sub-headline: "East Africa's premier fabricators of high-performance aluminium windows, panoramic sliding doors, and structural curtain walling. Engineered for East Africa's climate, trusted by top developers across Kenya."   Primary CTAs: "Start Your Project" (solid gold) + "View Track Record (25+ Years)" (dark surface).Credibility Counters: 25+ Years of Excellence, 100+ Commercial & Residential Landmarks, 10-Yr Structural Guarantee.   Hero Visual Card: Showcase feature card highlighting Gigiri Lion Villas with acoustic glazing and slim-profile fenestration.   D. Capabilities & Technical Systems GridSection Header: "Precision Architectural Systems".3-Column Card Layout:Aluminium Windows: Sliding systems with tilt functions, tropical Louvre slats, hinged Casement windows (Low-E, toughened, laminated glass options).   Architectural Doors: Colossal panoramic Sliding Doors up to 6 meters with 'PRO-seal' water-tightness technology, 10-year guaranteed folding doors.   Curtain Walling & Fitouts: Climate-engineered structural curtain walling, facade re-cladding, and commercial frameless glass partitions.   E. Verified Track Record / Portfolio GallerySection Header: "Landmark Projects Across East Africa" (Covering 2011–2023 completions).   Featured Projects Grid:Cathedral Mall (Kakamega Town — structural glazing).   Tenwek Hospital (Bomet County — specialized medical fenestration).   Highway Mall (Uhuru Highway, Nairobi — commercial curtain walling).   F. Why Contractors Trust Us & Execution ProcessValue Pillars: On-schedule delivery across complex sites, 10-year structural guarantee, and physical Experience Center consultations in Westlands.   Process Flow: 1. Consultation & Blueprint Review $\rightarrow$ 2. Precision Nairobi Fabrication $\rightarrow$ 3. On-Site Installation & QA.G. Interactive Quotation Request Form (Conversion Engine)Form Fields: Full Name / Company, Phone Number, Service Required (Dropdown), Project Location in Kenya, Project Scope/Details textarea.Interaction: Clean success state acknowledging routing to Ali Fabrication’s estimation engineering team.H. Professional FooterDetails: Experience Center address at GW Brook Business Park (Brookside Groove, Westlands), direct phone/email contacts, and operating hours.
```

---

## Approved design updates (2026-10-25)
The director's reference is square-cornered and static. The following deliberate changes are approved and override the reference where they conflict. Everything else still follows the reference.

### Corners and hover
- Tokens: `--radius-sm` 8 px (buttons, focus rings, chips), `--radius-md` 16 px (cards, image frames, stat cards, project rows on hover), `--radius-lg` 28 px (hero panel, large containers).
- Rounded: nav CTA, Start Your Project, Send on WhatsApp (`sm`); capability image frames, stat cards, contractor-confidence cards, which are now bordered cards with a 16 px gap (`md`); hero panel (`lg`). All use `overflow: hidden` where images clip.
- Square, unchanged: full-width section bands, hairline dividers, underline-only form fields.
- Borders stay 1 px `#1E2533`; accent stays `#C5A880`. No drop shadows except the hover glow `0 20px 60px -20px rgba(197,168,128,.25)` on cards.
- Project table rows get a subtle rounded tint on hover; text alignment is unchanged.

### S3 Stats, bento grid (replaces the four hairline cells)
On the `#12161F` band, a 12-column grid with a 16 px gap. Verified figures only:
| Card | Span (desktop) | Content |
|---|---|---|
| Projects | 5 columns × 2 rows | "63" (counts up), label "Projects on record", bar chart of completions per year 2011–2023 (1, 2, 9, 7, 8, 3, 7, 6, 3, 3, 3, 4, 7; total 63), axis labels 2011 / 2017 / 2023, caption "Completions per year, from the company's project register." Visually hidden data table as text alternative |
| Record | 4 | "2011 to 2023", gold line that draws left to right, label "Verified project record" |
| Guarantee | 3 | "10-year guarantee", label "On folding doors" |
| Durations | 7 (beside the projects card) | "From 10 days to 24 months", label "Range of project durations", track with markers "10 days" and "24 months" that slide out from the middle |
Tablet (≤ 999 px): 2 columns (projects and durations full width). Mobile (≤ 599 px): 1 column, chart full width. The abbreviation "10d–24m" is removed. Numerals use tabular figures.

### Motion
- Only `transform` and `opacity` are animated. No libraries: CSS plus `assets/js/main.js`.
- Page load: header fades down; eyebrow fades up; H1 reveals line by line (masked lines, `translateY(110%)` to 0, 0.9 s `cubic-bezier(.2,.7,.2,1)`, 120 ms stagger); lead and CTAs fade up after the H1.
- Stats: run once when a card is 30% in view. The count-up takes 1.4 s ease-out, bars grow in sequence (70 ms apart), the gold line draws, and the range markers slide out.
- Two modes, set by `main.js` on `<html>`: `motion-full` (OS setting not "reduce") and `motion-reduced` (opacity fades and the count-up only; no transforms, parallax or scale). Without JavaScript all content is visible in its final state.
- Added 2026-10-25. The C.2 onward brief never arrived (cut off at "Hero panel: starts at"), so these values are Claude's choices, pending the director's confirmation:
  - **Hero panel reveal:** after the CTAs (1.25 s), the panel fades in, rising 48 px and scaling from 0.97 over 1.1 s. The photo settles from 1.12× to 1× over 1.8 s.
  - **Parallax:** the hero photo drifts at 0.08 × the panel's distance from the viewport centre, capped at ±40 px. The media layer is 7% taller at each edge. Full mode only.
  - **Scroll reveals:** section heads, capability cards, pillars, the projects intro, table rows, process steps, the quote columns and the footer grid. Each fades in and rises 28 px over 0.8–0.9 s when 15% visible, with a 90 ms stagger within a group (capped at four). The reduced mode fades only.
  - **Card hover:** capability photos scale to 1.04; bento and pillar cards lift 4 px (full mode) and show the gold glow (both modes).
  - **Header blur:** after 8 px of scroll, a translucent frosted layer (`backdrop-filter: blur(14px)`) cross-fades over the solid header background (opacity only, both modes).

## Copy and brand cleanup (2026-10-25, director)
Supersedes the S0, S1 logo, S2 eyebrow, sub-headline and hero panel overlays, S6 pillar copy, S9 footer content and the bento chart caption described above. Layout, palette, typography, rounded corners and motion are unchanged. Copy: [03](03-CONTENT-AND-SECTION-SPECIFICATION.md), "Copy deck 2026-10-25".
- **Brand:** text wordmark only, "ALI FABRICATION": 19 px (16 px under 600 px), weight 600, caps, letter-spacing 0.18em (0.16em under 600 px), white. No AL tile, no "MASTER CRAFTSMANSHIP" line, no favicon. Header and footer use the same wordmark. It is a placeholder until the company supplies a logo.
- **Utility bar:** two items, left status line and right phone · email. Under 600 px only the phone number shows (centred).
- **Hero panel:** bottom-left caption only. The phone and WhatsApp overlay is removed at every width, along with the top scrim that existed only to keep that overlay legible under 900 px. The caption wording is on hold (Q-14).
- **Stats:** the projects card shows the bar chart and axis years without a visible caption.
- **Footer:** wordmark, phone · email, 2 × 2 links (Capabilities, Projects, Why Us, Request Quotation), then a bottom row with "© Ali Fabrication" and the concept notice.
- **Spacing:** section paddings stay as they were. With less copy the sections are shorter, and the extra space reads as whitespace; text sizes did not grow.
- **Typographic rule:** no em or en dashes in any site file. The "Projects" lead uses balanced wrapping.
- **Parallax fix:** the hero image drift is now limited to the media layer's 7% overscan (and at most 40 px). On narrower panels the old 40 px limit exposed the panel background.
