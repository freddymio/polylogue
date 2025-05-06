// VIEW: VaultView
// PURPOSE: Display saved entries, notes, and tagged vocabulary

import React from 'react';
import HeaderBar from '../components/shared/HeaderBar';
import FooterBar from '../components/shared/FooterBar';

const VaultView = () => {
  return (
    <div className="vault-view">
      <HeaderBar />
      {/* SECTION: Vault Display */}
      <h2>📦 Vault</h2>
      <p>Here you’ll find all your saved words, notes, and custom entries.</p>
      <FooterBar />
    </div>
  );
};

export default VaultView;