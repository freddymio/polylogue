// 📁 src/components/shared/VaultEntryCard.jsx
// 📝 Purpose: Renders a vault entry with translation, theme/tone, language badge, and delete confirmation modal.

import React, { useState } from 'react';
import LanguageBadge from './LanguageBadge';
import ConfirmDeleteModal from './ConfirmDeleteModal';
import { useVaultStore } from '../../stores/vaultStore';

export default function VaultEntryCard({ entry }) {
  const removeFromVault = useVaultStore((state) => state.removeFromVault);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <>
      <div className="border rounded p-3 bg-white shadow flex justify-between items-center">
        <div>
          <div className="font-semibold">{entry.word}</div>
          <div className="text-sm text-gray-700">{entry.translation}</div>
          <div className="text-xs italic text-muted-foreground">{entry.tone} / {entry.theme}</div>
        </div>
        <div className="flex gap-2 items-center">
          <LanguageBadge source={entry.sourceLang} target={entry.targetLang} />
          <button
            onClick={() => setShowConfirm(true)}
            className="text-red-500 text-sm hover:underline"
          >
            🗑 Remove
          </button>
        </div>
      </div>
      <ConfirmDeleteModal
        open={showConfirm}
        word={entry.word}
        onConfirm={() => {
          removeFromVault(entry.word);
          setShowConfirm(false);
        }}
        onCancel={() => setShowConfirm(false)}
      />
    </>
  );
}
