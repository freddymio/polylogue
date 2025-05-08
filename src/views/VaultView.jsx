// VIEW: VaultView
// PURPOSE: Display saved entries, notes, and tagged vocabulary

import React from 'react';
import HeaderBar from '../components/shared/HeaderBar';
import FooterBar from '../components/shared/FooterBar';
import { useVault } from '../hooks/useVault';

const VaultView = () => {
  const { vault, addWord, removeWord, clearVault } = useVault();

  const handleAddWord = () => {
    const newWord = prompt("Enter a word to save:");
    if (newWord) {
      addWord(newWord);
    }
  };

  return (
    <div className="vault-view">
      <HeaderBar />

      {/* SECTION: Vault Display */}
      <h2>📦 Vault</h2>
      <button onClick={handleAddWord}>➕ Add Word</button>
      {vault.length > 0 && (
        <button onClick={clearVault} style={{ marginLeft: '1rem' }}>🧹 Clear All</button>
      )}

      <ul style={{ marginTop: '1rem' }}>
        {vault.length === 0 && <li>No words saved yet.</li>}
        {vault.map((word, index) => (
          <li key={index}>
            {word}
            <button onClick={() => removeWord(word)} style={{ marginLeft: '1rem' }}>🗑 Remove</button>
          </li>
        ))}
      </ul>

      <FooterBar />
    </div>
  );
};

export default VaultView;