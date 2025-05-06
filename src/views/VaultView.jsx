// VIEW: VaultView
// PURPOSE: Display saved entries, notes, and tagged vocabulary

import React, { useState } from 'react';
import HeaderBar from '../components/shared/HeaderBar';
import FooterBar from '../components/shared/FooterBar';

import { addWord, listWords, removeWord } from '../stores/vaultStore';

const VaultView = () => {
  const [words, setWords] = useState(listWords());

  const handleAddWord = () => {
    const newWord = prompt("Enter a word to save:");
    if (newWord) {
      addWord(newWord);
      setWords(listWords());
    }
  };

  const handleRemoveWord = (word) => {
    removeWord(word);
    setWords(listWords());
  };

  return (
    <div className="vault-view">
      <HeaderBar />

      {/* SECTION: Vault Display */}
      <h2>📦 Vault</h2>
      <button onClick={handleAddWord}>➕ Add Word</button>

      <ul>
        {words.length === 0 && <li>No words saved yet.</li>}
        {words.map((word, index) => (
          <li key={index}>
            {word}
            <button onClick={() => handleRemoveWord(word)} style={{ marginLeft: '1rem' }}>🗑 Remove</button>
          </li>
        ))}
      </ul>

      <FooterBar />
    </div>
  );
};

export default VaultView;