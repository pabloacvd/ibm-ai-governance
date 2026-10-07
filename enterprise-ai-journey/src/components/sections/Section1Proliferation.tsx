import React from 'react';
import { Button } from '@carbon/react';
import { ArrowRight } from '@carbon/icons-react';
import { ENTERPRISE_ZONES, PROLIFERATION_NODES } from '../../data/proliferation';
import { useNarrativeStore } from '../../store/narrativeStore';
import type { AIType } from '../../models/types';

const AI_TYPE_COLOURS: Record<AIType, string> = {
  traditional: '#6f6f6f',
  generative:  '#8a3ffc',
  rag:         '#007d79',
  agentic:     '#0f62fe',
  saas:        '#ff832b',
  public:      '#da1e28',
};

const AI_TYPE_LABELS: Record<AIType, string> = {
  traditional: 'Traditional ML',
  generative:  'Generative AI',
  rag:         'RAG',
  agentic:     'Agentic AI',
  saas:        'Embedded SaaS AI',
  public:      'Public AI',
};

const PHASE_LABELS: Record<number, string> = {
  0: '—',
  1: 'Traditional ML models',
  2: 'Foundation model APIs',
  3: 'Prompt applications',
  4: 'RAG pipelines',
  5: 'Copilots',
  6: 'Embedded SaaS AI',
  7: 'AI agents',
  8: 'Multi-agent workflows',
  9: 'Direct public AI usage',
};

const Section1Proliferation: React.FC = () => {
  const proliferationPhase = useNarrativeStore((s) => s.proliferationPhase);
  const advanceProliferation = useNarrativeStore((s) => s.advanceProliferation);
  const reducedMotion = useNarrativeStore((s) => s.reducedMotion);

  const visibleNodes = PROLIFERATION_NODES.filter((n) => n.introduced <= proliferationPhase);
  const allRevealed = proliferationPhase >= 9;

  return (
    <div className="section-inner">
      <p className="section-eyebrow">Section 1</p>
      <h2 className="section-heading">AI is already everywhere</h2>
      <p className="section-body">
        Across every business unit, cloud platform, and SaaS subscription, AI is being adopted, built by development teams, procured by business owners, embedded by vendors, and used directly by employees. The organisation's ability to govern these systems has not kept pace with the speed of their introduction.
      </p>

      <div className="proliferation-layout">
        {/* Enterprise zones grid */}
        <div className="enterprise-zones-grid">
          {ENTERPRISE_ZONES.map((zone) => {
            const zoneNodes = visibleNodes.filter((n) => n.zone === zone.id);
            return (
              <div
                key={zone.id}
                className="enterprise-zone"
                style={{ backgroundColor: zone.colour }}
              >
                <p className="enterprise-zone__label">{zone.label}</p>
                <div className="enterprise-zone__nodes" aria-live={reducedMotion ? undefined : 'polite'}>
                  {zoneNodes.map((node) => (
                    <span
                      key={node.id}
                      className="proliferation-node-chip"
                      style={{ backgroundColor: AI_TYPE_COLOURS[node.type] }}
                      title={AI_TYPE_LABELS[node.type]}
                    >
                      {node.label}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Controls sidebar */}
        <div className="proliferation-controls">
          <div className="proliferation-phase-display">
            <span className="proliferation-phase-label">Introducing</span>
            <span className="proliferation-phase-name" aria-live="polite">
              {PHASE_LABELS[proliferationPhase]}
            </span>
          </div>

          {!allRevealed && (
            <Button
              kind="primary"
              size="md"
              renderIcon={ArrowRight}
              onClick={advanceProliferation}
            >
              Next AI wave
            </Button>
          )}

          <div className="proliferation-legend" aria-label="AI type legend">
            <p className="proliferation-legend-title">AI types</p>
            {(Object.entries(AI_TYPE_LABELS) as [AIType, string][]).map(([type, label]) => (
              <div key={type} className="proliferation-legend-item">
                <span
                  className="proliferation-legend-dot"
                  style={{ backgroundColor: AI_TYPE_COLOURS[type] }}
                  aria-hidden="true"
                />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {allRevealed && (
        <p className="section-primary-message" role="status">
          AI adoption is scaling faster than the organisation's ability to govern it.
        </p>
      )}
    </div>
  );
};

export default Section1Proliferation;
