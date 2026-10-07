import React, { useEffect, useRef } from 'react';
import { JumpNavV2 } from './JumpNavV2';
import { SectionAV2 } from './SectionAV2';
import { SectionBV2 } from './SectionBV2';
import { Section5RegulatoryPressureV2 } from './Section5RegulatoryPressureV2';
import { SectionDV2 } from './SectionDV2';
import { Section11KeyTakeawayV2 } from './Section11KeyTakeawayV2';
import { useGovernanceV2Store } from '../../store/governanceV2Store';

const SECTIONS_V2 = [
  { id: 'v2-section-a', label: 'The Problem', component: SectionAV2 },
  { id: 'v2-section-b', label: 'The Gap', component: SectionBV2 },
  { id: 'v2-section-c', label: 'Why It Matters', component: Section5RegulatoryPressureV2 },
  { id: 'v2-section-d', label: 'IBM Solution', component: SectionDV2 },
  { id: 'v2-section-e', label: 'Call to Action', component: Section11KeyTakeawayV2 },
];

export const AppV2: React.FC = () => {
  const setActiveSection = useGovernanceV2Store((s) => s.setActiveSectionV2);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionRefs.current.forEach((el, index) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(index);
        },
        { threshold: 0.25 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [setActiveSection]);

  return (
    <div className="governance-v2-container">
      <JumpNavV2 />
      <main id="main-content" className="narrative-main v2-main">
        {SECTIONS_V2.map(({ id, label, component: SectionComponent }, index) => (
          <section
            key={id}
            id={id}
            className="narrative-section v2-narrative-section"
            aria-label={label}
            ref={(el) => { sectionRefs.current[index] = el; }}
          >
            <SectionComponent />
          </section>
        ))}
      </main>
    </div>
  );
};
