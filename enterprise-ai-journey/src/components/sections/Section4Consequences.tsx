import React from 'react';
import { CONSEQUENCE_NODES } from '../../data/consequences';
import { useNarrativeStore } from '../../store/narrativeStore';
import type { ConsequenceCategory } from '../../models/types';

const CATEGORY_LABELS: Record<ConsequenceCategory, string> = {
  ungoverned:     'Ungoverned AI',
  risk:           'Risk',
  accountability: 'Accountability',
  technical:      'Technical',
  autonomy:       'Autonomy',
  audit:          'Audit',
};

const DIMENSION_LABELS = {
  business:     'Business impact',
  operational:  'Operational impact',
  regulatory:   'Regulatory concern',
  reputational: 'Reputational impact',
};

const CATEGORIES: ConsequenceCategory[] = [
  'ungoverned', 'risk', 'accountability', 'technical', 'autonomy', 'audit',
];

const Section4Consequences: React.FC = () => {
  const selectedConsequenceId = useNarrativeStore((s) => s.selectedConsequenceId);
  const selectConsequence = useNarrativeStore((s) => s.selectConsequence);

  const selectedNode = CONSEQUENCE_NODES.find((n) => n.id === selectedConsequenceId) ?? null;

  const handleKeyDown = (e: React.KeyboardEvent, id: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      selectConsequence(selectedConsequenceId === id ? null : id);
    } else if (e.key === 'Escape') {
      selectConsequence(null);
    }
  };

  return (
    <div className="section-inner">
      <p className="section-eyebrow">Section 4</p>
      <h2 className="section-heading">Consequences of Doing Nothing</h2>
      <p className="section-body">
        When AI systems operate without governance, the consequences are not theoretical. Select any item below to explore its business, operational, regulatory, and reputational implications.
      </p>

      <div className="consequences-layout">
        {/* Consequence map */}
        <div className="consequence-categories">
          {CATEGORIES.map((category) => {
            const nodes = CONSEQUENCE_NODES.filter((n) => n.category === category);
            return (
              <div key={category} className="consequence-category">
                <p className="consequence-category-label">{CATEGORY_LABELS[category]}</p>
                <div className="consequence-chips">
                  {nodes.map((node) => (
                    <button
                      key={node.id}
                      className={`consequence-chip${selectedConsequenceId === node.id ? ' consequence-chip--selected' : ''}`}
                      onClick={() =>
                        selectConsequence(selectedConsequenceId === node.id ? null : node.id)
                      }
                      onKeyDown={(e) => handleKeyDown(e, node.id)}
                      aria-pressed={selectedConsequenceId === node.id}
                    >
                      {node.label}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Impact panel */}
        <div className="consequence-panel" aria-live="polite">
          {selectedNode ? (
            <>
              <h3 className="consequence-panel__heading">{selectedNode.label}</h3>
              <div className="consequence-impact-list">
                {selectedNode.impacts.map((impact) => (
                  <div key={impact.dimension} className="consequence-impact-item">
                    <p className="consequence-impact-dimension">
                      {DIMENSION_LABELS[impact.dimension]}
                    </p>
                    <p className="consequence-impact-text">{impact.description}</p>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="consequence-panel-empty">
              <p>Select a consequence to explore its impact.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Section4Consequences;
