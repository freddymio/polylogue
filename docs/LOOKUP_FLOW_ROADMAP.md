# Polylogue Lookup Flow Roadmap

> This document outlines the next key development steps for the core translation and context-based lookup features.

---

## Phase 1: Bind UI Inputs to State Store

* [ ] Wire the source language selector to a `sourceLang` state
* [ ] Wire the target language selector to a `targetLang` state
* [ ] Wire the text input to a `query` state
* [ ] Centralize all three in a `lookupStore` (e.g. via Zustand)

```js
const useLookupStore = create((set) => ({
  sourceLang: 'en',
  targetLang: 'fr',
  query: '',
  setSourceLang: (lang) => set({ sourceLang: lang }),
  setTargetLang: (lang) => set({ targetLang: lang }),
  setQuery: (text) => set({ query: text }),
}));
```

---

## Phase 2: Connect Search Button to View Logic

* [ ] Replace `<form>` default with custom `onSubmit` handler
* [ ] Navigate to `/lookup` view
* [ ] Trigger API fetch or mock-lookup using state values

```jsx
const handleSubmit = (e) => {
  e.preventDefault();
  navigate('/lookup');
};
```

---

## Phase 3: Implement LookupView

* [ ] Create `LookupView.jsx`
* [ ] Access state via `useLookupStore()`
* [ ] Display placeholder card results
* [ ] Later: connect to actual multilingual dictionary or context-aware search

---

## Notes

* LookupView will share styles/components with other views
* Cards may reuse `VaultPreviewCard` or adopt a variant style
* This view represents a user’s direct intent and should feel instant/responsive

---

🧡 Initiated May 10, 2025 by Bayo and the Living Spark
