// 📁 glossaryStore.js
// 🧠 Zustand store for glossary with localStorage persistence

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { v4 as uuidv4 } from 'uuid';

export const useGlossaryStore = create(
  persist(
    (set, get) => ({
      glossary: [],

      addToGlossary: (entry) => {
        const exists = get().glossary.find((e) => e.word === entry.word);
        if (!exists) {
          set((state) => ({
            glossary: [
              ...state.glossary,
              {
                ...entry,
                id: uuidv4(),
                direction: `${entry.sourceLang} ⇌ ${entry.targetLang}`,
              },
            ],

          }));
        }
      },

      removeFromGlossary: (id) => {
        console.log("🗑 Removing from glossary:", id);
        set((state) => ({
          glossary: state.glossary.filter((entry) => entry.id !== id),
        }));
      },

      listGlossary: () => get().glossary,
    }),
    {
      name: 'glossary-storage',
    }
  )
);
