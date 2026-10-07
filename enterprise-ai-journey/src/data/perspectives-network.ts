import type { PerspectiveNode, PerspectiveEdge } from '../models/types';

// ─── Nodes ────────────────────────────────────────────────────────────────────
// 24 nodes across 6 categories, mapped to the 6 AI initiatives from Section 2
//
// Layout: preset positions for a ~1300×1050 square composition
//   Left cluster  (x  50–350): AI assets + teams (SaaS AI, Copilot, Procurement)
//   Centre band   (x 480–750): Data sources + Business units + shared platforms
//   Right cluster (x 900–1250): Maintenance, Knowledge, Public AI + models/infra

export const PERSPECTIVE_NODES: PerspectiveNode[] = [
  // ── AI assets ───────────────────────────────────────────────────────────────

  // Top-left — SaaS AI cluster
  { id: 'init-saas',         label: 'Embedded SaaS AI',                 category: 'ai-asset',      x:  130, y:  100 },

  // Mid-left — Copilot cluster
  { id: 'init-copilot',      label: 'Customer Service Copilot',         category: 'ai-asset',      x:  130, y:  400 },

  // Bottom-left — Procurement cluster
  { id: 'init-procurement',  label: 'Procurement Analysis Agent',       category: 'ai-asset',      x:  130, y:  700 },

  // Right cluster — operational AI
  { id: 'init-maintenance',  label: 'Predictive Maintenance Model',     category: 'ai-asset',      x:  980, y:  270 },
  { id: 'init-knowledge',    label: 'Enterprise Knowledge Assistant',   category: 'ai-asset',      x:  980, y:  680 },
  { id: 'init-public',       label: 'Public AI Usage',                  category: 'ai-asset',      x: 1160, y:  530 },

  // ── Data sources ─────────────────────────────────────────────────────────────
  { id: 'data-historian',    label: 'Equipment Historian',              category: 'data-source',   x: 1200, y:  130 },
  { id: 'data-crm',          label: 'Customer Data Platform',           category: 'data-source',   x:  560, y:  170 },
  { id: 'data-erp',          label: 'ERP / Finance Data',               category: 'data-source',   x:  560, y:  640 },
  { id: 'data-kb',           label: 'Internal Knowledge Base',          category: 'data-source',   x:  840, y:  850 },

  // ── Models ───────────────────────────────────────────────────────────────────
  { id: 'model-ml-supervised', label: 'Supervised ML Model',            category: 'model',         x:  790, y:  130 },
  { id: 'model-llm',           label: 'Large Language Model',           category: 'model',         x:  560, y:  930 },
  { id: 'model-embedding',     label: 'Embedding Model',                category: 'model',         x:  790, y:  930 },
  { id: 'model-saas-embedded', label: 'Vendor-embedded Model',          category: 'model',         x:  400, y:   60 },

  // ── Teams ────────────────────────────────────────────────────────────────────
  { id: 'team-data-science', label: 'Data Science Team',                category: 'team',          x: 1200, y:  270 },
  { id: 'team-mlops',        label: 'MLOps Platform Team',              category: 'team',          x: 1200, y:  780 },
  { id: 'team-product',      label: 'Product Development Team',         category: 'team',          x:  -80, y:  250 },
  { id: 'team-procurement',  label: 'Procurement Team',                 category: 'team',          x:  -80, y:  760 },

  // ── Platforms ────────────────────────────────────────────────────────────────
  { id: 'platform-cloud-a',  label: 'Microsoft Azure',                  category: 'platform',      x:  560, y:  420 },
  { id: 'platform-cloud-b',  label: 'AWS / GCP',                        category: 'platform',      x:  -80, y:  900 },
  { id: 'platform-onprem',   label: 'On-premises Data Centre',          category: 'platform',      x: 1200, y:  400 },
  { id: 'platform-saas',     label: 'SaaS Vendor Infrastructure',       category: 'platform',      x:  400, y:  160 },

  // ── Business units ───────────────────────────────────────────────────────────
  { id: 'bu-operations',     label: 'Operations Business Unit',         category: 'business-unit', x:  700, y:  500 },
  { id: 'bu-customer',       label: 'Customer Experience Unit',         category: 'business-unit', x:  700, y:  330 },

  // ── Governance artefacts (filtered out of canvas, kept for perspective data) ─
  { id: 'policy-risk',         label: 'Risk Classification Policy',     category: 'team' },
  { id: 'compliance-framework',label: 'Compliance Framework',           category: 'team' },
  { id: 'audit-trail',         label: 'Audit Trail / Evidence Store',   category: 'team' },
];

