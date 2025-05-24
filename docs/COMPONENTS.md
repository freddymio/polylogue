# 🧩 Polylogue Component Roadmap
> “Structure brings freedom — clarity builds legacy.”

This document defines the major reusable components and views of the Polylogue PWA.

---

## 📍 Main Views (`/components/views/`)

### 1. 🏠 HomeView
- `SearchBarComponent` – Input field with live query dispatch.
- `LanguageSelectorComponent` – Dropdown or modal to pick base/target languages.
- `DirectionSwitcher` (⇌) – Flips source ↔ target direction.
- `SuggestionPanel` *(optional)* – Contextual term/phrase recommendations.

### 2. 🧭 ContextNavigatorView
- `ContextCardComponent` – Display each sense or nuance with metadata.
- `ContextMetadata` – Shows register, domain, tone, and related tags.
- `NavigationControls` – Arrows or swipes for semantic navigation.

### 3. 🗝️ VaultView
- `VaultEntryCard` – A word card with badge, metadata, and delete icon.
- `TagFilterControls` – Filter saved entries by tag.
- `NoteEditorComponent` – Rich text area for personal notes per entry.
- `VaultExportOptions` – Export actions (e.g., JSON, TXT).
- `ConfirmDeleteModal` – Floating modal rendered via `createPortal` to `#modal-root`.

### 4. 🌐 LanguageManagerView
- `LanguagePickerComponent` – UI to browse all languages (grouped, scrollable).
- `PreferredLanguagesBox` – Selected preferred languages.
- `FullLanguageList` – Complete list, possibly searchable.
- `SaveResetControls` – Confirm or cancel changes to preferences.

### 5. 📘 GlossaryView
- `GlossaryTableComponent` – Main display of glossary terms.
- `GlossarySearch` – Input/search logic for glossary.
- `GlossaryEntryCard` – Displays a term pair and actions.
- `TermDetailsModal` – Modal for full term explanation.
- `ConfirmDeleteModal` – Shared deletion modal from VaultView.

---

## 🛠️ Shared Utility Components (`/components/shared/`)

- `HeaderBar` – Top navigation bar.
- `FooterBar` – Bottom action bar or credits.
- `IconButton` – Generic button with icon (🔍, 🎤, 🔊, ➕, ✖).
- `ToastNotification` – Ephemeral feedback (success, error, info).
- `LocalStorageManager` – Handles saving/restoring preferences & vault.
- `ThemeManager` – Light/dark toggle controller.

---

## 📦 App Shell & Routing (`/App.jsx`, `/router/`, `/layouts/`)

- `AppShell` – Wraps all views and layout slots.
- `RouterComponent` – Client-side route switching logic.
- `ErrorBoundary` – Catches view-level rendering errors.

---

## 📁 State Management & Logic (`/stores`, `/hooks`)

- Zustand-based stores for:
  - Vault
  - LanguagePrefs
  - Glossary
- Custom hooks for:
  - useVault()
  - useGlossarySearch()
  - useModal()

---

## 🧭 Guidelines

- Each component must begin with:
  ```js
  // COMPONENT: SearchBar
  // PURPOSE: Handle user input for word lookup

