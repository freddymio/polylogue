// 📁 src/stores/lookupStore.js
// STORE: lookupStore.js
// PURPOSE: Manages source/target language and query input for lookup flow

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useLookupStore = create(
  persist(
    (set, get) => ({
      query: '',
      direction: 'unknown',
      sourceLang: 'en',
      targetLang: 'fr',

      // ✅ Add these setters:
      setQuery: (val) => set({ query: val }),
      setSourceLang: (lang) => set({ sourceLang: lang }),
      setTargetLang: (lang) => set({ targetLang: lang }),

      // 🔁 Recent Lookup History
      recentLookups: [],
      addToRecent: (entry) => {
        const current = get().recentLookups;
        const exists = current.find((e) => e.word === entry.word);
        if (exists) return;
        const updated = [entry, ...current].slice(0, 10);
        set({ recentLookups: updated });
      },
      removeFromRecent: (term) => {
        const updated = get().recentLookups.filter((e) => e.word !== term);
        set({ recentLookups: updated });
      },
      clearRecent: () => {
        set({ recentLookups: [] });
      },
    }),
    {
      name: 'lookup-storage',
    }
  )
);

export default useLookupStore;
