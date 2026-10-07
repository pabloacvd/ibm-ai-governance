import React, { useEffect, useRef, useState } from 'react';
import { useNarrativeStore } from '../store/narrativeStore';

const NAV_ITEMS = [
  { id: 'section-1', label: 'AI Everywhere' },
  { id: 'section-2', label: 'Ungoverned Reality' },
  { id: 'section-3', label: 'Fragmented Governance' },
  { id: 'section-4', label: 'Consequences' },
  { id: 'section-5', label: 'Requirements' },
  { id: 'section-6', label: 'AI Types' },
  { id: 'section-7', label: 'IBM Point of View' },
  { id: 'section-8', label: 'Security' },
  { id: 'section-9', label: 'Governance in Action' },
];

const JumpNav: React.FC = () => {
  const activeSection = useNarrativeStore((s) => s.activeSection);
  const [visible, setVisible] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Sentinel sits just below the hero — when it scrolls out of view the nav appears */}
      <div ref={sentinelRef} className="jump-nav-sentinel" aria-hidden="true" />

      <nav
        className={`jump-nav${visible ? ' jump-nav--visible' : ''}`}
        aria-label="Section navigation"
      >
        <ol className="jump-nav__list">
          {NAV_ITEMS.map((item, index) => (
            <li key={item.id} className="jump-nav__item">
              <a
                href={`#${item.id}`}
                className={`jump-nav__link${activeSection === index ? ' jump-nav__link--active' : ''}`}
                aria-current={activeSection === index ? 'true' : undefined}
              >
                <span className="jump-nav__number">{index + 1}</span>
                <span className="jump-nav__label">{item.label}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default JumpNav;
