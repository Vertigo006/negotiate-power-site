#!/usr/bin/env bash
set -euo pipefail

python - <<'PY'
from pathlib import Path
from urllib.parse import urlparse
import re, sys

pages = list(Path('.').glob('*.html')) + list(Path('intelligence').glob('*.html'))
errors=[]
for path in pages:
    text=path.read_text(encoding='utf-8')
    if text.count('id="primary-navigation"') != 1: errors.append(f'{path}: primary nav count')
    if '/assets/css/site-v2.css' in text and '/assets/css/mobile-normalization.css' not in text: errors.append(f'{path}: mobile css missing')
    for stale in ['confidential qualification','request qualification','early-access','early access']:
        if stale in text.lower(): errors.append(f'{path}: stale {stale}')
    for href in re.findall(r'href="([^"]+)"', text):
        if href.startswith(('#','mailto:','http://','https://')): continue
        target=urlparse(href).path
        if not target or target=='/': continue
        p=Path('.'+target)
        if p.is_dir(): p=p/'index.html'
        if not p.exists(): errors.append(f'{path}: broken {href}')

home=Path('index.html').read_text(encoding='utf-8')
if 'AIOQ v1.0' in home: errors.append('home: formal AIOQ naming should be absent')
if home.count('Starting at $2,500') or home.count('Starting at $5,000') or home.count('Starting at $7,500'): errors.append('home: full tier pricing remains')
for needle in ['Who built Atlas','Michael Ward — Founder, Negotiate Power / Atlas.','Engagements start at $2,500.']:
    if needle not in home: errors.append(f'home: missing {needle}')
if not (home.index('Who built Atlas') < home.index('Qualification evidence') < home.index('Engagements start at $2,500.')): errors.append('home: proof hierarchy order incorrect')

atlas=Path('atlas.html').read_text(encoding='utf-8')
for needle in ['AIOQ v1.0','INSTITUTIONALLY QUALIFIED — BOUNDED','Decision Delta']:
    if needle not in atlas: errors.append(f'atlas: missing canonical detail {needle}')

pricing=Path('engagements.html').read_text(encoding='utf-8')
for needle in ['Starting at $2,500','Starting at $5,000','Starting at $7,500','3–5 business days','5–7 business days','7–10 business days']:
    if needle not in pricing: errors.append(f'pricing: missing {needle}')
if 'Atlas should not be used for every question.' in pricing: errors.append('pricing: duplicate standalone fit-boundary section remains')

intel=Path('intelligence.html').read_text(encoding='utf-8')
if 'proprietary <a href="/atlas.html">Atlas Engine</a>' in intel: errors.append('intelligence: internal-engine promotional line remains')

samples=Path('samples.html').read_text(encoding='utf-8')
hero=re.search(r'<section class="sample-hero">.*?</section>', samples, re.S)
if not hero or hero.group(0).count('class="button') != 2: errors.append('samples: hero CTA count should be two')

articles=list(Path('intelligence').glob('*.html'))
for path in articles:
    text=path.read_text(encoding='utf-8')
    if text.count('article-conversion-bridge') != 1 or text.count('article-conversion-close') != 1: errors.append(f'{path}: conversion bridge count')

if errors:
    print('\n'.join(errors)); sys.exit(1)
print(f'SOURCE PASS: {len(pages)} public pages; editorial hierarchy, canonical concept ownership, stale claims, links and conversion bridges verified.')
PY

