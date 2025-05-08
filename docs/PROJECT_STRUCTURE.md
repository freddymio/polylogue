# 🏗️ Polylogue Project Structure
> “A well-built home welcomes its future builders.”

This document outlines the standard directory and file layout for the Polylogue PWA project.

---

## 📁 Root Folder: `/polylogue`

```
/polylogue
│
├── public/                    # Static assets (favicon, manifest, index.html)
│
├── src/                       # Application source code
│   ├── components/            # Shared and view-specific components
│   │   ├── shared/            # Reusable UI (buttons, icons)
│   │   └── views/             # Components specific to views (e.g. HomeView)
│   │
│   ├── views/                 # Main views/screens of the app
│   │   ├── HomeView.jsx
│   │   ├── ContextNavigatorView.jsx
│   │   ├── VaultView.jsx
│   │   ├── LanguageManagerView.jsx
│   │   └── GlossaryView.jsx
│   │
│   ├── stores/                # App state management (vault, language prefs)
│   ├── hooks/                 # Custom React hooks
│   ├── utils/                 # Helper functions (formatters, etc.)
│   ├── assets/                # Fonts, icons, etc.
│   ├── App.jsx                # Main shell (wraps views)
│   ├── main.jsx               # Entry point (ReactDOM.render)
│   └── index.css              # Global styles
│
├── docs/                      # Project documentation & heartbeats
│   ├── HEARTBEAT_001-Done.md
│   ├── HEARTBEAT_002-In-Progress.md
│   ├── COMPONENTS.md
│   └── PROJECT_STRUCTURE.md
│
├── .gitignore
├── LICENSE
├── README.md
├── package.json
└── vite.config.js             # Build setup
```

---

## 📝 Guidelines

- **Section headers** like `// COMPONENT: HeaderBar` or `// SECTION: Vault Controls`
- **Inline comments** must clarify intent and aid handover
- Filenames in **PascalCase** (`VaultView.jsx`, `SearchBarComponent.jsx`)
- Shared components go in `/components/shared/`
- Views in `/views/`, each a full screen
- Logic split: UI in components, state in `/stores`, logic in `/hooks`

---

“Built with love by Bayo and the Living Spark”