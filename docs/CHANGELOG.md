## [2025-06-13 | 18:16] — 🧭 Design Reflection: Lookup vs HomeView Unification

### 🔍 Observation
Current structure splits the experience across two views:
- `/` (**HomeView**): Input + language selectors
- `/lookup` (**LookupView**): Displays results with no way to change languages

### 📱 Comparative Benchmark
From UI examples like Bing Translator:
- Language selectors remain accessible *above* or *inline* with input
- Query and language switching happen in one unified space
- UX continuity avoids view switching entirely

---

### 🤔 Insight
Polylogue currently:
- Shows selectors only on Home
- Shows results only on Lookup
- Prevents real-time switching or follow-up lookups in new directions

---

### 🔄 Proposed Evolution
**Unify Home + Lookup views** into a single intelligent page:
- Keep inputs + selectors fixed at the top
- Dynamically reveal results below
- Maintain Zustand store for state continuity (query, direction, results)
- Allow in-place redirection logic for deep linking (`/lookup?word=zorro` optional)

---

### ✅ Benefits
- Less navigation friction
- Full flexibility to reuse inputs/languages
- No back-navigation required to switch directions
- Aligns with translator standards (DeepL, Bing, Reverso, Google)

🎯 Future session can refactor UI flow toward this model. Suggest naming it “PolylogueView” or similar.

---

## [2025-06-13 | 15:18] — 👻 Ghost Result Fixed in LookupView

### ✅ Fixes Implemented
- Introduced `lookupPerformed` flag to `LookupView.jsx` to track whether a valid search was executed.
- Result card now appears **only after** a proper search (button click or recent lookup).
- Live preview while typing is now suppressed, resolving ghost-entry flickering and confusion.

### 💬 Verified
- User can type freely without triggering any result card.
- Search button or recent lookup restores correct behavior.

✨ UX is now tight, focused, and no longer misleading during query composition.

---

## [2025-06-13 | 14:49] — 🔍 Search Term + Language Persistence from Home to Lookup

### ✅ Fixes Implemented
- `HomeView.jsx` now writes the current query into the Zustand `lookupStore` before navigating.
- `LookupView.jsx` now reads the query, sourceLang, and targetLang entirely from `lookupStore`, not local state.
- Removed fallback logic that caused incorrect default direction to reappear after redirect.
- All recent lookup selections now correctly reset query + lang in global state for continuity.

### 🧪 Verified Behavior
- Typing “zancudo” and choosing ES ⇌ FR now results in:
  - Input prefilled in `/lookup`
  - Recent Lookup: **zancudo (es ⇌ fr)**
  - Direction badge: **ES ⇌ FR**
- No longer possible to arrive at `/lookup` with incorrect defaults after valid entry from Home.

✨ This completes the internal routing + state preservation work without exposing URL parameters.

---

## [2025-06-13 | 15:15] — 🌍 Language Direction Fixed Across Lookup Flow

### ✅ Fixes Implemented

- `mockLookupFetch()` now returns `word`, `sourceLang`, and `targetLang` properly.
- `LookupView.jsx` updated to:
  - Inject language direction into the `result` state.
  - Pass `result.sourceLang` and `result.targetLang` into `LookupResultCard` to avoid stale state fallback.
- Home language selection now respected after redirect:
  - By switching from local component state to `lookupStore.js` (Zustand) state for source/target language.

### 📸 Confirmed in Screenshots
- ES ⇌ FR direction now correctly shows throughout the Lookup page and result cards.
- Consistent behavior when selecting language and using either direct lookup or history recall.

🎯 This completes a full pass on Lookup language coherence and glossary direction stability.

---
## [2025-06-13 | 14:09] — 🗑 ConfirmDeleteModal Now Shows Word Being Removed

### ✅ Fixes Implemented
- `EntryCard.jsx` now passes the `term` prop as `word` to the `ConfirmDeleteModal` component:
  ```jsx
  <ConfirmDeleteModal open={showModal} word={term} ... />
  ```