npm init -y >/dev/null 2>&1
npm install --no-save playwright axe-core >/dev/null 2>&1
npx playwright install --with-deps chromium >/dev/null
python3 -m http.server 4173 --bind 127.0.0.1 >/tmp/atlas-editorial-server.log 2>&1 &
SERVER_PID=$!
trap 'kill $SERVER_PID || true' EXIT
sleep 2
cat > .tmp-editorial-qa.js <<'JS'
const { chromium } = require('playwright');
const axePath = require.resolve('axe-core/axe.min.js');
const base='http://127.0.0.1:4173';
const pages=['/','/atlas.html','/decision-room.html','/engagements.html','/samples.html','/intelligence.html','/privacy.html','/terms.html','/404.html','/intelligence/fractional-ownership-vs-jet-card-vs-charter.html','/intelligence/aircraft-ownership-vs-charter.html','/intelligence/part-135-operator-due-diligence.html','/intelligence/how-to-compare-aircraft-management-companies.html','/intelligence/aircraft-management-fees-and-charter-revenue.html','/intelligence/what-managed-fleet-growth-really-signals.html','/intelligence/part-91-vs-part-135-aircraft-management.html','/intelligence/private-aviation-consolidation.html'];
const widths=[1440,1280,1024,768,430,390,375,320]; const errors=[]; const notes=[];
const vp=w=>({width:w,height:w<=430?844:900});
async function go(page,path){await page.route('https://www.googletagmanager.com/**',r=>r.abort());await page.goto(base+path,{waitUntil:'domcontentloaded',timeout:15000});await page.waitForTimeout(50)}
(async()=>{const browser=await chromium.launch({headless:true});try{
for(const path of pages){for(const width of widths){const c=await browser.newContext({viewport:vp(width)});const p=await c.newPage();await go(p,path);const s=await p.evaluate(()=>({sw:document.documentElement.scrollWidth,iw:innerWidth,main:!!document.querySelector('main'),h1:document.querySelectorAll('h1').length,nav:!!document.querySelector('#primary-navigation'),cta:document.querySelector('.nav-cta')?.textContent.trim()||''}));if(s.sw>s.iw+1)errors.push(`${path}@${width}: overflow ${s.sw}>${s.iw}`);if(!s.main||s.h1!==1||!s.nav)errors.push(`${path}@${width}: semantic shell`);if(s.cta!=='Bring Atlas a Decision')errors.push(`${path}@${width}: nav CTA`);
if(path==='/samples.html'){const m=await p.evaluate(()=>({d:getComputedStyle(document.querySelector('.matrix-wrap')).display,m:getComputedStyle(document.querySelector('.matrix-mobile')).display}));if(width<=864&&!(m.d==='none'&&m.m!=='none'))errors.push(`samples@${width}: mobile matrix`);if(width>864&&!(m.d!=='none'&&m.m==='none'))errors.push(`samples@${width}: desktop matrix`)}
if(path==='/decision-room.html'){const r=await p.evaluate(()=>({scale:!!document.querySelector('.confidence-scale'),confidence:document.querySelector('.confidence-state strong')?.textContent.trim(),release:document.querySelector('.decision-meta')?.textContent||''}));if(r.scale)errors.push(`decision-room@${width}: confidence scale`);if(r.confidence!=='Moderate')errors.push(`decision-room@${width}: qualitative confidence`);if(!r.release.includes('Illustrative human-review state'))errors.push(`decision-room@${width}: release state`)}
if((width===1440||width===390)&&path!=='/404.html'){await p.addScriptTag({path:axePath});const a=await p.evaluate(async()=>await axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21a','wcag21aa']}}));const serious=a.violations.filter(v=>['serious','critical'].includes(v.impact));if(serious.length)errors.push(`${path}@${width}: axe ${serious.map(v=>v.id).join(',')}`);notes.push(`${path} @ ${width}: axe total=${a.violations.length}; serious/critical=${serious.length}`)} await c.close()}}
for(const width of [1440,390]){const c=await browser.newContext({viewport:vp(width)});const p=await c.newPage();await go(p,'/');if(width===390){await p.locator('.nav-toggle').focus();await p.keyboard.press('Enter');if(await p.locator('.nav-toggle').getAttribute('aria-expanded')!=='true')errors.push('mobile keyboard open');await p.keyboard.press('Escape');if(await p.locator('.nav-toggle').getAttribute('aria-expanded')!=='false')errors.push('mobile keyboard close');if(!(await p.evaluate(()=>document.activeElement?.classList.contains('nav-toggle'))))errors.push('mobile focus restore')}else{if(await p.locator('.nav-toggle').isVisible())errors.push('desktop toggle visible');if(!(await p.locator('#primary-navigation').isVisible()))errors.push('desktop nav hidden')}await c.close()}
{const c=await browser.newContext({viewport:vp(390),javaScriptEnabled:false});const p=await c.newPage();await p.goto(base+'/',{waitUntil:'domcontentloaded'});if(!(await p.locator('#primary-navigation').isVisible()))errors.push('JS-disabled nav hidden');if(await p.locator('.nav-toggle').isVisible())errors.push('JS-disabled toggle visible');await c.close()}
}finally{await browser.close()}console.log(notes.join('\n'));if(errors.length){console.error('\nQA FAILURES:\n'+errors.join('\n'));process.exit(1)}console.log(`\nRUNTIME PASS: ${pages.length} pages × ${widths.length} viewports; keyboard, JS-disabled, Samples, Decision Room and axe gates passed.`)})().catch(e=>{console.error(e);process.exit(1)});
JS
node .tmp-editorial-qa.js
rm -f .tmp-editorial-qa.js package.json package-lock.json
