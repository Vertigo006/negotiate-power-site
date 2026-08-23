(() => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('#primary-navigation');
  if (!toggle || !nav) return;

  const close = (restoreFocus = false) => {
    toggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
    if (restoreFocus) toggle.focus();
  };

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    nav.classList.toggle('is-open', !isOpen);
  });

  nav.addEventListener('click', event => {
    if (event.target.closest('a')) close();
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      close(true);
    }
  });
})();