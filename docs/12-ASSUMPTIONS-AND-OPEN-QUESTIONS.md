# 12 — Assumptions and open questions

Related: [Overview risks](00-PROJECT-OVERVIEW.md) · [Content](03-CONTENT-AND-SECTION-SPECIFICATION.md) · [Assets](04-ASSET-MANIFEST.md)

"Can proceed?" = can development start without resolving it.

## A. Blockers and decisions for the director
| ID | Item | Impact | Can proceed? |
|---|---|---|---|
| Q-01 | **Image authenticity and attribution.** The eight supplied images look generated/stock, show third-party brand logos and other building names. Decide A/B/C in [04](04-ASSET-MANIFEST.md) §1 | Misleading "verified" claims; brand/trademark exposure | Yes for build with placeholders marked; **no for any public use** |
| Q-02 | **Unsupported numbers** "25+ years", "100+ landmarks", "structural" guarantee. Proposed: "63 projects on record", "10 days–24 months", "10-year guarantee on folding doors" | False claims if published | Yes (use proposed wording as default) |
| Q-03 | **Experience Center and office address** (profile: GW Brook Business Park, 309 Brookside Groove / Brookside Drive 317, Westlands; old contact page: Astrol, RedHill Road / Godown 21 Fortis Industrial Park). Plus hours and phone numbers (`+254 721 691 786`; `+254 115110786` appears on the old contact page) | Customers misdirected | Yes with placeholders; **must resolve before launch** |
| Q-04 | Are image frames intended in S5 (landmark rows) and for the Experience Center? The reference shows none | Four images have no confirmed frame | Yes (hold IMG-05–08 unplaced until answered) |
| Q-05 | Nav link "Experience Center" has no matching section | Dead anchor | Yes (temporary: point to quote section) |
| Q-06 | Tablet and mobile designs not supplied | Responsive layouts are my proposals | Yes with proposals |

## B. Source conflicts (not silently resolved)
| Topic | Source A | Source B | Treatment |
|---|---|---|---|
| Hero lead | Prompt: "premier … trusted by top developers" | Reference: "fabricators of high-performance…" | Reference used |
| Counters | Prompt: 25+, 100+, 10-Yr Structural Guarantee | Profile: 63 projects, 2011–2023, folding-door guarantee | Flag, propose verified wording |
| Form success | Prompt: "routing to estimation engineering team" | Reference: prepared WhatsApp/email message, nothing stored | Reference used; honest status text |
| Sliding door size | Reference: "up to six metres" | Profile: "up to six meters in height" | Add "in height" |
| Company name | Profile "Alifabication Solutions Ltd" | Instagram "Ali Fabrication Solutions Ltd", Facebook "…Solution Ltd" | Confirm legal name |
| Founding year | Notes "2009" | First listed project 2011 | Not published |
| Domain | `alifabsolutions.com` (Instagram posts, currently erroring) | `alifab.co.ke` (unverified) | Not used |

## C. Content needing confirmation
Scope labels in S5 (structural glazing, medical fenestration, curtain walling); "Bomet County" vs "Bomet"; acoustic glazing at Lion Villas; frameless glass partitions; "specification support" line; "on-schedule" delivery; "institutional grade"; process step 1 "blueprint review"; "premier" superlative; whether shower screens and stainless railings (Instagram bio, not in the profile) belong on the page; WhatsApp enablement of the main number.

## D. Design details to confirm
| ID | Question |
|---|---|
| Q-07 | Hero image: confirm it should be a photograph with the existing mullion overlay and caption, and whether "Lion Villas" must be its real photo |
| Q-08 | Logo: provide vector or approve a gold-on-dark adaptation of the AL mark |
| Q-09 | Bronze header colour in S5 ("MAJOR PROJECT / SCOPE") vs champagne: approve or unify |
| Q-10 | Capability card 03: the pane graphic overlaps the title in the reference; should it be a rectangular photo frame like cards 01–02? Also cards 01 (474 px) and 02 (434 px) have different widths |
| Q-11 | Reference stops at 8000 px: confirm nothing exists below the footer legal line |
| Q-12 | Approve a concept banner (not in the reference) and `noindex` while unapproved |

## E. Technical decisions
Stack proposal (plain HTML/CSS/JS), self-hosted fonts, form hand-off only: approve or change. Does the director want leads stored in future (would add a serverless endpoint)?

