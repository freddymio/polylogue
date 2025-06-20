// /src/stores/useFilterStore.js
// 🧠 Zustand store for managing glossary/vault search + tag filters

import { create } from 'zustand';

const useFilterStore = create((set) => ({
  searchQuery: '',
  activeTag: '',

  setSearchQuery: (query) => set({ searchQuery: query }),
  setActiveTag: (tag) => set({ activeTag: tag }),
  clearFilters: () => set({ searchQuery: '', activeTag: '' }),
}));

export default useFilterStore;
