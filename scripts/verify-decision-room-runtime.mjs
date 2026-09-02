import { chromium, webkit } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import fs from 'node:fs/promises';

const base = JSON.parse(await fs.readFile('assets/data/decision-room-demo-case-d01.json', 'utf8'));
const viewports = [
  { width: 1440, height: 1000 }, { width: 1280, height: 900 }, { width: 1024, height: 768 },
  { width: 430, height: 900 }, { width: 390, height: 844 }, { width: 375, height: 812 }, { width: 320, height: 700 },
];
const engines = [['chromium', chromium], ['webkit', webkit]];
const errors = [];
const check = (ok, msg) => { if (!ok) errors.push(msg); };

async function loadWith(page, payload) {
  await page.route('**/assets/data/decision-room-demo-case-d01.json', async route => {
    await route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(payload) });
  });
  await page.goto('http://127.0.0.1:8000/decision-room.html', { waitUntil: 'networkidle' });
  await page.waitForTimeout(150);
}

for (const [engineName, engine] of engines) {
  const browser = await engine.launch({ headless: true });
  try {
    for (const viewport of viewports) {
      const context = await browser.newContext({ viewport });
      const page = await context.newPage();
      await loadWith(page, base);
      const suffix = `${engineName} ${viewport.width}x${viewport.height}`;
      check(await page.locator('[data-field="asset-load-state"]').innerText() === 'Canonical derived view loaded', `${suffix}: canonical JSON did not bind`);
      check((await page.locator('[data-field="release-state"]').first().innerText()).includes('RELEASE BLOCKED'), `${suffix}: release-blocked state not visible`);
      check((await page.locator('[data-field="freshness-state"]').first().innerText()).includes('FROZEN'), `${suffix}: frozen state not visible`);
      check(await page.locator('[data-field="recommendation-state"]').first().innerText() === 'AVOID / DEFER', `${suffix}: recommendation mismatch`);
      check(await page.locator('[data-field="decision-confidence"]').first().innerText() === 'Medium', `${suffix}: confidence mismatch`);
      check(await page.locator('[data-field="coverage-grade"]').first().innerText() !== 'Medium', `${suffix}: coverage conflated with confidence`);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1);
      check(!overflow, `${suffix}: page-level horizontal overflow`);
      check(await page.locator('h1').count() === 1, `${suffix}: expected exactly one h1`);
      check(await page.locator('main').count() === 1, `${suffix}: expected one main landmark`);
      check(await page.locator('nav').count() >= 2, `${suffix}: navigation landmarks missing`);
      check(await page.locator('[role="status"][aria-live]').count() === 1, `${suffix}: live status semantics missing`);
      check(await page.locator('.trace-arrow[aria-hidden="true"]').count() === 3, `${suffix}: decorative arrows not hidden`);
      await page.keyboard.press('Tab');
      const firstFocus = await page.evaluate(() => document.activeElement?.className || '');
      check(String(firstFocus).includes('skip-link'), `${suffix}: skip link is not first keyboard focus`);
      const axe = await new AxeBuilder({ page }).withTags(['wcag2a','wcag2aa','wcag21a','wcag21aa']).analyze();
      const serious = axe.violations.filter(v => ['serious','critical'].includes(v.impact || ''));
      check(serious.length === 0, `${suffix}: serious/critical axe violations: ${serious.map(v=>v.id).join(',')}`);
      await context.close();
    }

    // State injections required by the governing protocol.
    for (const scenario of [
      ['abstention', p => { p.recommendation.state='ABSTAIN / INSUFFICIENT BASIS'; p.recommendation.plain_language='Insufficient basis to select an alternative.'; p.recommendation.next_action='Obtain the missing authoritative evidence.'; }],
      ['low-confidence', p => { p.confidence_architecture.decision_confidence='Low'; p.confidence_architecture.explanation='Decision confidence is low because decisive evidence is incomplete.'; }],
      ['stale', p => { p.decision_object.freshness_state='STALE — REVERIFY BEFORE USE'; p.decision_object.freshness_warning='The evidence state is stale and must be reverified before decision use.'; }],
      ['release-blocked', p => { p.authority_state.release_state='RELEASE BLOCKED'; p.authority_state.human_review='MANDATORY'; }],
    ]) {
      const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
      const page = await context.newPage();
      const payload = structuredClone(base); scenario[1](payload); await loadWith(page, payload);
      if (scenario[0] === 'abstention') check(await page.locator('[data-field="recommendation-state"]').first().innerText() === 'ABSTAIN / INSUFFICIENT BASIS', `${engineName}: abstention not rendered verbatim`);
      if (scenario[0] === 'low-confidence') check(await page.locator('[data-field="decision-confidence"]').first().innerText() === 'Low', `${engineName}: low confidence not rendered verbatim`);
      if (scenario[0] === 'stale') check((await page.locator('[data-field="freshness-state"]').first().innerText()).includes('STALE'), `${engineName}: stale state not rendered`);
      if (scenario[0] === 'release-blocked') check((await page.locator('[data-field="release-state"]').first().innerText()).includes('RELEASE BLOCKED'), `${engineName}: blocked state not rendered`);
      await context.close();
    }

    // Missing canonical primary-screen field must fail closed.
    {
      const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
      const page = await context.newPage();
      const payload = structuredClone(base); delete payload.recommendation.state;
      await loadWith(page, payload);
      check((await page.locator('[data-field="asset-load-state"]').innerText()).includes('Canonical data unavailable'), `${engineName}: missing required field did not fail closed`);
      await context.close();
    }
  } finally {
    await browser.close();
  }
}

if (errors.length) {
  console.error('DECISION ROOM RUNTIME VERIFICATION FAILED');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}
console.log('DECISION ROOM RUNTIME VERIFICATION PASSED');
