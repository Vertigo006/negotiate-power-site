# Negotiate Power Website Spend-Control Rules

## Purpose

These rules govern the Negotiate Power website repository and are intended to keep the initial release inexpensive, controlled, and operationally simple while preserving room for future growth.

## Rules

1. Write the static website files directly to the repository. Do not use an Actions workflow to generate, compile, package, or commit the site.
2. Publish the site from the `main` branch through GitHub Pages using the repository root as the source.
3. No custom Actions workflows.
4. No CI runs for ordinary copy edits.
5. No dependency-based framework until required.
6. Test locally before committing.
7. Batch minor edits into controlled releases.
8. Use one focused pull request for major revisions.
9. Never place Atlas source data or secrets in the repository.
10. Do not purchase GoDaddy hosting; use GoDaddy only for registration, DNS, and potentially email.
11. Do not activate paid analytics, form processing, or monitoring during the initial release.
12. Reassess the architecture only when the site needs authentication, payments, customer dashboards, dynamic Atlas outputs, or significant lead-processing automation.

## Deployment Control

The initial site must consist only of deployable static assets such as HTML, CSS, JavaScript, images, metadata files, and legal pages. Repository writes are to be performed directly through Git or the GitHub contents interface. No build command, package installation, artifact upload, or custom workflow execution is permitted for the initial release.

## Change Control

Any exception to these rules should be documented before implementation and should identify:

- The capability that cannot be supported under the current static-site architecture.
- The expected recurring and one-time cost.
- The security, privacy, and maintenance implications.
- The reason the added complexity is justified.
- The rollback or exit plan if the change does not create sufficient value.
