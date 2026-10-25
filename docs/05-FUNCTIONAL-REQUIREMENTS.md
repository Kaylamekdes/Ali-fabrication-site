# 05 — Functional requirements

Related: [Design spec](01-DESIGN-SPECIFICATION.md) · [Components](07-COMPONENT-SPECIFICATION.md) · [Testing](11-TESTING-AND-ACCEPTANCE.md)

Only behaviour present in the reference or justified by the prompt is specified. The reference shows no hover, focus, error or success states; those below are proposals marked *(proposed)*.

## Navigation and links
| ID | Requirement |
|---|---|
| FR-001 | The header is sticky; it stays at the top on scroll. The utility bar scrolls away (proposed; the prompt says only "Sticky Global Navigation") |
| FR-002 | Nav links scroll to `#capabilities`, `#projects`, `#why`, and "Contact" to `#quote`. The Experience Center link is removed until a section exists (Q-05; copy deck 2026-10-25) |
| FR-003 | "Request Quotation" (nav) and "Start Your Project" (hero) scroll to `#quote` and focus the first field |
| FR-004 | "View Track Record ↓" scrolls to `#projects` |
| FR-005 | Footer links mirror nav; "Request Quotation" → `#quote` |
| FR-006 | Smooth scrolling only if `prefers-reduced-motion` is not set; account for sticky header height (`scroll-margin-top`) |

## Contact links
| ID | Requirement |
|---|---|
| FR-010 | Every phone number is a `tel:+254721691786` link |
| FR-011 | "WhatsApp" links open `https://wa.me/254721691786` in a new tab with `rel="noopener"`. Number assumed WhatsApp-enabled (C) |
| FR-012 | Email addresses are `mailto:info.alifab@gmail.com` links |

## Capability links
| ID | Requirement |
|---|---|
| FR-020 | "Request aluminium windows / architectural doors / curtain walling & fitouts" scroll to `#quote` and preselect the matching "What do you need?" option |

## Quotation form
| ID | Requirement |
|---|---|
| FR-030 | Fields: Full name / company (required, ≥ 2 chars); Phone or WhatsApp (required, prefilled "+254", 9–15 digits after stripping spaces/brackets/dashes); What do you need? (required select); Project location in Kenya (optional text, "County / town"); Project details (optional textarea). *(Email field is not in the reference and is not added.)* |
| FR-031 | Select options (proposed, C): Aluminium Windows · Architectural Doors · Curtain Walling & Fitouts · Shower screens / railings / other glass work · Not sure yet. Default displayed in the reference: "Aluminium Windows" |
| FR-032 | Validation runs on submit and on blur after first error. Errors appear under the field (text + `aria-invalid`), focus moves to the first invalid field *(proposed)* |
| FR-033 | "Send on WhatsApp" composes a plain-text message from the entered values and opens `wa.me/254721691786?text=…` (URL-encoded) |
| FR-034 | "Send by email" opens `mailto:info.alifab@gmail.com` with subject "Quotation request: {service}" and the same body (no dashes, copy rule in doc 03) |
| FR-035 | **No fake success.** After a valid submit the page shows a status message such as "Your message is ready in WhatsApp. Press send there to reach Ali Fabrication" with a fallback link if nothing opened. It must not claim the request was received or routed to an estimation team |
| FR-036 | The form stores nothing and loads no third-party service. The reference copy "nothing is stored on this page" stays true |
| FR-037 | A honeypot or rate limiting is unnecessary without a backend |
| FR-038 | Message body is escaped; no HTML injection into status text |

## States (proposed, since not in the reference)
| ID | Requirement |
|---|---|
| FR-040 | Links and buttons: visible `:focus-visible` outline in gold, 2 px, 3 px offset; hover darkens/lightens fill ≈ 8% or thickens underline |
| FR-041 | Fields: underline turns gold on focus; error underline and message in a red/amber that passes contrast on `#0C0D12` |
| FR-042 | Disabled/loading states are not required (no network request) |
| FR-043 | Images: reserved aspect-ratio boxes so nothing jumps while loading; dark placeholder colour `#12161F` |

## Absent from the design (not built)
Gallery, filters, lightbox, project detail pages, carousel, language switch, cookie banner, analytics.
