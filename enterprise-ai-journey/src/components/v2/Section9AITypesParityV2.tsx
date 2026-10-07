import React from 'react';
import { Analytics, Idea, Bot, CheckmarkFilled, WarningAlt } from '@carbon/icons-react';
import { AI_TYPES_COMPARISON_V2 } from '../../data/v2/governanceV2Data';
import { useGovernanceV2Store } from '../../store/governanceV2Store';

export const Section9AITypesParityV2: React.FC = () => {
  const selectedIdx = useGovernanceV2Store((s) => s.selectedAITypeIndex);
  const setSelectedIdx = useGovernanceV2Store((s) => s.setSelectedAITypeIndex);

  return (
    <div className="section-inner v2-section">
      <div className="v2-section-header">
        <span className="v2-section-tag">Chapter 9 of 11</span>
        <h2 className="v2-section-title">Traditional ML, Generative AI, and Agents: A Side-by-Side Comparison</h2>
        <p className="v2-section-subtitle">
          Enterprises do not run a single paradigm of AI. Predictive models, generative LLMs, and autonomous multi-agent systems each present unique failure modes while sharing a common governance baseline.
        </p>
      </div>

      <div className="v2-callout-banner">
        <strong>Governance Synthesis:</strong> Common controls (inventory, ownership, risk tiering, audit lineage) apply everywhere. 
        Specific controls (drift vs hallucinations vs tool permissions) must be tailored to each AI architecture.
      </div>

      {/* 3 Column Side-by-Side Comparison */}
      <div className="v2-ai-types-comparison-grid">
        {AI_TYPES_COMPARISON_V2.map((col, idx) => {
          const isSelected = idx === selectedIdx;
          return (
            <div
              key={col.type}
              className={`v2-ai-type-col-card ${isSelected ? 'v2-ai-type-col-card--selected' : ''}`}
              onClick={() => setSelectedIdx(idx)}
            >
              <div className="v2-col-card-header">
                <div className="v2-col-type-icon">
                  {idx === 0 && <Analytics size={24} />}
                  {idx === 1 && <Idea size={24} />}
                  {idx === 2 && <Bot size={24} />}
                </div>
                <h3 className="v2-col-type-title">{col.type}</h3>
                <p className="v2-col-type-focus">{col.primaryFocus}</p>
              </div>

              {/* Unique Risks */}
              <div className="v2-col-section v2-col-section--unique">
                <div className="v2-col-section-header">
                  <WarningAlt size={16} />
                  <h4>Unique Failure Modes & Risks</h4>
                </div>
                <ul className="v2-col-bullets">
                  {col.uniqueGovernanceChallenges.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Common Controls */}
              <div className="v2-col-section v2-col-section--common">
                <div className="v2-col-section-header">
                  <CheckmarkFilled size={16} />
                  <h4>Common Foundation Controls</h4>
                </div>
                <ul className="v2-col-bullets">
                  {col.commonGovernanceControls.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Key Metrics */}
              <div className="v2-col-metrics-bar">
                <span className="v2-metrics-label">Key Runtime Metrics:</span>
                <div className="v2-metrics-tags-wrap">
                  {col.keyMetrics.map((metric, i) => (
                    <span key={i} className="v2-metric-tag">{metric}</span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
