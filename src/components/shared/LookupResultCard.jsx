// COMPONENT: LookupResultCard.jsx
// PURPOSE: Displays one result from a lookup, with save-to-vault action

import React from 'react';
import { useVaultStore } from '../../stores/vaultStore';

const LookupResultCard = ({ result = {} }) => {
  const {
    word = '',
    translation = '',
    partOfSpeech = 'noun',
    language = 'unknown',
  } = result;

  const addToGlossary = useVaultStore((state) => state.addToGlossary);
  const addToVault = useVaultStore((state) => state.addToVault);

  const handleSave = () => {
    addToGlossary({ word, translation, lang: language });
    addToVault({
      word,
      translation,
      language,
      tone: 'highlight', // 🎯 placeholder
      theme: 'identity',  // 🎯 placeholder
    });
  };

  return (
    <div className="border rounded p-4 bg-white shadow-sm text-left space-y-2">
      <div>
        <span className="text-lg font-semibold">{word}</span>
        <span className="text-sm text-gray-500 pl-2">({partOfSpeech})</span>
      </div>
      <div className="text-gray-700">
        {translation}
      </div>
      <div className="text-xs text-muted-foreground italic">
        Language: {language}
      </div>
      <button
        onClick={handleSave}
        className="text-sm text-purple-600 hover:underline"
      >
        ➕ Save to Glossary & Vault
      </button>
    </div>
  );
};

export default LookupResultCard;
