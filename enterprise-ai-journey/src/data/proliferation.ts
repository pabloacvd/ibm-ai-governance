import type { EnterpriseZoneConfig, ProliferationNode } from '../models/types';

// ─── Enterprise zones ─────────────────────────────────────────────────────────

export const ENTERPRISE_ZONES: EnterpriseZoneConfig[] = [
  { id: 'business-unit',  label: 'Business Units',       colour: '#e8f4f8' },
  { id: 'dev-team',       label: 'Development Teams',    colour: '#f4f0ff' },
  { id: 'cloud',          label: 'Cloud Platforms',      colour: '#f0fff4' },
  { id: 'saas',           label: 'SaaS Applications',    colour: '#fff8f0' },
  { id: 'application',    label: 'Business Applications',colour: '#f4f8f0' },
  { id: 'provider',       label: 'AI Providers',         colour: '#fff0f0' },
];

// ─── Proliferation nodes ──────────────────────────────────────────────────────
// introduced: 1–9, the phase in which this node first appears

export const PROLIFERATION_NODES: ProliferationNode[] = [
  // Phase 1 — Traditional ML models (deployed by data science teams, in data centres)
  { id: 'p-ml-001', label: 'Predictive Maintenance',    type: 'traditional', zone: 'dev-team',      introduced: 1 },
  { id: 'p-ml-002', label: 'Demand Forecasting',        type: 'traditional', zone: 'business-unit', introduced: 1 },
  { id: 'p-ml-003', label: 'Fraud Detection',           type: 'traditional', zone: 'dev-team',      introduced: 1 },

  // Phase 2 — Foundation models accessed via API
  { id: 'p-fm-001', label: 'GPT-4 API',                 type: 'generative',  zone: 'provider',      introduced: 2 },
  { id: 'p-fm-002', label: 'Gemini API',                type: 'generative',  zone: 'provider',      introduced: 2 },

  // Phase 3 — Prompt applications built on foundation models
  { id: 'p-pa-001', label: 'Contract Summary App',      type: 'generative',  zone: 'application',   introduced: 3 },
  { id: 'p-pa-002', label: 'Meeting Notes Generator',   type: 'generative',  zone: 'application',   introduced: 3 },

  // Phase 4 — RAG pipelines
  { id: 'p-rag-001', label: 'Policy Knowledge RAG',     type: 'rag',         zone: 'business-unit', introduced: 4 },
  { id: 'p-rag-002', label: 'Product Specs RAG',        type: 'rag',         zone: 'cloud',         introduced: 4 },

  // Phase 5 — Copilots embedded in productivity tools
  { id: 'p-co-001', label: 'Microsoft 365 Copilot',    type: 'generative',  zone: 'saas',          introduced: 5 },
  { id: 'p-co-002', label: 'GitHub Copilot',           type: 'generative',  zone: 'dev-team',      introduced: 5 },

  // Phase 6 — Embedded SaaS AI (AI capabilities within existing SaaS subscriptions)
  { id: 'p-saas-001', label: 'CRM AI Insights',        type: 'saas',        zone: 'saas',          introduced: 6 },
  { id: 'p-saas-002', label: 'ERP AI Forecasting',     type: 'saas',        zone: 'saas',          introduced: 6 },

  // Phase 7 — AI agents with tool access
  { id: 'p-ag-001', label: 'HR Agent',                 type: 'agentic',     zone: 'business-unit', introduced: 7 },
  { id: 'p-ag-002', label: 'Customer Support Agent',   type: 'agentic',     zone: 'application',   introduced: 7 },

  // Phase 8 — Multi-agent workflows
  { id: 'p-ma-001', label: 'End-to-End Supply Chain AI',type: 'agentic',    zone: 'cloud',         introduced: 8 },

  // Phase 9 — Direct public AI usage (ungoverned)
  { id: 'p-pub-001', label: 'ChatGPT (direct)',        type: 'public',      zone: 'provider',      introduced: 9 },
  { id: 'p-pub-002', label: 'Perplexity (direct)',     type: 'public',      zone: 'provider',      introduced: 9 },
];
