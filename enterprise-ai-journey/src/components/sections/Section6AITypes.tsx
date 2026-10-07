import React, { useState } from 'react';
import { ChevronDown } from '@carbon/icons-react';
import { AI_TYPE_PROFILES } from '../../data/aiTypes';
import { useNarrativeStore } from '../../store/narrativeStore';
import type { AIType } from '../../models/types';

// Only the three profile types defined in aiTypes.ts
const PROFILE_TYPES: AIType[] = ['traditional', 'generative', 'agentic'];

const Section6AITypes: React.FC = () => {
  const activeAIType = useNarrativeStore((s) => s.activeAIType);
  const setActiveAIType = useNarrativeStore((s) => s.setActiveAIType);

  // Track which concern IDs are expanded — keyed by profile type
  const [expandedConcerns, setExpandedConcerns] = useState<Set<string>>(new Set());

  const toggleConcern = (id: string) => {
    setExpandedConcerns((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const profiles = AI_TYPE_PROFILES.filter((p) => PROFILE_TYPES.includes(p.type));

  return (
    <div className="section-inner">
      <p className="section-eyebrow">Section 6</p>
      <h2 className="section-heading">Governing Different Types of AI</h2>
      <p className="section-body">
        The governance principles are consistent across all AI types — but the specific risks and controls differ significantly. Select a column to view type-specific concerns, then expand any concern to read its governance requirement.
      </p>

      <div className="ai-types-grid">
        {profiles.map((profile) => {
          const isActive = activeAIType === profile.type;
          return (
            <div
              key={profile.type}
              className={`ai-type-column${isActive ? ' ai-type-column--active' : ''}`}
            >
              {/* Column header — clickable to activate */}
              <button
                className="ai-type-column-header"
                onClick={() => setActiveAIType(isActive ? null : profile.type)}
                aria-expanded={isActive}
              >
                <h3 className="ai-type-column-label">{profile.label}</h3>
                <p className="ai-type-column-tagline">{profile.tagline}</p>
              </button>

              {/* Common controls — always visible */}
              <div className="ai-type-common-controls">
                <p className="ai-type-common-label">Common governance controls</p>
                <ul className="ai-type-common-list">
                  {profile.commonControls.map((control, i) => (
                    <li key={i} className="ai-type-common-item">{control}</li>
                  ))}
                </ul>
              </div>

              {/* Specific concerns — each individually expandable */}
              <div className="ai-type-concerns">
                <p className="ai-type-concerns-label">Type-specific concerns</p>
                <ul className="ai-type-concern-list">
                  {profile.specificConcerns.map((concern) => {
                    const isOpen = expandedConcerns.has(concern.id);
                    return (
                      <li key={concern.id} className="ai-type-concern-item">
                        <button
                          className={`ai-type-concern-btn${isOpen ? ' ai-type-concern-btn--open' : ''}`}
                          onClick={() => toggleConcern(concern.id)}
                          aria-expanded={isOpen}
                          aria-controls={`concern-desc-${concern.id}`}
                        >
                          <span className="ai-type-concern-name">{concern.label}</span>
                          <ChevronDown
                            size={14}
                            className={`ai-type-concern-chevron${isOpen ? ' ai-type-concern-chevron--open' : ''}`}
                            aria-hidden="true"
                          />
                        </button>
                        {isOpen && (
                          <p
                            id={`concern-desc-${concern.id}`}
                            className="ai-type-concern-desc"
                          >
                            {concern.description}
                          </p>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Section6AITypes;
