//📝 Purpose: Renders a single glossary word + translation + language badge
// Used when listing individual glossary entries (e.g., in a mapped list)

import React from 'react';
import LanguageBadge from './LanguageBadge';
import { useVaultStore } from '../../stores/vaultStore';

export default function GlossaryEntryCard({ entry }) {
  const removeFromGlossary = useVaultStore((state) => state.removeFromGlossary);

  return (
    <div className="border rounded p-3 bg-gray-50 flex justify-between items-center">
      <div>
        <div className="font-semibold">{entry.word}</div>
        <div className="text-sm text-gray-700">{entry.translation}</div>
      </div>
      <div className="flex gap-2 items-center">
        <LanguageBadge source={entry.sourceLang} target={entry.targetLang} />
        <button
          onClick={() => {
            if (window.confirm(`Remove "${entry.word}" from your Glossary?`)) {
              removeFromGlossary(entry.word);
            }
          }}
          className="text-red-500 text-sm hover:underline"
        >
          🗑 Remove
        </button>
      </div>
    </div>
  );
}
