// COMPONENT: SearchBarComponent
// PURPOSE: Input field for users to type words or phrases for lookup

import React from 'react';

const SearchBarComponent = ({ onSearch, onVoiceInput }) => {
  return (
    <div>
      <input type="text" placeholder="Type a word, a feeling, a dream..." />
      <button title="Voice Input">🎤</button>
      <button title="Search">🔍</button>
    </div>
  );
};

export default SearchBarComponent;