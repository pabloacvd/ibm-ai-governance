import React from 'react';
import { Tag } from '@carbon/react';
import { Network_3, CheckmarkOutline, CloseOutline } from '@carbon/icons-react';
import { DIMENSION_COMPARISONS_V2 } from '../../data/v2/governanceV2Data';
import { useGovernanceV2Store } from '../../store/governanceV2Store';

export const Section8DifferentiatorsV2: React.FC = () => {
  const activeIdx = useGovernanceV2Store((s) => s.activeDifferentiatorIndex);
  const setActiveIdx = useGovernanceV2Store((s) => s.setActiveDifferentiatorIndex);

  const activeComparison =
    DIMENSION_COMPARISONS_V2[activeIdx] || DIMENSION_COMPARISONS_V2[0];

  return (
    <div className="section-inner v2-section">
      <div className="v2-section-header">
        <span className="v2-section-tag">Chapter 4 of 5 — IBM Solution</span>
        <h2 className="v2-section-title">What Differentiates IBM: Beyond Point Solutions</h2>
        <p className="v2-section-subtitle">
          The market is flooded with point solutions—AI gateways, prompt proxies, and isolated evaluation libraries. IBM does not compete as another niche gateway. IBM’s POV connects runtime traffic into the full enterprise governance lifecycle.
        </p>
      </div>

      <div className="v2-callout-banner">
        <strong>Strategic Architecture Insight:</strong> Point tools solve a narrow slice of runtime traffic. 
        <em>Operational governance requires connecting business context, risk policies, multi-cloud models, agents, and continuous audit evidence into a unified fabric.</em>
      </div>

      {/* Comparison Grid */}
      <div className="v2-diff-layout-grid">
        {/* Left Column: Dimensions Navigation */}
        <div className="v2-diff-dimensions-list">
          <div className="v2-diff-list-header">
            <span>Governance Dimensions</span>
            <Tag type="blue" size="sm">Select Dimension</Tag>
          </div>

          {DIMENSION_COMPARISONS_V2.map((item, idx) => {
            const isSelected = idx === activeIdx;
            return (
              <button
                key={idx}
                className={`v2-diff-nav-btn ${isSelected ? 'v2-diff-nav-btn--active' : ''}`}
                onClick={() => setActiveIdx(idx)}
              >
                <div className="v2-diff-nav-number">0{idx + 1}</div>
                <div className="v2-diff-nav-name">{item.capability}</div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Comparative Showcase */}
        <div className="v2-diff-showcase-panel">
          <div className="v2-diff-showcase-header">
            <span className="v2-diff-dimension-tag">Evaluating Dimension 0{activeIdx + 1}</span>
            <h3 className="v2-diff-dimension-title">{activeComparison.capability}</h3>
          </div>

          <div className="v2-diff-contrast-grid">
            {/* Point Solution Slice */}
            <div className="v2-diff-card v2-diff-card--point">
              <div className="v2-diff-card-top">
                <span className="v2-diff-slice-pill">Point Solution Focus</span>
                <h4>Solving an Isolated Slice</h4>
              </div>
              <p className="v2-diff-card-text">{activeComparison.pointSolutionFocus}</p>
              <div className="v2-diff-slice-limit">
                <CloseOutline size={16} />
                <span>Leaves risk tiering, lifecycle approvals, and audit lineage disconnected.</span>
              </div>
            </div>

            {/* IBM Holistic POV */}
            <div className="v2-diff-card v2-diff-card--ibm">
              <div className="v2-diff-card-top">
                <span className="v2-diff-ibm-pill">IBM Strategic POV</span>
                <h4>End-to-End Governance Fabric</h4>
              </div>
              <p className="v2-diff-card-text">{activeComparison.ibmHolisticPov}</p>
              <div className="v2-diff-ibm-benefit">
                <CheckmarkOutline size={16} />
                <span>Seamlessly bridges runtime traffic, development pipelines, and executive compliance.</span>
              </div>
            </div>
          </div>

          {/* Full Lifecycle Connection Graphic */}
          <div className="v2-diff-lifecycle-visual">
            <div className="v2-diff-visual-title">
              <Network_3 size={18} />
              <span>How IBM Connects the Full Governance Lifecycle:</span>
            </div>
            <div className="v2-diff-chain-flow">
              <span className="v2-diff-chain-node">Enterprise Inventory</span>
              <span className="v2-diff-chain-arrow">→</span>
              <span className="v2-diff-chain-node">Risk & Policy Tiering</span>
              <span className="v2-diff-chain-arrow">→</span>
              <span className="v2-diff-chain-node">Gateways & Guardrails</span>
              <span className="v2-diff-chain-arrow">→</span>
              <span className="v2-diff-chain-node">Continuous Evaluation</span>
              <span className="v2-diff-chain-arrow">→</span>
              <span className="v2-diff-chain-node">Automated FactSheets</span>
              <span className="v2-diff-chain-arrow">→</span>
              <span className="v2-diff-chain-node">Audit Evidence</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
