# Negotiate Power Website Spend-Control Rules

## Purpose

These rules govern the Negotiate Power website repository and are intended to keep the initial release inexpensive, controlled, and operationally simple while preserving room for future growth.

## Rules

1. No custom Actions workflows.
2. No CI runs for ordinary copy edits.
3. No dependency-based framework until required.
4. Test locally before committing.
5. Batch minor edits into controlled releases.
6. Use one focused pull request for major revisions.
7. Never place Atlas source data or secrets in the repository.
8. Do not purchase GoDaddy hosting; use GoDaddy only for registration, DNS, and potentially email.
9. Do not activate paid analytics, form processing, or monitoring during the initial release.
10. Reassess the architecture only when the site needs authentication, payments, customer dashboards, dynamic Atlas outputs, or significant lead-processing automation.

## Change Control

Any exception to these rules should be documented before implementation and should identify:

- The capability that cannot be supported under the current static-site architecture.
- The expected recurring and one-time cost.
- The security, privacy, and maintenance implications.
- The reason the added complexity is justified.
- The rollback or exit plan if the change does not create sufficient value.
