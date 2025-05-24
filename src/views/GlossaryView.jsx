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
    <div className="p-4 md:p-6 max-w-screen-md mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-foreground">
        📘 Glossary
      </h1>

      {glossary.length === 0 ? (
        <p className="text-center text-gray-500 italic">
          Your glossary is empty.
        </p>
      ) : (
        <div className="space-y-4">
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
