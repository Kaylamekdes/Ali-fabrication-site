# 11 — Testing and acceptance

Related: [Design spec](01-DESIGN-SPECIFICATION.md) · [Functional requirements](05-FUNCTIONAL-REQUIREMENTS.md) · [Plan](10-IMPLEMENTATION-PLAN.md)

Rule: nothing is marked passed without inspecting the **rendered** result. "Matches the design" must be shown by side-by-side screenshots, not asserted.

## Viewports for comparison
1795 × 900 (reference width, full page), 1440 × 900, 1024 × 768, 768 × 1024, 390 × 844, plus 320 wide for overflow and 1920 wide.

## Acceptance criteria
| ID | Area | Criterion | Method |
|---|---|---|---|
| AC-01 | Visual fidelity | At 1795 px: section order, y-offsets (±16 px), container edges 126/1669 (±2), column start 642 (±2), heading line breaks identical, button sizes (≈ 212×62, 270×70, 260×70) ±4 px | Overlay/side-by-side of full-page screenshot vs `design-reference-desktop.jpg` |
| AC-02 | Colour | Sampled background, accent, border colours within ΔE 3 of doc 02 values | Pixel sampling |
| AC-03 | Typography | Plus Jakarta Sans loaded (not fallback); heading tracking/size within 5% of doc 02; numerals tabular | Computed styles + visual |
| AC-04 | Images | All eight images placed per doc 04 after Q-01 decision; no stretch, no filters, intended subject visible; each has alt text | Visual + DOM check |
| AC-05 | Image performance | Hero ≤ 250 KB, others ≤ 150 KB at displayed size; lazy-load below fold; no CLS from images | Network panel, Lighthouse |
| AC-06 | Responsive | No horizontal scroll 320–1920; hierarchy per doc 08; tap targets ≥ 44 px | Browser tests |
| AC-07 | Links | All anchors land on the right section with header offset; tel/mailto/wa.me correct; external links `rel="noopener"` | Script + manual |
| AC-08 | Form | Empty submit shows errors and focuses first invalid; invalid phone and email-style input rejected; valid submit produces correct encoded WhatsApp and mailto URLs containing every entered value; status never claims delivery | Script + manual |
| AC-09 | Content accuracy | Every claim in doc 03 marked X or C is either removed, reworded to the verified form, or confirmed in writing. No "25+", "100+", "structural guarantee", acoustic, or placeholder text ships | Checklist review against sources |
| AC-10 | Accessibility | WCAG 2.2 AA spot checks: contrast, focus visible, keyboard-only use of nav and form, labels, landmarks, reduced motion, 200% zoom | axe + manual |
| AC-11 | Performance | LCP ≤ 2.5 s (4G, mid-range), CLS < 0.05, JS ≤ 10 KB | Lighthouse |
| AC-12 | Browsers | Latest Chrome, Safari (iOS), Firefox, Edge; Android Chrome | Manual/device |
| AC-13 | Console and assets | Zero console errors/warnings; zero 404s; no broken images | Browser console + network |
| AC-14 | Concept safety | `noindex` present, concept banner visible, no Ali Fabrication domain used, no schema/OG claiming officialness | Source review |

## Known limits
Fonts and WhatsApp deep-link behaviour cannot be fully tested in my cloud sandbox (Google Fonts and `wa.me` are blocked); verify on a real device before sign-off.
