# 06 — Technical architecture

Related: [README](../README.md) · [Components](07-COMPONENT-SPECIFICATION.md) · [Plan](10-IMPLEMENTATION-PLAN.md)

## Existing project inspection
The project folder `ali-fabrication-site/` was created fresh at the director's request ("start the build fresh to avoid confusion"). It contains documentation and assets only: no `package.json`, no build tooling, no framework. The earlier concept in `/home/claude/ali-site` is unrelated, remains untouched, and is not reused.

## Proposed stack (a proposal, not an inherited constraint)
| Concern | Decision | Reason |
|---|---|---|
| Framework | None. Plain HTML, CSS, JavaScript | One page, no routing, no state, no backend. A framework adds weight and build risk without benefit. Matches the studio's other plain-HTML/CSS/JS builds |
| Build | None. Static files | Simple to host and review |
| Styling | One `styles.css` with CSS custom properties from doc 02; no utility framework | Fidelity needs bespoke values (126 px margins, 96 px headings) |
| JS | One small `main.js` (ES modules not required): nav state, anchor handling, service preselect, form validation and hand-off | Under ≈ 5 KB |
| Fonts | Self-hosted Plus Jakarta Sans WOFF2 in `assets/fonts/`, `font-display: swap`, preload for the heading weight | Avoids third-party request and layout flash |
| Images | WebP + JPEG fallback, `srcset`/`sizes`, lazy-load below the fold | See doc 04 |
| Backend / DB / CMS | **None.** Introduce only with a documented requirement | Prompt does not require it |

If the director later wants stored leads, add a minimal serverless form endpoint (documented decision), not a CMS.

## Proposed structure
```text
/
├── index.html
├── assets/
│   ├── css/styles.css
│   ├── js/main.js
│   ├── fonts/        (self-hosted WOFF2)
│   ├── img/          (optimised derivatives)
│   └── source/       (untouched originals)
├── robots.txt        (Disallow while concept)
└── docs/
```

## Routing and navigation
Single route; in-page anchors `#top #capabilities #projects #why #process #quote`.

## Form submission strategy
Client-side validation then hand-off via `wa.me` or `mailto:`. No data leaves the page except through the user's own WhatsApp/email app. Known limits: `mailto:` requires a configured mail client; long messages may truncate in some clients; WhatsApp Web/app availability depends on the user. A fallback link is always shown.

## Environment variables
None.

## Deployment assumptions
Static hosting (any CDN, Netlify, Cloudflare Pages, or the studio's hosting). While the concept is unapproved it must be served with `noindex` and `X-Robots-Tag: noindex` where headers are configurable, on a private or obscure URL, and never on `alifabsolutions.com` or any Ali Fabrication domain.

## Security and maintenance
No secrets; no third-party scripts; set a Content-Security-Policy allowing only self (and `wa.me` navigations); all external links `rel="noopener noreferrer"`; escape any text inserted into the DOM; keep dependencies at zero. Maintenance: content lives in HTML; update facts in one place (doc 03 is the source).

## Performance targets (proposed)
LCP ≤ 2.5 s on a mid-range phone on 4G; total weight ≤ 1 MB above the fold including the hero image; CLS < 0.05.
