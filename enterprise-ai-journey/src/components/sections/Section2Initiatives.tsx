import React, { useState } from 'react';
import { AI_INITIATIVES } from '../../data/initiatives';
import type { AIType } from '../../models/types';

const AI_TYPE_LABELS: Record<AIType, string> = {
  traditional: 'Traditional ML',
  generative:  'Generative AI',
  rag:         'RAG',
  agentic:     'Agentic AI',
  saas:        'Embedded SaaS AI',
  public:      'Public AI',
};

const Section2Initiatives: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="section-inner">
      <p className="section-eyebrow">Section 2</p>
      <h2 className="section-heading">The Ungoverned AI Reality</h2>
      <p className="section-body">
        These six AI initiatives represent common patterns of AI adoption across a global enterprise. For each one, the same governance questions apply — and for most, none of them have been answered.
      </p>

      <div className="initiatives-grid" role="list">
        {AI_INITIATIVES.map((initiative) => (
          <article
            key={initiative.id}
            className="initiative-card"
            role="listitem"
            onMouseEnter={() => setHoveredId(initiative.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {hoveredId === initiative.id && (
              <div className="initiative-card__hover-tooltip" role="tooltip" aria-live="polite">
                <p className="initiative-card__hover-tooltip-heading">Governance questions not yet established</p>
                {initiative.hoverQuestions.map((q, i) => (
                  <p key={i} className="initiative-card__hover-tooltip-question">
                    <span className="initiative-card__hover-tooltip-badge" aria-hidden="true">?</span>
                    {q}
                  </p>
                ))}
              </div>
            )}

            <div className="initiative-card__header">
              <div className="initiative-card__title-group">
                <span className={`ai-type-tag ai-type-tag--${initiative.type}`}>
                  {AI_TYPE_LABELS[initiative.type]}
                </span>
                <h3 className="initiative-card__name">{initiative.name}</h3>
                <p className="initiative-card__description">{initiative.description}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Section2Initiatives;
