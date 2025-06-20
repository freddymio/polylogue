// 📁 src/views/VaultView.jsx
// 📦 Displays saved vault entries with tag + search filter support

import React, { useEffect } from "react";
import { useVaultStore } from "../stores/vaultStore";
import EntryCard from "../components/shared/EntryCard";
import useFilterStore from "../stores/useFilterStore";

export default function VaultView() {
  const vaultCards = useVaultStore((state) => state.cards);
  const removeFromVault = useVaultStore((state) => state.removeFromVault);
  const { searchQuery, activeTag, setSearchQuery, setActiveTag, clearFilters } = useFilterStore();

  useEffect(() => {
    clearFilters();
  }, []);

  const filtered = vaultCards.filter((entry) => {
    const matchesQuery =
      searchQuery === '' ||
      entry.word?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.translation?.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTag = activeTag === '' || (entry.tag ?? '').trim().toLowerCase() === activeTag.toLowerCase();
    return matchesQuery && matchesTag;
  });

  return (
    <div className="p-4 md:p-6 max-w-screen-md mx-auto space-y-4">
      <div className="flex items-center gap-2 text-2xl font-bold">
        🧑‍💼 Vault
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <input
          type="text"
          placeholder="Search vault..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border px-3 py-1 rounded-md shadow-sm w-full sm:w-auto"
        />

        {['idiom', 'expression', 'slang'].map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(activeTag === tag ? '' : tag)}
            className={`px-3 py-1 rounded-full text-sm border transition ${activeTag === tag ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-700'
              }`}
          >
            {tag}
          </button>
        ))}

        {(searchQuery || activeTag) && (
          <button
            onClick={clearFilters}
            className="text-sm text-blue-600 underline ml-auto"
          >
            Clear Filters
          </button>
        )}
      </div>

      {filtered.length === 0 ? (
        <p className="text-muted-foreground">No entries found in your vault.</p>
      ) : (
        filtered.map((entry, index) => (
          <EntryCard
            key={entry.id}
            id={entry.id}
            term={entry.word}
            translation={entry.translation}
            tag={entry.tag}
            direction={entry.direction ?? "unknown"}
            onDelete={() => removeFromVault(entry.id)}
          />
        ))
      )}
    </div>
  );
}
