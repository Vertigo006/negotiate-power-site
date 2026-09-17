# BRENO Legacy Public-Page Classification — 2026-09-16

Status: release-control artifact for PR #27. This document does not itself authorize production changes.

## Governing rule

Do not globally replace `Atlas` with `BRENO`. Public marketing references may migrate to BRENO, while historical evidence, qualification artifacts, case records, provenance, and dated claims must retain the name that was true when the evidence was created.

## Classification

| Current public path | Classification | Production treatment | Reason |
|---|---|---|---|
| `/` | REPLACE AT RELEASE | Promote qualified short-form BRENO homepage to `index.html` | Primary brand/product orientation surface. |
| `/atlas.html` | SUPERSEDE + REDIRECT | Replace public marketing role with `/breno.html`; preserve Atlas-era source/history in Git | Current page is explicitly an Atlas product explainer and carries indexed Atlas metadata. |
| `/decision-room.html` | RETAIN + TARGETED UPDATE | Keep public path initially; update product-facing naming only after content review | Decision Room remains a valid product concept and may retain inbound value. Historical qualification statements must not be rewritten retroactively. |
| `/engagements.html` | SUPERSEDE COMMERCIAL ROLE | `/pricing.html` becomes primary pricing path; preserve/redirect only after inbound-link review | BRENO pricing preview now carries current commercial structure more directly. |
| `/challenge.html` | RETAIN PENDING CONTENT AUDIT | Do not delete or redirect in initial release | Existing high-priority sitemap surface; may carry campaign/inbound value. |
| `/intelligence.html` and `/intelligence/*` | RETAIN | Preserve aviation intelligence library and URLs | Existing search/content equity; BRENO rebrand does not invalidate the subject matter. |
| `/aircraft-acquisition.html` | RETAIN | Preserve path; later align navigation/brand language | High-priority aviation landing page and active proving-ground content. |
| `/aviation-advisers.html` | RETAIN | Preserve path; later align navigation/brand language | High-priority aviation landing page and active commercial track. |
| `/samples.html` | RETAIN PENDING SAMPLE AUDIT | Preserve path | Existing proof/sample surface; any Atlas labels must be assessed as historical vs current before edits. |
| `/privacy.html` | RETAIN | No brand migration unless legally necessary | Protected legal surface. |
| `/terms.html` | RETAIN | No brand migration unless legally necessary | Protected legal surface. |

## SEO observations

The current sitemap assigns `/atlas.html`, `/decision-room.html`, and `/engagements.html` priority 0.9, while `/challenge.html` is priority 1.0 and the aviation landing pages are 0.95. Therefore legacy paths must not simply disappear during the BRENO launch.

The current `/atlas.html` is indexable and canonical to itself. It contains Atlas-specific title, description, Open Graph metadata, structured data, navigation, CTA wording, product description, AIOQ qualification language, Decision Delta language, boundaries, and Decision Room references. Production migration must distinguish current marketing nomenclature from historical claims.

## Proposed public BRENO architecture

- `/` — Negotiate Power / BRENO orientation
- `/breno.html` — BRENO product
- `/how-it-works.html` — decision method and governance
- `/example.html` — bounded illustrative decision
- `/pricing.html` — current engagements and intake

## Redirect policy gate

No redirect is to be introduced until all of the following are true:

1. Destination production page exists and passes responsive/link regression.
2. Destination has indexable production metadata and self-canonical URL.
3. Existing path has been checked for unique content that would be lost.
4. Sitemap is updated atomically with the release.
5. Redirect mechanism is verified for the actual hosting configuration.
6. Historical Atlas evidence remains accessible in repository history even if the public marketing URL changes.

## Initial release recommendation

For the first production BRENO release, promote the five new public pages and update the sitemap, but preserve legacy public files unless a redirect mechanism has been tested in the Vercel/GitHub Pages hosting configuration. This avoids converting a naming migration into an avoidable availability or SEO regression.
