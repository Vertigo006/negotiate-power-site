(() => {
  document.body.classList.add('js-nav');
  const nav = document.querySelector('#primary-navigation');
  const path = window.location.pathname;
  const isHistorical = path === '/atlas.html' || path === '/decision-room.html';
  const isIntelligenceArticle = path.startsWith('/intelligence/');

  const currentNav = `
    <a class="nav-direct" href="/breno.html">BRENO</a>
    <a class="nav-direct" href="/how-it-works.html">How It Works</a>
    <div class="nav-group">
      <button class="nav-group-trigger" type="button" aria-expanded="false">Solutions <span aria-hidden="true">⌄</span></button>
      <div class="nav-submenu">
        <a href="/aircraft-acquisition.html"><strong>Aircraft Acquisition</strong><small>Pressure-test ownership, candidate, timing, and alternatives.</small></a>
        <a href="/aviation-advisers.html"><strong>For Aviation Professionals</strong><small>Add decision intelligence without displacing specialist authority.</small></a>
      </div>
    </div>
    <div class="nav-group">
      <button class="nav-group-trigger" type="button" aria-expanded="false">Insights <span aria-hidden="true">⌄</span></button>
      <div class="nav-submenu nav-submenu-right">
        <a href="/intelligence.html"><strong>Aviation Insights</strong><small>Public decision guides and due-diligence frameworks.</small></a>
        <a href="/samples.html"><strong>Decision Examples</strong><small>See confirm, condition, and change patterns.</small></a>
        <a href="/methodology.html"><strong>Evidence & Methodology</strong><small>Inspect evidence discipline, boundaries, and provenance.</small></a>
      </div>
    </div>
    <a class="nav-direct" href="/pricing.html">Pricing</a>
    <a class="nav-direct nav-login" href="https://app.negotiatepower.com/sign-in" rel="nofollow">Login</a>
    <a class="nav-cta" href="mailto:contact@negotiatepower.com?subject=Bring%20a%20Decision">Bring a Decision</a>`;

  if (nav && !isHistorical) nav.innerHTML = currentNav;

  /* Current BRENO vocabulary. Atlas and Decision Room are preserved historical records. */
  if (!isHistorical) {
    const replacements = new Map([
      ['THE CALL', 'THE DIRECTION'], ['CALL', 'DIRECTION'],
      ['What changes the call?', 'What changes the direction?'], ['What Changes the Call?', 'What Changes the Direction?'],
      ['what would change the call.', 'what would change the direction.'], ['what would change the call', 'what would change the direction'],
      ['conditions that could change the call', 'conditions that could change the direction'],
      ['conditions that should reopen the call', 'conditions that should reopen the direction']
    ]);
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {acceptNode(node) {
      if (node.parentElement?.closest('script,style')) return NodeFilter.FILTER_REJECT;
      return [...replacements.keys()].some(term => node.nodeValue.includes(term)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }});
    const nodes=[]; while(walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => replacements.forEach((to,from)=>{node.nodeValue=node.nodeValue.split(from).join(to);}));
  }

  if (isIntelligenceArticle) {
    document.querySelectorAll('a[href="/decision-room.html"]').forEach(link=>{link.href='/example.html';if(/decision room/i.test(link.textContent))link.textContent='See a BRENO example';});
    document.querySelectorAll('a[href="/engagements.html"]').forEach(link=>{link.href='/pricing.html';if(/decision brief|decision intelligence|pricing|engagement/i.test(link.textContent))link.textContent='BRENO pricing and scope';});
    document.querySelectorAll('a[href="/atlas.html"]').forEach(link=>{link.href='/methodology.html';if(/atlas|forward cost|evidence traceability/i.test(link.textContent))link.textContent='BRENO evidence and methodology';});
    document.querySelectorAll('a[href^="mailto:"]').forEach(link=>{const href=link.getAttribute('href')||'';link.setAttribute('href',href.replace(/Bring%20Atlas%20a%20Decision/gi,'Bring%20a%20Decision').replace(/Atlas/gi,'BRENO'));if(/bring atlas a decision/i.test(link.textContent))link.textContent='Bring a Decision';});
    document.querySelectorAll('.atlas-context-line').forEach(line=>{line.innerHTML='Decision intelligence by <a href="/breno.html">BRENO</a>, with Atlas-era qualification provenance preserved in the <a href="/atlas.html">historical record</a>.';});
  }

  const toggle=document.querySelector('.nav-toggle'); const activeNav=document.querySelector('#primary-navigation'); if(!toggle||!activeNav)return;
  const mobileQuery=window.matchMedia('(max-width: 920px)');
  const normalizePath=value=>{if(!value)return'/';const url=new URL(value,window.location.origin);return url.pathname==='/index.html'?'/':url.pathname;};
  const currentPath=normalizePath(path); const activePath=currentPath.startsWith('/intelligence/')?'/intelligence.html':currentPath;
  [...activeNav.querySelectorAll('a')].forEach(link=>{if(link.protocol==='mailto:')return;const linkPath=normalizePath(link.getAttribute('href'));if(linkPath===activePath){link.setAttribute('aria-current','page');link.closest('.nav-group')?.querySelector('.nav-group-trigger')?.classList.add('has-current');}else link.removeAttribute('aria-current');});
  const groups=[...activeNav.querySelectorAll('.nav-group')];
  const closeGroups=except=>groups.forEach(group=>{if(group===except)return;group.classList.remove('is-open');group.querySelector('.nav-group-trigger')?.setAttribute('aria-expanded','false');});
  groups.forEach(group=>{const trigger=group.querySelector('.nav-group-trigger');trigger?.addEventListener('click',event=>{event.stopPropagation();const opening=!group.classList.contains('is-open');closeGroups(group);group.classList.toggle('is-open',opening);trigger.setAttribute('aria-expanded',String(opening));});});
  document.addEventListener('click',event=>{if(!event.target.closest('.nav-group'))closeGroups();});
  const focusable=()=>[toggle,...activeNav.querySelectorAll('a[href],button')].filter(element=>!element.hasAttribute('disabled'));
  const setOpenState=open=>{toggle.setAttribute('aria-expanded',String(open));activeNav.classList.toggle('is-open',open);document.body.classList.toggle('nav-open',open&&mobileQuery.matches);if(!open)closeGroups();};
  const close=(restoreFocus=false)=>{setOpenState(false);if(restoreFocus)toggle.focus();};
  toggle.addEventListener('click',()=>{const isOpen=toggle.getAttribute('aria-expanded')==='true';setOpenState(!isOpen);if(!isOpen)activeNav.querySelector('a[href],button')?.focus({preventScroll:true});});
  activeNav.addEventListener('click',event=>{if(event.target.closest('a')&&mobileQuery.matches)close();});
  document.addEventListener('keydown',event=>{if(event.key==='Escape'){closeGroups();if(toggle.getAttribute('aria-expanded')==='true'&&mobileQuery.matches)close(true);return;}const isOpen=toggle.getAttribute('aria-expanded')==='true';if(!isOpen||!mobileQuery.matches||event.key!=='Tab')return;const items=focusable(),first=items[0],last=items[items.length-1];if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}});
  mobileQuery.addEventListener?.('change',event=>{if(!event.matches)close();});
  const revealTargets=document.querySelectorAll('.resolution-flow, .decision-state-panel');
  if('IntersectionObserver'in window&&revealTargets.length){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}}),{threshold:.28});revealTargets.forEach(target=>observer.observe(target));}else revealTargets.forEach(target=>target.classList.add('is-visible'));
})();