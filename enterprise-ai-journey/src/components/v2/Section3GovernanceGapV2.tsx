import React from 'react';
import { Tag } from '@carbon/react';
import { WarningAlt, Document, Flash, Time, CheckmarkOutline } from '@carbon/icons-react';
import { GOVERNANCE_GAP_QUESTIONS } from '../../data/v2/governanceV2Data';
import { useGovernanceV2Store } from '../../store/governanceV2Store';

export const Section3GovernanceGapV2: React.FC = () => {
  const selectedIndex = useGovernanceV2Store((s) => s.selectedGapIndex);
  const setSelectedIndex = useGovernanceV2Store((s) => s.setSelectedGapIndex);

  const selectedGap = GOVERNANCE_GAP_QUESTIONS[selectedIndex] || GOVERNANCE_GAP_QUESTIONS[0];

  return (
    <div className="section-inner v2-section">
      <div className="v2-section-header">
        <span className="v2-section-tag">Chapter 2 of 5 — The Gap</span>
        <h2 className="v2-section-title">The Governance Gap: Process vs. Operational Reality</h2>
        <p className="v2-section-subtitle">
          Enterprises already have governance policies, committees, and compliance reviews. But traditional, manual, documentation-heavy processes cannot keep up with continuous runtime AI changes.
        </p>
      </div>

      <div className="v2-callout-banner">
        <strong>The Paradox:</strong> The problem is not the <em>absence</em> of governance. The problem is that 
        <em>governance exists as static paper artifacts, disconnected from runtime operations</em>.
      </div>

      {/* Interactive Gap Explorer */}
      <div className="v2-gap-explorer-grid">
        {/* Left Column: Questions List */}
        <div className="v2-gap-questions-list">
          <div className="v2-gap-list-header">
            <span>Essential Governance Inquiries</span>
            <Tag type="red" size="sm">Fails at Scale</Tag>
          </div>

          {GOVERNANCE_GAP_QUESTIONS.map((item, idx) => {
            const isSelected = idx === selectedIndex;
            return (
              <button
                key={idx}
                className={`v2-gap-question-item ${isSelected ? 'v2-gap-question-item--active' : ''}`}
                onClick={() => setSelectedIndex(idx)}
              >
                <div className="v2-gap-question-num">0{idx + 1}</div>
                <div className="v2-gap-question-text">{item.question}</div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Comparative Contrast Panel */}
        <div className="v2-gap-contrast-panel">
          <div className="v2-contrast-query-banner">
            <span className="v2-contrast-query-label">Active Audit Inquest:</span>
            <h3 className="v2-contrast-query-text">{selectedGap.question}</h3>
          </div>

          <div className="v2-contrast-columns">
            {/* Traditional Process */}
            <div className="v2-contrast-card v2-contrast-card--traditional">
              <div className="v2-contrast-card-header">
                <Document size={20} />
                <h4>Traditional Process-Based Governance</h4>
              </div>
              <p className="v2-contrast-body">{selectedGap.traditionalProcess}</p>
              <div className="v2-contrast-attribute">
                <Time size={16} />
                <span>Static, periodic (every 6–12 months), manual</span>
              </div>
            </div>

            {/* Operational Reality */}
            <div className="v2-contrast-card v2-contrast-card--reality">
              <div className="v2-contrast-card-header">
                <Flash size={20} />
                <h4>Operational Runtime Reality</h4>
              </div>
              <p className="v2-contrast-body">{selectedGap.operationalReality}</p>
              <div className="v2-contrast-attribute">
                <Flash size={16} />
                <span>Dynamic, automated, changes daily or hourly</span>
              </div>
            </div>
          </div>

          {/* Resulting Gap & Impact */}
          <div className="v2-contrast-gap-impact">
            <div className="v2-gap-impact-title">
              <WarningAlt size={18} />
              <strong>The Resulting Operational Blindspot:</strong>
            </div>
            <p className="v2-gap-impact-text">{selectedGap.gapImpact}</p>
          </div>

          <div className="v2-gap-solution-preview">
            <div className="v2-solution-preview-title">
              <CheckmarkOutline size={18} />
              <strong>What Operational Governance Solves:</strong>
            </div>
            <p>
              Continuous, automated capture of model metadata, active prompt hash lineage, tool execution telemetry, and runtime evaluation metrics directly from the execution path.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
