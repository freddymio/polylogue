// COMPONENT: LookupResultCard.jsx
// PURPOSE: Displays a result from a dictionary/context lookup

import React from 'react';

const langFlags = {
  en: '🇬🇧',
  fr: '🇫🇷',
  es: '🇪🇸',
};

const LookupResultCard = ({ word, translation, partOfSpeech, context, from, to }) => {
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
    </div>
  );
};

export default LookupResultCard;
