// ─── Union types ──────────────────────────────────────────────────────────────

export type AIType =
  | 'traditional'
  | 'generative'
  | 'rag'
  | 'agentic'
  | 'saas'
  | 'public';

export type EnterpriseZone =
  | 'business-unit'
  | 'region'
  | 'dev-team'
  | 'cloud'
  | 'saas'
  | 'data-centre'
  | 'application'
  | 'provider';

export type ConsequenceCategory =
  | 'ungoverned'
  | 'risk'
  | 'accountability'
  | 'technical'
  | 'autonomy'
  | 'audit';

export type IBMCapabilityLayer = 'use-cases' | 'governance-core' | 'platforms';

// ─── Section 1 ────────────────────────────────────────────────────────────────

export interface EnterpriseZoneConfig {
  id: EnterpriseZone;
  label: string;
  colour: string;
}

export interface ProliferationNode {
  id: string;
  label: string;
  type: AIType;
  zone: EnterpriseZone;
  introduced: number; // 1–9, the phase in which this node appears
}

// ─── Section 2 ────────────────────────────────────────────────────────────────

export interface GovernanceAnswer {
  question: string;
  answered: boolean;
  detail?: string;
}

export interface AIInitiative {
  id: string;
  name: string;
  type: AIType;
  description: string;
  governanceAnswers: GovernanceAnswer[];
  hoverQuestions: string[];
}

// ─── Section 3 ────────────────────────────────────────────────────────────────

export type PerspectiveNodeCategory =
  | 'ai-asset'
  | 'data-source'
  | 'model'
  | 'team'
  | 'platform'
  | 'business-unit';

export interface PerspectiveNode {
  id: string;
  label: string;
  category: PerspectiveNodeCategory;
  x?: number;
  y?: number;
}

export interface PerspectiveEdge {
  id: string;
  source: string;
  target: string;
  label?: string;
}

export interface OrgPerspective {
  id: string;
  label: string;
  description: string;
  visibleNodeIds: string[];
  hiddenDependencies: string[];
  missingOwnership: string[];
  missingEvidence: string[];
  inconsistentControls: string[];
}

// ─── Section 4 ────────────────────────────────────────────────────────────────

export interface ConsequenceImpact {
  dimension: 'business' | 'operational' | 'regulatory' | 'reputational';
  description: string;
}

export interface ConsequenceNode {
  id: string;
  label: string;
  category: ConsequenceCategory;
  impacts: ConsequenceImpact[];
}

// ─── Section 5 ────────────────────────────────────────────────────────────────

export interface LifecycleStage {
  id: string;
  label: string;
  description: string;
}

export interface GovernanceCapability {
  id: string;
  label: string;
  description: string;
}

// ─── Section 6 ────────────────────────────────────────────────────────────────

export interface SpecificConcern {
  id: string;
  label: string;
  description: string;
}

export interface AITypeProfile {
  type: AIType;
  label: string;
  tagline: string;
  commonControls: string[];
  specificConcerns: SpecificConcern[];
}

// ─── Section 7 ────────────────────────────────────────────────────────────────

export interface IBMProduct {
  id: string;
  name: string;
  category:
    | 'primary'
    | 'governance-console'
    | 'data-governance'
    | 'observability'
    | 'platform'
    | 'agentic-control';
  description: string;
  supportsTraditional: boolean;
  supportsGenerative: boolean;
  supportsAgentic: boolean;
}

export interface IBMCapabilityItem {
  id: string;
  label: string;
  layer: IBMCapabilityLayer;
  description?: string;
  productRef?: string; // id from IBM_PRODUCTS
}

// ─── Section 8 ────────────────────────────────────────────────────────────────

export interface SecurityScenarioStep {
  id: string;
  label: string;
  description: string;
  status: 'idle' | 'active' | 'detected' | 'blocked';
}
