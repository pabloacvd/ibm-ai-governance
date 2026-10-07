import type { OrgPerspective } from '../models/types';

// Node IDs in this file reference PERSPECTIVE_NODES defined in perspectives-network.ts

export const ORG_PERSPECTIVES: OrgPerspective[] = [
  {
    id: 'perspective-business',
    label: 'Business',
    description:
      'Business owners and product managers who commissioned AI initiatives. They see the business purpose and expected outcomes, but rarely have visibility into the underlying models, data pipelines, or operational risk.',
    visibleNodeIds: ['init-maintenance', 'init-copilot', 'init-knowledge', 'init-procurement', 'init-saas', 'bu-operations', 'bu-customer'],
    hiddenDependencies: ['model-llm', 'model-embedding', 'data-crm', 'data-erp', 'platform-cloud-a', 'team-mlops'],
    missingOwnership: ['init-saas', 'init-knowledge'],
    missingEvidence: ['init-maintenance', 'init-copilot', 'init-procurement', 'init-saas'],
    inconsistentControls: ['init-copilot', 'init-knowledge'],
  },
  {
    id: 'perspective-ai-devs',
    label: 'AI Developers',
    description:
      'Data scientists and ML engineers who build and tune AI models. They have deep technical context on the models they built, but limited visibility into how those models are used in production, by whom, and under what policies.',
    visibleNodeIds: ['init-maintenance', 'model-ml-supervised', 'model-embedding', 'data-historian', 'team-data-science', 'platform-cloud-a'],
    hiddenDependencies: ['bu-operations', 'policy-risk', 'compliance-framework', 'audit-trail'],
    missingOwnership: ['init-knowledge', 'init-procurement'],
    missingEvidence: ['init-maintenance', 'init-knowledge'],
    inconsistentControls: ['model-llm', 'init-procurement'],
  },
  {
    id: 'perspective-mlops',
    label: 'Data and MLOps',
    description:
      'Platform and operations teams responsible for data pipelines, model deployments, and infrastructure. They track technical health and deployment status, but governance context — approvals, risk classifications, policies — is largely invisible to them.',
    visibleNodeIds: ['model-ml-supervised', 'model-llm', 'model-embedding', 'data-historian', 'data-crm', 'platform-cloud-a', 'platform-onprem', 'team-mlops'],
    hiddenDependencies: ['bu-operations', 'bu-customer', 'policy-risk', 'audit-trail', 'compliance-framework'],
    missingOwnership: ['model-llm', 'init-knowledge'],
    missingEvidence: ['model-ml-supervised', 'model-llm', 'model-embedding'],
    inconsistentControls: ['init-copilot', 'init-knowledge'],
  },
  {
    id: 'perspective-security',
    label: 'Security',
    description:
      'Information security teams focused on access control, data exposure, and threat surface. They can identify AI endpoints and data flows that create risk, but have little context on business purpose, model governance, or regulatory classification.',
    visibleNodeIds: ['platform-cloud-a', 'platform-cloud-b', 'platform-onprem', 'data-crm', 'data-erp', 'init-saas'],
    hiddenDependencies: ['init-maintenance', 'init-copilot', 'init-knowledge', 'init-procurement', 'policy-risk', 'team-data-science'],
    missingOwnership: ['init-saas', 'init-knowledge'],
    missingEvidence: ['init-copilot', 'init-saas', 'init-knowledge'],
    inconsistentControls: ['init-procurement', 'init-saas'],
  },
  {
    id: 'perspective-risk',
    label: 'Risk',
    description:
      'Risk officers responsible for identifying, classifying, and monitoring operational and model risk. They may have formal risk registers for some AI systems, but informal or shadow AI deployments are invisible to them.',
    visibleNodeIds: ['init-maintenance', 'policy-risk', 'compliance-framework', 'bu-operations'],
    hiddenDependencies: ['init-copilot', 'init-knowledge', 'init-procurement', 'init-saas', 'model-llm', 'data-crm'],
    missingOwnership: ['init-copilot', 'init-knowledge', 'init-procurement', 'init-saas'],
    missingEvidence: ['init-maintenance', 'init-copilot', 'init-saas'],
    inconsistentControls: ['init-knowledge', 'init-procurement'],
  },
  {
    id: 'perspective-compliance',
    label: 'Compliance',
    description:
      'Compliance officers tracking regulatory obligations related to AI — including AI Act, sectoral regulations, and internal policies. Their compliance view covers only what has been formally registered; large parts of the AI landscape are unknown.',
    visibleNodeIds: ['compliance-framework', 'policy-risk', 'init-maintenance', 'audit-trail'],
    hiddenDependencies: ['init-copilot', 'init-knowledge', 'init-procurement', 'init-saas', 'model-llm', 'model-embedding'],
    missingOwnership: ['init-copilot', 'init-knowledge', 'init-procurement', 'init-saas'],
    missingEvidence: ['init-maintenance', 'init-copilot', 'init-knowledge', 'init-procurement'],
    inconsistentControls: ['init-saas'],
  },
  {
    id: 'perspective-legal',
    label: 'Legal',
    description:
      'Legal counsel focused on IP, liability, data protection, and contractual obligations. They are engaged when AI systems reach procurement stage or when incidents occur, but have no systematic visibility into operational AI across the organisation.',
    visibleNodeIds: ['compliance-framework', 'bu-operations', 'bu-customer'],
    hiddenDependencies: ['init-maintenance', 'init-copilot', 'init-knowledge', 'init-procurement', 'init-saas', 'model-llm', 'data-crm', 'data-erp'],
    missingOwnership: ['init-maintenance', 'init-copilot', 'init-knowledge', 'init-procurement', 'init-saas'],
    missingEvidence: ['init-maintenance', 'init-copilot', 'init-knowledge', 'init-procurement', 'init-saas'],
    inconsistentControls: ['init-saas'],
  },
  {
    id: 'perspective-procurement',
    label: 'Procurement',
    description:
      'Procurement teams managing third-party AI vendor contracts and SaaS subscriptions. They have a commercial view of contracted AI services but no visibility into how those services are actually used, or into internally built AI systems.',
    visibleNodeIds: ['init-saas', 'bu-operations', 'bu-customer'],
    hiddenDependencies: ['init-maintenance', 'init-copilot', 'init-knowledge', 'init-procurement', 'model-llm', 'data-crm', 'team-data-science'],
    missingOwnership: ['init-maintenance', 'init-copilot', 'init-knowledge', 'init-procurement'],
    missingEvidence: ['init-saas', 'init-copilot', 'init-knowledge'],
    inconsistentControls: ['init-saas', 'init-knowledge'],
  },
  {
    id: 'perspective-audit',
    label: 'Internal Audit',
    description:
      'Internal audit functions seeking to assess the effectiveness of AI governance controls. They can audit what has been documented, but have no mechanism to discover undocumented AI systems, validate monitoring coverage, or trace evidence across fragmented sources.',
    visibleNodeIds: ['audit-trail', 'compliance-framework', 'policy-risk', 'init-maintenance'],
    hiddenDependencies: ['init-copilot', 'init-knowledge', 'init-procurement', 'init-saas', 'model-llm', 'model-embedding', 'team-mlops'],
    missingOwnership: ['init-copilot', 'init-knowledge', 'init-procurement', 'init-saas'],
    missingEvidence: ['init-maintenance', 'init-copilot', 'init-knowledge', 'init-procurement', 'init-saas'],
    inconsistentControls: ['init-copilot', 'init-knowledge', 'init-procurement'],
  },
];
