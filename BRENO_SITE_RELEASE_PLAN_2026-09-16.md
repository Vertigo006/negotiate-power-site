# BRENO Site Production Migration Plan

Status: RELEASE CANDIDATE STAGED / DO NOT MERGE WITHOUT OWNER RELEASE APPROVAL

## Governing rule
Preservation before improvement. Production remains unchanged until the decomposed BRENO site passes visual, navigation, metadata, and path qualification.

## Validated preview architecture
- `/breno-site-preview.html` → production `/` (`index.html`)
- `/breno-preview.html` → production `/breno.html`
- `/breno-how-it-works-preview.html` → production `/how-it-works.html`
- `/breno-example-preview.html` → production `/example.html`
- `/breno-pricing-preview.html` → production `/pricing.html`

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
- `atlas.html`: preserved in the initial release. Do not delete or redirect until inbound traffic/backlinks and redirect behavior are separately qualified.
- `challenge.html`, `decision-room.html`, `engagements.html`: preserved in the initial release; classification remains documented in `BRENO_LEGACY_PAGE_CLASSIFICATION_2026-09-16.md`.
- Aviation landing pages and intelligence library: preserved.
- Historical Atlas evidence/provenance: unchanged; no global nomenclature rewrite.

## Qualification completed in this tranche
- Production file mapping staged on the feature branch only. `main` remains unchanged.
- Production homepage now uses BRENO metadata, self-canonical root URL, index/follow, Open Graph/Twitter metadata, and BRENO structured data.
- Dedicated BRENO, How It Works, Example, and Pricing production paths are staged with unique titles, descriptions, index/follow directives, and self-canonical URLs.
- Production navigation resolves only to staged production paths or preserved legal/contact paths.
- Secondary production pages include skip links, `main-content` targets, primary-navigation labels, decorative navigation semantics, and legal footer navigation.
- Sitemap adds all new BRENO production paths atomically while retaining legacy Atlas, Decision Room, Engagements, Challenge, aviation, intelligence, sample, and legal URLs.
- `robots.txt` requires no change: it already permits crawling and points to the canonical sitemap.
- Shared navigation script remains compatible with the new production paths and derives `aria-current` from pathname.
- Vercel GitHub integration reported successful preview-comment check with zero unresolved feedback on staged head `7987ae3`.

## Release gates
- [x] Short-form homepage architecture approved in principle.
- [x] Multi-page preview deployed successfully through Vercel.
- [x] Desktop/tablet BRENO identity and hero direction visually qualified.
- [x] Phone hero/navigation direction visually qualified.
- [x] Owner reports decomposed site is materially cleaner.
- [ ] Full secondary-page visual pass on the latest production-mapped branch head.
- [x] Internal production links statically verified against staged or preserved files.
- [x] Accessibility semantics normalized across staged production secondary pages.
- [x] Production titles/descriptions/canonical strategy prepared and staged.
- [x] Sitemap and robots impact reviewed; sitemap staged, robots preserved.
- [x] Legacy Atlas/current-product references classified.
- [x] Production file mapping staged on branch.
- [ ] Owner release approval.
- [ ] Merge to main.
- [ ] Production smoke test after Vercel deployment.

## Current blocker before owner release decision
The connected Vercel API currently does not enumerate canonical website project `prj_dkb8tWTbXzvHHxDCcfFJR7v1usf2`, although the authenticated Vercel dashboard and GitHub's Vercel integration show the website project and branch deployments. Because the latest production-mapped branch head cannot be fetched through the connector for a browser-level visual pass, visual qualification remains intentionally open. Do not infer a visual PASS from static source inspection alone.

## Rollback
The pre-migration `main` commit is `d17389c08b4d43baf2e1cde6b2c6e627c57cf271`. If production promotion fails qualification after merge, restore the prior production files from that commit rather than attempting an improvised live repair.
