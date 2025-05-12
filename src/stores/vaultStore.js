// STORE: vaultStore.js
// PURPOSE: Stores glossary + vault cards with tone/theme metadata

import { create } from 'zustand';

export const useVaultStore = create((set, get) => ({
  // 🔹 Context Gallery cards
  cards: [],
  setCards: (newCards) => set({ cards: newCards }),

  // 📚 Glossary entries
  glossary: [],
  addToGlossary: (entry) =>
    set((state) => {
      const exists = state.glossary.find(
        (e) => e.word === entry.word && e.translation === entry.translation
      );
      if (!exists) {
        return {
          glossary: [...state.glossary, entry],
        };
      } else {
        return {}; // no change
      }
    }),

  // 🧩 Vault entries with tone + theme
  entries: [],
  addToVault: (entry) =>
    set((state) => ({
      entries: [...state.entries, entry],
    })),
  listVault: () => get().entries,
}));
