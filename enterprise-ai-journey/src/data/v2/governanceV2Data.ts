// ─── Section 1: AI Is Already Everywhere ──────────────────────────────────────────

export interface EnterpriseZoneV2 {
  id: string;
  name: string;
  category: 'business' | 'cloud' | 'developer' | 'risk_security';
  cloudRole?: 'primary' | 'secondary';
  description: string;
}

export interface AINodeV2 {
  id: string;
  name: string;
  category: 'traditional' | 'generative' | 'rag' | 'agent' | 'saas' | 'public';
  zoneId: string;
  cloudTarget: 'Azure (Primary)' | 'AWS (Secondary)' | 'Google Cloud' | 'SaaS/Public';
  phase: number;
  description: string;
}

export const ENTERPRISE_ZONES_V2: EnterpriseZoneV2[] = [
  {
    id: 'zone-azure',
    name: 'Azure Cloud Platform (Primary)',
    category: 'cloud',
    cloudRole: 'primary',
    description: 'Core enterprise cloud environment hosting Azure OpenAI, custom apps, and AI landing zones.',
  },
  {
    id: 'zone-aws-gcp',
    name: 'AWS & Google Cloud (Secondary)',
    category: 'cloud',
    cloudRole: 'secondary',
    description: 'Secondary cloud estates running specialized ML pipelines, Bedrock, and Vertex models.',
  },
  {
    id: 'zone-dev-teams',
    name: 'Developers & Platform Teams',
    category: 'developer',
    description: 'Software and data engineering squads rapidly deploying GenAI services, agents, and custom APIs.',
  },
  {
    id: 'zone-business-units',
    name: 'Business Units & Global Regions',
    category: 'business',
    description: 'Commercial, supply chain, regional manufacturing, and business ops adopting Copilots and SaaS AI.',
  },
  {
    id: 'zone-risk-security',
    name: 'Security, Risk & Compliance',
    category: 'risk_security',
    description: 'Oversight teams tasked with risk auditing, security posture, and regulatory compliance.',
  },
];

export const AI_NODES_V2: AINodeV2[] = [
  // Phase 1: Traditional ML & Predictive
  { id: 'node-ml-1', name: 'Predictive Quality Forecast', category: 'traditional', zoneId: 'zone-azure', cloudTarget: 'Azure (Primary)', phase: 1, description: 'Batch predictive quality regression on Azure ML' },
  { id: 'node-ml-2', name: 'Component Failure Estimator', category: 'traditional', zoneId: 'zone-aws-gcp', cloudTarget: 'AWS (Secondary)', phase: 1, description: 'XGBoost predictive maintenance on AWS SageMaker' },
  { id: 'node-ml-3', name: 'Regional Demand Predictor', category: 'traditional', zoneId: 'zone-business-units', cloudTarget: 'Azure (Primary)', phase: 1, description: 'Supply chain inventory forecasting model' },
  
  // Phase 2: Azure OpenAI & Foundation Models
  { id: 'node-aoai-1', name: 'Azure OpenAI GPT-4o Service', category: 'generative', zoneId: 'zone-azure', cloudTarget: 'Azure (Primary)', phase: 2, description: 'Central enterprise Azure OpenAI API gateway' },
  { id: 'node-aoai-2', name: 'Bedrock Claude 3.5 Sonnet', category: 'generative', zoneId: 'zone-aws-gcp', cloudTarget: 'AWS (Secondary)', phase: 2, description: 'AWS Bedrock foundation model for developer utilities' },
  { id: 'node-aoai-3', name: 'Vertex Gemini 1.5 Pro', category: 'generative', zoneId: 'zone-aws-gcp', cloudTarget: 'Google Cloud', phase: 2, description: 'Multimodal document parsing on Google Cloud' },

  // Phase 3: Copilots & SaaS AI
  { id: 'node-saas-1', name: 'Microsoft 365 Copilot', category: 'saas', zoneId: 'zone-business-units', cloudTarget: 'SaaS/Public', phase: 3, description: 'Office productivity and email draft synthesis for 45k seats' },
  { id: 'node-saas-2', name: 'GitHub Copilot Enterprise', category: 'saas', zoneId: 'zone-dev-teams', cloudTarget: 'SaaS/Public', phase: 3, description: 'Automated code completion across 350+ repos' },
  { id: 'node-saas-3', name: 'Salesforce Einstein AI', category: 'saas', zoneId: 'zone-business-units', cloudTarget: 'SaaS/Public', phase: 3, description: 'Customer relationship summary and opportunity scoring' },

  // Phase 4: RAG & Knowledge Assistants
  { id: 'node-rag-1', name: 'Engineering Specs RAG', category: 'rag', zoneId: 'zone-azure', cloudTarget: 'Azure (Primary)', phase: 4, description: 'Vector search over 80,000 engineering CAD/PDF specifications' },
  { id: 'node-rag-2', name: 'Procurement Contract RAG', category: 'rag', zoneId: 'zone-business-units', cloudTarget: 'Azure (Primary)', phase: 4, description: 'Hybrid search answering supplier contract inquiries' },
  { id: 'node-rag-3', name: 'Regulatory Knowledge Engine', category: 'rag', zoneId: 'zone-risk-security', cloudTarget: 'Azure (Primary)', phase: 4, description: 'Legal and regulatory search engine across multi-region laws' },

  // Phase 5: Autonomous & Multi-Agent Systems
  { id: 'node-agent-1', name: 'Autonomous Triage Agent', category: 'agent', zoneId: 'zone-dev-teams', cloudTarget: 'Azure (Primary)', phase: 5, description: 'Agent dynamically querying databases, invoking APIs, and auto-closing issues' },
  { id: 'node-agent-2', name: 'Multi-Agent Supplier Negotiator', category: 'agent', zoneId: 'zone-business-units', cloudTarget: 'Azure (Primary)', phase: 5, description: 'Coordinated planner and researcher agents issuing RFQ drafts' },
  { id: 'node-agent-3', name: 'Self-Healing Cloud Ops Agent', category: 'agent', zoneId: 'zone-azure', cloudTarget: 'Azure (Primary)', phase: 5, description: 'Multi-step agent with root credentials restarting infrastructure' },

  // Phase 6: Public & Shadow AI
  { id: 'node-pub-1', name: 'ChatGPT Enterprise & Web', category: 'public', zoneId: 'zone-business-units', cloudTarget: 'SaaS/Public', phase: 6, description: 'Ad-hoc employee brainstorming, document translation, and rewriting' },
  { id: 'node-pub-2', name: 'Perplexity & Claude Web', category: 'public', zoneId: 'zone-dev-teams', cloudTarget: 'SaaS/Public', phase: 6, description: 'External deep technical research by engineering teams' },
];

