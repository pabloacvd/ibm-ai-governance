import React from 'react';
import { Tag } from '@carbon/react';
import { User, Security, WarningHex, Scale, Network_3, Code } from '@carbon/icons-react';
import { TEAM_VIEWPOINTS_V2 } from '../../data/v2/governanceV2Data';
import { useGovernanceV2Store } from '../../store/governanceV2Store';

export const Section4FragmentedVisibilityV2: React.FC = () => {
  const activeId = useGovernanceV2Store((s) => s.activeViewpointId);
  const setActiveId = useGovernanceV2Store((s) => s.setActiveViewpointId);

  const activeViewpoint =
    TEAM_VIEWPOINTS_V2.find((v) => v.id === activeId) || TEAM_VIEWPOINTS_V2[0];

  return (
    <div className="section-inner v2-section">
      <div className="v2-section-header">
        <h2 className="v2-section-title">Fragmented Visibility: Six Viewpoints, Zero Unified Truth</h2>
        <p className="v2-section-subtitle">
          Every functional team in the enterprise interacts with AI from their own lens. Switch viewpoints below to see what each team sees—and the critical blindspots hidden beneath.
        </p>
      </div>

      <div className="v2-callout-banner">
        <strong>The Fragmentation Trap:</strong> Each team sees part of the truth. Nobody possesses the complete, operational, end-to-end picture.
      </div>

      {/* Six Viewpoint Switcher */}
      <div className="v2-viewpoints-tabbar" role="tablist" aria-label="Select enterprise stakeholder viewpoint">
        {TEAM_VIEWPOINTS_V2.map((vp) => {
          const isSelected = vp.id === activeId;
          return (
            <button
              key={vp.id}
              role="tab"
              aria-selected={isSelected}
              className={`v2-viewpoint-tab ${isSelected ? 'v2-viewpoint-tab--active' : ''}`}
              onClick={() => setActiveId(vp.id)}
            >
              <span className="v2-viewpoint-tab-icon">
                {vp.id === 'business' && <User size={18} />}
                {vp.id === 'security' && <Security size={18} />}
                {vp.id === 'risk' && <WarningHex size={18} />}
                {vp.id === 'compliance' && <Scale size={18} />}
                {vp.id === 'architecture' && <Network_3 size={18} />}
                {vp.id === 'engineering' && <Code size={18} />}
              </span>
              <span className="v2-viewpoint-tab-title">{vp.title}</span>
            </button>
          );
        })}
      </div>

      {/* Selected Viewpoint Deep Dive Panel */}
      <div className="v2-viewpoint-details-card">
        <div className="v2-viewpoint-header-row">
          <div>
            <span className="v2-viewpoint-role-tag">{activeViewpoint.role}</span>
            <h3 className="v2-viewpoint-name">{activeViewpoint.title} Lens</h3>
          </div>
          <blockquote className="v2-viewpoint-quote">{activeViewpoint.keyQuote}</blockquote>
        </div>

        <div className="v2-viewpoint-split-grid">
          {/* What they see */}
          <div className="v2-viewpoint-column v2-viewpoint-column--visible">
            <div className="v2-column-header">
              <span className="v2-column-status-badge v2-column-status-badge--green" />
              <h4>What This Team Sees & Optimizes For</h4>
              <Tag type="green" size="sm">Visible Surface</Tag>
            </div>
            <ul className="v2-viewpoint-list">
              {activeViewpoint.whatTheySee.map((item, idx) => (
                <li key={idx} className="v2-viewpoint-item v2-viewpoint-item--visible">
                  <span className="v2-item-check">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What remains hidden */}
          <div className="v2-viewpoint-column v2-viewpoint-column--hidden">
            <div className="v2-column-header">
              <span className="v2-column-status-badge v2-column-status-badge--red" />
              <h4>Critical Operational Blindspots</h4>
              <Tag type="red" size="sm">Hidden Risk</Tag>
            </div>
            <ul className="v2-viewpoint-list">
              {activeViewpoint.blindSpots.map((item, idx) => (
                <li key={idx} className="v2-viewpoint-item v2-viewpoint-item--hidden">
                  <span className="v2-item-cross">✕</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="v2-viewpoint-unified-insight">
          <strong>Why Siloed Governance Fails:</strong> Without a shared governance foundation connecting architecture, engineering telemetry, risk classifications, and legal obligations, teams make conflicting assumptions that compound risk at scale.
        </div>
      </div>
    </div>
  );
};
