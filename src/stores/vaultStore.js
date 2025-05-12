// STORE: vaultStore.js
// PURPOSE: Zustand-based global state for saved words & context cards

import { create } from 'zustand';

export const useVaultStore = create((set) => ({
  cards: [],
  setCards: (newCards) => set({ cards: newCards }),

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
}));
