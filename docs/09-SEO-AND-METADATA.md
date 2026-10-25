# 09 — SEO and metadata

Related: [Content](03-CONTENT-AND-SECTION-SPECIFICATION.md) · [Architecture](06-TECHNICAL-ARCHITECTURE.md)

## Indexing: concept vs production
| Mode | Robots | Notes |
|---|---|---|
| **Concept (now)** | `<meta name="robots" content="noindex, nofollow">`; `robots.txt` `Disallow: /`; `X-Robots-Tag: noindex` header if hosting allows | Must not be indexed or confused with the company's site. No canonical to an Ali Fabrication domain, no `LocalBusiness` schema, no OG image of the company's name until approved |
| Production (only after director's written approval) | `index, follow`; canonical = the approved domain; sitemap; schema as below | Remove concept banner, remove placeholders |

## Title and description (draft, for production)
- Title (≤ 60 chars): `Ali Fabrication | Aluminium Windows, Doors & Curtain Walling, Nairobi`
- Description (≤ 155 chars): `Aluminium windows, sliding and folding doors and curtain walling, fabricated in Kenya. 63 projects since 2011. Request a quotation by WhatsApp or email.` ("63 projects since 2011" derived from the register; confirm before use.)
- Concept title: `Ali Fabrication — design concept by TheCompany.design`

## Open Graph and social
`og:title`, `og:description`, `og:type=website`, `og:locale=en_KE`. `og:image` only with an approved real photograph (≥ 1200 × 630). `og:url`/canonical: **unknown until the production domain is decided**; do not assume `alifabsolutions.com` or `alifab.co.ke`.

## Heading hierarchy
`h1` hero → `h2` for Precision Architectural Systems, Landmark Projects Across East Africa, Built for accountable project execution, From blueprint to final QA, Bring your project into focus → `h3` card/pillar titles. The eyebrow and section labels are not headings.

## Image alt text
Per [04](04-ASSET-MANIFEST.md); descriptive, no keyword stuffing, no false project names.

## Structured data
Only after approval and verification: `LocalBusiness` (name, telephone `+254721691786`, email, address once confirmed, `sameAs` the confirmed Instagram/Facebook). **Not** `AggregateRating`, `Review`, `foundingDate` or `award` (no verified data). Not added in concept mode.

## Technical
`lang="en"` (Kenyan English, e.g. "Aluminium"), responsive viewport meta, single `h1`, descriptive link text, fast LCP, `theme-color` `#0C0D12`.
