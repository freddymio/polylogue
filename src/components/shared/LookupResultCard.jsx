// COMPONENT: LookupResultCard.jsx
// PURPOSE: Displays a result from a dictionary/context lookup + save to glossary

import React from 'react';
import { useVaultStore } from '../../stores/vaultStore';

const langFlags = {
  en: '🇬🇧',
  fr: '🇫🇷',
  es: '🇪🇸',
};

const LookupResultCard = ({ result }) => {
  const { word, translation, language } = result;

  const addToGlossary = useVaultStore((state) => state.addToGlossary);
  const addToVault = useVaultStore((state) => state.addToVault);

  const handleSave = () => {
    addToGlossary({ word, translation, lang: language });
    addToVault({ word, translation, language, tone: 'highlight', theme: 'identity' });
  };

  return (
    <div className="border p-3 rounded bg-white">
      <div>
        <strong>{word}</strong> <em>({language})</em>
      </div>
      <div>{language} Traduction de "{translation}"</div>
      <button onClick={handleSave} className="mt-2 text-purple-600 hover:underline">
        ➕ Save to Glossary & Vault
      </button>
    </div>
  );
};

export default LookupResultCard;
