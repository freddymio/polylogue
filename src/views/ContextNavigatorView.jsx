// VIEW: ContextNavigatorView
// PURPOSE: Displays contextual metadata using visual cards

import React from 'react';
import HeaderBar from '../components/shared/HeaderBar';
import FooterBar from '../components/shared/FooterBar';
import ContextNavigatorComponent from '../components/shared/ContextNavigatorComponent';

const ContextNavigatorView = () => {
  return (
    <div className="context-navigator-view">
      <HeaderBar />

      {/* SECTION: Heading */}
      <main>
        <h2>🧭 Context Navigator</h2>
        <p style={{ marginBottom: '1rem' }}>
          Explore a word’s tone, register, domain, and cultural depth through contextual cards.
        </p>
        <ContextNavigatorComponent />
      </main>

      <FooterBar />
    </div>
  );
};

export default ContextNavigatorView;