// ─── Section 2: AI in Production (Live Workloads) ──────────────────────────────

export interface ProductionWorkloadV2 {
  id: string;
  name: string;
  type: string;
  platform: string;
  inputsOutputs: {
    prompts: string;
    retrievals: string;
    toolCalls: string;
    predictions: string;
    actions: string;
    responses: string;
  };
  operationalRisk: string;
}

export const PRODUCTION_WORKLOADS_V2: ProductionWorkloadV2[] = [
  {
    id: 'workload-1',
    name: 'Predictive Maintenance Telemetry Model',
    type: 'Predictive ML & IoT Regression',
    platform: 'Azure ML + Industrial IoT Gateway',
    inputsOutputs: {
      prompts: 'N/A (Continuous Sensor Data Stream)',
      retrievals: 'Telemetry time-series database (120 Hz vibration, thermal sensors)',
      toolCalls: 'PLC trigger, Work-order emission API',
      predictions: '93.4% probability of bearing failure in spindle 4B within 72 hours',
      actions: 'Scheduled preventive line downtime and auto-ordered replacement part',
      responses: 'Alert dispatch to Plant Maintenance Lead on-call',
    },
    operationalRisk: 'Uncalibrated drift leads to unscheduled plant shutdown or missed catastrophic mechanical failure.',
  },
  {
    id: 'workload-2',
    name: 'Procurement Copilot & Supplier Analyst',
    type: 'Generative AI + Function Calling',
    platform: 'Azure OpenAI GPT-4o + Azure Functions',
    inputsOutputs: {
      prompts: '"Review Supplier Q2 tier pricing against raw lithium index and draft re-negotiation terms"',
      retrievals: 'ERP database, Supplier Master Contract PDF (Confidential Schedule B)',
      toolCalls: 'get_commodity_index("lithium"), query_erp_orders("supplier_912")',
      predictions: 'Identified 11.2% over-index pricing delta ($4.2M variance)',
      actions: 'Generated and queued supplier counter-proposal draft in SAP Ariba',
      responses: '"Re-negotiation notice created with pricing delta breakdown attached"',
    },
    operationalRisk: 'Hallucinated commercial baseline sent directly to key tier-1 supplier without contract lawyer signoff.',
  },
  {
    id: 'workload-3',
    name: 'Engineering Knowledge & CAD Assistant',
    type: 'Advanced RAG Pipeline',
    platform: 'Azure AI Search + GPT-4o Mini',
    inputsOutputs: {
      prompts: '"What is the maximum torque spec for high-voltage battery housing bracket bolts?"',
      retrievals: 'Vector chunks from 2024 chassis engineering standard rev 4.2',
      toolCalls: 'calculate_safety_margin(bracket_id="HV-994", torque_nm=45)',
      predictions: 'Retrieved chunk confidence score: 0.88',
      actions: 'Highlighted critical torque specification and safety margin warning',
      responses: '"Standard specifies 45 Nm ± 2 Nm using class 10.9 fasteners with Loctite 243."',
    },
    operationalRisk: 'Outdated engineering chunk indexed; technician applies superseded torque value on battery pack.',
  },
  {
    id: 'workload-4',
    name: 'Autonomous Customer & Dealer Support Agent',
    type: 'Multi-Step Autonomous Agent',
    platform: 'Custom LangGraph on AWS Bedrock (Claude 3.5 Sonnet)',
    inputsOutputs: {
      prompts: '"Fleet client reports 3 trucks displaying error DTC 4364-18 on telematics"',
      retrievals: 'Diagnostic trouble code manual, warranty database, dealer parts stock',
      toolCalls: 'verify_warranty(vin_list), book_service_bay(dealer_id="SE-09"), issue_part_hold("NOx_Sensor")',
      predictions: 'NOx sensor degradation with 98% diagnostic match',
      actions: 'Dispatched mobile technician, held parts at regional hub, credited warranty account $3,400',
      responses: '"Warranty claim pre-approved and service dispatched for 08:00 tomorrow."',
    },
    operationalRisk: 'Agent executes unauthorized financial credit and allocates dealer inventory without human-in-the-loop review.',
  },
  {
    id: 'workload-5',
    name: 'Embedded HR Talent Matcher (SaaS)',
    type: 'Embedded SaaS AI Engine',
    platform: 'Workday AI Talent Optimization',
    inputsOutputs: {
      prompts: 'N/A (Automated Candidate Screening)',
      retrievals: 'Employee skills inventory, candidate resume corpus',
      toolCalls: 'ranking_algorithm_v3, notify_recruiter()',
      predictions: 'Candidate match score: 87th percentile for Senior Powertrain Architect',
      actions: 'Filtered out 40 candidate profiles below threshold score',
      responses: 'Shortlisted top 5 candidates for hiring manager review',
    },
    operationalRisk: 'Potential algorithmic bias violates EU AI Act employment fairness guidelines with zero audit log.',
  },
];

