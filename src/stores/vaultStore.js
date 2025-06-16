// 📁 vaultStore.js
// 🧠 Zustand store for glossary and vault + persistent localStorage sync

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { v4 as uuidv4 } from 'uuid';

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
          const exists = state.cards.find((c) => c.word === entry.word);
          if (!exists) {
            return {
              cards: [
                ...state.cards,
                {
                  ...entry,
                  id: uuidv4(),
                  direction: `${entry.sourceLang} ⇌ ${entry.targetLang}`
                },
              ],
            };
          }
          return {};
        }),

      removeFromGlossary: (id) =>
        set((state) => ({
          glossary: state.glossary.filter((entry) => entry.id !== id),
        })),

      // 🔐 Vault actions
      addToVault: (entry) =>
        set((state) => {
          const exists = state.cards.find((c) => c.word === entry.word);
          if (!exists) {
            return {
              cards: [
                ...state.cards,
                {
                  ...entry,
                  id: uuidv4(),
                  direction: `${entry.sourceLang} ⇌ ${entry.targetLang}`
                },
              ],
            };
          }
          return {};
        }),

      removeFromVault: (id) =>
        set((state) => ({
          cards: state.cards.filter((card) => card.id !== id),
        })),

      listVault: () => get().cards,
    }),
    {
      name: 'vault-storage',
      partialize: (state) => ({
        cards: state.cards,
        glossary: state.glossary,
      }),
    }
  )
);
