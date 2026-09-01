(() => {
  const styleHref = '/assets/css/decision-room-mvp.css';
  if (!document.querySelector(`link[href="${styleHref}"]`)) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = styleHref;
    document.head.appendChild(link);
  }

  const source = '/assets/data/decision-room-demo-case-d01.json';

  const setText = (selector, value) => {
    if (value === undefined || value === null) return;
    document.querySelectorAll(selector).forEach((node) => {
      node.textContent = value;
    });
  };

  const setStatus = (status) => {
    setText('[data-field="asset-load-state"]', status);
  };

  fetch(source, { cache: 'no-store' })
    .then((response) => {
      if (!response.ok) throw new Error(`Decision Asset load failed: ${response.status}`);
      return response.json();
    })
    .then((asset) => {
      if (asset.schema_version !== 'decision-room-view.v1') {
        throw new Error('Unsupported Decision Room view schema');
      }

      setText('[data-field="asset-id"]', asset.asset_id);
      setText('[data-field="decision-statement"]', asset.decision_object.decision_statement);
      setText('[data-field="decision-deadline"]', asset.decision_object.decision_deadline);
      setText('[data-field="decision-stage"]', asset.decision_object.decision_stage);
      setText('[data-field="recommendation-state"]', asset.recommendation.state);
      setText('[data-field="recommendation-plain"]', asset.recommendation.plain_language);
      setText('[data-field="next-action"]', asset.recommendation.next_action);
      setText('[data-field="decision-confidence"]', asset.confidence_architecture.decision_confidence);
      setText('[data-field="coverage-grade"]', asset.confidence_architecture.evidence_coverage);
      setText('[data-field="confidence-explanation"]', asset.confidence_architecture.explanation);
      setText('[data-field="economic-state"]', asset.economic_exposure.state);
      setText('[data-field="economic-display"]', asset.economic_exposure.display);
      setText('[data-field="release-state"]', asset.authority_state.release_state);
      setText('[data-field="human-review"]', asset.authority_state.human_review);
      setText('[data-field="change-condition"]', asset.recommendation.change_condition);
      setText('[data-field="delta-state"]', asset.decision_delta.state);
      setText('[data-field="delta-reason"]', asset.decision_delta.reason);
      setStatus('Canonical demo asset loaded');
      document.documentElement.dataset.decisionAsset = asset.asset_id;
    })
    .catch(() => {
      // The HTML preserves the governed decision as a semantic static fallback.
      // Data-load failure never invents values or hides the decision.
      setStatus('Static governed fallback');
    });
})();
