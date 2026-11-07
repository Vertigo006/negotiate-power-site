(() => {
  const form = document.querySelector('#decision-fit-form');
  const status = document.querySelector('#decision-fit-status');
  if (!form) return;

  const endpoint = 'https://nnwpvqymwjhkrfzzeypm.supabase.co/functions/v1/decision-fit-submit';
  const startedAt = Date.now();

  const guideMap = {
    'should-we-buy-an-aircraft': {label:'Aircraft acquisition', prompt:'What specifically are you trying to decide about acquiring an aircraft?'},
    'do-we-need-another-aircraft': {label:'Fleet capacity', prompt:'What specifically are you trying to decide about adding aircraft capacity?'},
    'charter-fractional-or-ownership': {label:'Aircraft access model', prompt:'What specifically are you trying to decide about charter, fractional access, or ownership?'},
    'should-we-change-aircraft-management-companies': {label:'Aircraft management', prompt:'What specifically are you trying to decide about changing aircraft management companies?'},
    'should-we-delay-an-aircraft-purchase': {label:'Aircraft purchase timing', prompt:'What specifically are you trying to decide about whether to delay the aircraft purchase?'},
    'should-we-replace-our-aircraft': {label:'Aircraft replacement', prompt:'What specifically are you trying to decide about replacing the current aircraft?'},
    'should-we-put-our-aircraft-on-charter': {label:'Aircraft charter participation', prompt:'What specifically are you trying to decide about placing the aircraft on charter?'},
    'should-we-outsource-our-flight-department': {label:'Flight department operating model', prompt:'What specifically are you trying to decide about outsourcing the flight department?'},
    'should-we-buy-this-aircraft-or-walk-away': {label:'Aircraft transaction diligence', prompt:'What specifically are you trying to decide about proceeding with this aircraft transaction?'}
  };
  const guideKey = new URLSearchParams(window.location.search).get('guide') || '';
  const guideContext = guideMap[guideKey] || null;
  const contextEl = document.querySelector('#decision-fit-context');
  const decisionField = form.querySelector('[name="decision"]');
  if (guideContext) {
    if (contextEl) {
      contextEl.hidden = false;
      contextEl.textContent = 'You came from our ' + guideContext.label + ' decision guide. We carried that context forward so you do not have to start over.';
    }
    if (decisionField) decisionField.placeholder = guideContext.prompt;
  }

  const setStatus = (message, state='') => {
    if (!status) return;
    status.textContent = message;
    status.dataset.state = state;
  };

  const buildMailto = data => {
    const subject = 'BRENO Decision Fit Request';
    const body = [
      'Decision in one sentence:',
      data.decision,
      '',
      'Approximate decision timing:',
      data.timing,
      '',
      'What is at stake (broadly):',
      data.stakes,
      '',
      'Name:',
      data.name,
      '',
      'Organization:',
      data.organization || 'Not provided',
      '',
      'Reply email:',
      data.email,
      '',
      'Submitted from the BRENO Decision Fit page.'
    ].join('\n');
    return 'mailto:contact@negotiatepower.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  };

  form.addEventListener('submit', async event => {
    event.preventDefault();

    if (!form.reportValidity()) return;

    const fd = new FormData(form);
    const payload = {
      decision: guideContext
        ? '[' + guideContext.label + '] ' + (fd.get('decision') || '').toString().trim()
        : (fd.get('decision') || '').toString().trim(),
      timing: (fd.get('timing') || '').toString().trim(),
      stakes: (fd.get('stakes') || '').toString().trim(),
      name: (fd.get('name') || '').toString().trim(),
      organization: (fd.get('organization') || '').toString().trim(),
      email: (fd.get('email') || '').toString().trim(),
      website: (fd.get('website') || '').toString().trim(),
      startedAt
    };

    const submit = form.querySelector('button[type="submit"]');
    if (submit) {
      submit.disabled = true;
      submit.textContent = 'Sending…';
    }
    setStatus('Sending your decision summary securely…', 'sending');

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(payload)
      });

      if (!response.ok) throw new Error('delivery_failed');

      const result = await response.json().catch(() => ({}));
      if (!result.ok) throw new Error('delivery_failed');

      setStatus('Received. Negotiate Power will review the decision fit and reply to the email you provided.', 'ready');
      form.reset();

      if (typeof window.gtag === 'function') {
        window.gtag('event', 'decision_fit_submit', {
          originating_path: window.location.pathname,
          decision_context: guideKey || 'direct',
          transport: 'edge_function'
        });
      }
    } catch {
      setStatus('Direct delivery is temporarily unavailable. Your information has not been lost; opening a prepared email instead.', 'error');
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'decision_fit_fallback', {
          originating_path: window.location.pathname,
          decision_context: guideKey || 'direct',
          transport: 'email_handoff'
        });
      }
      window.setTimeout(() => { window.location.href = buildMailto(payload); }, 450);
    } finally {
      if (submit) {
        submit.disabled = false;
        submit.textContent = 'Submit Decision Fit Request';
      }
    }
  });
})();