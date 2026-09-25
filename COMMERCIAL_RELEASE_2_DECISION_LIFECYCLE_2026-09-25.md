# Release 2 — Decision Lifecycle

Date: 2026-09-25
Status: implementation candidate

## Hypothesis

Qualified decision owners may undervalue BRENO if they interpret the deliverable as a recommendation at a point in time rather than an inspectable decision record that preserves the basis for the call and the conditions that should justify reconsideration.

## Authoritative capability classification

### DECIDE — AVAILABLE NOW
Current public positioning and governed Workbench architecture support structured alternatives, evidence, claims, assumptions, contradictions/conflicts, uncertainty/exposure inputs, governed analysis, human review, and retained human decision authority.

### PRESERVE — AVAILABLE NOW, BOUNDED
The Workbench creates versioned decision state, immutable/frozen analysis input snapshots and hashes, audit events, evidence/source relationships, and human review/decision records. Public language may say the material basis and rationale are preserved for the evaluated decision state. It must not imply indefinite retention guarantees beyond governing operational policy.

### OBSERVE — DO NOT CLAIM AS A SERVICE
The current public site already identifies conditions that should change/reopen the call, but authoritative implementation inspected for this release does not establish continuous external monitoring, automatic surveillance, guaranteed change detection, or alert delivery. The four-stage DECIDE → PRESERVE → OBSERVE → REASSESS formulation is therefore not published in this release because “OBSERVE” could imply a currently delivered monitoring function.

### REASSESS — SUPPORTED BUT BOUNDED
Current BRENO positioning supports identifying what should change/reopen the call. A later reassessment can evaluate material new information as a governed decision activity. Do not imply automatic reopening, automatic comparison to live external data, continuous monitoring, or an SLA.

## Smallest viable implementation

Add one BRENO product-page lifecycle section using three customer-readable states:

DECIDE → PRESERVE → REASSESS

The section explicitly states that BRENO does not currently promise continuous monitoring, automatic alerts, or autonomous reopening.

No new product, price, recurring service, navigation item, CTA, Workbench behavior, or analytics event is introduced.

## Claim control

Directly supported: decision state evaluation; preservation of material evidence/assumptions/contradictions and rationale; identification of change conditions.

Supported with qualification: reassessment when material new information warrants another look.

Prospective / not published as current service: ongoing observation/monitoring.

Unsupported / prohibited: continuous surveillance, guaranteed alerts, autonomous reopening, monitoring SLA.

## Experiment boundary

Release 2 tests comprehension of decision persistence, not demand for a monitoring product. Because it adds no new CTA, Stage 0 cannot attribute a direct conversion event uniquely to this section. Commercial interpretation should therefore rely on page-level behavior and qualitative prospect feedback until evidence justifies additional instrumentation.

After verified production release, preserve the surface and OBSERVE. Release 3A is a separate acquisition-funnel hypothesis.
