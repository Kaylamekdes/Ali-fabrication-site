# 10 — Implementation plan

Related: [Architecture](06-TECHNICAL-ARCHITECTURE.md) · [Testing](11-TESTING-AND-ACCEPTANCE.md) · [Open questions](12-ASSUMPTIONS-AND-OPEN-QUESTIONS.md)

**Do not start until the director approves the docs.** Stages are small and each ends with a rendered check against the reference.

| # | Stage | Depends on | Output | Done when |
|---|---|---|---|---|
| 1 | Repository and asset audit | Approval; decisions Q-01, Q-02 | Asset decisions recorded; derivative list; logo and fonts sourced | Every asset has a status; no missing file referenced |
| 2 | Design-token setup | 1 | `styles.css` tokens (colour, type, spacing, grid), font-face, base reset | Tokens match doc 02; fonts load locally |
| 3 | Shared layout and navigation | 2 | Utility bar, header, sticky behaviour, container, footer shell | Header measures 46 + 118 px at 1795 wide; links work |
| 4 | Section-by-section build | 3 | S2–S8 in reference order with approved copy only | Each section matches reference crop within tolerance |
| 5 | Image integration and crop refinement | 1, 4 | `srcset` images, `object-position` per doc 04 | Subjects framed as intended at 3 viewports |
| 6 | Functional interactions | 4 | Anchors, preselect, form validation and WhatsApp/email hand-off | FR-001…FR-038 pass |
| 7 | Responsive refinement | 4–6, Q-06 | Tablet/mobile layouts per doc 08 | No overflow 320–1920 px; hierarchy kept |
| 8 | Accessibility and performance checks | 7 | Axe/Lighthouse results, keyboard and zoom checks | Criteria in doc 11 met |
| 9 | Visual comparison and final QA | 8 | Side-by-side screenshots at agreed sizes; defect list | Zero blocking differences |
| 10 | Production readiness review | 9, director approval, Q-02, Q-03 | Placeholders removed, claims verified, indexing decision | Written sign-off; `noindex` removed only if approved |

Estimated effort (rough): stages 2–6 ≈ 1–1.5 days, 7–9 ≈ 1 day, subject to image and copy decisions.
