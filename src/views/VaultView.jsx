// VIEW: VaultView.jsx
// PURPOSE: Displays saved contextualized entries from lookup

import React from 'react';
import { useVaultStore } from '../stores/vaultStore';

const VaultView = () => {
  const vault = useVaultStore((state) => state.cards);
  const removeFromVault = useVaultStore((state) => state.removeFromVault);

  return (
    <div className="p-4 max-w-2xl mx-auto space-y-4">
      <h2 className="text-xl font-bold">🧑‍💼 Vault</h2>

      {vault.length === 0 ? (
        <p className="italic text-muted-foreground">No entries saved yet.</p>
      ) : (
        <ul className="space-y-2">
          {vault.map((entry, index) => (
            <li key={index} className="border p-3 rounded bg-white shadow-sm">
              <strong>{entry.word}</strong> — {entry.translation}
              <div className="text-sm italic">
                Tone: <span className="text-gray-600">{entry.tone}</span> | Theme: <span className="text-gray-600">{entry.theme}</span>
              </div>
              <button
                className="mt-2 text-red-600 hover:underline text-sm"
                onClick={() => removeFromVault(entry.word)}
              >
                ❌ Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default VaultView;