// ─── Section 3: The Governance Gap ─────────────────────────────────────────────

export interface GovernanceGapQuestion {
  question: string;
  traditionalProcess: string;
  operationalReality: string;
  gapImpact: string;
}

export const GOVERNANCE_GAP_QUESTIONS: GovernanceGapQuestion[] = [
  {
    question: 'Which model version is running right now?',
    traditionalProcess: 'Recorded in static Word architecture assessment or JIRA ticket at launch.',
    operationalReality: 'Cloud providers auto-updated API endpoints or developers hot-swapped to GPT-4o-mini overnight.',
    gapImpact: 'Zero real-time record of active weights, parameters, or vendor model deprecation dates.',
  },
  {
    question: 'Which prompt template & system instructions are active?',
    traditionalProcess: 'Approved in a review committee presentation 6 months ago.',
    operationalReality: 'Engineers iteratively changed system prompts in GitHub commits to fix edge cases without re-review.',
    gapImpact: 'Behavioral safety guardrails altered without risk or compliance oversight.',
  },
  {
    question: 'Which tools and permissions can the agent execute?',
    traditionalProcess: 'Scope defined in initial architecture review as "read-only assistance".',
    operationalReality: 'Agent granted write API keys to database and CRM to enable "actionable automation".',
    gapImpact: 'Agent can autonomously alter enterprise data or trigger external transactions without authorization.',
  },
  {
    question: 'What data sources did the RAG pipeline retrieve from?',
    traditionalProcess: 'Static data catalog entry claiming "approved internal documentation only".',
    operationalReality: 'Vector database re-indexed SharePoint drive containing unvetted drafts and confidential notes.',
    gapImpact: 'AI responds using ungrounded, superseded, or restricted internal data.',
  },
  {
    question: 'Can you produce end-to-end evidence for an audit?',
    traditionalProcess: 'Assemble screenshots, emails, and confluence pages over a 6-week manual audit exercise.',
    operationalReality: 'Auditors require immutable runtime lineage of inputs, outputs, approvals, and evaluation metrics.',
    gapImpact: 'High risk of regulatory non-compliance fines and inability to defend decisions in court.',
  },
];

