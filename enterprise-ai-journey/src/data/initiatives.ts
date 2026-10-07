import type { AIInitiative } from '../models/types';

export const AI_INITIATIVES: AIInitiative[] = [
  {
    id: 'init-001',
    name: 'Predictive Maintenance Model',
    type: 'traditional',
    description:
      'A machine learning model deployed to predict equipment failures across manufacturing sites. Built by a central data science team and integrated into operational dashboards.',
    governanceAnswers: [],
    hoverQuestions: [
      'Who owns this AI system?',
      'Is it monitored in production?',
      'Was it evaluated before deployment?',
    ],
  },
  {
    id: 'init-002',
    name: 'Customer Service Copilot',
    type: 'generative',
    description:
      'A generative AI assistant integrated into the customer service platform, suggesting responses and summarising case histories for agents during live interactions.',
    governanceAnswers: [],
    hoverQuestions: [
      'What data does it use?',
      'Which policies apply to it?',
      'Can audit evidence be produced?',
    ],
  },
  {
    id: 'init-003',
    name: 'Enterprise Knowledge Assistant',
    type: 'rag',
    description:
      'A retrieval-augmented generation system providing employees with answers grounded in internal policies, procedures, and technical documentation.',
    governanceAnswers: [],
    hoverQuestions: [
      'What business purpose does it serve?',
      'Which model does it depend on?',
      'Is it formally approved?',
    ],
  },
  {
    id: 'init-004',
    name: 'Procurement Analysis Agent',
    type: 'agentic',
    description:
      'An AI agent that autonomously searches supplier catalogues, compares contracts, drafts purchase order recommendations, and escalates exceptions.',
    governanceAnswers: [],
    hoverQuestions: [
      'What actions is it authorised to perform?',
      'Where is it deployed?',
      'Who owns this AI system?',
    ],
  },
  {
    id: 'init-005',
    name: 'Embedded SaaS AI',
    type: 'saas',
    description:
      'AI capabilities embedded within existing SaaS subscriptions — including CRM predictive scoring, ERP anomaly detection, and collaboration platform summarisation features — activated by vendors without explicit procurement.',
    governanceAnswers: [],
    hoverQuestions: [
      'Is it formally approved?',
      'What data does it use?',
      'Which policies apply to it?',
    ],
  },
  {
    id: 'init-006',
    name: 'Public AI Usage',
    type: 'public',
    description:
      'Direct use of public AI services by employees for tasks including drafting, summarisation, research, and code generation — outside any organisational procurement, policy, or monitoring framework.',
    governanceAnswers: [],
    hoverQuestions: [
      'Can audit evidence be produced?',
      'Is it monitored in production?',
      'What business purpose does it serve?',
    ],
  },
];
