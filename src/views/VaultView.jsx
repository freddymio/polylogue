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
    <div className="p-4 md:p-6 max-w-screen-md mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-foreground">
        🔐 Vault
      </h1>

      {vaultCards.length === 0 ? (
        <p className="text-center text-gray-500 italic">
          Your vault is empty.
        </p>
      ) : (
        <div className="space-y-4">
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
