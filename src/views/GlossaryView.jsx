// VIEW: GlossaryView
// PURPOSE: Provide definitions for project-specific terms and concepts

import React from 'react';
import HeaderBar from '../components/shared/HeaderBar';
import FooterBar from '../components/shared/FooterBar';

const GlossaryView = () => {
  return (
    <div className="glossary-view">
      <HeaderBar />
      {/* SECTION: Glossary Table */}
      <h2>📘 Glossary</h2>
      <p>Explore terms like MVP, PWA, polarity, domain, and more.</p>
      <FooterBar />
    </div>
  );
};

export default GlossaryView;