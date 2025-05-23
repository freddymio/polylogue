// 📁 VaultView.jsx
// 📝 Purpose: Displays saved vault entries with ability to remove via floating modal.

import { useState } from "react";
import { useVaultStore } from "../stores/vaultStore";
import VaultEntryCard from "../components/shared/VaultEntryCard";
import ConfirmDeleteModal from "../components/shared/ConfirmDeleteModal";

export default function VaultView() {
  const vaultCards = useVaultStore((state) => state.cards);
  const remove = useVaultStore((state) => state.removeFromVault);

  const [modalWord, setModalWord] = useState(null);

  return (
    <div className="p-4 max-w-3xl mx-auto space-y-3">
      <h2 className="text-2xl font-bold mb-2">🔐 Vault</h2>

      {vaultCards.length === 0 ? (
        <p className="text-muted-foreground italic">No entries stored.</p>
      ) : (
        <div className="grid gap-4">
          {vaultCards.map((entry, index) => (
            <VaultEntryCard
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