// ─── Section 4: Fragmented Visibility (6 Viewpoints) ──────────────────────────

export interface TeamViewpointV2 {
  id: 'business' | 'security' | 'risk' | 'compliance' | 'architecture' | 'engineering';
  title: string;
  role: string;
  whatTheySee: string[];
  blindSpots: string[];
  keyQuote: string;
}

export const TEAM_VIEWPOINTS_V2: TeamViewpointV2[] = [
  {
    id: 'business',
    title: 'Business & Regional Teams',
    role: 'P&L Owners, Regional Managers, Product Leads',
    whatTheySee: [
      'Copilot adoption rates and user satisfaction',
      'Time saved per employee on routine emails and reports',
      'Feature delivery speed for digital customer tools',
      'Projected ROI and cost savings across business units',
    ],
    blindSpots: [
      'Underlying cloud API costs and token consumption spikes',
      'Model drift, hallucination frequency, and grounding degradation',
      'Whether data ingested into custom RAG violates cross-border data residency',
      'Regulatory liability under EU AI Act classification',
    ],
    keyQuote: '"Our teams are 30% faster with Copilot, so let’s expand it globally next quarter."',
  },
  {
    id: 'security',
    title: 'Security & InfoSec Teams',
    role: 'CISO, SOC Analysts, AppSec Engineers',
    whatTheySee: [
      'Cloud egress network traffic and IP connections',
      'DLP alerts and sensitive keyword detection on perimeter',
      'API gateway token authentication logs',
      'Third-party vendor security questionnaires',
    ],
    blindSpots: [
      'Whether prompt injections successfully bypassed guardrails inside the model',
      'Which internal documents the RAG vector store leaked to non-authorized staff',
      'Autonomous agent decision logic and lateral tool invocations',
      'Semantic drift of model behavior vs original baseline',
    ],
    keyQuote: '"Network traffic looks encrypted, but we have no visibility into what the prompt or agent actually executed."',
  },
  {
    id: 'risk',
    title: 'Enterprise Risk Management',
    role: 'Chief Risk Officer, Operational Risk Managers',
    whatTheySee: [
      'Annual model risk assessment spreadsheets',
      'Static risk tiering questionnaires completed at project kickoff',
      'Incident management tickets after major failures',
      'Vendor SLA agreements',
    ],
    blindSpots: [
      'Real-time changes to model versions or API providers in production',
      'Unmonitored cumulative risk across 200+ interconnected micro-AI services',
      'Whether predictive models have drifted into unfair or biased predictions',
      'Autonomous agents acting outside prescribed boundaries',
    ],
    keyQuote: '"On paper, we completed the risk checklist, but we don’t know what is running in production today."',
  },
  {
    id: 'compliance',
    title: 'Legal & Compliance',
    role: 'Chief Compliance Officer, Data Privacy Officer, Legal Counsel',
    whatTheySee: [
      'Privacy policies, Terms of Service agreements, and GDPR records',
      'EU AI Act high-risk classification criteria checklists',
      'Employee acceptable use policy signoffs',
      'Annual corporate compliance audit reports',
    ],
    blindSpots: [
      'Continuous technical documentation required for EU AI Act compliance',
      'Verifiable logs of human oversight during automated agent actions',
      'Training data provenance and copyrighted material ingestion',
      'Systematic tracking of high-risk AI deployments across business subsidiaries',
    ],
    keyQuote: '"How do we prove to the EU regulator that our autonomous systems have continuous human oversight?"',
  },
  {
    id: 'architecture',
    title: 'Enterprise Architecture',
    role: 'Chief Architect, Cloud & AI Architects',
    whatTheySee: [
      'High-level cloud topology (Azure primary, AWS secondary)',
      'Reference architectures for RAG and LLM applications',
      'Approved technology stacks and integration patterns',
      'Enterprise API gateway standards',
    ],
    blindSpots: [
      'Shadow AI endpoints deployed directly by regional teams or contractors',
      'Direct LLM API calls embedded directly in frontend code bypassing gateways',
      'Proliferation of disparate vector databases and local embeddings',
      'End-to-end telemetry across multi-agent orchestration flows',
    ],
    keyQuote: '"Our reference architecture mandates centralized gateways, but reality has branched into dozens of custom setups."',
  },
  {
    id: 'engineering',
    title: 'AI & Data Engineering',
    role: 'Lead ML Engineers, Full-Stack Devs, Data Scientists',
    whatTheySee: [
      'Latency metrics, token consumption, and API response codes',
      'Prompt templates in Git repos and CI/CD pipelines',
      'Vector chunking parameters and retrieval cosine similarities',
      'Model fine-tuning loss curves and local test suites',
    ],
    blindSpots: [
      'Enterprise-wide risk posture and cross-functional compliance mandates',
      'Downstream legal liability for hallucinated contract guidance',
      'How changes in prompt tuning impact enterprise policy compliance',
      'Unified audit trail format required by risk and regulatory bodies',
    ],
    keyQuote: '"The build passes and latency is 350ms — we are ready to deploy to production."',
  },
];

