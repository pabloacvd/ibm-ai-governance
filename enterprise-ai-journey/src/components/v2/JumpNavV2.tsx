import React, { useEffect, useRef, useState } from 'react';
import { useGovernanceV2Store } from '../../store/governanceV2Store';

export const V2_NAV_ITEMS = [
  { id: 'v2-section-a', label: 'The Problem' },
  { id: 'v2-section-b', label: 'The Gap' },
  { id: 'v2-section-c', label: 'Why It Matters' },
  { id: 'v2-section-d', label: 'IBM Solution' },
  { id: 'v2-section-e', label: 'Call to Action' },
];

export const JumpNavV2: React.FC = () => {
  const activeSection = useGovernanceV2Store((s) => s.activeSectionV2);
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
      <div ref={sentinelRef} className="jump-nav-sentinel" aria-hidden="true" />
      <nav
        className={`jump-nav${visible ? ' jump-nav--visible' : ''}`}
        aria-label="Governance V2 section navigation"
      >
        <ol className="jump-nav__list">
          {V2_NAV_ITEMS.map((item, index) => (
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
