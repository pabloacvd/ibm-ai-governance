import type { LifecycleStage, GovernanceCapability } from '../models/types';

// ─── 12 lifecycle stages ──────────────────────────────────────────────────────

export const LIFECYCLE_STAGES: LifecycleStage[] = [
  {
    id: 'ls-01',
    label: 'Discover',
    description: 'Identify all AI systems in use across the organisation, including those built internally, procured from vendors, or embedded in existing SaaS subscriptions.',
  },
  {
    id: 'ls-02',
    label: 'Classify',
    description: 'Assign AI type, business domain, data sensitivity, and regulatory classification to each AI system based on a consistent taxonomy.',
  },
  {
    id: 'ls-03',
    label: 'Assign ownership',
    description: 'Designate accountable business owners, technical owners, and data owners for each AI system, with clear roles and responsibilities.',
  },
  {
    id: 'ls-04',
    label: 'Assess risk',
    description: 'Evaluate each AI system against a risk framework — considering bias, accuracy, explainability, data sensitivity, autonomy, and potential for harm.',
  },
  {
    id: 'ls-05',
    label: 'Apply policies and controls',
    description: 'Map applicable governance policies, data handling requirements, and operational controls to each AI system based on its risk classification.',
  },
  {
    id: 'ls-06',
    label: 'Evaluate',
    description: 'Test and validate the AI system against defined quality, fairness, safety, and performance standards before production deployment.',
  },
  {
    id: 'ls-07',
    label: 'Approve',
    description: 'Complete formal approval by authorised stakeholders — including risk, compliance, legal, and business sign-off — before the system goes live.',
  },
  {
    id: 'ls-08',
    label: 'Deploy',
    description: 'Deploy the AI system to production through a controlled change process, with deployment details recorded in the governance record.',
  },
  {
    id: 'ls-09',
    label: 'Monitor',
    description: 'Continuously monitor the AI system in production for performance drift, bias, harmful outputs, unusual behaviour, and compliance with defined thresholds.',
  },
  {
    id: 'ls-10',
    label: 'Respond',
    description: 'Act on monitoring alerts, quality breaches, and governance exceptions — including investigation, remediation, and escalation to appropriate owners.',
  },
  {
    id: 'ls-11',
    label: 'Retain evidence',
    description: 'Maintain a complete, auditable record of the AI system\'s governance history — including assessments, evaluations, approvals, incidents, and model changes.',
  },
  {
    id: 'ls-12',
    label: 'Retire',
    description: 'Formally decommission AI systems that are no longer needed, ensuring data handling obligations are met and the governance record is closed.',
  },
];

// ─── 12 governance capabilities ──────────────────────────────────────────────

export const GOVERNANCE_CAPABILITIES: GovernanceCapability[] = [
  {
    id: 'gc-01',
    label: 'Enterprise AI inventory',
    description: 'A single, searchable register of all AI systems across the organisation, capturing type, owner, deployment, status, and classification.',
  },
  {
    id: 'gc-02',
    label: 'Business-use-case context',
    description: 'The business problem each AI system is intended to solve, and the expected business outcomes — maintained alongside the technical record.',
  },
  {
    id: 'gc-03',
    label: 'Accountability',
    description: 'Defined, recorded ownership for every AI system — including business owner, technical owner, data owner, and escalation path.',
  },
  {
    id: 'gc-04',
    label: 'Risk classification',
    description: 'A consistent, documented risk classification for each AI system, tied to a risk framework and informing applicable controls.',
  },
  {
    id: 'gc-05',
    label: 'Policy management',
    description: 'Governance policies applicable to AI systems — covering data use, model access, evaluation requirements, and deployment conditions — maintained centrally and linked to each system.',
  },
  {
    id: 'gc-06',
    label: 'Control implementation',
    description: 'Operational controls — technical, procedural, and contractual — applied to AI systems to manage risk and meet policy requirements.',
  },
  {
    id: 'gc-07',
    label: 'Approval workflows',
    description: 'Structured approval processes that ensure AI systems are reviewed, challenged, and formally signed off by the right stakeholders before deployment.',
  },
  {
    id: 'gc-08',
    label: 'Documentation',
    description: 'Structured documentation for each AI system — including model cards, factsheets, data handling agreements, and evaluation reports — maintained throughout the lifecycle.',
  },
  {
    id: 'gc-09',
    label: 'Evidence',
    description: 'A tamper-evident, auditable record of governance activities — evaluations, approvals, incidents, responses, and reviews — that can be produced to auditors and regulators.',
  },
  {
    id: 'gc-10',
    label: 'Issue management',
    description: 'A tracked process for raising, investigating, and resolving governance issues, quality failures, and policy exceptions across AI systems.',
  },
  {
    id: 'gc-11',
    label: 'Compliance mapping',
    description: 'Explicit linkage between AI systems, applicable regulations, and the controls in place to meet those requirements — enabling efficient regulatory reporting.',
  },
  {
    id: 'gc-12',
    label: 'Lifecycle history',
    description: 'A complete, time-stamped record of every significant event in an AI system\'s life — from initial registration through deployment, model changes, incidents, and retirement.',
  },
];
