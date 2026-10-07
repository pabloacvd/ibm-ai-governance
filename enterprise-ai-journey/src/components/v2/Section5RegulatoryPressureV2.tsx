import React from 'react';
import { Policy, Information, DocumentTasks, Security } from '@carbon/icons-react';
import { REGULATORY_OBLIGATIONS_V2 } from '../../data/v2/governanceV2Data';
import { useGovernanceV2Store } from '../../store/governanceV2Store';

export const Section5RegulatoryPressureV2: React.FC = () => {
  const selectedId = useGovernanceV2Store((s) => s.selectedRegulatoryId);
  const setSelectedId = useGovernanceV2Store((s) => s.setSelectedRegulatoryId);

  const selectedObligation =
    REGULATORY_OBLIGATIONS_V2.find((r) => r.id === selectedId) || REGULATORY_OBLIGATIONS_V2[0];

  return (
    <div className="section-inner v2-section">
      <div className="v2-section-header">
        <span className="v2-section-tag">Chapter 3 of 5 — Why It Matters</span>
        <h2 className="v2-section-title">Regulatory Pressure: The Shift From Optional to Mandatory</h2>
        <p className="v2-section-subtitle">
          Global regulatory frameworks like the EU AI Act transform governance from an internal best practice into legally enforceable operational mandates. High-risk AI systems must prove compliance with continuous evidence.
        </p>
      </div>

      <div className="v2-callout-banner">
        <strong>The Regulatory Imperative:</strong> Regulators require continuous technical documentation, verifiable human oversight, and runtime robustness. <em>Static documentation cannot satisfy dynamic legal obligations.</em>
      </div>

      {/* Interactive Regulatory Navigator */}
      <div className="v2-regulatory-layout-grid">
        {/* Left Column: Obligations List */}
        <div className="v2-regulatory-cards-list">
          {REGULATORY_OBLIGATIONS_V2.map((item) => {
            const isSelected = item.id === selectedId;
            return (
              <button
                key={item.id}
                className={`v2-regulatory-card-btn ${isSelected ? 'v2-regulatory-card-btn--active' : ''}`}
                onClick={() => setSelectedId(item.id)}
              >
                <div className="v2-reg-card-top">
                  <span className="v2-reg-article-badge">{item.euArticle}</span>
                  {isSelected && <span className="v2-badge-pill">Active Focus</span>}
                </div>
                <h3 className="v2-reg-card-title">{item.category}</h3>
                <p className="v2-reg-card-snippet">{item.requirement.slice(0, 95)}...</p>
              </button>
            );
          })}
        </div>

        {/* Right Column: Deep-Dive Panel with Automotive / High-Risk Case Study */}
        <div className="v2-regulatory-deep-panel">
          <div className="v2-reg-deep-header">
            <span className="v2-reg-eu-tag">{selectedObligation.euArticle}</span>
            <h3 className="v2-reg-deep-title">{selectedObligation.category}</h3>
          </div>

          <div className="v2-reg-requirement-box">
            <div className="v2-reg-box-heading">
              <Policy size={18} />
              <h4>Statutory Mandate</h4>
            </div>
            <p className="v2-reg-box-text">{selectedObligation.requirement}</p>
          </div>

          <div className="v2-reg-automotive-box">
            <div className="v2-reg-box-heading">
              <Information size={18} />
              <h4>Illustrative High-Risk Category: Autonomous Systems & Connected Industrial AI</h4>
            </div>
            <p className="v2-reg-box-text">{selectedObligation.automotiveExample}</p>
            <div className="v2-reg-context-note">
              * Used as an illustrative example of mission-critical and high-impact AI categories governed under EU AI Act safety standards.
            </div>
          </div>

          <div className="v2-reg-proof-box">
            <div className="v2-reg-box-heading">
              <Security size={18} />
              <h4>Operational Proof & Evidence Required by Auditors</h4>
            </div>
            <p className="v2-reg-proof-text">{selectedObligation.operationalProofNeeded}</p>
          </div>

          <div className="v2-reg-key-insight">
            <DocumentTasks size={18} />
            <span>
              <strong>The Governance Mandate:</strong> Organizations that build automated evidence capture directly into their runtime AI architecture achieve continuous audit-readiness without disrupting developer velocity.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
