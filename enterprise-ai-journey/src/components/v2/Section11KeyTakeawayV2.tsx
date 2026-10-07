import React from 'react';
import { Security, ArrowRight, CheckmarkOutline } from '@carbon/icons-react';
import { TRANSFORMATION_PILLARS_V2 } from '../../data/v2/governanceV2Data';
import { useGovernanceV2Store } from '../../store/governanceV2Store';

export const Section11KeyTakeawayV2: React.FC = () => {
  const activeIdx = useGovernanceV2Store((s) => s.activePillarIndex);
  const setActiveIdx = useGovernanceV2Store((s) => s.setActivePillarIndex);

  return (
    <div className="section-inner v2-section">
      <div className="v2-section-header">
        <span className="v2-section-tag">Chapter 5 of 5 — Call to Action</span>
        <h2 className="v2-section-title">The Transformation: From Ungoverned AI to Operational Excellence</h2>
        <p className="v2-section-subtitle">
          The ultimate goal of operational governance is not to slow down AI innovation, but to provide the guardrails, transparency, and automated evidence required to scale AI safely across the enterprise.
        </p>
      </div>

      <div className="v2-callout-banner v2-callout-banner--final">
        <strong>The Final Strategic Takeaway:</strong> 
        The challenge is not governing a single model or endpoint. 
        <em>The challenge is governing an evolving AI ecosystem operating across multi-cloud infrastructure, autonomous agents, and mission-critical business processes.</em>
      </div>

      {/* Before vs After Pillar Tabs */}
      <div className="v2-transformation-pillars-grid">
        {TRANSFORMATION_PILLARS_V2.map((pillar, idx) => {
          const isSelected = idx === activeIdx;
          return (
            <div
              key={pillar.pillar}
              className={`v2-transform-card ${isSelected ? 'v2-transform-card--selected' : ''}`}
              onClick={() => setActiveIdx(idx)}
            >
              <div className="v2-transform-card-header">
                <span className="v2-transform-number">0{idx + 1}</span>
                <h3 className="v2-transform-pillar-title">{pillar.pillar}</h3>
              </div>

              <div className="v2-transform-split">
                {/* Before state */}
                <div className="v2-transform-state v2-transform-state--before">
                  <div className="v2-state-label v2-state-label--before">
                    <span className="v2-dot-red" />
                    <span>Before (Fragmented Adoption)</span>
                  </div>
                  <p className="v2-state-desc">{pillar.before}</p>
                </div>

                <div className="v2-transform-divider">
                  <ArrowRight size={18} />
                </div>

                {/* After state */}
                <div className="v2-transform-state v2-transform-state--after">
                  <div className="v2-state-label v2-state-label--after">
                    <span className="v2-dot-green" />
                    <span>After (Operational Governance)</span>
                  </div>
                  <p className="v2-state-desc">{pillar.after}</p>
                </div>
              </div>

              <div className="v2-transform-outcome">
                <CheckmarkOutline size={16} />
                <span><strong>Outcome:</strong> {pillar.strategicOutcome}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Closing Workshop Action Box */}
      <div className="v2-workshop-summary-box">
        <div className="v2-workshop-summary-inner">
          <Security size={28} />
          <div>
            <h3>Operational AI Governance: Summary Principles</h3>
            <p>
              1. <strong>Visibility First:</strong> Build an automated inventory across Azure, AWS, and SaaS AI.<br />
              2. <strong>Runtime Enforcement:</strong> Connect gateways, guardrails, and telemetry into policy gates.<br />
              3. <strong>Continuous Audit-Readiness:</strong> Automate FactSheets and evidence collection to meet EU AI Act obligations effortlessly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
