import React, { useEffect, useRef } from 'react';
import { Theme } from '@carbon/react';
import GlobalHeader from '../components/GlobalHeader';
import JumpNav from '../components/JumpNav';
import Section1Proliferation from '../components/sections/Section1Proliferation';
import Section2Initiatives from '../components/sections/Section2Initiatives';
import Section3Fragmentation from '../components/sections/Section3Fragmentation';
import Section4Consequences from '../components/sections/Section4Consequences';
import Section5Requirements from '../components/sections/Section5Requirements';
import Section6AITypes from '../components/sections/Section6AITypes';
import Section7IBMPov from '../components/sections/Section7IBMPov';
import Section8Security from '../components/sections/Section8Security';
import Section9Governance from '../components/sections/Section9Governance';
import { useNarrativeStore } from '../store/narrativeStore';

const SECTIONS = [
  { id: 'section-1', label: 'AI Is Already Everywhere', component: Section1Proliferation },
  { id: 'section-2', label: 'The Ungoverned AI Reality', component: Section2Initiatives },
  { id: 'section-3', label: 'Fragmented Governance', component: Section3Fragmentation },
  { id: 'section-4', label: 'Consequences of Doing Nothing', component: Section4Consequences },
  { id: 'section-5', label: 'What Effective Governance Requires', component: Section5Requirements },
  { id: 'section-6', label: 'Governing Different Types of AI', component: Section6AITypes },
  { id: 'section-7', label: 'IBM Point of View', component: Section7IBMPov },
  { id: 'section-8', label: 'Security as Part of Governance', component: Section8Security },
  { id: 'section-9', label: 'Governance and Operational Control in Action', component: Section9Governance },
];

const App: React.FC = () => {
  const setActiveSection = useNarrativeStore((s) => s.setActiveSection);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionRefs.current.forEach((el, index) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(index);
        },
        { threshold: 0.3 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [setActiveSection]);

  return (
    <Theme theme="white">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <GlobalHeader />
      <JumpNav />
      <main id="main-content" className="narrative-main">
        {SECTIONS.map(({ id, label, component: SectionComponent }, index) => (
          <section
            key={id}
            id={id}
            className="narrative-section"
            aria-label={label}
            ref={(el) => { sectionRefs.current[index] = el; }}
          >
            <SectionComponent />
          </section>
        ))}
      </main>
      <footer className="narrative-footer">
        <span>Pablo Acevedo Areco&nbsp;&nbsp;·&nbsp;&nbsp;IBM Account Technical Leader&nbsp;&nbsp;·&nbsp;&nbsp;4Q2026</span>
      </footer>
    </Theme>
  );
};

export default App;
