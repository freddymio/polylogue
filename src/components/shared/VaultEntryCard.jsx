// 📝 Purpose: Renders a saved entry with word + translation + badge + meta (tone/theme)

import React from 'react';
import LanguageBadge from './LanguageBadge';
import { useVaultStore } from '../../stores/vaultStore';

export default function VaultEntryCard({ entry }) {
  const removeFromVault = useVaultStore((state) => state.removeFromVault);

  return (
    <div className="border rounded p-3 bg-white shadow flex justify-between items-center">
      <div>
        <div className="font-semibold">{entry.word}</div>
        <div className="text-sm text-gray-700">{entry.translation}</div>
        <div className="text-xs italic text-muted-foreground">{entry.tone} / {entry.theme}</div>
      </div>
      <div className="flex gap-2 items-center">
        <LanguageBadge source={entry.sourceLang} target={entry.targetLang} />
        <button
          onClick={() => {
            if (window.confirm(`Remove "${entry.word}" from your Vault?`)) {
              removeFromVault(entry.word);
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
