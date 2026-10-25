# 04 — Asset manifest

Related: [Design spec](01-DESIGN-SPECIFICATION.md) · [Content](03-CONTENT-AND-SECTION-SPECIFICATION.md) · [Open questions](12-ASSUMPTIONS-AND-OPEN-QUESTIONS.md)

## 1. Read this first: the supplied images are not usable as "project photos" without a decision

I inspected all eight images visually. They have the hallmarks of **AI-generated or stock renders**, not photographs of Ali Fabrication's work (overly uniform lighting and surfaces, stylised signage such as the generic "Fenestration Experience Center" lettering, no Ali Fabrication branding on any building or product). I cannot prove their origin, so this is an **assessment, not a fact**. Three further problems are certain from what is visible:

| Problem | Images | Detail |
|---|---|---|
| Real third-party brand logos | IMG-07 ("The Capital Towers"), IMG-05 ("The Hub Mall") | KCB, Deloitte, Safaricom, I&M Bank, Equity, The Coffee Club, Pizza Inn, Java House; Nakumatt, Zara, H&M, LC Waikiki, Samsung, Infinix. Publishing implies these brands are tenants or associated with Ali Fabrication's work |
| Different building names from the captions | IMG-05/06/07 | The images carry the names "Riverside Medical Centre", "The Hub Mall", "The Capital Towers". The design labels the rows **Tenwek Hospital, Cathedral Mall, Highway Mall**. Showing one building's photo under another's name is misleading |
| Not the company's showroom or villa | IMG-08, IMG-01 | The showroom image is a generic "Fenestration Experience Center" with no Ali Fabrication branding. The "Lion Villas" villa is generic |

This conflicts with the audit's non-negotiable ("real project imagery only; no fabricated … claims") and with the design's own section label "Verified track record".

**What exists that is real:** the company profile contains genuine, low-resolution photographs for some projects, including **Gigiri Lion Villas** and **Cathedral Mall**. It has **no photos for Tenwek Hospital or Highway Mall**. The earlier concept extracted these into another folder (`/home/claude/ali-site/assets/img`: `gigiri-lion-villas-a.jpg` 644×483, `cathedral-mall.jpg` 388×291). Originals should be requested from the client.