## F. Environmental limits
Originals of the eight images arrived as pasted images without titles (hash filenames), so title-based mapping could not be checked. Google Fonts and WhatsApp links cannot be tested from the build sandbox. Analytics are unavailable. Outage evidence is an undated screenshot.

## G. Dependencies on approval
Director approval of: these documents; Q-01–Q-03; use of the company's name, logo and photographs in a pitch; any publication.

## H. Build assumptions, Stages 1–4 (2026-10-25)
Defaults from CLAUDE.md applied; none of these is a director decision. Each item is reversible in `index.html`.

**Copy policy used.** Rule 4 allows only V copy or doc 03's verified replacements. Items marked X or C were replaced with V wording or a visible placeholder; items marked P were trimmed to their supported part.

| ID | Location | Reference copy | Built as | Basis |
|---|---|---|---|---|
| A-01 | Utility bar, left | East Africa's Premier Architectural Fabricator (P/C) | Aluminium & glass fabrication · Kenya | Profile services; "premier" is C |
| A-02 | Utility bar, centre | Experience Center · GW Brook Business Park, Westlands, Nairobi (P/C) | Experience Center · *address to confirm* | Q-03; same placeholder the design uses in S8 |
| A-03 | Hero eyebrow | Institutional grade architectural fenestration (X) | Aluminium windows · doors · curtain walling | Profile services |
| A-04 | Hero lead | …fabricators of high-performance … and structural curtain walling… (P) | "high-performance" and "structural" removed | Doc 03 S2 |
| A-05 | Hero caption subtitle | Acoustic glazing · Slim-profile fenestration (X) | *Glazing scope to confirm* | Placeholder. Lion Villas title kept (V). When IMG-01 is placed in Stage 5 a generic villa image would sit under a real project name; needs Q-01/Q-07 |
| A-06 | Stats | 25+ / 100+ / 2011—23 / 10 year structural guarantee | 63 projects on record / 10d–24m (label: project durations, 10 days to 24 months) / 2011—23 / 10 year guarantee on folding doors | CLAUDE.md rule 4 defaults |
| A-07 | Capability card 02 | …up to six metres… | …up to six metres in height… | CLAUDE.md rule 4 |
| A-08 | Capability card 03 body | Climate-engineered structural curtain walling, façade re-cladding, and commercial frameless glass partitions (P/X) | Climate-engineered curtain walling and façade re-cladding. | Doc 03 S4 |
| A-09 | Below capability cards | Specification support includes… (X) | Removed; section height kept | Doc 03 S4 |
| A-10 | S5 lead | Specified for commercial, institutional and high-value residential buildings (P/C) | Completed for commercial, institutional and residential buildings. | Doc 03 S5 |
| A-11 | S5 paragraph | Selected projects demonstrate capability across structural glazing… (P) | Selected projects from a register of 63, dated January 2011 to August 2023. | Register range (doc 03 S3) |
| A-12 | S5 scope column | Structural glazing / Medical fenestration / Curtain walling (X) | *Scope to confirm* ×3 | Doc 03 says completion data is "not added without approval", so placeholders rather than enrichment |
| A-13 | S5 Tenwek location | Bomet County (X) | Bomet | Doc 03 S5 |
| A-14 | S6 pillar 1 | Complex-site coordination: on-schedule delivery… (X/C) | Projects on record: 63 projects on record from 2011 to 2023, with durations from 10 days to 24 months. | CLAUDE.md defaults |
| A-15 | S6 pillar 2 | Structural assurance: a 10-year structural guarantee… (P) | Guaranteed folding doors: a 10-year guarantee on folding doors, each tested for quality assurance. | Profile wording (doc 03 S3, S7) |
| A-16 | S6 pillar 3 | …at the Westlands Experience Center (P) | …at the Ali Fabrication Experience Center. | Location is C |
| A-17 | S7 heading and steps | From blueprint to final QA · Consultation & blueprint review · Precision Nairobi fabrication · On-site installation & QA (P/C) | From consultation to installation. · Consultation & quotation · Made-to-order fabrication · On-site installation | Doc 03 S7: blueprint review undescribed, Nairobi fabrication and general QA unconfirmed. **Changes an H2 line break**; restore if the director confirms the original |
| A-18 | Footer address | GW Brook Business Park / Brookside Groove, Westlands, Nairobi (C) | Experience Center / *Address to confirm* | Q-03 |
| A-19 | Footer legal line | Ali Fabrication Solutions Ltd · Architectural fenestration, façades and glass systems for East Africa (P/C) | Ali Fabrication · Aluminium windows, doors, curtain walling and glass. | Legal name is C |
| A-20 | Concept notice (rule 7) | Not in reference | Footer bottom-right: "Design concept by TheCompany.design, not the official Ali Fabrication website." | Placed in the footer so reference offsets are unchanged; move to a top strip if the director prefers (Q-12) |
| A-21 | Nav "Experience Center" | No target section (Q-05) | Links to the "Visit" row in the quote section (`#visit`) | FR-002 temporary rule |
| A-22 | Form service options | Only the default is shown | Aluminium Windows · Architectural Doors · Curtain Walling & Fitouts · Shower screens, railings or other glass work · Not sure yet | FR-031 proposal (C) |

