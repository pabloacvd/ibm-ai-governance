import type { AITypeProfile } from '../models/types';

// Common controls apply to all AI types
const COMMON_CONTROLS = [
  'Ownership — a named accountable individual or function',
  'Purpose — documented business purpose and intended use',
  'Risk — formal risk classification and treatment',
  'Policies — applicable governance policies identified and applied',
  'Approval — formal sign-off before deployment',
  'Monitoring — ongoing production monitoring',
  'Evidence — auditable governance record',
  'Human accountability — a human remains responsible for AI outcomes',
];

export const AI_TYPE_PROFILES: AITypeProfile[] = [
  {
    type: 'traditional',
    label: 'Traditional AI',
    tagline: 'ML models trained on historical data to predict, classify, or score.',
    commonControls: COMMON_CONTROLS,
    specificConcerns: [
      {
        id: 'trad-01',
        label: 'Accuracy',
        description: 'Model predictions must meet defined accuracy thresholds for the business use case, validated at deployment and tracked over time.',
      },
      {
        id: 'trad-02',
        label: 'Fairness',
        description: 'Model outputs must not produce discriminatory or systematically biased results across protected attributes or demographic groups.',
      },
      {
        id: 'trad-03',
        label: 'Explainability',
        description: 'Predictions should be explainable to relevant stakeholders, particularly where AI-influenced decisions affect individuals.',
      },
      {
        id: 'trad-04',
        label: 'Drift',
        description: 'Input data distributions and model output distributions must be monitored to detect drift that degrades performance over time.',
      },
      {
        id: 'trad-05',
        label: 'Model health',
        description: 'Technical health indicators — error rates, latency, prediction stability — monitored continuously in production.',
      },
      {
        id: 'trad-06',
        label: 'Validation',
        description: 'Models must be validated on held-out data before deployment, with validation methodology documented and results retained.',
      },
    ],
  },
  {
    type: 'generative',
    label: 'Generative AI and RAG',
    tagline: 'Foundation models generating text, code, or summaries — with or without retrieval augmentation.',
    commonControls: COMMON_CONTROLS,
    specificConcerns: [
      {
        id: 'gen-01',
        label: 'Prompt governance',
        description: 'System prompts, instructions, and prompt templates are treated as governed artefacts — versioned, reviewed, and change-controlled.',
      },
      {
        id: 'gen-02',
        label: 'Model information',
        description: 'The foundation model(s) in use are documented — including provider, version, and known limitations — and re-evaluated when models change.',
      },
      {
        id: 'gen-03',
        label: 'Approved knowledge sources',
        description: 'For RAG systems, the knowledge sources feeding retrieval are formally approved, kept current, and scoped appropriately for the use case.',
      },
      {
        id: 'gen-04',
        label: 'Faithfulness',
        description: 'Generated responses are grounded in retrieved context and do not introduce fabricated information that was not present in the source.',
      },
      {
        id: 'gen-05',
        label: 'Answer relevance',
        description: 'Responses address the user\'s actual question — evaluated to ensure the model is not producing plausible-sounding but off-topic outputs.',
      },
      {
        id: 'gen-06',
        label: 'Context relevance',
        description: 'For RAG, the retrieved context is relevant to the question — avoiding noise retrieval that degrades response quality.',
      },
      {
        id: 'gen-07',
        label: 'Source attribution',
        description: 'Where responses are based on retrieved sources, those sources are attributed to allow users and auditors to trace the basis for an answer.',
      },
      {
        id: 'gen-08',
        label: 'Harmful content',
        description: 'Output screening for harmful, offensive, or inappropriate content — with defined thresholds and response to violations.',
      },
      {
        id: 'gen-09',
        label: 'Sensitive information',
        description: 'Personally identifiable information and other sensitive data in prompts or outputs is detected and handled per data policy.',
      },
      {
        id: 'gen-10',
        label: 'Prompt injection',
        description: 'Attempts by users or retrieved content to override system instructions are detected and blocked.',
      },
      {
        id: 'gen-11',
        label: 'Jailbreak',
        description: 'Attempts to elicit harmful, policy-violating, or out-of-scope responses from the model are monitored and mitigated.',
      },
    ],
  },
  {
    type: 'agentic',
    label: 'Agentic AI',
    tagline: 'AI systems that autonomously plan, decide, and act — using tools, APIs, and other AI systems.',
    commonControls: COMMON_CONTROLS,
    specificConcerns: [
      {
        id: 'ag-01',
        label: 'Tool access',
        description: 'The tools, APIs, and services available to the agent are explicitly defined, reviewed, and restricted to what the business use case requires.',
      },
      {
        id: 'ag-02',
        label: 'Permissions',
        description: 'Least-privilege access to systems and data — agents are not granted broader permissions than necessary for their defined task.',
      },
      {
        id: 'ag-03',
        label: 'Action boundaries',
        description: 'Defined limits on what categories of action the agent may take autonomously, and which require human authorisation.',
      },
      {
        id: 'ag-04',
        label: 'Autonomous decisions',
        description: 'High-consequence decisions made by the agent are identified in advance and subject to oversight — either human approval or defined escalation criteria.',
      },
      {
        id: 'ag-05',
        label: 'Delegation',
        description: 'The conditions under which an agent may delegate tasks to sub-agents or other AI systems are defined and governed.',
      },
      {
        id: 'ag-06',
        label: 'Agent-to-agent interaction',
        description: 'Where multiple agents interact, the governance boundary for each agent\'s responsibilities is clear and the interaction is logged.',
      },
      {
        id: 'ag-07',
        label: 'Human approval',
        description: 'Specific action types require explicit human approval before execution — with a mechanism for humans to review, modify, or reject.',
      },
      {
        id: 'ag-08',
        label: 'Traceability',
        description: 'A complete, reproducible trace of the agent\'s reasoning steps, tool calls, retrieved data, and actions taken — retained for audit.',
      },
      {
        id: 'ag-09',
        label: 'Policy adherence',
        description: 'Agent behaviour is continuously evaluated against defined governance policies — with real-time guardrails and post-execution review.',
      },
    ],
  },
];
