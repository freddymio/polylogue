// 📁 src/stores/lookupStore.js
// STORE: lookupStore.js
// PURPOSE: Manages source/target language and query input for lookup flow

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useLookupStore = create(
  persist(
    (set) => ({
      sourceLang: 'EN',
      targetLang: 'FR',
      query: '',
      loading: false,

      setSourceLang: (lang) => set({ sourceLang: lang }),
      setTargetLang: (lang) => set({ targetLang: lang }),
      setQuery: (text) => set({ query: text }),
      setLoading: (value) => set({ loading: value }),
    }),
    {
      name: 'lookup-storage', // name used in localStorage
    }
  )
);