// ─── Section 5: Regulatory Pressure (EU AI Act & High-Risk AI) ────────────────

export interface RegulatoryObligationV2 {
  id: string;
  category: string;
  euArticle: string;
  requirement: string;
  automotiveExample: string;
  operationalProofNeeded: string;
}

export const REGULATORY_OBLIGATIONS_V2: RegulatoryObligationV2[] = [
  {
    id: 'reg-1',
    category: 'High-Risk AI System Classification',
    euArticle: 'EU AI Act Article 6 & Annex III',
    requirement: 'AI systems used as safety components of vehicles, industrial machinery, or critical infrastructure face mandatory conformity assessments.',
    automotiveExample: 'Autonomous driving perception, driver alertness monitoring, and brake-assist predictive models.',
    operationalProofNeeded: 'Formal risk management system active throughout the entire lifecycle with continuous post-market monitoring.',
  },
  {
    id: 'reg-2',
    category: 'Technical Documentation & Record-Keeping',
    euArticle: 'EU AI Act Articles 11 & 12',
    requirement: 'Comprehensive technical documentation must be automatically generated and maintained prior to deployment, including automatic logging of events.',
    automotiveExample: 'Complete version history of model weights, training datasets, prompt revisions, and continuous evaluation metrics.',
    operationalProofNeeded: 'Automated lineage tracking that records every model revision, test benchmark, and runtime parameter without manual documentation.',
  },
  {
    id: 'reg-3',
    category: 'Transparency & Information to Users',
    euArticle: 'EU AI Act Article 13',
    requirement: 'High-risk systems must be designed to enable deployers to interpret outputs and use them appropriately with clear operational specifications.',
    automotiveExample: 'Factory assembly cobot explaining confidence levels on weld integrity before alerting human inspector.',
    operationalProofNeeded: 'Clear explainability metrics, groundness confidence scores, and known operating limitations surfaced to operators.',
  },
  {
    id: 'reg-4',
    category: 'Human Oversight & Control',
    euArticle: 'EU AI Act Article 14',
    requirement: 'Must be designed so that natural persons can oversee operation, prevent or minimize risks, and effectively intervene or halt execution.',
    automotiveExample: 'Human-in-the-loop override required before an autonomous logistics agent alters high-voltage battery assembly sequences.',
    operationalProofNeeded: 'Runtime controls enforcing approval gates on high-impact actions and kill-switches capable of stopping agent loops.',
  },
  {
    id: 'reg-5',
    category: 'Accuracy, Robustness & Cybersecurity',
    euArticle: 'EU AI Act Article 15',
    requirement: 'High-risk systems must achieve appropriate levels of accuracy, robustness against adversarial attacks (prompt injection, data poisoning), and resilience.',
    automotiveExample: 'Connected vehicle telemetry assistant hardened against indirect prompt injection embedded in road sign OCR data.',
    operationalProofNeeded: 'Continuous runtime guardrails, toxicity and jailbreak detection, and automated evaluations for adversarial drift.',
  },
];

// ─── Section 6 & 7: Runtime AI Flow & Operational Governance Capabilities ────

export interface RuntimeStepV2 {
  id: string;
  stepNumber: number;
  label: string;
  runtimeAction: string;
  governanceQuestion: string;
  controlLayer: string;
  architecturalFit: string;
}

