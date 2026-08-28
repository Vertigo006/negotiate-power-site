(() => {
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
  const activePath = currentPath.startsWith('/intelligence/')
    ? '/intelligence.html'
    : currentPath;

  navLinks.forEach(link => {
    if (link.protocol === 'mailto:') return;
    const linkPath = normalizePath(link.getAttribute('href'));
    if (linkPath === activePath) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
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
    if (!isOpen) {
      const firstLink = nav.querySelector('a[href]');
      firstLink?.focus({ preventScroll: true });
    }
  });

  nav.addEventListener('click', event => {
    if (event.target.closest('a')) close();
  });

  document.addEventListener('keydown', event => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    if (!isOpen || !mobileQuery.matches) return;

    if (event.key === 'Escape') {
      close(true);
      return;
    }

    if (event.key !== 'Tab') return;
    const items = focusable();
    const first = items[0];
    const last = items[items.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  mobileQuery.addEventListener?.('change', event => {
    if (!event.matches) close();
  });

  const revealTargets = document.querySelectorAll('.resolution-flow, .decision-state-panel');
  if ('IntersectionObserver' in window && revealTargets.length) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.28 });
    revealTargets.forEach(target => observer.observe(target));
  } else {
    revealTargets.forEach(target => target.classList.add('is-visible'));
  }
})();
