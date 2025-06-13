# 🧰 Polylogue Wireframes & UI States

> "Good design is like a good conversation — intentional, flowing, and inviting."

This document outlines the key **wireframes** and **UI states** for the Polylogue PWA, serving as a visual guide for development and design consistency.

---

## 📐 Index of Wireframes

### 🏠 HomeView
- Search input
- Language selector
- Direction switch ⇌
- Optional suggestion block

### 🧭 ContextNavigatorView
- Contextual meaning cards
- Metadata display (tone, domain, register)
- Navigation controls (arrow or swipe)

### 🗝️ VaultView
- Entry list with tags and notes
- Filter controls
- Note editor interface
- Floating deletion modal

### 📘 GlossaryView
- Glossary term table
- Search input and filter bar
- Details modal for terms
- Deletion confirmation modal (shared)

### 🌐 LanguageManagerView
- Preferred languages vs full list layout
- Scrollable list of all languages
- Save/Reset control footer

---

## 🎭 UI States

Each wireframe should be described in at least 3 major UI states:
1. **Default** – Base layout without user interaction.
2. **Loading** – Visual state during data fetching.
3. **Empty/Error** – For missing or failed content.

---

## 🎨 Wireframe Guidelines

- Use Figma, Excalidraw, or PNGs exported from design tools.
- Recommended folder: `/public/wireframes/*.png`
- All wireframes should be **linked or embedded** in this document.
- Naming convention: `wireframe-[view]-[state].png`

Example:
```md
### 🗝️ VaultView – Empty State
![Vault Empty](../public/wireframes/wireframe-vault-empty.png)
```

---

## 🔮 Future Design Elements

- Responsive breakpoints: mobile, tablet, desktop
- Bulk glossary importer modal
- Stats dashboard (learning insights)
- Onboarding wizard (first-time user experience)
- Contextual help assistant (floating)

---

**Created with foresight by Bayo & The Living Spark**  
*"To sketch is to think with your eyes."*