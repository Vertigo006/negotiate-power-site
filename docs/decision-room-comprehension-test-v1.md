# Atlas Decision Room MVP — Verification & Comprehension Protocol v1.1

Status: pre-registered verification protocol. Thresholds and failure criteria are fixed before participant testing.

## Purpose
Verify that the Decision Room is only a governed presentation layer over a canonical Decision Asset and that a first-time sophisticated aviation decision maker can understand the decision in approximately 90 seconds without overreading confidence, laundering evidence, or mistaking a blocked artifact for released advice.

## Canonical-only invariant
The UI may select, order, label, format, and progressively disclose canonical fields. It may not independently calculate or infer recommendation, confidence, evidence weight, contradiction disposition, authority state, economic value, Decision Delta, abstention, freshness, or release state. Missing required canonical fields must fail closed rather than generate substitute values.

## 90-second test
Without a walkthrough, ask: (1) what decision is being evaluated; (2) what Atlas recommends; (3) confidence; (4) why; (5) decisive evidence; (6) material uncertainty/contradiction; (7) what changes the call; (8) next action; (9) who retains authority; (10) whether the displayed record is current/released.

Individual pass requires correct Decision Object; AVOID/DEFER; Medium qualitative confidence without conflating coverage; EV-D01-03 as decisive evidence; alternate authority unverified; authoritative cure as change condition; next action; human authority; and recognition that the demo is frozen and release-blocked.

Critical misinterpretations are automatic failures: AIOQ treated as accuracy guarantee; unauthorized revenue flight asserted; ROI/savings invented; blocked artifact treated as released advice; source representation treated as regulator fact; Medium confidence converted into numeric probability; frozen evidence treated as current verification.

Cohort gate: minimum 5 representative aviation decision makers; >=4/5 individual passes; median Decision Object <=20 sec; recommendation <=20 sec; decisive evidence <=60 sec; 5/5 human authority; 5/5 no unsupported economics; 5/5 recognize blocked/frozen status; 5/5 reach provenance within 30 additional seconds.

## State test matrix
### Normal recommendation
Canonical recommendation is rendered verbatim. No presentation-layer scoring or recomputation.

### Abstention
Inject a test fixture whose canonical recommendation state is `ABSTAIN / INSUFFICIENT BASIS`. Pass only if the primary screen renders abstention explicitly, does not choose an alternative, identifies the canonical evidence gap/change condition, and never derives a recommendation from evidence cards.

### Low confidence
Inject a fixture with canonical qualitative confidence `Low`. Pass only if `Low` is displayed verbatim, no numeric probability or five-step pseudo-score is generated, limiting evidence is visible, and coverage remains separately labeled.

### Human release blocked
Inject `RELEASE BLOCKED`. Pass only if blocked state is visible before deep drilldown and the interface does not frame the recommendation as released customer advice.

### Stale/frozen data
Inject a frozen/stale freshness state and cutoff. Pass only if the cutoff and warning are visible on the primary screen and the page does not imply current verification.

### Missing canonical field
Remove each required primary-screen field in turn. Pass only if the data binding fails closed and does not invent a replacement value.

## Evidence/provenance Red Team
Attempt to make a participant: confuse first-party representation with authoritative fact; infer unauthorized flight; treat source count as confidence; treat evidence coverage as recommendation confidence; miss the strongest contrary evidence. Any systematic confusion is a material defect.

## Accessibility verification
Desktop keyboard: skip link; menu; section links; every details/summary control; visible focus. Mobile: 430/390/375/320 CSS px; no page-level horizontal overflow; evidence wraps; section navigation remains usable; interactive targets approximately >=44px. Screen-reader structure: one h1; logical h2/h3; main/nav landmarks; live load status; text labels for states; decorative arrows/icons hidden. Contrast: verify normal text, muted/provenance text, state labels, focus indicator, and warning treatment against WCAG AA targets using computed production colors. Forced-colors and reduced-motion behavior must remain usable.

## Runtime requirement
Source inspection is not sufficient for production release. Execute the protocol against a production-equivalent served build in at least one Chromium-class browser and one WebKit-class/mobile browser. Record viewport, browser, failures, screenshots where useful, and exact commit SHA.

## Decision rule
PASS: cohort and runtime gates pass with no critical UX/accessibility failure. PASS WITH REMEDIATION: comprehension passes but noncritical defects remain. FAIL: primary comprehension misses, provenance cannot be reached, confidence/coverage are confused systematically, blocked/frozen status is missed, unsupported economics are induced, or a blocking keyboard/mobile/screen-reader/contrast defect occurs.
