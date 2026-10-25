# Ali Fabrication — Landing Page (design replication project)

> **Status: concept build in progress (Stages 1–4 of doc 10 done: all sections built at desktop width).** Not approved; `noindex` and a visible concept notice are in place.

A single-page website concept for **Ali Fabrication Solutions Ltd** (Nairobi aluminium and glass fabricator), prepared by TheCompany.design as a sales concept. It is **not** an approved or official Ali Fabrication website and must not be published or indexed as one (see [09-SEO-AND-METADATA](docs/09-SEO-AND-METADATA.md)).

The visual specification is the supplied dark "industrial luxury" design reference: [`docs/reference/design-reference-desktop.jpg`](docs/reference/design-reference-desktop.jpg).

## Purpose and scope
Turn the supplied design into a working, responsive, accessible one-page site whose primary goal is a structured quotation request (WhatsApp or email hand-off). Scope and exclusions: [00-PROJECT-OVERVIEW](docs/00-PROJECT-OVERVIEW.md).

## Technology (proposed, nothing installed yet)
This is a fresh folder with no existing application, so there is no confirmed stack. Proposal: plain HTML, CSS and JavaScript, no framework, no build step, no backend. Rationale and alternatives: [06-TECHNICAL-ARCHITECTURE](docs/06-TECHNICAL-ARCHITECTURE.md).

**Commands:** serve the folder statically, e.g. `python -m http.server 8765` in the project root, then open `http://127.0.0.1:8765/` (verified on Windows with Python 3.12).

## Documentation index
| # | Document | Contents |
|---|---|---|
| 00 | [Project overview](docs/00-PROJECT-OVERVIEW.md) | Context, audience, scope, risks |
| 01 | [Design specification](docs/01-DESIGN-SPECIFICATION.md) | Section-by-section measurements, **original design prompt in full** |
| 02 | [Brand and design system](docs/02-BRAND-AND-DESIGN-SYSTEM.md) | Tokens (measured vs estimated) |
| 03 | [Content and section specification](docs/03-CONTENT-AND-SECTION-SPECIFICATION.md) | Copy inventory, sources, claims to verify |
| 04 | [Asset manifest](docs/04-ASSET-MANIFEST.md) | The eight images mapped to frames |
| 05 | [Functional requirements](docs/05-FUNCTIONAL-REQUIREMENTS.md) | FR-001 onward |
| 06 | [Technical architecture](docs/06-TECHNICAL-ARCHITECTURE.md) | Stack, structure, forms, deployment |
| 07 | [Component specification](docs/07-COMPONENT-SPECIFICATION.md) | Components and states |
| 08 | [Responsive and accessibility](docs/08-RESPONSIVE-AND-ACCESSIBILITY.md) | Breakpoints, WCAG |
| 09 | [SEO and metadata](docs/09-SEO-AND-METADATA.md) | Concept vs production indexing |
| 10 | [Implementation plan](docs/10-IMPLEMENTATION-PLAN.md) | Ten stages |
| 11 | [Testing and acceptance](docs/11-TESTING-AND-ACCEPTANCE.md) | Acceptance criteria |
| 12 | [Assumptions and open questions](docs/12-ASSUMPTIONS-AND-OPEN-QUESTIONS.md) | Register, blockers |

## Where things are
- **Design reference:** `docs/reference/design-reference-desktop.jpg` (1795 × 8000 px, desktop only)
- **Original design prompt (verbatim):** `docs/reference/original-design-prompt.txt`, reproduced in full in doc 01
- **Company profile:** `docs/reference/business-profile.pdf`; **audit:** `docs/reference/ux-audit-and-opportunity-report.pdf`
- **Evidence screenshots** (Instagram, website error, Google snippets): `docs/reference/evidence-*.png`
- **Supplied images (originals, untouched):** `assets/source/` — eight files named by upload ID (original titles were not preserved by the upload; see [04](docs/04-ASSET-MANIFEST.md))
- `assets/img/`: derivatives of IMG-01 to IMG-04 (placed); `assets/fonts/`: self-hosted Plus Jakarta Sans

## Current implementation status
| Item | Status |
|---|---|
| Documentation | Written, awaiting review |
| Image-to-frame mapping | Drafted; **4 of 8 need review** and a **critical content risk is flagged** ([04](docs/04-ASSET-MANIFEST.md), [12](docs/12-ASSUMPTIONS-AND-OPEN-QUESTIONS.md)) |
| Landing page code | Stages 1–4 done (`index.html`, `assets/css/styles.css`); IMG-01–04 placed; first responsive pass done (no horizontal scroll 320–1920 px). Form hand-off, accessibility and final QA pending (Stages 6, 8–10). Screenshots: `docs/qa/stage-4/`, `docs/qa/layout-fixes/` |
