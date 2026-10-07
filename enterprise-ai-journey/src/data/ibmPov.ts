import type { IBMProduct, IBMCapabilityItem } from '../models/types';

// ─── Verified IBM Products ────────────────────────────────────────────────────
// All capabilities below are confirmed against official IBM documentation.
// No product, module, or capability is invented.

export const IBM_PRODUCTS: IBMProduct[] = [
  {
    id: 'watsonx-governance',
    name: 'IBM watsonx.governance',
    category: 'primary',
    description:
      'IBM\'s end-to-end AI governance platform. Organised into two capability areas: Model Management (AI inventory, factsheets, evaluation, monitoring, guardrails, governed agentic catalog) and Risk and Compliance (risk scoring, compliance tracking, accountability workflows). Optionally integrates with the Governance console (IBM OpenPages) for GRC workflow management.',
    supportsTraditional: true,
    supportsGenerative: true,
    supportsAgentic: true,
  },
  {
    id: 'ibm-openpages',
    name: 'IBM OpenPages (Governance console)',
    category: 'governance-console',
    description:
      'Integrated governance, risk, and compliance (GRC) suite used as the Governance console within watsonx.governance. Provides three solutions: Model Risk Governance (model inventory and review workflows), Operational Risk Management (linking AI use cases to business processes), and Regulatory Compliance Management (tracking AI regulations and mandates). Syncs AI use case metadata — factsheets — bidirectionally with watsonx.governance.',
    supportsTraditional: true,
    supportsGenerative: true,
    supportsAgentic: false,
  },
  {
    id: 'ibm-knowledge-catalog',
    name: 'IBM Knowledge Catalog',
    category: 'data-governance',
    description:
      'Enterprise data catalog for organising, cataloging, and governing data assets. Provides governed catalogs, data protection rules, policy enforcement, and metadata enrichment with automatic governance artifact assignment. Integrates with IBM Manta Data Lineage for lineage visualisation. Relevant for governing training data, knowledge sources, and data pipelines that feed AI systems.',
    supportsTraditional: true,
    supportsGenerative: true,
    supportsAgentic: false,
  },
  {
    id: 'ibm-manta',
    name: 'IBM Manta Data Lineage',
    category: 'data-governance',
    description:
      'Automated data lineage platform that scans and maps data flows from origin to consumption. Produces technical lineage graphs showing how data moves across systems, databases, and pipelines. Integrates with IBM Knowledge Catalog and watsonx.data. Supports tracing the data used by AI models and RAG systems.',
    supportsTraditional: true,
    supportsGenerative: true,
    supportsAgentic: false,
  },
  {
    id: 'ibm-instana',
    name: 'IBM Instana Observability',
    category: 'observability',
    description:
      'Full-stack automated application performance monitoring (APM) covering traditional workloads, microservices, and AI systems. For AI workloads, provides specialist observability for LLM performance (response times, throughput, error rates), token usage, prompt effectiveness, and AI infrastructure (GPU, vLLM). Monitors AI agent frameworks including LangChain, LangGraph, and CrewAI. Monitors vector databases relevant for RAG pipelines, and MCP servers for agentic applications.',
    supportsTraditional: true,
    supportsGenerative: true,
    supportsAgentic: true,
  },
  {
    id: 'watsonx-orchestrate',
    name: 'IBM watsonx.Orchestrate',
    category: 'agentic-control',
    description:
      'Agentic Control Plane for governing, observing, and operating AI agents — including agents not originally built in Orchestrate. Provides a unified control panel for multi-agent orchestration, agent health monitoring, governance policy enforcement, and operational oversight across heterogeneous agent environments. IBM positions watsonx.Orchestrate as the operational layer for enterprises running agents at scale.',
    supportsTraditional: false,
    supportsGenerative: false,
    supportsAgentic: true,
  },
  {
    id: 'watsonx-ai',
    name: 'IBM watsonx.ai',
    category: 'platform',
    description:
      'Foundation model training, fine-tuning, and deployment platform supporting both traditional ML and generative AI. Interoperates with watsonx.governance for lifecycle tracking — model metadata and evaluation results are automatically captured in factsheets. Also supports Evaluation Studio for comparing generative AI assets.',
    supportsTraditional: true,
    supportsGenerative: true,
    supportsAgentic: false,
  },
];

// ─── IBM Architecture Items ───────────────────────────────────────────────────
// Three-tier architecture for Section 7

