(() => {
  const form = document.querySelector('#decision-fit-form');
  const status = document.querySelector('#decision-fit-status');
  if (!form) return;

  const setStatus = (message, state='') => {
    if (!status) return;
    status.textContent = message;
    status.dataset.state = state;
  };

  form.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(form);
    const decision = (data.get('decision') || '').toString().trim();
    const timing = (data.get('timing') || '').toString().trim();
    const stakes = (data.get('stakes') || '').toString().trim();
    const name = (data.get('name') || '').toString().trim();
    const organization = (data.get('organization') || '').toString().trim();
    const email = (data.get('email') || '').toString().trim();

    if (!decision || !timing || !stakes || !name || !email) {
      setStatus('Please complete the required fields before continuing.', 'error');
      form.reportValidity();
      return;
    }

    const subject = 'BRENO Decision Fit Request';
    const body = [
      'Decision in one sentence:',
      decision,
      '',
      'Approximate decision timing:',
      timing,
      '',
      'What is at stake (broadly):',
      stakes,
      '',
      'Name:',
      name,
      '',
      'Organization:',
      organization || 'Not provided',
      '',
      'Reply email:',
      email,
      '',
      'Submitted from the BRENO Decision Fit page.'
    ].join('\n');

    const href = 'mailto:contact@negotiatepower.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    setStatus('Your decision summary is ready. Your email application will open next; review the message and send when ready.', 'ready');

    if (typeof window.gtag === 'function') {
      window.gtag('event', 'decision_fit_prepare', {
        originating_path: window.location.pathname,
        transport: 'email_handoff'
      });
    }

    window.location.href = href;
  });
})();