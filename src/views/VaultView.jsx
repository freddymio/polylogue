// VIEW: VaultView.jsx
// PURPOSE: Displays saved contextualized entries from lookup

import React from 'react';
import { useVaultStore } from '../stores/vaultStore';
import VaultEntryCard from '../components/shared/VaultEntryCard';

export default function VaultView() {
  const vault = useVaultStore((state) => state.cards);

  return (
    <div className="p-4 max-w-3xl mx-auto space-y-3">
      <h2 className="text-2xl font-bold mb-2">🔐 Vault</h2>
      {vault.length === 0 ? (
        <p className="text-muted-foreground italic">No entries stored.</p>
      ) : (
        vault.map((entry, i) => (
          <VaultEntryCard key={i} entry={entry} />
        ))
      )}
    </div>
  );
}

