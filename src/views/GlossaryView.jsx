// VIEW: GlossaryView
// PURPOSE: Displays the glossary screen with definition table

import React from 'react';
import HeaderBar from '../components/shared/HeaderBar';
import FooterBar from '../components/shared/FooterBar';
import GlossaryTableComponent from '../components/shared/GlossaryTableComponent';

const GlossaryView = () => {
  return (
    <div className="glossary-view">
      <HeaderBar />

      <main>
        <h2>📘 Glossary</h2>
        <p style={{ marginBottom: '1rem' }}>Terms that clarify Polylogue’s structure, logic, and vibe.</p>
        <GlossaryTableComponent />
      </main>

      <FooterBar />
    </div>
  );
};

export default GlossaryView;