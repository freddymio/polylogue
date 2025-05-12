// STORE: vaultStore.js
// PURPOSE: Zustand-based global state for saved words & context cards

import { create } from 'zustand';

export const useVaultStore = create((set) => ({
  cards: [], // context cards
  setCards: (newCards) => set({ cards: newCards }),

  glossary: [], // 🆕
  addToGlossary: (entry) =>
    set((state) => ({
      glossary: [...state.glossary, entry],
    })),
}));
