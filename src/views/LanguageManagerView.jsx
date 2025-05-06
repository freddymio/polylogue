// VIEW: LanguageManagerView
// PURPOSE: Manage preferred and available language sets

import React from 'react';
import HeaderBar from '../components/shared/HeaderBar';
import FooterBar from '../components/shared/FooterBar';

const LanguageManagerView = () => {
  return (
    <div className="language-manager-view">
      <HeaderBar />
      {/* SECTION: Language Preferences */}
      <h2>🌐 Language Manager</h2>
      <p>Select your known, preferred, and future target languages.</p>
      <FooterBar />
    </div>
  );
};

export default LanguageManagerView;