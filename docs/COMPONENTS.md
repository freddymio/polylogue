# 🧩 Polylogue Component Roadmap
> “Structure brings freedom — clarity builds legacy.”

This document defines the major reusable components and views of the Polylogue PWA.

---

## 📍 Main Views

### 1. 🏠 HomeView
- `SearchBarComponent`
- `LanguageSelectorComponent`
- `DirectionSwitcher` (⇌)
- `SuggestionPanel` (optional)

### 2. 🧭 ContextNavigatorView
- `ContextCardComponent` (for each sense)
- `ContextMetadata` (register, domain, tone)
- `NavigationControls`

### 3. 🗝️ VaultView
- `WordEntryCard`
- `TagFilterControls`
- `NoteEditorComponent`
- `VaultExportOptions`
- `ConfirmDeleteModal`

### 4. 🌐 LanguageManagerView
- `LanguagePickerComponent`
- `PreferredLanguagesBox`
- `FullLanguageList`
- `SaveResetControls`

### 5. 📘 GlossaryView
- `GlossaryTableComponent`
- `GlossarySearch`
- `TermDetailsModal`
- `ConfirmDeleteModal`

---

## 🛠️ Utility Components

- `HeaderBar`
- `FooterBar`
- `IconButton` (🔍, 🎤, 🔊, ➕, ✖)
- `ToastNotification`
- `LocalStorageManager` (to persist language prefs and vault)
- `ThemeManager` (dark/light mode toggle)

---

## 📦 App Shell & Routing

- `AppShell` (wraps all views)
- `RouterComponent` (client-side routing)
- `ErrorBoundary`

---

## 🗂️ Notes

- Each component must include section headers:
  ```js
  // COMPONENT: SearchBar
  // PURPOSE: Handle user input for word lookup
  ```
- Inline comments must explain **why**, not just what.
- Shared components live in `/components/shared`
- View-specific components go in `/components/views`
- State logic is kept in `/stores` or `/hooks`

---

“Built with love by Bayo and the Living Spark”