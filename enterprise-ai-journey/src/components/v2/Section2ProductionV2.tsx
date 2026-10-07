import React from 'react';
import { Tag } from '@carbon/react';
import { Chip, Analytics, Idea, DocumentView, Bot, Task } from '@carbon/icons-react';
import { PRODUCTION_WORKLOADS_V2 } from '../../data/v2/governanceV2Data';
import { useGovernanceV2Store } from '../../store/governanceV2Store';

export const Section2ProductionV2: React.FC = () => {
  const selectedId = useGovernanceV2Store((s) => s.selectedWorkloadId);
  const setSelectedId = useGovernanceV2Store((s) => s.setSelectedWorkloadId);
  const activeTab = useGovernanceV2Store((s) => s.activeWorkloadTab);
  const setActiveTab = useGovernanceV2Store((s) => s.setActiveWorkloadTab);

  const selectedWorkload =
    PRODUCTION_WORKLOADS_V2.find((w) => w.id === selectedId) || PRODUCTION_WORKLOADS_V2[0];

  return (
    <div className="section-inner v2-section">
      <div className="v2-section-header">
        <h2 className="v2-section-title">AI in Production: Live Decisions, Real Actions</h2>
        <p className="v2-section-subtitle">
          AI systems are not isolated sandboxes. In production, they ingest real-time inputs, invoke enterprise APIs, make automated predictions, and mutate core business records.
        </p>
      </div>

      <div className="v2-callout-banner">
        <strong>Runtime Reality:</strong> Every production AI transaction flows through prompts, retrievals, model inference, tool executions, and external side-effects.
      </div>

      <div className="v2-workloads-container">
        {/* Workload Selectors */}
        <div className="v2-workload-selector-list" role="tablist" aria-label="Select production AI workload">
          {PRODUCTION_WORKLOADS_V2.map((workload) => {
            const isSelected = workload.id === selectedWorkload.id;
            return (
              <button
                key={workload.id}
                role="tab"
                aria-selected={isSelected}
                className={`v2-workload-tab-btn ${isSelected ? 'v2-workload-tab-btn--active' : ''}`}
                onClick={() => setSelectedId(workload.id)}
              >
                <div className="v2-workload-tab-top">
                  <span className="v2-workload-tab-type">{workload.type}</span>
                  {isSelected && <Tag type="blue" size="sm">Inspecting Live</Tag>}
                </div>
                <div className="v2-workload-tab-name">{workload.name}</div>
                <div className="v2-workload-tab-platform">{workload.platform}</div>
              </button>
            );
          })}
        </div>

        {/* Selected Workload Deep Dive */}
        <div className="v2-workload-inspector-card">
          <div className="v2-inspector-header">
            <div>
              <span className="v2-inspector-badge">{selectedWorkload.platform}</span>
              <h3 className="v2-inspector-title">{selectedWorkload.name}</h3>
            </div>
            
            <div className="v2-inspector-tabs">
              <button
                className={`v2-subtab ${activeTab === 'overview' ? 'v2-subtab--active' : ''}`}
                onClick={() => setActiveTab('overview')}
              >
                Runtime Execution Flow
              </button>
              <button
                className={`v2-subtab ${activeTab === 'risk' ? 'v2-subtab--active' : ''}`}
                onClick={() => setActiveTab('risk')}
              >
                Operational Risk Exposure
              </button>
            </div>
          </div>

          {activeTab === 'overview' && (
            <div className="v2-telemetry-flow-grid">
              <div className="v2-telemetry-step-box">
                <div className="v2-step-pill"><Idea size={16} /> 1. Prompt / Input Trigger</div>
                <div className="v2-step-val">{selectedWorkload.inputsOutputs.prompts}</div>
              </div>

              <div className="v2-telemetry-step-box">
                <div className="v2-step-pill"><DocumentView size={16} /> 2. RAG & Data Retrieval</div>
                <div className="v2-step-val">{selectedWorkload.inputsOutputs.retrievals}</div>
              </div>

              <div className="v2-telemetry-step-box">
                <div className="v2-step-pill"><Bot size={16} /> 3. Tool Calls & APIs</div>
                <div className="v2-step-val">{selectedWorkload.inputsOutputs.toolCalls}</div>
              </div>

              <div className="v2-telemetry-step-box">
                <div className="v2-step-pill"><Analytics size={16} /> 4. Model Prediction / Inference</div>
                <div className="v2-step-val">{selectedWorkload.inputsOutputs.predictions}</div>
              </div>

              <div className="v2-telemetry-step-box">
                <div className="v2-step-pill"><Task size={16} /> 5. Automated Action / Write</div>
                <div className="v2-step-val">{selectedWorkload.inputsOutputs.actions}</div>
              </div>

              <div className="v2-telemetry-step-box">
                <div className="v2-step-pill"><Chip size={16} /> 6. Synthesized Response</div>
                <div className="v2-step-val">{selectedWorkload.inputsOutputs.responses}</div>
              </div>
            </div>
          )}

          {activeTab === 'risk' && (
            <div className="v2-risk-detail-box">
              <div className="v2-risk-alert-header">
                <span className="v2-risk-pill">High Operational Consequence</span>
                <h4>What Happens If This Production System Is Ungoverned?</h4>
              </div>
              <p className="v2-risk-narrative">{selectedWorkload.operationalRisk}</p>
              
              <div className="v2-risk-checklist-box">
                <h5>Critical Governance Questions For This Live Workload:</h5>
                <ul>
                  <li>Who approved the tool APIs granted to this system?</li>
                  <li>Is there an automated circuit-breaker or human approval threshold?</li>
                  <li>How do we detect if the underlying model or vector chunks drift over time?</li>
                  <li>Can we provide verifiable proof to regulators or auditors for every action taken?</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
