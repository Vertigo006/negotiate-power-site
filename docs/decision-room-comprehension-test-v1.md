# Atlas Decision Room MVP — 90-Second Comprehension Test v1.0

Status: pre-registered buyer-test protocol. The thresholds below must be fixed before participant testing and must not be relaxed after results are observed without creating a new protocol version.

## Purpose

Determine whether a first-time sophisticated aviation decision maker can correctly understand an Atlas Decision Asset faster than a conventional analytical report while preserving uncertainty, evidence traceability, and human authority.

This test measures comprehension of the customer presentation layer. It does not validate the underlying case methodology, prove commercial value, or establish AIOQ accuracy.

## Test conditions

Use the production-equivalent Decision Room build on desktop and mobile. Participant receives no walkthrough of Atlas terminology before the test. Start the timer when the Decision Room becomes visible. Participant may scroll and open disclosures. Do not coach, explain, or answer substantive questions during the timed portion.

Record device, viewport, participant role, prior familiarity with Atlas, start time, first-answer timestamps, final answers, confidence in answers, and any obvious navigation failure.

## Timed questions

Ask the participant to answer, in their own words:

1. What decision is being evaluated?
2. What does Atlas recommend?
3. How confident is Atlas in the decision recommendation?
4. What evidence matters most?
5. What does Atlas not know or what remains unresolved?
6. What could change the recommendation?
7. What is the economic exposure?
8. What action should happen next?
9. Who retains decision authority?

After the 90-second mark, ask the participant to locate the decisive claim, its supporting evidence ID, and the provenance/source class.

## Pre-registered pass thresholds

### Individual participant

A participant passes the 90-second comprehension test only if, within 90 seconds, they correctly identify all of the following critical fields:

- Decision Object: proceed with the opportunity as represented given the authority evidence.
- Recommendation: AVOID / DEFER; do not accept as presently represented.
- Decision confidence: Medium, without describing evidence coverage as the same thing.
- Decisive evidence: the regulator-originated certificate-status record / EV-D01-03.
- Material uncertainty: whether a different valid authority structure could cover the contemplated employment/flying remains unverified.
- Next action: obtain authoritative evidence of valid applicable authority before commitment.
- Human authority: the customer/human decision maker retains authority; Atlas does not autonomously decide.

The participant must also avoid each critical misinterpretation:

- treating AIOQ qualification as a guarantee that the case is correct;
- stating that Atlas proved an unauthorized revenue flight occurred;
- inventing a dollar ROI, savings figure, or avoided loss;
- stating that the release-blocked qualification artifact was a customer-authorized final decision;
- treating recommendation adoption or a future favorable outcome as proof of causation.

### Cohort gate for real buyer testing

Minimum initial cohort: 5 qualified or representative aviation decision makers.

MVP passes the initial buyer-test gate when:

- at least 4 of 5 participants pass the individual 90-second critical-field test;
- median time to identify the Decision Object is <= 20 seconds;
- median time to identify the recommendation is <= 20 seconds;
- median time to identify the decisive evidence is <= 60 seconds;
- at least 4 of 5 correctly distinguish decision confidence from evidence coverage;
- at least 4 of 5 identify a material unknown without prompting;
- 5 of 5 identify that human/customer authority is retained;
- 5 of 5 avoid unsupported economic interpretation;
- 5 of 5 can reach the decisive evidence provenance within 30 additional seconds after the 90-second comprehension period;
- no participant encounters a blocking keyboard, mobile, contrast, or disclosure-control failure.

Failure of the human-authority or unsupported-economic controls is a critical UX failure even if the total comprehension score otherwise passes.

## Accessibility execution checks

Desktop keyboard pass:

- Skip link reaches main content.
- Menu control is keyboard operable when visible.
- Sticky section links receive visible focus.
- Every details/summary disclosure is reachable and operable by keyboard.
- Focus indicator remains visible at normal and forced-color settings.

Mobile pass:

- 320px CSS viewport minimum without horizontal page overflow.
- Sticky section navigation may scroll horizontally but does not obscure content.
- Interactive targets are at least approximately 44px high where applicable.
- Decision Object, recommendation, confidence, deadline, stage, and next action are available before deep evidence tables/details.
- Evidence text wraps without clipping.

Screen-reader basics:

- One page-level h1.
- Logical h2/h3 hierarchy.
- Main landmark and labeled primary/section navigation.
- Human-readable status text does not rely on color alone.
- Evidence state legend includes text labels.
- Decorative arrows/icons are hidden from assistive technology where appropriate.

## Scoring record

For each participant capture: participant ID; role; device; viewport; prior Atlas familiarity; Decision Object time/correct; recommendation time/correct; confidence correct; evidence time/correct; unknown correct; change trigger correct; economics correct; next action correct; human authority correct; provenance drill-down time/correct; critical misinterpretations; accessibility/navigation defects; qualitative comments.

## Decision rule

PASS — eligible for real buyer testing: cohort thresholds satisfied with no critical UX failure.

PASS WITH REMEDIATION: comprehension thresholds satisfied but non-critical usability/accessibility defects require correction before broader testing.

FAIL: critical-field comprehension threshold missed, human authority misunderstood, economic false precision induced, evidence provenance cannot be located, or blocking mobile/accessibility defect occurs.

No threshold may be reinterpreted after results simply to preserve a PASS. A revised threshold requires v1.1+ and must state why the original test was inadequate.
