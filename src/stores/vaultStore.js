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

  // Remove glossary entries
  removeFromGlossary: (word) =>
    set((state) => ({
      glossary: state.glossary.filter((entry) => entry.word !== word),
    })),

  // VAULT state
  cards: [],

  addToVault: (entry) =>
    set((state) => {
      const exists = state.cards.find((c) => c.word === entry.word);
      if (!exists) {
        return {
          cards: [...state.cards, entry],
        };
      } else {
        return {}; // no duplicate
      }
    }),

  removeFromVault: (word) =>
    set((state) => ({
      cards: state.cards.filter((card) => card.word !== word),
    })),

  listVault: () => get().cards,

}));
