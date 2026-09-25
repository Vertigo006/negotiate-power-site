# Negotiate Power Website

Static public website for **Negotiate Power** and **BRENO** decision intelligence.

> Intelligence for Consequential Decisions  
> The technology can be complex. The decision should not be.

## Architecture

- Plain HTML, CSS, and lightweight JavaScript
- No dependency-based framework
- No package installation or build command
- No custom GitHub Actions workflows
- Google Analytics is used for privacy-respecting site and coarse commercial-CTA measurement
- No on-site form processor, database, or payment integration
- Commercial inquiries currently begin through direct email links
- GitHub `main` is the authoritative website source
- Production/preview deployment status is integrated with the repository; do not infer a successful deployment from a merge alone
- GoDaddy is used for domain registration, DNS, and potentially email

See [`SPEND_CONTROL.md`](SPEND_CONTROL.md) for controlling cost and architecture rules.

## Commercial measurement

The current static measurement foundation records only coarse page and CTA context needed to understand commercial pathways. It does not send email body contents, customer-entered decision details, or confidential Decision Object data to analytics. A mailto click is an interaction signal, not an intake submission, qualified opportunity, meeting, engagement, or revenue event.

## Local review

From the repository root:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Public contact

`contact@negotiatepower.com`

## Legal and product status

Negotiate Power operates BRENO through scoped analytical engagements. Public engagement structure and pricing are governed by the current commercial authority in this repository. The website does not accept payment or establish a customer engagement through website access or an initial inquiry alone.

Historical Atlas pages and evidence remain preserved as historical provenance. Current customer-facing product language should use BRENO unless a historical reference is intentional.
