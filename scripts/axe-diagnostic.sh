#!/usr/bin/env bash
set -euo pipefail
npm init -y >/dev/null 2>&1
npm install --no-save playwright axe-core >/dev/null 2>&1
npx playwright install --with-deps chromium >/dev/null
python3 -m http.server 4173 --bind 127.0.0.1 >/tmp/atlas-site-server.log 2>&1 &
PID=$!
trap 'kill $PID || true' EXIT
sleep 2
cat > .tmp-axe-diagnostic.js <<'JS'
const { chromium } = require('playwright');
const axePath = require.resolve('axe-core/axe.min.js');
const base='http://127.0.0.1:4173';
const cases=[
  ['/',1440],
  ['/intelligence/aircraft-ownership-vs-charter.html',1440],
  ['/intelligence/fractional-ownership-vs-jet-card-vs-charter.html',390],
  ['/decision-room.html',390]
];
(async()=>{
 const browser=await chromium.launch({headless:true});
 for(const [path,width] of cases){
  const context=await browser.newContext({viewport:{width,height:900}});
  const page=await context.newPage();
  await page.route('https://www.googletagmanager.com/**',r=>r.abort());
  await page.goto(base+path,{waitUntil:'domcontentloaded'});
  await page.addScriptTag({path:axePath});
  const result=await page.evaluate(async()=>await axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21a','wcag21aa']}}));
  console.log(`\n=== ${path} @ ${width} ===`);
  for(const v of result.violations.filter(v=>['serious','critical'].includes(v.impact))){
    console.log(`${v.id} impact=${v.impact}`);
    for(const n of v.nodes){
      console.log(' target=',JSON.stringify(n.target));
      console.log(' html=',n.html);
      console.log(' summary=',n.failureSummary);
    }
  }
  await context.close();
 }
 await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});
JS
node .tmp-axe-diagnostic.js
