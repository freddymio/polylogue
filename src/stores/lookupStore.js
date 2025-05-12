// STORE: lookupStore.js
// PURPOSE: Manages source/target language and query input for lookup flow

import { create } from 'zustand';

export const useLookupStore = create((set) => ({
  sourceLang: 'en',
  targetLang: 'fr',
  query: '',
  loading: false, // 🆕

  setSourceLang: (lang) => set({ sourceLang: lang }),
  setTargetLang: (lang) => set({ targetLang: lang }),
  setQuery: (text) => set({ query: text }),
  setLoading: (value) => set({ loading: value }), // 🆕
}));