export const RUNTIME_STEPS_V2: RuntimeStepV2[] = [
  {
    stepNumber: 1,
    id: 'step-user',
    label: 'User / Client Application',
    runtimeAction: 'Initiates prompt, query, or automated operational trigger',
    governanceQuestion: 'Is the user authenticated? Is the use case registered in the enterprise AI inventory with an approved risk tier?',
    controlLayer: 'Inventory & Access Governance',
    architecturalFit: 'Enterprise AI Catalog / IAM',
  },
  {
    stepNumber: 2,
    id: 'step-gateway',
    label: 'AI Gateway / Routing Layer',
    runtimeAction: 'Traffic inspection, token rate limiting, and provider endpoint dispatch (e.g. Kong AI Gateway, Azure APIM)',
    governanceQuestion: 'Is traffic routed only to compliant model endpoints? Are rate limits and payload inspection policies enforced?',
    controlLayer: 'Runtime Traffic & Security Controls',
    architecturalFit: 'Kong AI Gateway / Azure API Management / Envoy',
  },
  {
    stepNumber: 3,
    id: 'step-prompt',
    label: 'Prompt & Guardrail Filter',
    runtimeAction: 'Validates prompt inputs against safety policies before model invocation',
    governanceQuestion: 'Is the prompt approved? Does it contain malicious jailbreaks, PII, or policy violations?',
    controlLayer: 'Runtime Guardrails & Prompt Policies',
    architecturalFit: 'Runtime Guardrails / Input Sanitizers',
  },
  {
    stepNumber: 4,
    id: 'step-model',
    label: 'Foundation Model / ML Engine',
    runtimeAction: 'Generates inference, text completion, embeddings, or numerical prediction',
    governanceQuestion: 'Is this model version approved for this specific risk tier? Are drift, latency, and cost being tracked in real time?',
    controlLayer: 'Model Lifecycle & Evaluation Monitoring',
    architecturalFit: 'Model Serving Infrastructure (Azure OpenAI, Bedrock, Vertex)',
  },
  {
    stepNumber: 5,
    id: 'step-rag',
    label: 'RAG Retrieval & Knowledge Base',
    runtimeAction: 'Fetches vectorized context chunks from enterprise vector indexes and relational data stores',
    governanceQuestion: 'Is the knowledge source verified and updated? Does retrieval violate document classification or access rights?',
    controlLayer: 'Knowledge Source Lineage & Grounding Checks',
    architecturalFit: 'Azure AI Search / Milvus / Pinecone / Enterprise Data Layer',
  },
  {
    stepNumber: 6,
    id: 'step-output',
    label: 'Output Evaluation & Grounding Filter',
    runtimeAction: 'Evaluates generated response against retrieved context and truth benchmarks',
    governanceQuestion: 'Is the output grounded in facts? Does it contain hallucinations, toxic language, or unverified claims?',
    controlLayer: 'Automated Evaluation Frameworks',
    architecturalFit: 'Runtime Evaluation Engines & Factuality Checkers',
  },
  {
    stepNumber: 7,
    id: 'step-agents',
    label: 'Agent Orchestration & Tool Calls',
    runtimeAction: 'Autonomous planner executes multi-step logic and calls external APIs or databases',
    governanceQuestion: 'Is the agent permitted to execute this specific tool? Does the transaction exceed risk thresholds requiring human approval?',
    controlLayer: 'Agent Permission & Action Governance',
    architecturalFit: 'Agent Execution Runtimes (LangGraph, CrewAI, AutoGen)',
  },
  {
    stepNumber: 8,
    id: 'step-actions',
    label: 'Enterprise Action & Audit Record',
    runtimeAction: 'Modifies business systems (ERP, CRM, SCADA) and records audit log',
    governanceQuestion: 'Can we produce immutable lineage and cryptographic evidence linking prompt, retrieval, model version, and outcome?',
    controlLayer: 'Evidence Collection & Compliance Reporting',
    architecturalFit: 'Enterprise Governance Repository / Audit Store',
  },
];

// ─── Section 8: Point Solutions vs Holistic Operational Governance ───────────

export interface DimensionComparisonV2 {
  capability: string;
  pointSolutionFocus: string;
  ibmHolisticPov: string;
}

export const DIMENSION_COMPARISONS_V2: DimensionComparisonV2[] = [
  {
    capability: 'Runtime Traffic & Gateways',
    pointSolutionFocus: 'Focuses on token routing, rate limiting, and API proxying (e.g. Kong, Portkey, LiteLLM).',
    ibmHolisticPov: 'Treats gateways as valuable runtime enforcement points, but integrates them into end-to-end risk policies and lifecycle compliance.',
  },
  {
    capability: 'Enterprise AI Inventory',
    pointSolutionFocus: 'Scattered across individual cloud console dashboards or manual JIRA/Excel spreadsheets.',
    ibmHolisticPov: 'Single unified catalog of every AI model, prompt, RAG pipeline, agent, and SaaS tool mapped to business owners and risk tiers.',
  },
  {
    capability: 'Continuous Model & RAG Evaluation',
    pointSolutionFocus: 'Offline developer notebooks or isolated testing libraries (Ragas, TruLens) run prior to deployment.',
    ibmHolisticPov: 'Continuous automated evaluation in production tracking drift, hallucination rate, context relevance, and fairness.',
  },
  {
    capability: 'Regulatory Compliance & Evidence',
    pointSolutionFocus: 'Point tools generate isolated log dumps with no mapping to regulatory frameworks.',
    ibmHolisticPov: 'Automated mapping to EU AI Act, NIST AI RMF, and ISO 42001 with auto-generated compliance fact-sheets and audit trails.',
  },
  {
    capability: 'Agentic AI Oversight',
    pointSolutionFocus: 'Basic function calling wrappers without policy constraints or human-in-the-loop controls.',
    ibmHolisticPov: 'Policy-based agent boundaries, tool permissions, step-budget limits, and automated approval gates for high-impact actions.',
  },
  {
    capability: 'Multi-Cloud & Heterogeneous AI',
    pointSolutionFocus: 'Locked into proprietary vendor silos (Azure-only, AWS-only, or standalone startup niches).',
    ibmHolisticPov: 'Open, vendor-agnostic governance operating seamlessly across Azure OpenAI, AWS Bedrock, Google Vertex, open-source, and on-prem.',
  },
];

