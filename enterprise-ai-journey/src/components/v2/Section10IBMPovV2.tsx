import React from 'react';
import { Tag, Button, Modal } from '@carbon/react';
import { Security } from '@carbon/icons-react';
import { ARCHITECTURE_TIERS_V2 } from '../../data/v2/governanceV2Data';
import { useGovernanceV2Store } from '../../store/governanceV2Store';

export const Section10IBMPovV2: React.FC = () => {
  const activeTier = useGovernanceV2Store((s) => s.activeArchTier);
  const setActiveTier = useGovernanceV2Store((s) => s.setActiveArchTier);
  const showGuardiumModal = useGovernanceV2Store((s) => s.showGuardiumSignalModal);
  const setShowGuardiumModal = useGovernanceV2Store((s) => s.setShowGuardiumSignalModal);

  return (
    <div className="section-inner v2-section">
      <div className="v2-section-header">
        <h2 className="v2-section-title">IBM Point of View: Multi-Cloud AI Governance Architecture</h2>
        <p className="v2-section-subtitle">
          IBM watsonx.governance delivers an open, vendor-agnostic control plane. It governs traditional ML, Generative AI, RAG pipelines, and autonomous agents across Azure (primary), AWS, Google Cloud, and on-premises environments.
        </p>
      </div>

      <div className="v2-callout-banner">
        <strong>Architecture Principle:</strong> IBM governs AI wherever it lives and executes. 
        watsonx.governance provides lifecycle policies, risk evaluations, and automated FactSheets—integrating with runtime gateways and security signal sources (like IBM Guardium) without vendor lock-in.
      </div>

      {/* 4-Tier Architectural Stack */}
      <div className="v2-ibm-arch-stack">
        {ARCHITECTURE_TIERS_V2.map((tier) => {
          const isSelected = activeTier === tier.tierNumber;
          return (
            <div
              key={tier.tierNumber}
              className={`v2-arch-tier-card ${isSelected ? 'v2-arch-tier-card--active' : ''} ${tier.tierNumber === 2 ? 'v2-arch-tier-card--core-watsonx' : ''}`}
              onClick={() => setActiveTier(tier.tierNumber)}
            >
              <div className="v2-tier-card-top">
                <div className="v2-tier-title-cluster">
                  <span className="v2-tier-number">Tier 0{tier.tierNumber}</span>
                  <h3 className="v2-tier-title">{tier.name}</h3>
                </div>
                <Tag type={tier.tierNumber === 2 ? 'purple' : 'blue'} size="sm">
                  {tier.badge}
                </Tag>
              </div>

              <p className="v2-tier-desc">{tier.description}</p>

              {/* Tier Component Blocks */}
              <div className="v2-tier-components-row">
                {tier.components.map((comp, idx) => (
                  <div key={idx} className="v2-tier-comp-box">
                    <div className="v2-tier-comp-title">{comp.title}</div>
                    <div className="v2-tier-comp-desc">{comp.description}</div>
                  </div>
                ))}
              </div>

              {tier.tierNumber === 3 && (
                <div className="v2-guardium-signal-bar">
                  <div className="v2-guardium-signal-text">
                    <Security size={18} />
                    <span><strong>Security Signal Source:</strong> IBM Guardium integration streams real-time data exposure events directly into the governance context as risk signals.</span>
                  </div>
                  <Button
                    kind="ghost"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowGuardiumModal(true);
                    }}
                  >
                    View Signal Context (less than 10% scope)
                  </Button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Guardium Modal (Lightweight integrated signal context) */}
      <Modal
        open={showGuardiumModal}
        modalHeading="IBM Guardium as an Integrated Signal Source"
        primaryButtonText="Close"
        onRequestClose={() => setShowGuardiumModal(false)}
        onRequestSubmit={() => setShowGuardiumModal(false)}
        passiveModal
      >
        <div className="v2-guardium-modal-content">
          <p>
            In IBM’s operational governance architecture, <strong>IBM Guardium</strong> is not a standalone silo or the central focus of governance. Instead, it serves as a critical <strong>signal source</strong> that feeds real-time telemetry into watsonx.governance:
          </p>
          <ul className="v2-guardium-modal-list">
            <li><strong>Data Discovery & Classification:</strong> Informs the AI catalog whether training datasets or RAG vector indexes contain sensitive PII or confidential IP.</li>
            <li><strong>Runtime Data Exposure Signals:</strong> Detects if an unauthorized tool or agent query attempts to exfiltrate restricted database records.</li>
            <li><strong>Continuous Risk Enrichment:</strong> Updates the model's live risk score within watsonx.governance when data boundary anomalies occur.</li>
          </ul>
        </div>
      </Modal>
    </div>
  );
};
