// 📁 vaultStore.js
// 🧠 Zustand store for glossary and vault + persistent localStorage sync

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useVaultStore = create(
  persist(
    (set, get) => ({
      // 🔹 Context Gallery cards (non-persistent)
      cards: [],
      glossary: [],

      setCards: (newCards) => set({ cards: newCards }),

      // 📚 Glossary actions
      addToGlossary: (entry) =>
        set((state) => {
          const exists = state.glossary.find(
            (e) => e.word === entry.word && e.translation === entry.translation
          );
          if (!exists) {
            return { glossary: [...state.glossary, entry] };
          }
          return {};
        }),

      removeFromGlossary: (word) =>
        set((state) => ({
          glossary: state.glossary.filter((entry) => entry.word !== word),
        })),

      // 🔐 Vault actions
      addToVault: (entry) =>
        set((state) => {
          const exists = state.cards.find((c) => c.word === entry.word);
          if (!exists) {
            return { cards: [...state.cards, entry] };
          }
          return {};
        }),

      removeFromVault: (word) =>
        set((state) => ({
          cards: state.cards.filter((card) => card.word !== word),
        })),

      listVault: () => get().cards,
    }),
    {
      name: 'vault-storage', // 🔒 Key in localStorage
      partialize: (state) => ({
        cards: state.cards,
        glossary: state.glossary,
      }),
    }
  )
);
