# BRENO Information Architecture & Legacy Migration Control

Date: 2026-09-16
Status: GOVERNING FOR PR #27
Branch: `brand/breno-homepage-2026-09-16`
Production baseline: `main` at `d17389c08b4d43baf2e1cde6b2c6e627c57cf271`

## Release objective

Preserve the BRENO design system and efficient buyer journey while restoring, reorganizing, and appropriately migrating the strongest authority, evidence, application, and organic-discovery assets from the Atlas-era site.

The public experience must be simple at first contact, substantive under diligence, and searchable at the problem level.

## Governing information hierarchy

1. **Buyer path** — `/`, `/breno.html`, `/how-it-works.html`, `/example.html`, `/pricing.html`.
2. **Trust and diligence** — `/methodology.html` plus retained evidence/sample surfaces where needed.
3. **Problem discovery and authority** — `/intelligence.html` and the existing `/intelligence/*` article corpus.
4. **Application landing pages** — aviation acquisition and aviation adviser/team pages retained and migrated into BRENO context.
5. **Historical provenance** — Atlas-era evidence remains attributable to Atlas where the work was actually performed under that identity. Historical qualification evidence is never silently rewritten as BRENO evidence.

## Migration classifications

### KEEP + MIGRATE BRAND CONTEXT

- `/intelligence.html` — retain URL, indexability, collection schema, and all eight article links. Update customer-facing Atlas references and conversion paths to BRENO while preserving article search intent.
- `/intelligence/fractional-ownership-vs-jet-card-vs-charter.html`
- `/intelligence/aircraft-ownership-vs-charter.html`
- `/intelligence/part-135-operator-due-diligence.html`
- `/intelligence/how-to-compare-aircraft-management-companies.html`
- `/intelligence/aircraft-management-fees-and-charter-revenue.html`
- `/intelligence/part-91-vs-part-135-aircraft-management.html`
- `/intelligence/what-managed-fleet-growth-really-signals.html`
- `/intelligence/private-aviation-consolidation.html`
- `/aircraft-acquisition.html` — retain high-intent application URL; migrate Atlas product references to BRENO without changing professional-authority boundaries.
- `/aviation-advisers.html` — retain professional/referral landing URL; migrate product context to BRENO.
- `/privacy.html`, `/terms.html`, `/404.html` — retain.

### CONSOLIDATE INTO BRENO

- Current Atlas methodology explanations in `/atlas.html` — migrate durable concepts (decision definition, evidence lineage, contradiction handling, uncertainty, falsification/change conditions, accountable human review, competence boundaries) into `/methodology.html` and BRENO product surfaces.
- Current sample concepts in `/samples.html` — preserve illustrative CONFIRM / CONDITION / CHANGE logic as historical/product-development evidence, while the primary BRENO example remains `/example.html`. Do not claim fictionalized examples as customer outcomes.
- Decision Room explanatory concepts — preserve inspectable-reasoning and human-authority concepts without requiring a buyer to understand internal product architecture before purchasing.

### HISTORICAL / PROVENANCE PRESERVE

- `/atlas.html` and Atlas-specific qualification language.
- AIOQ v1.0 references and results that occurred under Atlas.
- Decision Delta Atlas-era validation/protocol references.
- Any dated evidence whose identity matters to chain of provenance.

These materials may be visually de-emphasized or contextualized after migration, but must not be rewritten to imply that BRENO existed when the evidence was generated.

### LEAVE BEHIND AS PRIMARY UX

- Atlas as the current customer-facing product identity.
- Challenge Us as the dominant site architecture.
- Long single-page navigation patterns.
- Repeated explanations of the same CONFIRM / CONDITION / CHANGE model across primary buyer surfaces.
- Requirement that first-time buyers understand internal ontology, governance machinery, Decision Room architecture, or qualification terminology before understanding the commercial offer.
- Aviation-only framing at the top of the funnel. Aviation remains the deepest demonstrated proving ground, not the asserted boundary of the core decision problem.

## SEO and migration controls

- Preserve existing high-intent URLs unless a redirect has a clear user and search benefit.
- Do not create duplicate BRENO copies of retained intelligence articles.
- Every indexable retained page must have a unique title, description, self-canonical URL, and accurate internal links.
- Preserve the existing intelligence corpus in the sitemap.
- Add `/methodology.html` to the sitemap only when the page is production-qualified.
- Use BRENO links from retained content where the user is moving from public guidance to paid decision support.
- Historical Atlas pages must not compete with BRENO for current product-intent queries; final canonical/index/redirect treatment requires a page-level decision after migration is complete.
- No global Atlas → BRENO string replacement.

## Conversion controls

A visitor must be able to reach the paid engagement path from each retained commercial or intelligence surface without returning to the homepage.

Primary conversion path:

`Problem / insight → BRENO relevance → Example or Methodology → Pricing → Bring a Decision`

The homepage remains intentionally concise. Depth is exposed through contextual links, not by restoring the former homepage density.

## Release gates

1. BRENO primary buyer journey remains visually and functionally intact.
2. Intelligence hub and all eight article URLs remain reachable and indexable.
3. Application pages retain their distinct search/commercial intent.
4. Methodology & Trust page accurately preserves evidence, uncertainty, human-authority, and competence-boundary concepts without overstating BRENO qualification.
5. Historical Atlas qualification and provenance remain intact.
6. No broken internal production links.
7. Canonical, robots, sitemap, titles, descriptions, and structured data are internally consistent.
8. No materially duplicate indexable pages are introduced.
9. Browser-level visual regression passes on new/migrated surfaces.
10. Owner explicitly authorizes merge to production.

Production `main` remains untouched until all gates pass.