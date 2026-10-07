import React, { useState } from 'react';
import { IBM_ARCHITECTURE_ITEMS } from '../../data/ibmPov';

const Section7IBMPov: React.FC = () => {
  const [selectedCapabilityId, setSelectedCapabilityId] = useState<string | null>(null);

  const topItems = IBM_ARCHITECTURE_ITEMS.filter((i) => i.layer === 'use-cases');
  const coreItems = IBM_ARCHITECTURE_ITEMS.filter((i) => i.layer === 'governance-core');
  const platformItems = IBM_ARCHITECTURE_ITEMS.filter((i) => i.layer === 'platforms');

  const selectedCapability = coreItems.find((i) => i.id === selectedCapabilityId) ?? null;

  return (
    <div className="section-inner">
      <p className="section-eyebrow">Section 7</p>
      <h2 className="section-heading">IBM Point of View</h2>

      <p className="ibm-pov-statement">
        "Govern any AI, wherever it is built or deployed, through a common governance foundation combined with AI-type-specific risk, evaluation and monitoring."
      </p>

      {/* Three-tier architecture diagram */}
      <div
        className="ibm-arch-diagram"
        role="region"
        aria-label="IBM AI governance architecture — three tiers: AI types, governance capabilities, and platforms"
      >
        {/* Top tier */}
        <div className="ibm-arch-tier-group">
          <p className="ibm-arch-tier-label">What is being governed</p>
          <div className="ibm-arch-tier">
            {topItems.map((item) => (
              <div key={item.id} className="ibm-arch-node ibm-arch-node--top">
                {item.label}
              </div>
            ))}
          </div>
        </div>

        {/* watsonx.governance band */}
        <div className="ibm-arch-watson-band" aria-label="IBM AI Governance">
          <span className="ibm-arch-watson-band__text">IBM AI Governance</span>
        </div>

        {/* Middle tier — interactive */}
        <div className="ibm-arch-tier-group">
          <p className="ibm-arch-tier-label">Governance capabilities — select to explore</p>
          <div className="ibm-arch-tier">
            {coreItems.map((item) => (
              <button
                key={item.id}
                className={`ibm-arch-node ibm-arch-node--core${selectedCapabilityId === item.id ? ' ibm-arch-node--core-selected' : ''}`}
                onClick={() =>
                  setSelectedCapabilityId(selectedCapabilityId === item.id ? null : item.id)
                }
                aria-pressed={selectedCapabilityId === item.id}
                aria-label={`${item.label}${item.description ? ` — ${item.description}` : ''}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom tier */}
        <div className="ibm-arch-tier-group">
          <p className="ibm-arch-tier-label">Wherever AI is built or deployed</p>
          <div className="ibm-arch-tier">
            {platformItems.map((item) => (
              <div key={item.id} className="ibm-arch-node ibm-arch-node--platform">
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Capability detail panel — inline, below the diagram */}
      <div
        className={`ibm-capability-panel${selectedCapability ? ' ibm-capability-panel--visible' : ''}`}
        aria-live="polite"
        role="region"
        aria-label="Capability details"
      >
        {selectedCapability ? (
          <>
            <div className="ibm-capability-panel__header">
              <h3 className="ibm-capability-panel__name">{selectedCapability.label}</h3>
              <button
                className="ibm-capability-panel__close"
                onClick={() => setSelectedCapabilityId(null)}
                aria-label="Close capability details"
              >
                ×
              </button>
            </div>
            {selectedCapability.description && (
              <p className="ibm-capability-panel__desc">{selectedCapability.description}</p>
            )}
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Section7IBMPov;
