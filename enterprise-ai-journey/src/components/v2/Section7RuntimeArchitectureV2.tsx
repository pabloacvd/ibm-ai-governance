import React from 'react';
import {
  Catalog,
  UserAdmin,
  Policy,
  Analytics,
  Activity,
  DocumentView,
  UserFollow,
  ArrowsHorizontal,
  Filter,
} from '@carbon/icons-react';
import { useGovernanceV2Store } from '../../store/governanceV2Store';

interface GovernanceCapabilityCard {
  id: string;
  name: string;
  icon: React.ReactNode;
  category: 'foundation' | 'runtime' | 'oversight';
  description: string;
  runtimeInteraction: string;
  marketExamples: string;
}

const GOVERNANCE_CAPABILITIES: GovernanceCapabilityCard[] = [
  {
    id: 'cap-inventory',
    name: 'Enterprise AI Inventory',
    icon: <Catalog size={22} />,
    category: 'foundation',
    description: 'System of record cataloging every foundation model, custom ML model, prompt version, RAG pipeline, agent, and SaaS AI instance.',
    runtimeInteraction: 'Issues approved registration identifiers; verifies use cases before runtime execution.',
    marketExamples: 'watsonx.governance Catalog, Enterprise Metadata Repositories',
  },
  {
    id: 'cap-ownership',
    name: 'Ownership & Accountability',
    icon: <UserAdmin size={22} />,
    category: 'foundation',
    description: 'Maps organizational risk owners, technical maintainers, business sponsors, and compliance delegates to every AI asset.',
    runtimeInteraction: 'Routes automated alerts and policy escalations to designated responsible humans.',
    marketExamples: 'RACI Governance Maps, Enterprise IAM Integration',
  },
  {
    id: 'cap-policies',
    name: 'Policy & Gate Management',
    icon: <Policy size={22} />,
    category: 'foundation',
    description: 'Translates corporate ethics, legal rules, and risk tiers into machine-evaluable gates and CI/CD validation checks.',
    runtimeInteraction: 'Blocks deployment of models that fail minimum quality or risk benchmarks.',
    marketExamples: 'Automated Lifecycle Gates, Policy Orchestrators',
  },
  {
    id: 'cap-gateways',
    name: 'AI Gateways & Prompt Gateways',
    icon: <ArrowsHorizontal size={22} />,
    category: 'runtime',
    description: 'Intercepts incoming API calls to manage traffic routing, load-balancing, rate limits, and authentication across LLM providers.',
    runtimeInteraction: 'Enforces payload limits, routes prompts to approved model endpoints, and logs latency metrics.',
    marketExamples: 'Kong AI Gateway, Azure API Management, Cloudflare AI Gateway, Envoy',
  },
  {
    id: 'cap-guardrails',
    name: 'Runtime Guardrails & Filters',
    icon: <Filter size={22} />,
    category: 'runtime',
    description: 'Real-time inspection of input prompts and output responses for prompt injections, jailbreaks, PII leakage, and toxic content.',
    runtimeInteraction: 'Sanitizes or blocks malicious payloads in sub-50ms before reaching the model or user.',
    marketExamples: 'NeMo Guardrails, Llama Guard, Guardrails AI, Prompt Filters',
  },
  {
    id: 'cap-evaluations',
    name: 'Continuous Evaluations',
    icon: <Analytics size={22} />,
    category: 'runtime',
    description: 'Automated metrics evaluating model drift, factual faithfulness, grounding relevance, and algorithmic fairness.',
    runtimeInteraction: 'Computes continuous quality scores on live transaction samples in production.',
    marketExamples: 'watsonx.governance Evaluations, Ragas, TruLens',
  },
  {
    id: 'cap-observability',
    name: 'Observability & Telemetry',
    icon: <Activity size={22} />,
    category: 'runtime',
    description: 'End-to-end tracing across multi-hop LLM chains, vector retrievals, and autonomous agent tool invocations.',
    runtimeInteraction: 'Emits OpenTelemetry spans capturing latency, token spend, and execution trees.',
    marketExamples: 'OpenInference, LangSmith, Arize, OpenTelemetry Traces',
  },
  {
    id: 'cap-evidence',
    name: 'Audit Evidence & Lineage',
    icon: <DocumentView size={22} />,
    category: 'oversight',
    description: 'Immutable record of training datasets, prompt revisions, evaluation benchmarks, and runtime decisions for external auditors.',
    runtimeInteraction: 'Auto-generates cryptographic FactSheets tying deployed models to compliance approvals.',
    marketExamples: 'watsonx.governance FactSheets, Compliance Ledgers',
  },
  {
    id: 'cap-oversight',
    name: 'Human Oversight & Kill-Switches',
    icon: <UserFollow size={22} />,
    category: 'oversight',
    description: 'Configurable approval checkpoints requiring human intervention for high-risk actions, plus emergency disable controls.',
    runtimeInteraction: 'Halts autonomous agent workflows when risk thresholds or financial limits are exceeded.',
    marketExamples: 'Human-in-the-Loop Workflow Engines, Circuit Breakers',
  },
];

