// 📁 GlossaryView.jsx
// 📝 Purpose: Displays saved glossary entries with ability to remove via floating modal.

import { useState } from "react";
import { useVaultStore } from "../stores/vaultStore";
import GlossaryEntryCard from "../components/shared/GlossaryEntryCard";
import ConfirmDeleteModal from "../components/shared/ConfirmDeleteModal";

export default function GlossaryView() {
  const glossary = useVaultStore((state) => state.glossary);
  const remove = useVaultStore((state) => state.removeFromGlossary);

  const [modalWord, setModalWord] = useState(null);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Glossary</h1>
      {glossary.length === 0 ? (
        <p className="text-gray-500">Your glossary is empty.</p>
      ) : (
        <div className="grid gap-4">
          {glossary.map((entry, index) => (
            <GlossaryEntryCard
              key={index}
              entry={entry}
              onRemove={() => setModalWord(entry.word)}
            />
          ))}
        </div>
      )}

      <ConfirmDeleteModal
        open={!!modalWord}
        word={modalWord}
        onConfirm={() => {
          remove(modalWord);
          setModalWord(null);
        }}
        onCancel={() => setModalWord(null)}
      />
    </div>
  );
}
