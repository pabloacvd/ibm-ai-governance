import React from 'react';
import { LIFECYCLE_STAGES } from '../../data/lifecycle';

const Section5Requirements: React.FC = () => {
  return (
    <div className="section-inner">
      <p className="section-eyebrow">Section 5</p>
      <h2 className="section-heading">What Effective Governance Requires</h2>
      <p className="section-body">
        Effective AI governance is not a one-time assessment. It is an ongoing operating model that spans the full lifecycle of every AI system — from initial discovery through to retirement.
      </p>
      <h3 className="section-subheading">The governance lifecycle</h3>

      {/* Lifecycle flow */}
      <div className="lifecycle-flow" role="list" aria-label="Governance lifecycle stages">
        {LIFECYCLE_STAGES.map((stage, index) => (
          <div key={stage.id} className="lifecycle-stage" role="listitem">
            <div
              className="lifecycle-stage-box"
              title={stage.description}
              tabIndex={0}
              aria-label={`Stage ${index + 1}: ${stage.label} — ${stage.description}`}
            >
              <span className="lifecycle-stage-number">{index + 1}</span>
              <span className="lifecycle-stage-label">{stage.label}</span>
            </div>
            {index < LIFECYCLE_STAGES.length - 1 && (
              <span className="lifecycle-arrow" aria-hidden="true">›</span>
            )}
          </div>
        ))}
      </div>

    </div>
  );
};

export default Section5Requirements;
