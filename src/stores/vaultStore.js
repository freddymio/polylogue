// STORE: vaultStore.js
// PURPOSE: Stores glossary + vault cards with tone/theme metadata

import { create } from 'zustand';

const LOCAL_KEYS = {
  glossary: 'polylogue_glossary',
  vault: 'polylogue_vault',
};

const loadLocal = (key, fallback = []) => {
  const raw = localStorage.getItem(key);
  try {
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
};

export const useVaultStore = create((set, get) => ({
  // 🔹 Context Gallery cards
  cards: loadLocal(LOCAL_KEYS.vault),
  glossary: loadLocal(LOCAL_KEYS.glossary),
  setCards: (newCards) => {
    localStorage.setItem(LOCAL_KEYS.vault, JSON.stringify(newCards));
    set({ cards: newCards });
  },

  // 📚 Glossary management
  addToGlossary: (entry) => {
    const state = get();
    const exists = state.glossary.find(
      (e) => e.word === entry.word && e.translation === entry.translation
    );
    if (!exists) {
      const updated = [...state.glossary, entry];
      localStorage.setItem(LOCAL_KEYS.glossary, JSON.stringify(updated));
      set({ glossary: updated });
    }
  },

  removeFromGlossary: (word) => {
    const updated = get().glossary.filter((entry) => entry.word !== word);
    localStorage.setItem(LOCAL_KEYS.glossary, JSON.stringify(updated));
    set({ glossary: updated });
  },

  // 🔐 Vault management
  addToVault: (entry) => {
    const state = get();
    const exists = state.cards.find((c) => c.word === entry.word);
    if (!exists) {
      const updated = [...state.cards, entry];
      localStorage.setItem(LOCAL_KEYS.vault, JSON.stringify(updated));
      set({ cards: updated });
    }
  },

  removeFromVault: (word) => {
    const updated = get().cards.filter((card) => card.word !== word);
    localStorage.setItem(LOCAL_KEYS.vault, JSON.stringify(updated));
    set({ cards: updated });
  },

  listVault: () => get().cards,
}));
