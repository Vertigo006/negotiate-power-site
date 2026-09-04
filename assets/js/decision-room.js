(() => {
  const source = '/assets/data/decision-room-demo-case-d01.json';
  const allowedSchemas = new Set(['decision-room-view.v1.1']);

  const setText = (selector, value) => {
    if (value === undefined || value === null) return;
    document.querySelectorAll(selector).forEach((node) => { node.textContent = value; });
  };

  const setStatus = (status) => setText('[data-field="asset-load-state"]', status);

  const required = (value, label) => {
    if (value === undefined || value === null || value === '') throw new Error(`Missing canonical field: ${label}`);
    return value;
  };

  const render = (asset) => {
    if (!allowedSchemas.has(asset.schema_version) || asset.view_type !== 'CANONICAL_DERIVED_PRESENTATION') {
      throw new Error('Unsupported Decision Room canonical view contract');
    }

    setText('[data-field="asset-id"]', required(asset.asset_id, 'asset_id'));
    setText('[data-field="decision-statement"]', required(asset.decision_object?.decision_statement, 'decision_object.decision_statement'));
    setText('[data-field="decision-deadline"]', required(asset.decision_object?.decision_deadline, 'decision_object.decision_deadline'));
    setText('[data-field="decision-stage"]', required(asset.decision_object?.decision_stage, 'decision_object.decision_stage'));
    setText('[data-field="evidence-cutoff"]', required(asset.decision_object?.evidence_cutoff, 'decision_object.evidence_cutoff'));
    setText('[data-field="freshness-state"]', required(asset.decision_object?.freshness_state, 'decision_object.freshness_state'));
    setText('[data-field="freshness-warning"]', required(asset.decision_object?.freshness_warning, 'decision_object.freshness_warning'));
    setText('[data-field="recommendation-state"]', required(asset.recommendation?.state, 'recommendation.state'));
    setText('[data-field="recommendation-plain"]', required(asset.recommendation?.plain_language, 'recommendation.plain_language'));
    setText('[data-field="next-action"]', required(asset.recommendation?.next_action, 'recommendation.next_action'));
    setText('[data-field="decision-confidence"]', required(asset.confidence_architecture?.decision_confidence, 'confidence_architecture.decision_confidence'));
    setText('[data-field="coverage-grade"]', required(asset.confidence_architecture?.evidence_coverage, 'confidence_architecture.evidence_coverage'));
    setText('[data-field="confidence-explanation"]', required(asset.confidence_architecture?.explanation, 'confidence_architecture.explanation'));
    setText('[data-field="economic-state"]', required(asset.economic_exposure?.state, 'economic_exposure.state'));
    setText('[data-field="economic-display"]', required(asset.economic_exposure?.display, 'economic_exposure.display'));
    setText('[data-field="release-state"]', required(asset.authority_state?.release_state, 'authority_state.release_state'));
    setText('[data-field="human-review"]', required(asset.authority_state?.human_review, 'authority_state.human_review'));
    setText('[data-field="release-meaning"]', required(asset.authority_state?.customer_meaning, 'authority_state.customer_meaning'));
    setText('[data-field="change-condition"]', required(asset.recommendation?.change_condition, 'recommendation.change_condition'));
    setText('[data-field="delta-state"]', required(asset.decision_delta?.state, 'decision_delta.state'));
    setText('[data-field="delta-reason"]', required(asset.decision_delta?.reason, 'decision_delta.reason'));

    setStatus('Canonical derived view loaded');
    document.documentElement.dataset.decisionAsset = asset.asset_id;
    document.documentElement.dataset.releaseState = asset.authority_state.release_state;
  };

  fetch(source, { cache: 'no-store' })
    .then((response) => {
      if (!response.ok) throw new Error(`Decision Asset load failed: ${response.status}`);
      return response.json();
    })
    .then(render)
    .catch(() => {
      // Fail closed. The semantic HTML is a controlled snapshot of the same canonical demo record.
      // The presentation layer never calculates or substitutes recommendation/confidence values.
      setStatus('Canonical data unavailable — controlled snapshot shown');
      document.documentElement.dataset.decisionAssetState = 'fallback';
    });
})();
