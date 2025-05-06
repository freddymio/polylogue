// VIEW: ContextNavigatorView
// PURPOSE: Display different senses and uses of a given word with metadata

import React from 'react';
import HeaderBar from '../components/shared/HeaderBar';
import FooterBar from '../components/shared/FooterBar';

const ContextNavigatorView = () => {
  return (
    <div className="context-navigator-view">
      <HeaderBar />
      {/* SECTION: Context Cards */}
      <h2>🧭 Context Navigator</h2>
      <p>Drill into meaning by register, tone, domain, and polarity.</p>
      <FooterBar />
    </div>
  );
};

export default ContextNavigatorView;