// ─── Edges ────────────────────────────────────────────────────────────────────

export const PERSPECTIVE_EDGES: PerspectiveEdge[] = [
  // Data flows into AI assets
  { id: 'e-01', source: 'data-historian', target: 'init-maintenance',   label: 'sensor data' },
  { id: 'e-02', source: 'data-crm',       target: 'init-copilot',       label: 'customer context' },
  { id: 'e-03', source: 'data-kb',        target: 'init-knowledge',     label: 'indexed documents' },
  { id: 'e-04', source: 'data-erp',       target: 'init-procurement',   label: 'supplier data' },
  { id: 'e-05', source: 'data-crm',       target: 'init-saas',          label: 'contact data' },

  // Model dependencies
  { id: 'e-06', source: 'model-ml-supervised', target: 'init-maintenance', label: 'inference' },
  { id: 'e-07', source: 'model-llm',           target: 'init-copilot',     label: 'generation' },
  { id: 'e-08', source: 'model-llm',           target: 'init-knowledge',   label: 'generation' },
  { id: 'e-09', source: 'model-embedding',     target: 'init-knowledge',   label: 'retrieval' },
  { id: 'e-10', source: 'model-llm',           target: 'init-procurement', label: 'reasoning' },
  { id: 'e-11', source: 'model-saas-embedded', target: 'init-saas',        label: 'vendor model' },

  // Team ownership
  { id: 'e-12', source: 'team-data-science', target: 'init-maintenance',  label: 'builds' },
  { id: 'e-13', source: 'team-product',      target: 'init-copilot',      label: 'commissioned by' },
  { id: 'e-14', source: 'team-mlops',        target: 'init-knowledge',    label: 'deployed by' },
  { id: 'e-15', source: 'team-procurement',  target: 'init-procurement',  label: 'commissioned by' },
  { id: 'e-16', source: 'team-product',      target: 'init-saas',         label: 'subscribed by' },

  // Platform hosting
  { id: 'e-17', source: 'platform-onprem',  target: 'init-maintenance',   label: 'hosted on' },
  { id: 'e-18', source: 'platform-cloud-a', target: 'init-copilot',       label: 'hosted on' },
  { id: 'e-19', source: 'platform-cloud-a', target: 'init-knowledge',     label: 'hosted on' },
  { id: 'e-20', source: 'platform-cloud-b', target: 'init-procurement',   label: 'hosted on' },
  { id: 'e-21', source: 'platform-saas',    target: 'init-saas',          label: 'hosted on' },

  // Business unit usage
  { id: 'e-22', source: 'bu-operations',  target: 'init-maintenance',     label: 'uses' },
  { id: 'e-23', source: 'bu-customer',    target: 'init-copilot',         label: 'uses' },
  { id: 'e-24', source: 'bu-operations',  target: 'init-knowledge',       label: 'uses' },
  { id: 'e-25', source: 'bu-operations',  target: 'init-procurement',     label: 'uses' },
  { id: 'e-26', source: 'bu-customer',    target: 'init-saas',            label: 'uses' },

  // Public AI Usage (shadow AI) — used by business units, data leakage risk
  { id: 'e-27', source: 'bu-operations',  target: 'init-public',          label: 'uses' },
  { id: 'e-28', source: 'bu-customer',    target: 'init-public',          label: 'uses' },
  { id: 'e-29', source: 'data-crm',       target: 'init-public',          label: 'data leakage risk' },
  { id: 'e-30', source: 'data-erp',       target: 'init-public',          label: 'data leakage risk' },
  { id: 'e-31', source: 'data-kb',        target: 'init-public',          label: 'data leakage risk' },
];
