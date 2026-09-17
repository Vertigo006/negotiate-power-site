(() => {
  document.body.classList.add('js-nav');
  const isIntelligenceArticle = window.location.pathname.startsWith('/intelligence/');

  if (isIntelligenceArticle) {
    const nav = document.querySelector('#primary-navigation');
    if (nav) {
      nav.innerHTML = '<a href="/breno.html">BRENO</a><a href="/how-it-works.html">How It Works</a><a href="/example.html">Example</a><a href="/pricing.html">Pricing</a><a href="/intelligence.html">Insights</a><a class="nav-cta" href="mailto:contact@negotiatepower.com?subject=Bring%20a%20Decision">Bring a Decision</a>';
    }

    document.querySelectorAll('a[href="/decision-room.html"]').forEach(link => {
      link.href = '/example.html';
      if (/decision room/i.test(link.textContent)) link.textContent = 'See a BRENO example';
    });
    document.querySelectorAll('a[href="/engagements.html"]').forEach(link => {
      link.href = '/pricing.html';
      if (/decision brief|decision intelligence|pricing|engagement/i.test(link.textContent)) link.textContent = 'BRENO pricing and scope';
    });
    document.querySelectorAll('a[href="/atlas.html"]').forEach(link => {
      link.href = '/methodology.html';
      if (/atlas|forward cost|evidence traceability/i.test(link.textContent)) link.textContent = 'BRENO methodology and decision discipline';
    });
    document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
      const href = link.getAttribute('href') || '';
      link.setAttribute('href', href.replace(/Bring%20Atlas%20a%20Decision/gi, 'Bring%20a%20Decision').replace(/Atlas/gi, 'BRENO'));
      if (/bring atlas a decision/i.test(link.textContent)) link.textContent = 'Bring a Decision';
    });
    document.querySelectorAll('.atlas-context-line').forEach(line => {
      line.innerHTML = 'Decision intelligence by <a href="/breno.html">BRENO</a>, with Atlas-era qualification provenance preserved in the <a href="/atlas.html">historical record</a>.';
    });
  }

  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('#primary-navigation');
  if (!toggle || !nav) return;

  const mobileQuery = window.matchMedia('(max-width: 920px)');
  const navLinks = [...nav.querySelectorAll('a')];

  const normalizePath = value => {
    if (!value) return '/';
    const url = new URL(value, window.location.origin);
    return url.pathname === '/index.html' ? '/' : url.pathname;
  };

  const currentPath = normalizePath(window.location.pathname);
  const activePath = currentPath.startsWith('/intelligence/') ? '/intelligence.html' : currentPath;

  navLinks.forEach(link => {
    if (link.protocol === 'mailto:') return;
    const linkPath = normalizePath(link.getAttribute('href'));
    if (linkPath === activePath) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });

  const focusable = () => [toggle, ...nav.querySelectorAll('a[href]')].filter(element => !element.hasAttribute('disabled'));
  const setOpenState = open => {
    toggle.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
    document.body.classList.toggle('nav-open', open && mobileQuery.matches);
  };
  const close = (restoreFocus = false) => {
    setOpenState(false);
    if (restoreFocus) toggle.focus();
  };

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    setOpenState(!isOpen);
    if (!isOpen) nav.querySelector('a[href]')?.focus({ preventScroll: true });
  });
  nav.addEventListener('click', event => { if (event.target.closest('a')) close(); });
  document.addEventListener('keydown', event => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    if (!isOpen || !mobileQuery.matches) return;
    if (event.key === 'Escape') { close(true); return; }
    if (event.key !== 'Tab') return;
    const items = focusable();
    const first = items[0];
    const last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  });
  mobileQuery.addEventListener?.('change', event => { if (!event.matches) close(); });

  const revealTargets = document.querySelectorAll('.resolution-flow, .decision-state-panel');
  if ('IntersectionObserver' in window && revealTargets.length) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
      });
    }, { threshold: 0.28 });
    revealTargets.forEach(target => observer.observe(target));
  } else revealTargets.forEach(target => target.classList.add('is-visible'));
})();
