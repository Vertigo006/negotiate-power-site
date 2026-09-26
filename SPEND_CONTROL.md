# Negotiate Power Website Spend-Control Rules

## Purpose

These rules govern the Negotiate Power website repository. They keep the public site inexpensive, controlled, and operationally simple while permitting the minimum measurement and deployment infrastructure required to operate the current BRENO commercial website.

## Rules

1. Write static website files directly to the repository. Do not add an Actions workflow to generate, compile, package, or commit the site.
2. Treat GitHub `main` as the authoritative website source. A merge is not proof of successful production deployment; verify the configured deployment status independently.
3. No custom Actions workflows unless a later capability cannot be supported safely without one and the exception is documented first.
4. Do not add CI/build machinery for ordinary copy edits.
5. No dependency-based framework until required.
6. Review changes before committing and use preview/runtime verification when the deployment path makes it available.
7. Batch minor edits into controlled releases.
8. Use focused pull requests for material revisions.
9. Never place BRENO/Atlas source code, confidential Decision Objects, customer evidence, credentials, or secrets in the public repository.
10. Do not purchase redundant website hosting when the current deployment architecture remains sufficient.
11. Keep analytics bounded to the minimum commercial and operational signals needed. Do not add a paid analytics platform merely for richer dashboards.
12. The approved Stage 0 measurement foundation may record coarse page/category/CTA context. It must not send email body contents, customer-entered decision details, confidential evidence, or Decision Object data to analytics.
13. A mailto click is a CTA interaction signal only. Do not treat it as an intake submission, qualified opportunity, meeting, engagement, or revenue event.
14. Do not activate an on-site form processor, payment flow, customer-data store, or significant lead-processing automation without reassessing privacy, security, legal, cost, and operational requirements.
15. Reassess the architecture when the public site itself requires authentication, payments, customer dashboards, dynamic BRENO outputs, confidential evidence intake, or significant lead-processing automation.

## Deployment Control

The public marketing site should remain deployable as static assets such as HTML, CSS, JavaScript, images, metadata files, and legal pages unless a documented requirement justifies a different architecture.

Repository, preview, and production are separate states:

- a branch/commit establishes a candidate;
- a pull request and configured preview establish a reviewable deployment candidate where capacity is available;
- merge establishes the authoritative `main` source;
- production status/runtime verification establishes deployment success.

Do not bypass a required preview or production verification merely because deployment capacity is temporarily unavailable.

## Measurement Control

Google Analytics is currently permitted for site usage and coarse commercial-pathway measurement. Measurement should remain privacy-respecting and bounded to information such as originating path, static decision category, and CTA type.

Downstream commercial states such as qualified opportunity, meeting, engagement, and revenue should be reconciled through the appropriate operational source of truth rather than inferred from browser events.

## Change Control

Any material exception to these rules should be documented before implementation and identify:

- the capability that cannot be supported under the current static-site architecture;
- expected recurring and one-time cost;
- security, privacy, legal, and maintenance implications;
- why the added complexity is justified;
- the rollback or exit plan if the change does not create sufficient value.