export const Section7RuntimeArchitectureV2: React.FC = () => {
  const highlighted = useGovernanceV2Store((s) => s.highlightedCapability);
  const setHighlighted = useGovernanceV2Store((s) => s.setHighlightedCapability);

  return (
    <div className="section-inner v2-section">
      <div className="v2-section-header">
        <span className="v2-section-tag">Chapter 7 of 11</span>
        <h2 className="v2-section-title">Runtime Governance Architecture: Layering Controls on Execution</h2>
        <p className="v2-section-subtitle">
          Effective governance is not a single monolith. It is an interconnected system of foundational catalogs, runtime traffic controls, automated evaluations, and human oversight mechanisms working together.
        </p>
      </div>

      <div className="v2-callout-banner">
        <strong>Market Positioning Note:</strong> Technologies like <em>Kong AI Gateway</em>, <em>Azure APIM</em>, and runtime guardrails provide essential traffic routing and token control. 
        However, a comprehensive governance architecture must connect these runtime enforcement points into enterprise risk, lifecycle lineage, and regulatory evidence.
      </div>

      {/* Layer Groupings */}
      <div className="v2-arch-layers-layout">
        {/* Runtime Controls Layer */}
        <div className="v2-arch-layer-group">
          <div className="v2-layer-group-header">
            <span className="v2-layer-group-tag">Layer 2: Runtime Control & Inspection</span>
            <h3>Gateways, Guardrails, Telemetry & Evaluations</h3>
          </div>
          <div className="v2-capability-cards-grid">
            {GOVERNANCE_CAPABILITIES.filter((c) => c.category === 'runtime').map((cap) => {
              const isSelected = highlighted === cap.id;
              return (
                <div
                  key={cap.id}
                  className={`v2-cap-card ${isSelected ? 'v2-cap-card--selected' : ''}`}
                  onClick={() => setHighlighted(isSelected ? null : cap.id)}
                >
                  <div className="v2-cap-card-header">
                    <span className="v2-cap-icon">{cap.icon}</span>
                    <h4 className="v2-cap-name">{cap.name}</h4>
                  </div>
                  <p className="v2-cap-desc">{cap.description}</p>
                  <div className="v2-cap-runtime-role">
                    <strong>Runtime Link:</strong> {cap.runtimeInteraction}
                  </div>
                  <div className="v2-cap-market-pill">
                    <strong>Market Context:</strong> {cap.marketExamples}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Oversight & Compliance Layer */}
        <div className="v2-arch-layer-group">
          <div className="v2-layer-group-header">
            <span className="v2-layer-group-tag">Layer 3: Evidence & Oversight</span>
            <h3>Audit Readiness, Lineage & Human Intervention</h3>
          </div>
          <div className="v2-capability-cards-grid">
            {GOVERNANCE_CAPABILITIES.filter((c) => c.category === 'oversight').map((cap) => {
              const isSelected = highlighted === cap.id;
              return (
                <div
                  key={cap.id}
                  className={`v2-cap-card ${isSelected ? 'v2-cap-card--selected' : ''}`}
                  onClick={() => setHighlighted(isSelected ? null : cap.id)}
                >
                  <div className="v2-cap-card-header">
                    <span className="v2-cap-icon">{cap.icon}</span>
                    <h4 className="v2-cap-name">{cap.name}</h4>
                  </div>
                  <p className="v2-cap-desc">{cap.description}</p>
                  <div className="v2-cap-runtime-role">
                    <strong>Runtime Link:</strong> {cap.runtimeInteraction}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
