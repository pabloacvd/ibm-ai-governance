import React from 'react';
import {
  Header,
  HeaderName,
  SkipToContent,
} from '@carbon/react';

const GlobalHeader: React.FC = () => {
  return (
    <Header aria-label="Governing AI at Enterprise Scale" className="cds--header-with-nav">
      <SkipToContent href="#main-content" />
      <HeaderName prefix="IBM" href="#/">
        Governing AI at Enterprise Scale
      </HeaderName>
      <div className="header-subtitle" aria-label="Subtitle">
        From fragmented AI adoption to accountable, transparent and governed AI
      </div>
    </Header>
  );
};

export default GlobalHeader;
