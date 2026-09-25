# Release 3A — Canonical Private Aviation Access Funnel

Date: 2026-09-25
Status: implementation candidate

## Category selection

The directive proposed Buy vs. Fractional vs. Charter unless current evidence justified another supported category. Current repository and search evidence support the same underlying category but show that customer intent commonly includes four adjacent access models: whole ownership, fractional ownership, jet cards, and on-demand charter. The existing indexed guide already serves this intent and contains substantial decision content. Creating a second competing page would duplicate intent and risk cannibalization.

Release 3A therefore upgrades the existing `/intelligence/fractional-ownership-vs-jet-card-vs-charter.html` asset into the canonical funnel rather than adding another URL.

## Search evidence

Current 2026 search results use language including “private jet ownership vs fractional vs charter,” “jet card vs fractional ownership vs charter,” and “charter vs fractional ownership.” Recent sources consistently caution that annual-hours thresholds are incomplete and identify mission pattern, aircraft category, availability, capital/commitment, flexibility, and exit terms as decision variables.

No external provider threshold or provider-specific price is adopted as a BRENO claim.

## Funnel architecture

The upgraded page begins with the customer decision and adds the missing commercial bridge:

1. recognizable access decision;
2. why annual-hours shortcuts can be incomplete;
3. decision variables;
4. customer-readable BRENO evaluation sequence;
5. clearly synthetic illustrative decision state;
6. Decision Asset deliverable;
7. mapping to existing Decision Intelligence Assessment / Forward Cost scopes;
8. decision-specific Bring BRENO Your Decision CTA.

The existing deep educational content remains because it is independently useful to the decision-maker and already serves legitimate search intent.

## Claim control

Directly supported: governed alternatives/evidence/assumptions/conflicts; exposure and uncertainty framing; inspectable decision record; human review/authority; existing engagement pricing and scope.

Supported with qualification: Forward Cost scope when persistence, lock-in, residual exposure, or recovery timing could change the decision.

Not claimed: legal/tax/financial advice; provider superiority; universal hour thresholds; guaranteed savings; autonomous recommendation; continuous monitoring; customer outcomes.

The illustrative decision state is synthetic and explicitly labeled as not a customer result or recommendation.

## Measurement

The page declares decision category `private_aviation_access_model`. The primary CTA uses a distinct email subject and Stage 0 records only CTA type, coarse category, and originating path. Email contents remain excluded from analytics.

## Hypothesis

A high-intent visitor comparing private aviation access models is more likely to recognize BRENO as a credible path to a customer-specific decision when the existing educational guide connects the problem directly to BRENO's governed decision process, an illustrative decision state, the actual deliverable, existing scope, and a decision-specific commercial CTA.

After verified production release: OBSERVE. Do not create a competing access-model page or Release 3B until this candidate is technically stable and the directive's next sequential gate is satisfied.
