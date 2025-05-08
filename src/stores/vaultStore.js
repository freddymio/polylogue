// STORE: vaultStore.js
// PURPOSE: Simple local vault store with add, remove, and list logic

let vault = [];

// Adds a new word to the vault
export const addWord = (word) => {
  if (!vault.includes(word)) {
    vault.push(word);
  }
};

// Removes a word from the vault
export const removeWord = (word) => {
  vault = vault.filter(w => w !== word);
};

// Lists all saved words
export const listWords = () => {
  return [...vault];
};

// Clears vault (dev only)
export const clearVault = () => {
  vault = [];
};