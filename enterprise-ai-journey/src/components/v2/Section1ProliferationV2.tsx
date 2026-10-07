import React from 'react';
import { Button, Tag } from '@carbon/react';
import { ArrowRight, Reset, Cloud, Application, Security, UserMultiple } from '@carbon/icons-react';
import { ENTERPRISE_ZONES_V2, AI_NODES_V2, AINodeV2 } from '../../data/v2/governanceV2Data';
import { useGovernanceV2Store } from '../../store/governanceV2Store';

const PHASE_NAMES: Record<number, string> = {
  1: 'Phase 1: Traditional ML & Predictive Analytics',
  2: 'Phase 2: Azure OpenAI & Multi-Cloud Foundation Models',
  3: 'Phase 3: Microsoft Copilot & Enterprise SaaS AI',
  4: 'Phase 4: RAG Pipelines & Knowledge Assistants',
  5: 'Phase 5: Autonomous & Multi-Agent Systems',
  6: 'Phase 6: Shadow & Direct Public AI Usage',
};

const CATEGORY_COLORS: Record<AINodeV2['category'], { border: string; bg: string; text: string; tagType: 'blue' | 'purple' | 'teal' | 'magenta' | 'warm-gray' | 'red' }> = {
  traditional: { border: '#6f6f6f', bg: '#f4f4f4', text: '#393939', tagType: 'warm-gray' },
  generative:  { border: '#8a3ffc', bg: '#f6f2ff', text: '#6929c4', tagType: 'purple' },
  saas:        { border: '#0f62fe', bg: '#edf5ff', text: '#0043ce', tagType: 'blue' },
  rag:         { border: '#007d79', bg: '#e5f6f6', text: '#005d5d', tagType: 'teal' },
  agent:       { border: '#ee538b', bg: '#fff0f7', text: '#9f1853', tagType: 'magenta' },
  public:      { border: '#da1e28', bg: '#fff1f1', text: '#a2191f', tagType: 'red' },
};

export const Section1ProliferationV2: React.FC = () => {
  const phase = useGovernanceV2Store((s) => s.section1Phase);
  const advancePhase = useGovernanceV2Store((s) => s.advanceSection1Phase);
  const setPhase = useGovernanceV2Store((s) => s.setSection1Phase);
  const selectedZoneId = useGovernanceV2Store((s) => s.selectedZoneId);
  const setSelectedZoneId = useGovernanceV2Store((s) => s.setSelectedZoneId);

  const visibleNodes = AI_NODES_V2.filter((node) => node.phase <= phase);

  return (
    <div className="section-inner v2-section">
      <div className="v2-section-header">
        <span className="v2-section-tag">Chapter 1 of 5 — The Problem</span>
        <h2 className="v2-section-title">AI Is Already Everywhere</h2>
        <p className="v2-section-subtitle">
          From central cloud platforms to regional business units and frontline developers, enterprise AI adoption has moved far beyond experimentation.
        </p>
      </div>

      <div className="v2-callout-banner">
        <strong>Core Reality:</strong> The challenge for enterprise leadership is no longer how to build or adopt AI. 
        The challenge is <em>how to govern an evolving, multi-cloud AI ecosystem operating at scale</em>.
      </div>

      {/* Interactive Phase Controller */}
      <div className="v2-interactive-controls-bar">
        <div className="v2-phase-info">
          <span className="v2-phase-badge">Adoption Wave {phase} of 6</span>
          <span className="v2-phase-name">{PHASE_NAMES[phase]}</span>
        </div>

        <div className="v2-phase-actions">
          {phase < 6 ? (
            <Button
              kind="primary"
              size="sm"
              renderIcon={ArrowRight}
              onClick={advancePhase}
            >
              Reveal Next AI Wave
            </Button>
          ) : (
            <Button
              kind="tertiary"
              size="sm"
              renderIcon={Reset}
              onClick={() => setPhase(1)}
            >
              Restart Adoption Waves
            </Button>
          )}
        </div>
      </div>

      {/* Cloud & Organizational Landscape Grid */}
      <div className="v2-prolif-landscape-grid">
        {ENTERPRISE_ZONES_V2.map((zone) => {
          const zoneNodes = visibleNodes.filter((n) => n.zoneId === zone.id);
          const isSelected = selectedZoneId === zone.id;

          return (
            <div
              key={zone.id}
              className={`v2-zone-card ${zone.cloudRole ? `v2-zone-card--${zone.cloudRole}` : ''} ${isSelected ? 'v2-zone-card--selected' : ''}`}
              onClick={() => setSelectedZoneId(isSelected ? null : zone.id)}
            >
              <div className="v2-zone-header">
                <div className="v2-zone-icon-title">
                  {zone.category === 'cloud' && <Cloud size={20} />}
                  {zone.category === 'developer' && <Application size={20} />}
                  {zone.category === 'business' && <UserMultiple size={20} />}
                  {zone.category === 'risk_security' && <Security size={20} />}
                  <h3 className="v2-zone-name">{zone.name}</h3>
                </div>
                {zone.cloudRole === 'primary' && <Tag type="blue" size="sm">Primary Cloud</Tag>}
                {zone.cloudRole === 'secondary' && <Tag type="cool-gray" size="sm">Secondary Cloud</Tag>}
              </div>

              <p className="v2-zone-desc">{zone.description}</p>

              <div className="v2-zone-nodes-container">
                <div className="v2-zone-nodes-label">
                  Active AI Workloads ({zoneNodes.length})
                </div>

                {zoneNodes.length === 0 ? (
                  <div className="v2-zone-empty-state">No AI workloads in this wave yet</div>
                ) : (
                  <div className="v2-zone-chips-grid">
                    {zoneNodes.map((node) => {
                      const styleInfo = CATEGORY_COLORS[node.category];
                      return (
                        <div
                          key={node.id}
                          className="v2-node-chip"
                          style={{ borderColor: styleInfo.border }}
                          title={`${node.name} — ${node.description}`}
                        >
                          <span className="v2-node-chip-badge" style={{ background: styleInfo.border }} />
                          <div className="v2-node-chip-content">
                            <span className="v2-node-chip-name">{node.name}</span>
                            <span className="v2-node-chip-cloud">{node.cloudTarget}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Legend & Takeaway */}
      <div className="v2-prolif-legend-strip">
        <div className="v2-legend-item"><span className="v2-legend-swatch" style={{ background: CATEGORY_COLORS.traditional.border }} /> Traditional ML</div>
        <div className="v2-legend-item"><span className="v2-legend-swatch" style={{ background: CATEGORY_COLORS.generative.border }} /> Foundation APIs (Azure OpenAI / Bedrock)</div>
        <div className="v2-legend-item"><span className="v2-legend-swatch" style={{ background: CATEGORY_COLORS.saas.border }} /> Copilots & SaaS AI</div>
        <div className="v2-legend-item"><span className="v2-legend-swatch" style={{ background: CATEGORY_COLORS.rag.border }} /> RAG & Vector Systems</div>
        <div className="v2-legend-item"><span className="v2-legend-swatch" style={{ background: CATEGORY_COLORS.agent.border }} /> Autonomous & Multi-Agent AI</div>
        <div className="v2-legend-item"><span className="v2-legend-swatch" style={{ background: CATEGORY_COLORS.public.border }} /> Public / External AI</div>
      </div>
    </div>
  );
};