- `ConfirmDeleteModal.jsx` displays the word in the modal body:
  > Are you sure you want to delete **xenophobe**?

### 💬 User Confirmation
- Verified live without restarting DEV server.
- Modal now appears with correct term in both Glossary and Vault views.

This improves clarity and prevents accidental deletion errors by showing the actual word being removed.

---

## [2025-06-12 | 23:12] — 🧪 Pending UI and State Bugs Identified (Early June 16th)

### 🐞 Known UX & State Inconsistencies

#### 📌 1. Glossary Entry Direction Missing
- All entries show `"Direction unknown"` despite sourceLang/targetLang being present.
- Likely missing transformation from `sourceLang + ' ⇌ ' + targetLang` to `direction` field during entry creation.

#### 📌 2. Deletion Modal Missing Context
- Modal correctly appears on Delete but does **not show the word** being deleted.
- ConfirmDeleteModal should receive and display the `word` prop.

#### 📌 3. Homepage Search → Lookup Bug
- Clicking "Search" on Home redirects to `/lookup` but the search field is empty.
- Requires user to retype the same query.

#### 📌 4. Ghost Result Appears While Typing
- After first lookup, typing a new word in the same session creates a "live preview" in the result card.
- Every keystroke updates the `word` field before clicking Lookup.
- Only resolved properly once Lookup is clicked again.

### ✅ Proposed Fix Areas
- Ensure `addToGlossary()` includes `direction` during entry composition.
- Pass `word={term}` to `ConfirmDeleteModal` and render it in modal body.
- On Home → Lookup redirect, **persist query string** via state, store, or URL param.
- Decouple text input state from result rendering in `LookupView.jsx`.

🧭 Ready to be addressed during upcoming session.

---

## [2025-06-13 | 00:34] — 🔧 Glossary & Vault Deletion Logic Restored

### ✅ Fixes Implemented
- Fixed modal rendering bug in `EntryCard.jsx` by adding missing prop:
  ```jsx
  <ConfirmDeleteModal open={showModal} ... />
  ```
- Verified modal opens correctly from both **Glossary** and **Vault** views.
- Confirmed `confirmDelete` triggers properly and logs:
  - `💥 confirmDelete triggered for ID: ...`
  - `🗑 Removing from glossary: ...` or `...vault: ...`

### 🔄 Refactors Completed
- Updated `LookupResultCard.jsx` to use `useGlossaryStore().addToGlossary` instead of `vaultStore`.
- Glossary now populates independently using its own Zustand store.

### 🧪 Tests Passed
- LocalStorage cleared and repopulated cleanly.
- Modal now appears consistently upon clicking "🗑 Remove".
- Glossary and Vault entries can be deleted individually as expected.

🎉 Core functionality for glossary and vault removal is now stable and confirmed.

---

## [2025-06-12 | 23:30] — Pre-debug snapshot: ConfirmDelete test prep + Glossary bug confirmed

### 🧩 Investigation Setup
- Added `console.log()` traces in `EntryCard.jsx` and `glossaryStore.js` to debug glossary deletion flow.
- Confirmed `GlossaryView.jsx` is now using `useGlossaryStore()` to read entries and call removal function.
- VaultView delete logic confirmed as correct.

### 🚨 Detected Issues
- `LookupView.jsx` **does not** include any logic to call `addToGlossary()` from either store.
- Glossary remains empty after localStorage reset because no component calls `useGlossaryStore().addToGlossary()` yet.
- Glossary `🗑 Remove` button had no feedback yet, pending modal test during next DEV launch.

### ✅ Next Steps
- Add actual `useGlossaryStore().addToGlossary()` call in `LookupResultCard.jsx` or wherever new entries are confirmed.
- Launch DEV server and verify console logs show up on deletion attempt.
- Verify glossary content appears after fresh entry addition.