**Design measurements that differ from doc 02 estimates** (measured on the reference, used in the build): H1 134 px / weight 500 / −0.062em; all H2s 100 px (not 96); stat numerals 74 px; S5 lead heading 51 px (not 48); header background `#0C0D12` (not `#101018`); S5 header bronze ≈ `#C08A6C`.

**Reference over prompt:** the reference renders stats and the hero phone number with proportional digits (tabular figures make "2011—23" 30 px wider), so tabular figures are kept only for contact rows and form inputs.

**Visual deviations kept on purpose:** capability card 03's pane graphic is kept inside its frame, so the title "Curtain Walling & Fitouts" is readable (the reference hides it, Q-10). The logo is an SVG redraw of the reference tile, not the company's official mark (Q-08). Image frames still show the reference's placeholder art; photographs arrive in Stage 5.

## I. Layout-fix pass (2026-10-25), director's instructions and resulting decisions
| ID | Item | Decision |
|---|---|---|
| A-05 (revised) | Hero caption over IMG-01 | The instruction places the generic villa photo in the hero, and also says not to caption generic images with real project names. The caption is now "Illustrative image / Large-format sliding glazing"; "Featured project · Gigiri / Lion Villas" returns only with a real Lion Villas photograph (Q-01, Q-07) |
| A-23 | Hero CTAs | Bottom-aligned to the lead paragraph as instructed. The lead is 4 lines (the reference's is 5), so the CTAs sit 32 px higher than in the reference. "View Track Record ↓" has its arrow inline (the reference wraps it onto a second line) |
| A-24 | Header | `auto 1fr auto` grid, links centred with a 40 px gap (28 px at 1100–1279); links collapse into a menu button below 1100 px. Below 600 px the header button moves into the menu. Without JavaScript, links stay visible as a horizontally scrollable row |
| A-25 | Responsive layouts | Built from the doc 08 proposals (still Q-06): section labels stack above headings below 1100; hero CTAs move under the lead below 1500; cards, pillars, projects and form go to one column below 1000; stats 2 × 2 below 900; hero panel 16:10 below 900 and 4:3 below 600 |

## J. Design update 2026-10-25 (rounded corners, bento stats, motion)
| ID | Item | Status |
|---|---|---|
| A-26 | Per-year completions in the stats chart (2011:1 … 2023:7) | **Supplied by the director; not independently re-checked.** The register in `business-profile.pdf` is image-only, and no PDF renderer worked in this environment (pdftotext found no register text; pdf.js in headless Chrome never finished a page). The total (63) and the range (2011–2023) agree with verified figures. Check the yearly counts against the register before launch |
| A-27 | Contractor-confidence pillars | Turned into bordered rounded cards (16 px gap) so the approved `--radius-md` is visible; previously columns separated by faint hairlines |
| A-28 | Durations card span | 7 columns beside the two-row projects card (the instruction allowed 7 or 12) |
| Q-13 | Motion spec C.2 onward | The instruction was cut off at "Hero panel: starts at"; only C.1 is built |

## K. Fixes 2026-10-25 (projects block, quotation copy, motion)
| ID | Item | Status |
|---|---|---|
| A-12 (closed) | S5 scope column | Replaced by verified completion data on the director's instruction (doc 03) |
| A-29 | Animations "not showing" | Diagnosed in the director's Chrome: reduce-motion was **false**, the `js` class was set, `main.js` and `styles.css` returned 200, and no console errors. The JS and CSS class names (`is-inview`) matched. The C.1 and stats animations were running. The hero panel reveal, parallax, scroll reveals, card hover motion and header blur had never been built, because their brief was cut off. They are now built (doc 01) and verified in headless Chrome at a normal frame rate, in full and reduced mode. The automated desktop Chrome window was throttled (1 frame in 500 ms) because it was not in the foreground, so it could not be used for timing checks |
| A-30 | Reduced-motion design | Changed from "no animation" to opacity fades and count-up only (director's instruction) |
| Q-13 (partly closed) | Motion spec C.2 onward | Built with Claude's values (doc 01); confirm or supply the original brief |

## L. Mobile pass 2026-10-25 (390 × 844 and 360 × 800)
| ID | Item | Decision |
|---|---|---|
| A-31 | Quotation form hand-off (Stage 6, FR-032…FR-038) | Built: validation on submit, then on blur; errors under the field with `aria-invalid` and `aria-describedby`; focus moves to the first invalid field; WhatsApp opens `wa.me/254721691786?text=…` in a new tab; email opens `mailto:` with subject "Quotation request — {service}"; the status says the message is ready and to press send, with a fallback link. Error copy and the amber `#F2A65A` (FR-041) are Claude's proposals. FR-003 (focus the first field from "Start Your Project") and FR-020 (preselect the service from the capability links) are still not wired |
| A-32 | Mobile touch targets | Below 600 px, text links in the utility bar, contact list and footer get invisible 44 px tap areas (padding offset by negative margin, so nothing moves); the hero phone/WhatsApp links get 10 px padding and sit 10 px higher; "View Track Record" gets 9 px top padding |
| A-33 | Mobile H1 size | Below 600 px the H1 is `min(44px, 12vw)` so "Craftsmanship in" stays on one line at 360 px (43.2 px there; 38.4 px at 320). Doc 08 proposes 44–52 px |
| A-34 | Mobile wrapping | Balanced wrapping for the hero caption and card, pillar and step titles below 600 px; non-breaking spaces in "10 days" and "24 months" in the durations card (desktop unchanged, still one line) |
| A-35 | Mobile project table | Below 600 px the table no longer bleeds 16 px past the column, so the rows align with the header and intro |

## M. Copy and brand cleanup 2026-10-25 (director's copy deck, doc 03)
| ID | Item | Decision |
|---|---|---|
| Q-14 | Hero caption | The brief asks for "Featured project" plus a project name. IMG-01 is a generic villa image, and rule 5 and A-05 forbid putting a real project name (Gigiri, Lion Villas) on it, so "Featured project" would be a new claim. **Kept "Illustrative image / Large-format sliding glazing" until the director chooses:** (a) supply a real Lion Villas photo, (b) approve the name on the generic image, or (c) keep the illustrative caption |
| A-36 | "Nairobi" copy | The eyebrow "Nairobi, Kenya", "Fabricated to order in Nairobi" and "Fabrication in Nairobi" come from the director's deck. Doc 03 had marked Nairobi fabrication P/C; confirm before launch |
| A-37 | Deck items over the stated limits | Used word for word as the director wrote them: the H1 is 6 words (the limit is 5); the Architectural Doors line is 2 sentences and 13 words (the limit is 12 words, one sentence) |
| A-38 | Copy not covered by the deck | Kept: section labels (01 Capabilities, 02 Verified track record, 03 Contractor confidence, 04 Execution process), the project table header (Major project / Completed), the quotation contact list (Call / WhatsApp, Email, Visit with its address placeholder), form placeholders and select options, the "Request Quotation" button. Removed: the bar chart caption (not in the stats deck; the hidden data table keeps a caption) |
| A-39 | Capability links | All three read "Request a quote"; visually hidden text adds the service for screen readers |
| A-40 | Favicon | The AL favicon is removed; `<link rel="icon" href="data:,">` prevents a 404 for `/favicon.ico` |
| A-41 | Parallax overscan | The drift is limited to min(40 px, 7% of panel height); the old fixed 40 px limit showed the panel background at the top of the hero image at 1440 px and below |
