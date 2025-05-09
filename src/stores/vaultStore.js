// STORE: vaultStore.js
// PURPOSE: Zustand-based global state for saved words & context cards

import { create } from 'zustand';

export const useVaultStore = create((set) => ({
  words: [],
  cards: [],

  addWord: (word) =>
    set((state) =>
      state.words.includes(word)
        ? state
        : { words: [...state.words, word] }
    ),

  removeWord: (word) =>
    set((state) => ({
      words: state.words.filter((w) => w !== word),
    })),

  clearVault: () => set({ words: [] }),

  // Mock: add sample context cards
  setCards: (cards) => set({ cards }),
}));