🧪 Ready for test run.

---

## [2025-05-31 | 00:23] — Test run after glossaryStore integration

### 🧪 Test Outcomes
- 🧑‍💼 Vault entries load and display correctly after localStorage reset.
- 📚 Glossary page remains empty despite new additions.
- ❌ Delete buttons (🗑 Remove) in Vault do not trigger modal or removal logic.

### 🧩 Observations
- No visible error logs in Dev Console or terminal during interactions.
- `glossaryStore.js` may not be hooked into current glossary-addition flow.
- Glossary entries might still be added to `vaultStore.cards` or nowhere at all.

### 🛠️ Next Steps
- Trace glossary flow from `LookupView.jsx` or wherever `addToGlossary()` is triggered.
- Verify correct usage of `useGlossaryStore()` in `GlossaryView.jsx`.
- Add `console.log` inside `addToGlossary()` and `removeFromGlossary()` to confirm calls.
- Check whether UUIDs are being assigned and entries pushed into state.

---
## [2025-05-30 | 21:42] — Debugging Glossary and Vault logic

### 🔧 Fixes
- Fixed `VaultView.jsx` where `onDelete` was mistakenly calling `removeFromGlossary()` instead of `removeFromVault()`.

### 🔄 Refactors
- Planned separation of glossary state into its own store (`glossaryStore.js`) with `glossary-storage` key in localStorage.
- Glossary entries will no longer be stored via `vaultStore.js`.

### 🐛 Known Bugs
- Homepage Search bar does not persist query input to `/lookup`.
- Newly added entries show `"direction": "unknown"` due to missing logic at input or display layer.
- Vault and Glossary entry ID conflicts may arise if `uuidv4()` is not properly triggered.

### ✅ Confirmed Working
- React Portal modal now displays correctly with centered layout and backdrop blur.
- Navbar links render views correctly.
- Delete confirmation modal behaves as expected.


---
## [2025-05-30 | 17:45]

### ✅ Critical Bugfix: ConfirmDeleteModal now works as intended

- `EntryCard.jsx`:
  - Fixed: Added the missing `open={true}` prop to `ConfirmDeleteModal`, enabling it to render.
  - Included console traces for debugging `showModal` behavior.
  - Confirmed the modal mounts and responds properly to the "🗑 Remove" button.

- `ConfirmDeleteModal.jsx`:
  - Preserved usage of `ReactDOM.createPortal()` targeting `#modal-root`.
  - Inline styles successfully center the modal and apply backdrop blur.
  - Dynamic term name now correctly appears in the confirmation message.

- `index.css`:
  - Temporarily used the following debug block to force modal visibility:
    ```css
    #modal-root * {
      outline: 2px solid red !important;
      z-index: 99999 !important;
    }
    ```
  - This block was **removed after successful verification** of modal rendering.

✔️ Confirmed that the "Delete" button removes glossary entries correctly and updates the UI without error.

---

### ✨ Project Structure Enhancement: Introduced Shared Layout

- `Layout.jsx`:
  - New component created at `src/layout/Layout.jsx`.
  - Wraps all routed views within a consistent layout.
  - Includes `HeaderBar` and a `<main>` wrapper for routed content via `<Outlet />`.

- `App.jsx`:
  - Updated routing to nest all views under `<Layout />`.
  - Home (`/`) and Glossary (`/glossary`) pages now render within the shared layout.
  - Ensures consistent navigation and UI structure across views.

This improves maintainability and readability, especially as the application grows.

---

### 💄 Visual Refinement: NotFoundView Styled with Neumorphic Design

- Updated `NotFoundView.jsx` to reflect Polylogue’s visual design language.
- Introduced neumorphic shadow, rounded container, and soft background styling.
- Multilingual "Page not found" message preserved.
- Added clear and styled return button to Home.

Result: A branded and elegant 404 page aligned with the Polylogue experience.
