# 00 — Project overview

Related: [README](../README.md) · [Design spec](01-DESIGN-SPECIFICATION.md) · [Open questions](12-ASSUMPTIONS-AND-OPEN-QUESTIONS.md)

## Business context
Ali Fabrication Solutions Ltd fabricates aluminium windows, doors, curtain walling and fitouts in Kenya (profile). TheCompany.design is pitching a website project to the company. This build is a **concept to demonstrate the proposal**; the designer is not authorised to present it as company-approved, publish it as the official site, or commit the company to anything.

## Why a page is needed (audit findings)
Source: [UX audit report](reference/ux-audit-and-opportunity-report.pdf) and evidence screenshots in `reference/`.
- **Verified (screenshot, undated):** `alifabsolutions.com` shows a WordPress "critical error". Every Instagram creative seen prints that domain or a "Request a quote" button, so the call to action leads nowhere.
- **Verified:** Instagram `alifabrication.ke` is active (176 posts, 971 followers at capture).
- **Verified (profile):** 63 documented projects, 2011–2023, with durations. No working web page presents them.
- **Unknown:** analytics, enquiry volume, how long the outage has lasted.

## Objectives
1. Give Instagram and referral visitors a working destination that proves capability and makes a quotation request easy.
2. Reproduce the supplied design faithfully (see priority order in the task brief: `reference/task-brief-documentation-request.txt`).
3. Show only verified facts. No invented statistics, testimonials or certifications.
4. Persuade the director to commission the real project.

## Target audience
From the design prompt: commercial property developers, institutional architects, main contractors and high-net-worth homeowners in Kenya and East Africa. From the audit (inferred, not validated): homeowners and developers of villas and apartment blocks; architects, contractors and quantity surveyors specifying facades.

## Primary user journey (inferred)
See an Instagram post or get a referral → look for proof of comparable work → check capability for their system (windows, doors, curtain walling) → send a prepared WhatsApp or email quotation request, or call → visit the Experience Center.

## Scope (in)
One responsive landing page with the nine design blocks in the reference: utility bar, sticky nav, hero, stats strip, capabilities, landmark projects, contractor confidence, execution process, quotation form, footer.

## Explicit exclusions
No backend, database, CMS, analytics, blog, project-detail pages, multi-page navigation, live chat, testimonials, client logos, pricing, or any section not in the reference.

## Success criteria
Defined in [11-TESTING-AND-ACCEPTANCE](11-TESTING-AND-ACCEPTANCE.md). In short: visually matches the reference at agreed viewports; the form hands off correctly; every published fact traces to a source; all eight images placed deliberately; accessible; no console errors or broken assets.
No commercial outcome (leads, rankings, revenue) is promised.

## Risks and dependencies
| ID | Risk / dependency | Impact |
|---|---|---|
| R-01 | **Supplied images appear to be AI-generated, show other brands' logos and building names that contradict the captions** (details in [04](04-ASSET-MANIFEST.md)) | Misrepresentation of the client's work; trademark exposure; undermines the "verified" positioning |
| R-02 | Design shows "25+ years" and "100+ landmarks"; sources support neither | False claims if published |
| R-03 | Address, phone numbers, hours unconfirmed and conflicting across sources | Customers sent to wrong place |
| R-04 | Reference is desktop only; no tablet or mobile design supplied | Responsive layouts are my proposals, not the director's design |
| R-05 | Outage evidence is one undated screenshot | Pitch could be wrong if already fixed |
| R-06 | Photo ownership and permission to name clients unconfirmed | Cannot go public |