// ─── Section 9: AI Parity (Traditional ML vs GenAI vs Agents) ─────────────────

export interface AITypeComparisonV2 {
  type: string;
  primaryFocus: string;
  uniqueGovernanceChallenges: string[];
  commonGovernanceControls: string[];
  keyMetrics: string[];
}

export const AI_TYPES_COMPARISON_V2: AITypeComparisonV2[] = [
  {
    type: 'Traditional Predictive ML',
    primaryFocus: 'Statistical regression, classification, tabular decision trees, computer vision.',
    uniqueGovernanceChallenges: [
      'Data drift and concept drift over time',
      'Algorithmic bias and disparate impact on protected classes',
      'Feature attribution stability and explainability',
      'Model performance degradation under shifting market conditions',
    ],
    commonGovernanceControls: [
      'Inventory registration and business ownership assignment',
      'Pre-deployment risk tiering and approval workflows',
      'Automated performance monitoring and alerting',
      'Audit logging and compliance documentation',
    ],
    keyMetrics: ['ROC-AUC / F1-Score', 'Disparate Impact Ratio', 'Population Stability Index (PSI)', 'Prediction Latency'],
  },
  {
    type: 'Generative AI & RAG',
    primaryFocus: 'LLM completions, summarization, document Q&A, knowledge search.',
    uniqueGovernanceChallenges: [
      'Stochastic outputs and non-deterministic responses',
      'Hallucinations and ungrounded factual claims',
      'Prompt injection vulnerabilities and jailbreak attempts',
      'Vector retrieval staleness and unauthorized chunk leakage',
    ],
    commonGovernanceControls: [
      'Inventory registration and business ownership assignment',
      'Pre-deployment risk tiering and approval workflows',
      'Automated performance monitoring and alerting',
      'Audit logging and compliance documentation',
    ],
    keyMetrics: ['Faithfulness / Groundedness', 'Answer Relevance', 'Context Recall & Precision', 'Toxicity & PII Leakage Rate'],
  },
  {
    type: 'Autonomous Agentic AI',
    primaryFocus: 'Multi-step autonomous planning, tool invocation, database mutation, external actions.',
    uniqueGovernanceChallenges: [
      'Unbounded looping and unexpected state escalation',
      'Autonomous tool permissions and unauthorized data mutation',
      'Lack of deterministic execution trace for debugging',
      'Multi-agent cascading failures and emergent behaviors',
    ],
    commonGovernanceControls: [
      'Inventory registration and business ownership assignment',
      'Pre-deployment risk tiering and approval workflows',
      'Automated performance monitoring and alerting',
      'Audit logging and compliance documentation',
    ],
    keyMetrics: ['Tool Execution Success Rate', 'Action Budget & Loop Limits', 'Human Escalation Frequency', 'Transaction Safety Rate'],
  },
];

// ─── Section 10: IBM Architecture & watsonx.governance POV ────────────────────

export interface ArchTierV2 {
  tierNumber: number;
  name: string;
  badge: string;
  description: string;
  components: {
    title: string;
    description: string;
    examples?: string;
  }[];
}

