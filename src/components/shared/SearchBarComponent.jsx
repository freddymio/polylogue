// COMPONENT: SearchBarComponent
// PURPOSE: Capture word input, voice input, and allow lookup + save to vault

import React, { useState } from 'react';
import { addWord } from '../../stores/vaultStore';

const SearchBarComponent = ({ onSearch, onVoiceInput }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (onSearch) onSearch(query);
  };

  const handleSave = () => {
    if (query.trim()) {
      addWord(query.trim());
      alert(`✅ "${query}" saved to your vault.`);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Type a word..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>🔍</button>
      <button onClick={onVoiceInput}>🎤</button>
      <button onClick={handleSave}>💾 Save</button>
    </div>
  );
};

export default SearchBarComponent;