# Commercial Measurement Foundation — Stage 0

Status: implementation candidate
Date: 2026-09-25

## Hypothesis

BRENO cannot responsibly optimize commercial pathways without distinguishing meaningful CTA behavior by originating page and decision context. Existing Google Analytics page/session measurement is insufficient to reconstruct the first actionable conversion step.

## Pre-change baseline

The production site already loads Google Analytics on current commercial pages. Historical page/session/referral data may exist in Google Analytics, but the repository contains no authoritative historical commercial CTA event model and no on-site intake form. Therefore no historical CTA conversion baseline is manufactured. The first production period after this release establishes the event baseline.

## Minimum event model implemented

Event: `commercial_cta_click`

Parameters:
- `cta_type`: primary navigation, primary commercial, or organizational use when that CTA exists.
- `decision_category`: coarse public page/category context only.
- `originating_path`: public pathname.

The implementation does not send mailto subject/body contents, email addresses supplied by visitors, Decision Object data, customer evidence, or confidential Workbench data to analytics.

## Funnel coverage after Stage 0

Measurable now: source/referral → landing page → public decision/category context → commercial CTA click.

Not measurable from the website today: email composition completion, email send, qualified opportunity, meeting, engagement, or revenue. Those steps occur outside the static website and must not be inferred from a click. Operational reconciliation may later connect them if an authoritative CRM/outreach process supports it.

## Experiment control

Stage 0 changes measurement only. It does not change pricing, claims, page positioning, products, CTA wording, or Workbench behavior. Release 1 should not alter this event contract without evidence that the measurement is insufficient.
