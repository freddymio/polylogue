// COMPONENT: LookupResultCard.jsx
// PURPOSE: Displays a result from a dictionary/context lookup + save to glossary

import React from 'react';
import { useVaultStore } from '../../stores/vaultStore';

const langFlags = {
  en: '🇬🇧',
  fr: '🇫🇷',
  es: '🇪🇸',
};

const LookupResultCard = ({ word, translation, partOfSpeech, context, from, to }) => {
  const addToGlossary = useVaultStore((state) => state.addToGlossary);

  const handleSave = () => {
    addToGlossary({
      word,
      meaning: translation,
      lang: to,
    });
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 space-y-3">
      {/* Source word */}
      <div className="text-lg font-semibold">
        {langFlags[from]} {word}{' '}
        {partOfSpeech && (
          <span className="text-sm italic text-gray-500">({partOfSpeech})</span>
        )}
      </div>

      {/* Translation */}
      <div className="text-md text-gray-800">
        <span className="font-medium">{langFlags[to]}</span> {translation}
      </div>

      {/* Context sentence */}
      {context && (
        <div className="text-sm italic text-muted-foreground border-t pt-2 mt-2">
          {context}
        </div>
      )}

      {/* Save Button */}
      <button
        onClick={handleSave}
        className="mt-3 px-3 py-1 bg-green-100 rounded hover:bg-green-200 text-sm"
      >
        ➕ Save to Glossary
      </button>
    </div>
  );
};

export default LookupResultCard;
