import type { ConsequenceNode } from '../models/types';

export const CONSEQUENCE_NODES: ConsequenceNode[] = [
  // ─── ungoverned ────────────────────────────────────────────────────────────
  {
    id: 'c-01',
    label: 'Unknown AI outside governance',
    category: 'ungoverned',
    impacts: [
      { dimension: 'business',     description: 'Decisions supported by AI systems that the organisation cannot identify or describe.' },
      { dimension: 'operational',  description: 'No ability to respond when an unregistered AI system fails or behaves unexpectedly.' },
      { dimension: 'regulatory',   description: 'Inability to demonstrate inventory completeness in response to regulatory inquiries or audits.' },
      { dimension: 'reputational', description: 'Public or customer discovery of AI use that the organisation was unaware of.' },
    ],
  },
  {
    id: 'c-02',
    label: 'Inconsistent risk assessment',
    category: 'risk',
    impacts: [
      { dimension: 'business',     description: 'High-risk AI systems treated as low-risk because assessment criteria are not standardised.' },
      { dimension: 'operational',  description: 'Different teams apply different thresholds, creating gaps and duplicated effort.' },
      { dimension: 'regulatory',   description: 'Risk classification inconsistent with regulatory expectations and sector standards.' },
      { dimension: 'reputational', description: 'Organisation unable to articulate its risk posture for AI systems under external scrutiny.' },
    ],
  },
  {
    id: 'c-03',
    label: 'Unapproved models in production',
    category: 'accountability',
    impacts: [
      { dimension: 'business',     description: 'Business decisions influenced by models that have not undergone review or sign-off.' },
      { dimension: 'operational',  description: 'No authorised owner, meaning issues cannot be escalated or resolved through defined channels.' },
      { dimension: 'regulatory',   description: 'Breach of change management and approval requirements in regulated industries.' },
      { dimension: 'reputational', description: 'Evidence of unauthorised AI use undermines confidence in governance maturity.' },
    ],
  },
  {
    id: 'c-04',
    label: 'Missing accountability',
    category: 'accountability',
    impacts: [
      { dimension: 'business',     description: 'No single owner for AI system behaviour, outcomes, or maintenance.' },
      { dimension: 'operational',  description: 'Incidents cannot be assigned, investigated, or resolved through a clear owner.' },
      { dimension: 'regulatory',   description: 'Many AI governance frameworks require a named accountable individual or function.' },
      { dimension: 'reputational', description: 'In the event of harm, no organisation is able to point to an accountable decision-maker.' },
    ],
  },
  {
    id: 'c-05',
    label: 'Outdated RAG knowledge',
    category: 'technical',
    impacts: [
      { dimension: 'business',     description: 'Employees and customers receive answers based on superseded policies, discontinued products, or expired information.' },
      { dimension: 'operational',  description: 'No process for validating that knowledge sources remain current, accurate, and authorised.' },
      { dimension: 'regulatory',   description: 'Incorrect regulatory or legal information surfaced by a RAG system may constitute a compliance failure.' },
      { dimension: 'reputational', description: 'Visible inaccuracies in AI-generated responses erode trust in the system and the organisation.' },
    ],
  },
  {
    id: 'c-06',
    label: 'Unsupported model changes',
    category: 'technical',
    impacts: [
      { dimension: 'business',     description: 'Foundation model or SaaS AI updates introduce behaviour changes that are undetected until they cause problems.' },
      { dimension: 'operational',  description: 'No mechanism for detecting when a dependency model version changes and re-evaluating behaviour.' },
      { dimension: 'regulatory',   description: 'Uncontrolled model changes undermine the integrity of previously completed compliance assessments.' },
      { dimension: 'reputational', description: 'Unexpected changes in AI behaviour become public incidents.' },
    ],
  },
  {
    id: 'c-07',
    label: 'Untraceable generated responses',
    category: 'accountability',
    impacts: [
      { dimension: 'business',     description: 'Inability to explain, investigate, or remediate a specific generative AI output after the fact.' },
      { dimension: 'operational',  description: 'No audit trail for what was generated, which model was used, or what sources were retrieved.' },
      { dimension: 'regulatory',   description: 'Regulators may require evidence of AI outputs in dispute or investigation scenarios.' },
      { dimension: 'reputational', description: 'Organisation cannot defend or correct AI-generated statements it cannot retrieve.' },
    ],
  },
  {
    id: 'c-08',
    label: 'Excessive agent permissions',
    category: 'autonomy',
    impacts: [
      { dimension: 'business',     description: 'Agents with over-broad permissions can take consequential actions beyond their intended scope.' },
      { dimension: 'operational',  description: 'Difficult to contain agent behaviour without disabling the system entirely.' },
      { dimension: 'regulatory',   description: 'Principle of least privilege and human oversight requirements may be violated.' },
      { dimension: 'reputational', description: 'Autonomous actions taken without authorisation become public and reputational events.' },
    ],
  },
  {
    id: 'c-09',
    label: 'Inappropriate autonomous actions',
    category: 'autonomy',
    impacts: [
      { dimension: 'business',     description: 'Financial, operational, or communication actions taken by AI without authorisation or review.' },
      { dimension: 'operational',  description: 'Reverting autonomous actions is costly, time-consuming, and sometimes impossible.' },
      { dimension: 'regulatory',   description: 'Failure to maintain meaningful human control over consequential AI decisions.' },
      { dimension: 'reputational', description: 'Discovery that an AI took consequential action without human oversight undermines stakeholder trust.' },
    ],
  },
  {
    id: 'c-10',
    label: 'Absent human oversight',
    category: 'autonomy',
    impacts: [
      { dimension: 'business',     description: 'No human-in-the-loop for high-stakes AI-influenced decisions.' },
      { dimension: 'operational',  description: 'Errors compound undetected until they create significant operational or customer impact.' },
      { dimension: 'regulatory',   description: 'Explicit human oversight requirements in sector regulations and AI governance frameworks are unmet.' },
      { dimension: 'reputational', description: 'Any harm attributed to fully automated AI decisions is amplified in public perception.' },
    ],
  },
  {
    id: 'c-11',
    label: 'Incomplete monitoring',
    category: 'technical',
    impacts: [
      { dimension: 'business',     description: 'Performance degradation, bias drift, or harmful outputs go undetected in production.' },
      { dimension: 'operational',  description: 'No trigger for investigation, retraining, or withdrawal when AI quality deteriorates.' },
      { dimension: 'regulatory',   description: 'Ongoing monitoring is an explicit requirement in multiple AI governance and financial regulation contexts.' },
      { dimension: 'reputational', description: 'Failures that would have been preventable with monitoring become public events.' },
    ],
  },
  {
    id: 'c-12',
    label: 'Manually assembled audit evidence',
    category: 'audit',
    impacts: [
      { dimension: 'business',     description: 'Significant staff time consumed preparing for audits or regulatory inquiries, at the expense of productive work.' },
      { dimension: 'operational',  description: 'Evidence is incomplete, inconsistent, or produced too slowly to be useful in a regulatory context.' },
      { dimension: 'regulatory',   description: 'Manual evidence assembly is error-prone and may produce inaccurate compliance representations.' },
      { dimension: 'reputational', description: 'Slow or inadequate regulatory response signals governance immaturity to supervisors and markets.' },
    ],
  },
  {
    id: 'c-13',
    label: 'Sensitive data exposure',
    category: 'risk',
    impacts: [
      { dimension: 'business',     description: 'Confidential business data or personal information transmitted to AI systems without appropriate controls.' },
      { dimension: 'operational',  description: 'No visibility into what data has been shared with AI services, making containment difficult.' },
      { dimension: 'regulatory',   description: 'Breach of data protection obligations where personal or regulated data enters an uncontrolled AI system.' },
      { dimension: 'reputational', description: 'Disclosure of data exposure to AI providers results in media coverage and customer concern.' },
    ],
  },
];
