import React from 'react';
import { Tag } from '@carbon/react';
import {
  User,
  Application,
  ArrowsHorizontal,
  Code,
  DataStructured,
  Tools,
  Bot,
  CheckmarkFilled,
  HelpFilled,
} from '@carbon/icons-react';
import { RUNTIME_STEPS_V2 } from '../../data/v2/governanceV2Data';
import { useGovernanceV2Store } from '../../store/governanceV2Store';

const STEP_ICONS: Record<string, React.ReactNode> = {
  'step-user': <User size={20} />,
  'step-gateway': <ArrowsHorizontal size={20} />,
  'step-prompt': <Application size={20} />,
  'step-model': <Code size={20} />,
  'step-rag': <DataStructured size={20} />,
  'step-output': <CheckmarkFilled size={20} />,
  'step-agents': <Tools size={20} />,
  'step-actions': <Bot size={20} />,
};

export const Section6OperationalGovernanceV2: React.FC = () => {
  const activeStepNum = useGovernanceV2Store((s) => s.activeRuntimeStep);
  const setActiveStepNum = useGovernanceV2Store((s) => s.setActiveRuntimeStep);

  const activeStep =
    RUNTIME_STEPS_V2.find((s) => s.stepNumber === activeStepNum) || RUNTIME_STEPS_V2[0];

  return (
    <div className="section-inner v2-section">
      <div className="v2-section-header">
        <span className="v2-section-tag">Chapter 6 of 11 (Narrative Centre of Gravity)</span>
        <h2 className="v2-section-title">Operational AI Governance in the Live Runtime Flow</h2>
        <p className="v2-section-subtitle">
          Governance cannot occur after the fact. It must be woven continuously across every hop of the runtime AI execution pipeline. Click through each step to inspect the governance questions that must be answered in milliseconds.
        </p>
      </div>

      <div className="v2-callout-banner">
        <strong>The Centre of Gravity:</strong> If governance cannot intercept, evaluate, and produce verifiable evidence during runtime execution, governance does not exist in production.
      </div>

      {/* Interactive Runtime Architecture Stepper */}
      <div className="v2-runtime-flow-container">
        <div className="v2-flow-pipeline-track">
          {RUNTIME_STEPS_V2.map((step) => {
            const isActive = step.stepNumber === activeStepNum;
            const isPast = step.stepNumber < activeStepNum;
            return (
              <button
                key={step.id}
                className={`v2-flow-node-btn ${isActive ? 'v2-flow-node-btn--active' : ''} ${isPast ? 'v2-flow-node-btn--past' : ''}`}
                onClick={() => setActiveStepNum(step.stepNumber)}
              >
                <div className="v2-flow-node-circle">
                  {STEP_ICONS[step.id] || <span>{step.stepNumber}</span>}
                </div>
                <div className="v2-flow-node-title">{step.label}</div>
                <div className="v2-flow-node-step-tag">Hop {step.stepNumber}</div>
              </button>
            );
          })}
        </div>

        {/* Deep Inspection Panel for Selected Runtime Hop */}
        <div className="v2-runtime-hop-card">
          <div className="v2-hop-card-header">
            <div className="v2-hop-title-group">
              <span className="v2-hop-badge">Execution Hop 0{activeStep.stepNumber} of 08</span>
              <h3 className="v2-hop-name">{activeStep.label}</h3>
            </div>
            <Tag type="cyan" size="md">{activeStep.controlLayer}</Tag>
          </div>

          <div className="v2-hop-grid">
            {/* Runtime Action */}
            <div className="v2-hop-section-box">
              <div className="v2-hop-section-label">
                <span className="v2-hop-dot v2-hop-dot--action" />
                What Happens at Runtime
              </div>
              <p className="v2-hop-action-text">{activeStep.runtimeAction}</p>
            </div>

            {/* Critical Governance Question */}
            <div className="v2-hop-section-box v2-hop-section-box--question">
              <div className="v2-hop-section-label">
                <HelpFilled size={18} />
                Crucial Governance Questions
              </div>
              <p className="v2-hop-question-text">{activeStep.governanceQuestion}</p>
            </div>

            {/* Architectural Fit & Enforcement Mechanism */}
            <div className="v2-hop-section-box v2-hop-section-box--arch">
              <div className="v2-hop-section-label">
                <span className="v2-hop-dot v2-hop-dot--arch" />
                Architectural Enforcement Layer
              </div>
              <p className="v2-hop-arch-text">{activeStep.architecturalFit}</p>
            </div>
          </div>

          <div className="v2-hop-navigation-bar">
            <button
              className="v2-hop-prev-btn"
              disabled={activeStepNum <= 1}
              onClick={() => setActiveStepNum(Math.max(1, activeStepNum - 1))}
            >
              ← Previous Hop
            </button>
            <span className="v2-hop-nav-indicator">
              Hop {activeStepNum} of {RUNTIME_STEPS_V2.length}
            </span>
            <button
              className="v2-hop-next-btn"
              disabled={activeStepNum >= RUNTIME_STEPS_V2.length}
              onClick={() => setActiveStepNum(Math.min(RUNTIME_STEPS_V2.length, activeStepNum + 1))}
            >
              Next Runtime Hop →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
