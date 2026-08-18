# DECISIONS.md — Latch Landing Page

## 1. Why this approach over the obvious alternative?

**Chosen:** Product-first hero with a webhook inspector mock, unified 1120px container, restrained pink/purple atmospheric background.

**Rejected:** Decorative illustrations (including dot-matrix hands), full-width stretched layouts, and generic gradient-heavy SaaS templates. The hands background competed with content and looked unfinished. Showing the actual inspector UI communicates value immediately and meets the challenge requirement to show the product, not just claim it.

## 2. One trade-off under the time limit — and a real week

**Trade-off:** Hero and product demos are front-end simulations. Waitlist submit, replay POST, and tab switching in the inspector are static or partially interactive.

**With a week:** Wire waitlist to a form API, make product demo tabs functional, add keyboard navigation across the delivery list, and run device QA at 390px and 1790px on physical hardware.

## 3. Where AI was used — and what I verified

| Area | AI role | Personal verification |
|------|---------|----------------------|
| Layout system | Container grid, navbar 3-column alignment | Checked ultrawide centering and mobile overflow |
| Hero inspector | Component structure and sample data | Confirmed no fake company metrics; labeled as example delivery |
| Visual theme | Dark/light tokens, subtle radial glow | Verified both themes across all sections |
| Copy | Headlines and feature text | Removed fabricated credibility; kept pre-launch honest |

All submitted code is comment-free. Konami code easter egg shows: "You found the hidden delivery."
