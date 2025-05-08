// HOOK: useVault
// PURPOSE: Custom React hook for managing vault state with localStorage

import { useState, useEffect } from 'react';

const VAULT_KEY = 'polylogue.vault';

export function useVault() {
  const [vault, setVault] = useState(() => {
    const stored = localStorage.getItem(VAULT_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem(VAULT_KEY, JSON.stringify(vault));
  }, [vault]);

  const addWord = (word) => {
    if (!vault.includes(word)) {
      setVault([...vault, word]);
    }
  };

  const removeWord = (word) => {
    setVault(vault.filter(w => w !== word));
  };

  const clearVault = () => {
    setVault([]);
  };

  return {
    vault,
    addWord,
    removeWord,
    clearVault
  };
}