export const ARCHITECTURE_TIERS_V2: ArchTierV2[] = [
  {
    tierNumber: 1,
    name: 'Business Outcomes & Oversight Layer',
    badge: 'Enterprise Strategic Layer',
    description: 'Executive visibility, regulatory audit reporting, and enterprise risk posture tracking across global business units.',
    components: [
      { title: 'Executive Risk Dashboards', description: 'Real-time visibility into enterprise-wide AI risk exposure and regulatory readiness.' },
      { title: 'Regulatory Reporting & Evidence', description: 'Automated generation of EU AI Act, NIST AI RMF, and ISO 42001 compliance documentation.' },
      { title: 'Cross-Functional Review Portals', description: 'Collaborative review gates connecting Legal, Compliance, Security, and Engineering.' },
    ],
  },
  {
    tierNumber: 2,
    name: 'watsonx.governance — Operational Governance Foundation',
    badge: 'Core Governance Engine',
    description: 'The unified control plane connecting AI inventory, risk tiering, lifecycle approvals, evaluations, and automated audit fact-sheets.',
    components: [
      { title: 'Enterprise AI Inventory', description: 'Centralized repository of all models, prompts, RAG pipelines, agents, and SaaS AI with owner metadata.' },
      { title: 'Lifecycle & Policy Engine', description: 'Configurable approval gates enforcing compliance checklists across development, test, and production.' },
      { title: 'Automated FactSheets & Evidence', description: 'Auto-captures parameters, training datasets, test results, and runtime telemetry for audit-ready proof.' },
      { title: 'Continuous Evaluations & Monitoring', description: 'Tracks drift, fairness, hallucination, and toxicity in real time with configurable alert thresholds.' },
    ],
  },
  {
    tierNumber: 3,
    name: 'Runtime Controls & Telemetry Signals',
    badge: 'Runtime Enforcement & Signal Ingestion',
    description: 'Operational enforcement layers inspecting live traffic, filtering prompts, and streaming telemetry signals to the governance foundation.',
    components: [
      { title: 'AI Gateways & API Proxies', description: 'Token management, traffic routing, and policy enforcement (e.g. Kong AI Gateway, Azure APIM).' },
      { title: 'Runtime Guardrails & Filters', description: 'Real-time prompt injection detection, PII redacting, and output safety filters.' },
      { title: 'Security Signal Integration', description: 'Data exposure events, network anomalies, and sensitive data access signals from tools like IBM Guardium.' },
    ],
  },
  {
    tierNumber: 4,
    name: 'Heterogeneous AI Execution Ecosystem',
    badge: 'Multi-Cloud & Multi-Model Execution',
    description: 'The diverse multi-cloud environments, foundation models, agents, and SaaS platforms running production workloads.',
    components: [
      { title: 'Azure Cloud Platform (Primary)', description: 'Azure OpenAI (GPT-4o), Azure AI Search, Azure ML, and Microsoft 365 Copilot.' },
      { title: 'AWS & Google Cloud (Secondary)', description: 'AWS Bedrock (Claude), SageMaker, Google Vertex AI (Gemini), and BigQuery ML.' },
      { title: 'Open-Source & On-Premises', description: 'Llama 3, Mistral, custom fine-tuned weights hosted in private datacenters or OpenShift.' },
      { title: 'Autonomous Multi-Agent Systems', description: 'LangGraph, CrewAI, AutoGen agents executing external tools, APIs, and enterprise transactions.' },
    ],
  },
];

// ─── Section 11: Transformation View (Before vs After) ────────────────────────

export interface TransformationPillarV2 {
  pillar: string;
  before: string;
  after: string;
  strategicOutcome: string;
}

export const TRANSFORMATION_PILLARS_V2: TransformationPillarV2[] = [
  {
    pillar: 'AI Discovery & Inventory',
    before: 'Scattered AI adoption across clouds and SaaS with zero central visibility. Shadow AI and unapproved APIs.',
    after: 'Single unified enterprise catalog recording every model, prompt, RAG pipeline, and agent with clear ownership and risk classification.',
    strategicOutcome: 'Complete operational visibility across all enterprise environments.',
  },
  {
    pillar: 'Governance & Approval Process',
    before: 'Slow, manual risk committees relying on static questionnaires and PowerPoint architecture decks that become obsolete at deploy time.',
    after: 'Continuous, policy-driven lifecycle governance with automated gates embedded directly into CI/CD and deployment pipelines.',
    strategicOutcome: 'Rapid innovation velocity with continuous compliance assurance.',
  },
  {
    pillar: 'Runtime Monitoring & Evaluation',
    before: 'Silent failures, unmonitored model drift, unnoticed hallucinations, and unverified agent actions impacting business systems.',
    after: 'Real-time continuous evaluation of accuracy, grounding, toxicity, cost, and agent execution boundaries with automated alerts.',
    strategicOutcome: 'Predictable, safe, and trustworthy AI operations in production.',
  },
  {
    pillar: 'Regulatory Compliance & Evidence',
    before: 'Panic-driven manual audits requiring 6+ weeks of screenshot gathering with high exposure to EU AI Act regulatory fines.',
    after: 'Immutable cryptographic audit trails, automated FactSheets, and real-time compliance mapping to global regulatory frameworks.',
    strategicOutcome: 'Audit-ready posture with defensible proof of human oversight.',
  },
];
