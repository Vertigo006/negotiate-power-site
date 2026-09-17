# BRENO Site Production Migration Plan

Status: INTEGRATED RELEASE CANDIDATE / FINAL VISUAL QUALIFICATION REQUIRED / DO NOT MERGE WITHOUT OWNER RELEASE APPROVAL

## Governing rule
Preservation before improvement. Production remains unchanged until the integrated BRENO site passes final visual, navigation, metadata, and path qualification.

## Release architecture
Primary buyer path:
- `/` → concise BRENO landing and conversion surface
- `/breno.html` → product definition
- `/how-it-works.html` → decision process and progressive diligence
- `/example.html` → primary illustrative decision
- `/pricing.html` → current commercial offer

Depth and acquisition paths:
- `/methodology.html` → methodology, evidence discipline, boundaries, qualification provenance
- `/intelligence.html` → aviation Insights hub retaining eight existing article URLs
- `/aircraft-acquisition.html` → acquisition-specific commercial/search landing page
- `/aviation-advisers.html` → professional/adviser integration landing page
- `/samples.html` → fictionalized confirm/condition/change decision patterns

Historical/provenance paths:
- `/atlas.html` → preserved Atlas qualification/provenance record
- `/decision-room.html` → preserved Atlas-era fictionalized interface demonstration

Consolidated compatibility paths:
- `/challenge.html` → retained compatibility URL; noindex/follow; canonical to `/breno.html`
- `/engagements.html` → retained compatibility URL; noindex/follow; canonical to `/pricing.html`
- Both are intentionally removed from the sitemap.

## Production migration controls
1. Do not delete historical Atlas artifacts merely to complete the brand migration.
2. Do not perform global Atlas → BRENO replacement. Historical provenance must remain historically accurate.
3. Preserve high-value aviation search intent and existing article URLs.
4. Keep page-level language differentiated; each page must add information rather than restate the homepage.
5. Keep BRENO claims bounded: aviation is the deepest demonstrated proving ground; non-aviation work is conditional on domain evidence, expertise, and controls.
6. Keep decision ownership and professional authority with the customer/qualified professional.
7. Keep current pricing authority unchanged unless separately approved.
8. Do not represent fictionalized examples as customer outcomes.

## Qualification completed
- Production mappings staged only on `brand/breno-homepage-2026-09-16`; `main` remains unchanged.
- Homepage and primary BRENO pages use current metadata, self-canonical URLs, and index/follow.
- Insights hub migrated into BRENO navigation while retaining all eight aviation article URLs and search topics.
- Existing article substantive content remains preserved. Shared navigation normalizes article-visible navigation and conversion links into the BRENO journey while historical Atlas provenance remains available.
- Aircraft Acquisition migrated around mission integration, ownership thesis, commitment timing, persistent exposure, and professional boundaries.
- Aviation Advisers migrated around role preservation, integration gaps, repeat-decision controls, and commercial alignment.
- Atlas page explicitly preserves historical qualification evidence rather than retroactively renaming it.
- Decision Room explicitly identifies itself as an Atlas-era fictionalized interface demonstration.
- Samples reframed as fictionalized decision patterns rather than customer results.
- Legacy Challenge and Engagements URLs consolidated without deletion, removed from sitemap, and set noindex/follow with current canonical destinations.
- Sitemap now contains only current canonical BRENO, retained search/application, indexed proof/provenance, and legal surfaces.
- `robots.txt` remains compatible and unchanged.
- Shared navigation maintains mobile behavior, active-path semantics, and BRENO article conversion normalization.
- GitHub/Vercel status for integrated head `de2f9d2ae5628be4f39236b0b624ea8b6e1a38f4` returned SUCCESS.
- Branch remains 39 commits ahead / 0 behind production baseline `d17389c08b4d43baf2e1cde6b2c6e627c57cf271`.

## Release gates
- [x] BRENO identity and short-form buyer architecture approved.
- [x] Owner approved preservation/depth architecture.
- [x] Initial BRENO desktop/tablet/phone visual direction qualified.
- [x] Aviation authority/search assets preserved.
- [x] Application surfaces migrated.
- [x] Legacy Atlas/current-product references classified and dispositioned.
- [x] Metadata/canonical/sitemap strategy staged.
- [x] Integrated Vercel deployment reports SUCCESS through GitHub status.
- [ ] Owner visual pass on integrated head `de2f9d2` including homepage, Insights, Aircraft Acquisition, Aviation Advisers, Samples, Atlas provenance, and Decision Room historical demonstration.
- [ ] Owner release approval.
- [ ] Merge to main.
- [ ] Production smoke test after Vercel deployment.

## Current intervention point
The implementation sprint has reached the final browser-level visual qualification gate. Static/source and deployment-status gates are complete. Owner inspection is required because visual hierarchy, page engagement, and cross-device rendering cannot be truthfully qualified from repository source alone.

## Rollback
The pre-migration `main` commit is `d17389c08b4d43baf2e1cde6b2c6e627c57cf271`. If production promotion fails qualification after merge, restore the prior production files from that commit rather than attempting an improvised live repair.
