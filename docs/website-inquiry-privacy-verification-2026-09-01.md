# Negotiate Power Website, Inquiry & Privacy Flow Verification — 2026-09-01

## Scope
Verified production repository implementation, current public commercial pages, privacy/terms copy, Microsoft Outlook destination mailbox, and GitHub Pages hosting characteristics available through controlled sources.

## Actual flow
Visitor → CTA (`mailto:`) → visitor's email client/provider → Microsoft-hosted `contact@negotiatepower.com` mailbox → manual qualification by Negotiate Power → any later evidence transfer/scope process established separately → mailbox/business-record retention until deletion or legitimate retention need.

There is no on-site qualification form, form processor, CRM, payment processor, customer account, analytics SDK, advertising pixel, tag manager, or cookie-consent implementation in the current repository tree.

## Control classification
| Control | Status | Evidence / limitation |
| --- | --- | --- |
| Static website source | VERIFIED | `Vertigo006/negotiate-power-site` main is a static HTML/CSS/JS GitHub Pages source tree. |
| Custom-domain marker | VERIFIED | Root `CNAME` exists for the public Pages site. DNS provider/account configuration not independently inspected. |
| GitHub Pages hosting | VERIFIED | Repository has Pages-era static source/CNAME; GitHub documents Pages custom domains and visitor IP logging. Repository Pages-settings API was not accessible through the connected action surface. |
| HTTPS enforcement / certificate state | PARTIALLY VERIFIED | Public URLs and canonical references use HTTPS; exact Pages `https_enforced` setting and live TLS handshake could not be independently read from this environment. |
| On-site inquiry form | NOT PRESENT | No form handler/form endpoint exists in production tree; public CTA is `mailto:`. |
| Form processor/provider | NOT PRESENT | No form exists. |
| Inquiry destination | VERIFIED | Outlook connected profile is `contact@negotiatepower.com`. |
| Lead routing | PARTIALLY VERIFIED | Mail arrives at the business Outlook mailbox. No dedicated CRM/lead folder/automation surfaced; external Exchange rules or separate systems were not available for inspection. |
| Qualification process | DOCUMENTED ONLY | Site describes manual 20–30 minute qualification and fixed-scope confirmation; no workflow system enforces it. |
| Inquiry storage | VERIFIED | Email is stored in Microsoft Outlook mailbox folders. |
| Fixed retention schedule | NOT PRESENT | No published fixed inquiry retention period was found. |
| Deletion/correction route | VERIFIED | Privacy contact is `contact@negotiatepower.com`; operational fulfillment remains manual. |
| First-party analytics | NOT PRESENT | No analytics/tag-manager SDK in current tree. |
| Advertising/behavioral tracking | NOT PRESENT | No pixel/ad scripts found in current tree. |
| First-party cookies | NOT PRESENT | Static implementation has no cookie-setting code. Provider/network processing may still occur outside site code. |
| Third-party client scripts | NOT PRESENT | Current public repository implementation loads local site JS only; JSON-LD is metadata, not executable third-party code. |
| Sensitive-data intake guard | VERIFIED / strengthened | Commercial page now states email is the current path and tells visitors not to attach sensitive evidence initially. |
| Privacy notice vs implementation | VERIFIED AFTER REMEDIATION | Updated notice now identifies GitHub Pages, Microsoft-hosted mailbox, ordinary email transport, no fixed retention period, and no secure-portal claim. |
| Current pricing | VERIFIED | $2,500 / $5,000 / $7,500 starting prices on engagements page match current pricing authority. |
| Decision Room links | VERIFIED IN SOURCE | Home and engagements link `/decision-room.html`; main currently serves the older generic Decision Room until PR #21 is separately merged. |
| Mobile navigation implementation | VERIFIED IN SOURCE | Shared navigation script implements mobile toggle, Escape, focus trap and current-page state. Production visual/runtime QA not executed here. |
| Accessibility structure | PARTIALLY VERIFIED | Skip links, semantic nav/main, keyboard mobile menu logic and responsive CSS exist. Browser/screen-reader/contrast runtime verification remains open. |
| Error page | VERIFIED IN SOURCE | `404.html` exists. Live error-response behavior not runtime-tested due DNS resolution limits in execution environment. |

## Red Team findings
1. The label `confidential qualification` could be overread as a secure upload channel. Remediation: the page now states the button opens the visitor's email app and prohibits sensitive initial attachments unless a separate requested channel exists.
2. The old privacy notice was broadly accurate but too generic about email/storage/providers. Remediation: it now names the current website host class (GitHub Pages), Microsoft-hosted mailbox, ordinary-email security boundary, manual deletion route, and absence of a fixed retention period.
3. There is currently no CRM/lead ledger or deterministic qualification-state workflow in the public stack. This is not a privacy defect, but it creates operational dependency on manual inbox management.
4. Live production runtime, DNS, TLS, computed contrast, browser/mobile behavior, and actual 404 response could not be independently exercised from the available runtime because the domain did not resolve there. These controls remain PARTIALLY VERIFIED rather than being inferred from source.
5. Main's Decision Room is still the current generic page; hardened CASE-D01 PR #21 remains proposed/unmerged. Website links are correct but point to the current main artifact until that separate release gate is completed.

## No unsupported security claims
This verification does not establish SOC 2, ISO 27001, end-to-end encrypted inquiry transport, secure evidence upload, formal mailbox retention automation, DLP, MFA status, Exchange retention policy, CRM controls, or contractual privacy/security commitments beyond separately evidenced artifacts.