export const IBM_ARCHITECTURE_ITEMS: IBMCapabilityItem[] = [
  // ── Top layer: AI types and use cases ──────────────────────────────────────
  { id: 'top-use-cases',    label: 'Business use cases',        layer: 'use-cases' },
  { id: 'top-traditional',  label: 'Traditional AI',            layer: 'use-cases' },
  { id: 'top-generative',   label: 'Generative AI and RAG',     layer: 'use-cases' },
  { id: 'top-agentic',      label: 'Agentic AI',                layer: 'use-cases' },

  // ── Middle layer: governance capabilities ─────────────────────────────────
  {
    id: 'gov-inventory',
    label: 'Enterprise AI inventory',
    layer: 'governance-core',
    description:
      'A unified register of all AI systems — including type, owner, deployment, and classification. Powered by watsonx.governance AI factsheets and inventory management.',
    productRef: 'watsonx-governance',
  },
  {
    id: 'gov-lifecycle',
    label: 'Lifecycle governance',
    layer: 'governance-core',
    description:
      'End-to-end lifecycle tracking from development to retirement — capturing model metadata automatically at each stage through watsonx.governance factsheets.',
    productRef: 'watsonx-governance',
  },
  {
    id: 'gov-risk',
    label: 'Risk governance',
    layer: 'governance-core',
    description:
      'AI risk assessment and scoring across the portfolio. watsonx.governance provides risk and compliance capabilities; IBM OpenPages Model Risk Governance adds structured model review workflows and regulatory mandate tracking.',
    productRef: 'watsonx-governance',
  },
  {
    id: 'gov-policies',
    label: 'Policies and controls',
    layer: 'governance-core',
    description:
      'Governance policies and guardrails applied to AI systems in production. watsonx.governance manages guardrail policies for generative AI and policy-to-system mapping across the AI inventory.',
    productRef: 'watsonx-governance',
  },
  {
    id: 'gov-documentation',
    label: 'Documentation',
    layer: 'governance-core',
    description:
      'Structured AI documentation — including factsheets, model cards, and evaluation reports — automatically populated and maintained by watsonx.governance throughout the model lifecycle.',
    productRef: 'watsonx-governance',
  },
  {
    id: 'gov-evaluation',
    label: 'Evaluation',
    layer: 'governance-core',
    description:
      'Pre-deployment and ongoing evaluation of AI systems. watsonx.governance evaluates traditional models for fairness, quality, and drift. For generative AI, it evaluates prompt templates across quality, PII, and content dimensions using Evaluation Studio.',
    productRef: 'watsonx-governance',
  },
  {
    id: 'gov-monitoring',
    label: 'Monitoring',
    layer: 'governance-core',
    description:
      'Continuous production monitoring. watsonx.governance monitors ML model performance and includes agentic runtime monitoring for AI agents. IBM Instana Observability adds LLM performance, token usage, and AI infrastructure monitoring for generative and agentic workloads.',
    productRef: 'watsonx-governance',
  },
  {
    id: 'gov-compliance',
    label: 'Compliance',
    layer: 'governance-core',
    description:
      'Regulatory compliance tracking across the AI lifecycle. watsonx.governance tracks compliance posture; IBM OpenPages Regulatory Compliance Management solution maps AI systems to applicable regulations and mandates.',
    productRef: 'watsonx-governance',
  },
  {
    id: 'gov-issues',
    label: 'Issues and evidence',
    layer: 'governance-core',
    description:
      'Governance issue management and audit evidence retention. watsonx.governance provides alert-driven workflow activity; IBM OpenPages governance workflows support structured issue investigation, task assignment, and evidence production.',
    productRef: 'watsonx-governance',
  },
  {
    id: 'gov-agent-orchestration',
    label: 'Agent orchestration & control',
    layer: 'governance-core',
    description:
      'Unified control plane for governing and operating AI agents across heterogeneous environments. IBM watsonx.Orchestrate acts as an Agentic Control Plane — observing, governing, and operating agents regardless of where they were built, providing governance policy enforcement and operational oversight at scale.',
    productRef: 'watsonx-orchestrate',
  },

  // ── Bottom layer: AI platforms ────────────────────────────────────────────
  { id: 'plat-ibm',        label: 'IBM AI platforms',             layer: 'platforms' },
  { id: 'plat-third-party',label: 'Third-party AI platforms',     layer: 'platforms' },
  { id: 'plat-saas',       label: 'SaaS AI',                      layer: 'platforms' },
  { id: 'plat-cloud',      label: 'Cloud deployments',            layer: 'platforms' },
  { id: 'plat-onprem',     label: 'On-premises deployments',      layer: 'platforms' },
];
