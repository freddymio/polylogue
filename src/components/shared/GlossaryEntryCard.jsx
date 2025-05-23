// 📁 src/components/shared/GlossaryEntryCard.jsx
// 📝 Purpose: Renders a glossary entry with translation, language badge, and delete confirmation modal.

import React, { useState } from 'react';
import LanguageBadge from './LanguageBadge';
import ConfirmDeleteModal from './ConfirmDeleteModal';
import { useVaultStore } from '../../stores/vaultStore';

export default function GlossaryEntryCard({ entry }) {
  const removeFromGlossary = useVaultStore((state) => state.removeFromGlossary);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <>
      <div className="border rounded p-3 bg-white shadow flex justify-between items-center">
        <div>
          <div className="font-semibold">{entry.word}</div>
          <div className="text-sm text-gray-700">{entry.translation}</div>
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
          removeFromGlossary(entry.word);
          setShowConfirm(false);
        }}
        onCancel={() => setShowConfirm(false)}
      />
    </>
  );
}
