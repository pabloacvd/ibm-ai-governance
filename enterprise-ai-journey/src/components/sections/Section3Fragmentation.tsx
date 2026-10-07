import React from 'react';
import { ORG_PERSPECTIVES } from '../../data/perspectives';
import { PERSPECTIVE_NODES } from '../../data/perspectives-network';
import { useNarrativeStore } from '../../store/narrativeStore';
import PerspectiveCanvas from '../PerspectiveCanvas';

const CANVAS_LEGEND = [
  { label: 'AI Asset',      colour: '#0f62fe' },
  { label: 'Data Source',   colour: '#697077' },
  { label: 'Model',         colour: '#8a3ffc' },
  { label: 'Team',          colour: '#007d79' },
  { label: 'Platform',      colour: '#4d5358' },
  { label: 'Business Unit', colour: '#a2a9b0' },
];

const Section3Fragmentation: React.FC = () => {
  const activePerspectiveId = useNarrativeStore((s) => s.activePerspectiveId);
  const activatePerspective = useNarrativeStore((s) => s.activatePerspective);

  const activePerspective = ORG_PERSPECTIVES.find((p) => p.id === activePerspectiveId) ?? null;

  const getNodeLabels = (ids: string[]) =>
    ids
      .map((id) => PERSPECTIVE_NODES.find((n) => n.id === id)?.label ?? id)
      .join(', ');

  return (
    <div className="section-inner">
      <p className="section-eyebrow">Section 3</p>
      <h2 className="section-heading">Fragmented Governance</h2>
      <p className="section-body">
        Governance information exists — but it is distributed across teams, tools, and processes, each with a partial view. Activate an organisational perspective below to see which AI assets and dependencies are visible, and which are not.
      </p>

      <div className="fragmentation-layout">
        {/* 1. Perspective selector */}
        <div
          className="perspective-buttons"
          role="group"
          aria-label="Organisational perspectives"
        >
          {ORG_PERSPECTIVES.map((perspective) => (
            <button
              key={perspective.id}
              className={`perspective-btn${activePerspectiveId === perspective.id ? ' perspective-btn--active' : ''}`}
              onClick={() =>
                activatePerspective(
                  activePerspectiveId === perspective.id ? null : perspective.id
                )
              }
              aria-pressed={activePerspectiveId === perspective.id}
            >
              {perspective.label}
            </button>
          ))}
        </div>

        {/* 2. Perspective description */}
        {activePerspective && activePerspective.description && (
          <div className="perspective-description" aria-live="polite">
            <p className="perspective-description__text">{activePerspective.description}</p>
          </div>
        )}

        {/* 3. Summary panel */}
        {activePerspective ? (
          <div className="perspective-summary" aria-live="polite">
            <div className="perspective-summary-col">
              <p className="perspective-summary-label">Visible to this perspective</p>
              <p className="perspective-summary-items">
                {activePerspective.visibleNodeIds.length > 0
                  ? getNodeLabels(activePerspective.visibleNodeIds)
                  : <span className="perspective-summary-empty">None</span>}
              </p>
            </div>
            <div className="perspective-summary-col">
              <p className="perspective-summary-label">Invisible dependencies</p>
              <p className="perspective-summary-items">
                {activePerspective.hiddenDependencies.length > 0
                  ? getNodeLabels(activePerspective.hiddenDependencies)
                  : <span className="perspective-summary-empty">None identified</span>}
              </p>
            </div>
            <div className="perspective-summary-col">
              <p className="perspective-summary-label">Missing ownership</p>
              {activePerspective.missingOwnership.length > 0
                ? <p className="perspective-summary-items">{getNodeLabels(activePerspective.missingOwnership)}</p>
                : <p className="perspective-summary-empty">None from this view</p>}
            </div>
            <div className="perspective-summary-col">
              <p className="perspective-summary-label">Missing evidence</p>
              {activePerspective.missingEvidence.length > 0
                ? <p className="perspective-summary-items">{getNodeLabels(activePerspective.missingEvidence)}</p>
                : <p className="perspective-summary-empty">None from this view</p>}
            </div>
          </div>
        ) : (
          <p className="section-body" style={{ color: 'var(--cds-text-helper, #6f6f6f)', fontStyle: 'italic' }}>
            Activate a perspective above to see what each part of the organisation can and cannot see.
          </p>
        )}

        {/* 4. Network canvas */}
        <div
          className="perspective-canvas-wrapper"
          role="img"
          aria-label="Enterprise AI governance network diagram"
        >
          <PerspectiveCanvas activePerspectiveId={activePerspectiveId} />
        </div>

        {/* 5. Canvas legend */}
        <div className="canvas-legend" aria-label="Node category legend">
          {CANVAS_LEGEND.map((item) => (
            <div key={item.label} className="canvas-legend-item">
              <span
                className="canvas-legend-swatch"
                style={{ backgroundColor: item.colour }}
                aria-hidden="true"
              />
              {item.label}
            </div>
          ))}
        </div>

        <p className="section-primary-message">
          Governance information exists, but it is fragmented across teams, platforms and processes.
        </p>
      </div>
    </div>
  );
};

export default Section3Fragmentation;