**Recommendation (needs the director's decision, Q-01):**
- A. Use the eight as **clearly marked design placeholders** in a private concept only; replace with real photos before any public use; never caption them with real project names.
- B. Replace IMG-01 and the S5 images with the real profile photos now; keep generic images only for non-attributed uses (capability cards).
- C. Remove the S5 images entirely (the reference shows none there).
My recommendation: **B**, with the capability-card and hero images only if the director confirms they are licensed and acceptable to present as illustrative.

## 2. File inventory (originals untouched)
The upload did not preserve the original filenames or titles, only an upload ID. Please supply the original titles if you need a title-based mapping confirmed.

| ID | Source file (`assets/source/`) | Pixels | Ratio | What it shows | SHA-256 (first 16) |
|---|---|---|---|---|---|
| A | `c4bc7e35-image.png` | 1448 × 1086 | 4:3 | Extreme close-up of a matte black aluminium window corner with double glazing and spacer bar, soft green garden beyond | `351a78a8bc82ae4e` |
| B | `a0174846-image.png` | 1672 × 941 | 16:9 | Dark showroom: sliding door, wall of profile samples (Slimline, Heavy Duty, Thermal Break, Premium), glass samples (Low-E, double, triple), handles; sign "Fenestration Experience Center" | `17951bb4e771fc82` |
| C | `125098cd-image.png` | 1672 × 940 | 16:9 | Two-storey modern villa at sunset, large black-framed sliding glazing, pool, garden, warm interior | `cf938c568f88517e` |
| D | `b818474f-image.png` | 1672 × 941 | 16:9 | Glass-fronted office/retail block "The Capital Towers", road, bank and brand logos | `ab48e41b420d8d76` |
| E | `4fb7efba-image.png` | 1672 × 941 | 16:9 | Large glass-fronted mall "The Hub Mall", brand logos, blue sky | `fe9063f555309020` |
| F | `fdcda9ca-image.png` | 1448 × 1086 | 4:3 | Low-angle view of a multi-storey glass curtain-wall corner reflecting sky and trees | `588942fd572a87c3` |
| G | `9f6ddadc-image.png` | 1672 × 941 | 16:9 | White multi-storey hospital "Riverside Medical Centre" with glazed core and awning windows | `bad72d130a0897e3` |
| H | `165e080f-image.png` | 1448 × 1086 | 4:3 | Luxury living room with a very large frameless sliding glass door opening to a terrace and city view | `a5c3f5eb4fd802f8` |

## 3. Frames in the reference
Only **four** frames are visible in the design reference: the hero panel and the three capability cards. Sections S5 (landmark projects) and the nav "Experience Center" have **no image frames**, yet eight images were supplied. I have mapped the remaining four to the most plausible destinations and marked them **requires review** so you can confirm whether those frames exist in your design.

## 4. Mapping

| Frame ID | Design location | Source file | Destination filename | Display | Aspect ratio | Focal point | Alt text | Status |
|---|---|---|---|---|---|---|---|---|
| IMG-01 | S2 hero panel, 1543 × 546 px, "Featured project · Gigiri — Lion Villas" | `125098cd-image.png` (C) | `assets/img/hero-villa-glazing.webp` (+ `.jpg` fallback) | `cover`; keep mullion-line overlay and bottom gradient for caption | 2.83 : 1 (source 16:9 → ~37% height cropped) | `object-position: 50% 58%` (keep glazing and terrace; crop sky and lawn) | "Modern two-storey villa with large black-framed sliding glass doors opening to a pool terrace at sunset" | **Tentative**: content fits a villa, but it is not verifiably Lion Villas (see §1) |
| IMG-02 | S4 card 01 Aluminium Windows, 474 × 336 px | `c4bc7e35-image.png` (A) | `assets/img/capability-window-frame.webp` | `cover` | 1.41 : 1 (source 4:3, small crop) | `50% 50%` (keep corner mitre and glazing) | "Close-up of a black aluminium window frame corner with double glazing" | **Confirmed** (content and ratio match; subject is generic and unattributed) |
| IMG-03 | S4 card 02 Architectural Doors, 434 × 336 px | `165e080f-image.png` (H) | `assets/img/capability-sliding-door.webp` | `cover` | 1.29 : 1 (source 4:3) | `45% 50%` (keep the frameless slider edge) | "Living room opening to a terrace through a very large frameless sliding glass door" | **Confirmed** (panoramic sliding door matches card copy) |
| IMG-04 | S4 card 03 Curtain Walling & Fitouts. Reference shows three tilted panes, not a rectangle (≈ 390 × 340 px) | `fdcda9ca-image.png` (F) | `assets/img/capability-curtain-wall.webp` | `cover`; frame treatment per Q-10 | ≈ 1.15 : 1 or 4:3 | `50% 40%` (glass corner) | "Low-angle view of a multi-storey glass curtain wall corner reflecting sky and trees" | **Tentative**: subject matches; the frame shape and title overlap need a decision |
| IMG-05 | S5 row "Cathedral Mall, Kakamega Town". **No frame in reference** | `4fb7efba-image.png` (E) | `assets/img/project-cathedral-mall.webp` | `cover` | 16:9 | `50% 45%` | would be "Cathedral Mall" only if it is that building | **Requires review**: image is "The Hub Mall" with brand logos; do not caption it Cathedral Mall |
| IMG-06 | S5 row "Tenwek Hospital, Bomet County". **No frame in reference** | `9f6ddadc-image.png` (G) | `assets/img/project-tenwek-hospital.webp` | `cover` | 16:9 | `50% 40%` | would be "Tenwek Hospital" only if it is that building | **Requires review**: image is "Riverside Medical Centre" |
| IMG-07 | S5 row "Highway Mall, Uhuru Highway". **No frame in reference** | `b818474f-image.png` (D) | `assets/img/project-highway-mall.webp` | `cover` | 16:9 | `55% 40%` | would be "Highway Mall" only if it is that building | **Requires review**: image is "The Capital Towers" with bank and brand logos |
| IMG-08 | "Experience Center" (nav link and S6 "Physical consultation"). **No frame in reference** | `a0174846-image.png` (B) | `assets/img/experience-center.webp` | `cover` | 16:9 | `45% 45%` | would be "Ali Fabrication Experience Center" only if it is theirs | **Requires review**: generic showroom with "Fenestration Experience Center" signage; unconfirmed as the real showroom |

Mapping rationale: capability images were matched by subject (window / sliding door / curtain wall); S5 images by building type (mall, hospital, commercial). Cathedral Mall vs Highway Mall (both malls) cannot be distinguished by content, so IMG-05/IMG-07 could be swapped; both are flagged.

## 5. Processing plan (nothing done yet)
- Originals stay in `assets/source/`. Produce responsive derivatives into `assets/img/`: WebP (quality ≈ 80) plus a JPEG fallback at 640, 1024, 1600 widths; hero up to 2400 wide. No filters, stretching or colour changes; only crop via CSS `object-position` and sizes via `srcset`.
- Hero image: `fetchpriority="high"`, explicit width/height to avoid layout shift; all others `loading="lazy"`, `decoding="async"`.
- Budgets: hero ≤ 250 KB, others ≤ 150 KB at the displayed size.

## 6. Other required assets (not supplied)
| Asset | Status |
|---|---|
| Logo (AL tile, wordmark, light variant for footer) | **Missing.** Crop from `business-profile.pdf` p.1 or request vector; gold-on-dark adaptation needs approval |
| Fonts: Plus Jakarta Sans 300/400/500/600 (+ latin subset) | To self-host from Google Fonts / OFL; not yet downloaded |
| Icons: ↗ ↓ arrows, select chevron, nav toggle | Draw as inline SVG or use text glyphs |
| Favicon / OG image | Not supplied; OG image only after real photo is approved |

## 7. Stage 1 audit results (2026-10-25, implementation)
Q-01 and Q-04 are unanswered, so the CLAUDE.md defaults apply: generic images are treated as **illustrative placeholders** (option A for a private concept), IMG-05 to IMG-08 stay **unplaced**, and no generic image is captioned with a real project name.

| Asset | Status | Notes |
|---|---|---|
| Originals `assets/source/*.png` | Untouched | SHA-256 prefixes re-checked, all eight match §2 |
| IMG-01 hero | Derivatives made, **not yet placed** (Stage 5) | `hero-villa-glazing-{640,1024,1600,1672}.{webp,jpg}`. Source is 1672 px wide, so no 2400 px version exists (no upscaling); at 2× DPR the hero will be soft. JPEG 1600/1672 (257/277 KB) exceed the 250 KB budget; WebP 1672 is 210 KB. Placing it under the "Lion Villas" caption would attribute a generic image to a real project: see doc 12 A-05 |
| IMG-02 / 03 / 04 | Derivatives made, placed in Stage 5 | `capability-{window-frame,sliding-door,curtain-wall}-{640,1024}.{webp,jpg}`, all ≤ 150 KB except curtain-wall 1024 JPEG (167 KB) |
| IMG-05 to IMG-08 | **Unplaced, no derivatives** | Held until Q-01 and Q-04 |
| Fonts | Sourced | Plus Jakarta Sans 300/400/500/600, latin subset WOFF2 from `@fontsource/plus-jakarta-sans@5.3.0` (OFL, licence in `assets/fonts/OFL-LICENSE.txt`) |
| Logo | Recreated as inline SVG from the reference (not the company's official mark) | Dark tile and light footer tile; still subject to Q-08 |
| Icons | Inline SVG (↗, ↓, chevron) | |

### 7.1 Update (2026-10-25, layout-fix pass)
On the director's instruction ("show them now") IMG-01 to IMG-04 are **placed**. The earlier 640/1024/1600 px derivatives were replaced:

| Frame | Files (`assets/img/`, WebP + JPEG) | Largest | Loading |
|---|---|---|---|
| IMG-01 hero | `hero-villa-glazing-{800,1400,1672}` | WebP 210 KB, JPEG 243 KB (q75) | `fetchpriority="high"` |
| IMG-02 | `capability-window-frame-{600,1000}` | JPEG 74 KB | lazy |
| IMG-03 | `capability-sliding-door-{600,1000}` | JPEG 110 KB | lazy |
| IMG-04 | `capability-curtain-wall-{600,1000}` | JPEG 143 KB (q75) | lazy |

- **2000 px hero not produced**: the source is 1672 px wide, and §5 rules out upscaling, so the largest hero file is 1672 px.
- Captions: the hero caption no longer names Lion Villas (see doc 12 A-05). IMG-05 to IMG-08 remain unplaced.
- The pane graphic in card 03 is gone, so the Q-10 overlap no longer applies. Frames are 336 px high at 1795 px (as in the reference) and 1.35:1 once stacked below 1000 px.
