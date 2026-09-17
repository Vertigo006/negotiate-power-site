# BRENO Site Production Migration Plan

Status: PRE-RELEASE / DO NOT EXECUTE WITHOUT OWNER RELEASE APPROVAL

## Governing rule
Preservation before improvement. Production remains unchanged until the decomposed BRENO site passes visual, navigation, metadata, and path qualification.

## Validated preview architecture
- `/breno-site-preview.html` → proposed production `/` (`index.html`)
- `/breno-preview.html` → proposed production `/breno.html`
- `/breno-how-it-works-preview.html` → proposed production `/how-it-works.html`
- `/breno-example-preview.html` → proposed production `/example.html`
- `/breno-pricing-preview.html` → proposed production `/pricing.html`

## Production migration controls
1. Do not delete historical Atlas artifacts merely to complete the brand migration.
2. Do not perform global Atlas → BRENO replacement. Historical provenance must remain historically accurate.
3. Replace public-facing current-product references only after identifying whether each reference is current positioning, historical evidence, or an inbound SEO path.
4. Preserve existing high-value aviation pages unless a replacement is explicitly qualified.
5. Preserve existing legal pages, analytics, favicon/touch assets, sitemap/robots behavior, and contact routes unless separately reviewed.
6. Keep BRENO claims bounded: aviation is the deepest demonstrated proving ground; non-aviation work is conditional on domain evidence, expertise, and controls.
7. Keep decision ownership and professional authority with the customer/qualified professional.
8. Keep current pricing authority unchanged unless separately approved.

## Legacy path treatment
- `atlas.html`: do not delete at release. Determine inbound traffic/backlinks first. Preferred eventual treatment is a controlled legacy/transition page or redirect only after SEO impact review.
- `challenge.html`, `decision-room.html`, `engagements.html`: preserve until each page is classified as retain, update, redirect, or supersede.
- Aviation landing pages: preserve unless the new information architecture explicitly replaces their commercial function.

## Release gates
- [x] Short-form homepage architecture approved in principle.
- [x] Multi-page preview deployed successfully through Vercel.
- [x] Desktop/tablet BRENO identity and hero direction visually qualified.
- [x] Phone hero/navigation direction visually qualified.
- [x] Owner reports decomposed site is materially cleaner.
- [ ] Full secondary-page visual pass.
- [ ] All internal preview links verified against existing files.
- [ ] Accessibility semantics normalized across secondary pages.
- [ ] Production titles/descriptions/canonical strategy prepared.
- [ ] Sitemap and robots impact reviewed.
- [ ] Legacy Atlas/current-product references classified.
- [ ] Production file mapping staged on branch.
- [ ] Owner release approval.
- [ ] Merge to main.
- [ ] Production smoke test after Vercel deployment.

## Rollback
The pre-migration `main` commit is `d17389c08b4d43baf2e1cde6b2c6e627c57cf271`. If production promotion fails qualification after merge, restore the prior production files from that commit rather than attempting an improvised live repair.
