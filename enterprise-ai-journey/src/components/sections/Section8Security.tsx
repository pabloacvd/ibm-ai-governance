import React from 'react';

const GEM_FEATURES = [
  {
    id: 'gem-visibility',
    title: 'End-to-end AI data visibility',
    description:
      'Guardium Exposure Manager maps how sensitive data flows into and through AI systems — across training data, retrieval pipelines, and model inputs — giving you a complete picture of where your data is exposed.',
    imageUrl:
      'https://assets.ibm.com/adobe/assets/urn:aaid:aem:2f70572a-36e8-42bb-8e1f-3ee48fcd9542/as/GEM%20End-to-End%20AI%20data%20Visibility.png?fmt=png-alpha&smartcrop=16x9&dpr=on%2C1&fit=fit%2C1&width=1584&height=891',
    imageAlt: 'Guardium Exposure Manager — End-to-end AI data visibility dashboard',
  },
  {
    id: 'gem-alerts',
    title: 'Sensitive data exposure alerts',
    description:
      'When sensitive data reaches an AI system it shouldn\'t, Guardium raises an alert with the context needed to act — identifying the data type, the AI system involved, and the policy that was breached.',
    imageUrl:
      'https://assets.ibm.com/adobe/assets/urn:aaid:aem:21c4d40e-5f86-4825-a944-340e0bf7c2c5/as/GEM%20Unified%20Invenstigation%20Content.png?fmt=png-alpha&smartcrop=16x9&dpr=on%2C1&fit=fit%2C1&width=1584&height=891',
    imageAlt: 'Guardium Exposure Manager — Sensitive data exposure alert panel',
  },
  {
    id: 'gem-investigation',
    title: 'Complete investigation context',
    description:
      'Every alert comes with full investigation context — data tracing, an exposure chain showing how the data moved, and the evidence needed to close the issue or report to regulators.',
    imageUrl:
      'https://assets.ibm.com/adobe/assets/urn:aaid:aem:ed61b30b-cdb3-464a-ac04-7521cda1f527/as/GEM%20Sensitive%20Data%20Exposure%20Alerts.png?fmt=png-alpha&smartcrop=16x9&dpr=on%2C1&fit=fit%2C1&width=1584&height=891',
    imageAlt: 'Guardium Exposure Manager — Unified investigation content and exposure chain',
  },
];

const Section8Security: React.FC = () => {
  return (
    <div className="section-inner">
      <p className="section-eyebrow">Section 8</p>
      <h2 className="section-heading">Security as Part of Governance</h2>
      <p className="section-body">
        Data security is one contributing discipline within AI governance — alongside risk management, compliance, ethics, and operational oversight. IBM Guardium Exposure Manager addresses one of the most critical gaps: understanding how sensitive data flows into AI systems and what happens when it is exposed.
      </p>
      <p className="section-body">
        Guardium Exposure Manager provides visibility, detection, and investigation capabilities that connect data security directly to the AI governance lifecycle — producing evidence for data handling policies and surfacing risks before they become incidents.
      </p>

      <div className="gem-features">
        {GEM_FEATURES.map((feature, index) => (
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section8Security;
