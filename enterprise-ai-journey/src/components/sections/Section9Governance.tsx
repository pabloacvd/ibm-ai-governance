import React from 'react';

const GOVOPS_FEATURES = [
  {
    id: 'gov-inventory',
    title: 'Enterprise AI Inventory and Governance Visibility',
    description:
      'The first challenge of AI governance is visibility. Organisations cannot govern AI systems they cannot identify. AI governance requires a common inventory that connects AI systems with owners, business purpose, risk classification, policies, controls and lifecycle status. watsonx.governance helps organisations establish a consistent inventory of governed AI assets and maintain an auditable view of how AI is being used across the enterprise.',
    imageUrl: 'https://assets.ibm.com/is/image/ibm/image-10-2?ts=1779345969197&dpr=off',
    imageAlt: 'watsonx.governance — Enterprise AI inventory showing use case relationships, ownership and risk classification',
    caption:
      'Understand AI systems in context through visibility into relationships between use cases, governance records, ownership and risk.',
  },
  {
    id: 'gov-lifecycle',
    title: 'Risk, Compliance and Lifecycle Governance',
    description:
      'Governance extends beyond inventory management. Organisations must continuously manage ownership, risk assessments, approvals, compliance obligations, evaluations and governance evidence throughout the lifecycle of an AI system. watsonx.governance helps maintain accountability and traceability from initial use case definition through deployment, monitoring and ongoing governance activities.',
    imageUrl: 'https://heidloff.net/assets/img/2024/07/xgov-overview-01.png',
    imageAlt: 'watsonx.governance — Governance overview showing lifecycle stages, risk assessments, approvals and compliance activities',
    caption:
      'Maintain governance visibility across AI use cases, lifecycle stages, risk assessments, approvals and operational governance activities.',
  },
  {
    id: 'gov-agents',
    title: 'Agent Oversight and Operational Control',
    description:
      'As organisations adopt Agentic AI, governance must extend beyond models and prompts. AI agents can invoke tools, access enterprise systems, interact with other agents and take actions on behalf of users. watsonx Orchestrate provides operational visibility across agent ecosystems, helping organisations understand agent activities, maintain traceability, establish human accountability and govern autonomous behaviour at scale.',
    imageUrl:
      'https://assets.ibm.com/adobe/assets/urn:aaid:aem:8a898685-9b9e-4905-bb32-a6afb3321b84/as/Orchestrate%20everything%203_2.png?fmt=png-alpha&smartcrop=3x2&dpr=on%2C1&fit=fit%2C1&width=1536&height=1024',
    imageAlt: 'watsonx Orchestrate — Operational overview of AI agents, human workflows and enterprise system integrations',
    caption:
      'Operational oversight for AI agents, human workflows, enterprise systems and business processes.',
  },
];

const Section9Governance: React.FC = () => {
  return (
    <div className="section-inner">
      <p className="section-eyebrow">Section 9</p>
      <h2 className="section-heading">Governance and Operational Control in Action</h2>
      <p className="section-body">
        Effective AI governance requires more than policies, committees and frameworks. Organisations need operational capabilities that continuously track AI assets, evaluate risk, monitor behaviour and maintain accountability as AI systems evolve.
      </p>
      <p className="section-body">
        IBM watsonx.governance and watsonx Orchestrate provide capabilities that help organisations establish visibility, accountability and operational oversight across Traditional AI, Generative AI, RAG and Agentic AI. Together they help transform governance from a point-in-time exercise into a continuous operating model.
      </p>

      <div className="gem-features">
        {GOVOPS_FEATURES.map((feature, index) => (
          <div
            key={feature.id}
            className={`gem-feature${index % 2 === 1 ? ' gem-feature--reversed' : ''}`}
          >
            <div className="gem-feature__text">
              <h3 className="gem-feature__title">{feature.title}</h3>
              <p className="gem-feature__description">{feature.description}</p>
            </div>
            <div className="gem-feature__image-wrapper">
              <img
                src={feature.imageUrl}
                alt={feature.imageAlt}
                className="gem-feature__image"
                loading="lazy"
              />
              <p className="gem-feature__caption">{feature.caption}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="gov-closing-statements">
        <p className="ibm-pov-statement">
          AI governance is not about governing a single model. It is about governing an AI ecosystem composed of use cases, models, data, prompts, tools, agents, owners, policies and controls.
        </p>
        <p className="ibm-pov-statement">
          Effective governance combines visibility, accountability, operational oversight and security across the entire AI landscape.
        </p>
      </div>
    </div>
  );
};

export default Section9Governance;
