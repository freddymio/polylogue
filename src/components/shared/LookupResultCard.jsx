// COMPONENT: LookupResultCard.jsx
// PURPOSE: Displays one result from a lookup, with save-to-vault action

import React from 'react';
import { useVaultStore } from '../../stores/vaultStore';
import LanguageBadge from './LanguageBadge';

const LookupResultCard = ({ result = {} }) => {
  const {
    word = '',
    translation = '',
    partOfSpeech = 'noun',
    example = '',
    related = [],
    sourceLang = '',
    targetLang = '',
  } = result;

  const addToGlossary = useVaultStore((state) => state.addToGlossary);
  const addToVault = useVaultStore((state) => state.addToVault);

  const handleSave = () => {
    addToGlossary({ word, translation, sourceLang, targetLang });
    addToVault({
      word,
      translation,
      sourceLang,
      targetLang,
      tone: 'highlight', // 🎯 placeholder
      theme: 'identity',  // 🎯 placeholder
    });
  };

  return (
    <div className="border rounded p-4 bg-white shadow-sm text-left space-y-2">
      <div className="flex justify-between items-center">
        <div>
          <span className="text-lg font-semibold">{word}</span>
          <span className="text-sm text-gray-500 pl-2">({partOfSpeech})</span>
        </div>
        <LanguageBadge source={sourceLang} target={targetLang} />
      </div>
      <div className="text-gray-700">{translation}</div>
      <div className="text-xs text-muted-foreground italic">
        Example: {example}
      </div>
      <div className="text-xs text-muted-foreground">
        Related: {related.join(', ')}
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
