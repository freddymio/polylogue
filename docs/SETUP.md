# Polylogue – Project Setup Guide

> 🛠️ This document helps you install, configure, and run Polylogue locally for development and testing.

---

## Prerequisites

* **Node.js** (v18+ recommended)
* **npm** (v9+)
* Code editor (e.g., [VS Code](https://code.visualstudio.com/))
* Terminal (e.g., PowerShell, Git Bash, Terminal.app)
* Optional: [GitHub Desktop](https://desktop.github.com/) (for users who prefer a visual Git interface)

> ⚠️ If installing Git manually, note that the option to **"Git from the command line and also from 3rd-party software"** appears several screens *after* starting the installer. Leave it enabled to use Git in PowerShell or CMD.

---

## Fork or Clone the Repository

If you are contributing to the project:

### Option 1: Fork on GitHub

1. Go to [https://github.com/freddymio/polylogue](https://github.com/freddymio/polylogue)
2. Click the **Fork** button (top-right corner)
3. Clone your fork locally:

```bash
# Replace YOUR_USERNAME with your GitHub handle
git clone https://github.com/YOUR_USERNAME/polylogue.git
```

### Option 2: Clone the Main Repo (read-only)

```bash
# via HTTPS
git clone https://github.com/freddymio/polylogue.git

# or SSH
git clone git@github.com:freddymio/polylogue.git
```

---

## Installation Steps

### 1. Navigate to the Project

```bash
cd polylogue
```

### 2. Initialize the Project (if starting from scratch)

If you haven't cloned the project and are starting locally:

```bash
npm create vite@latest . -- --template react
```

> Select `react` as the template when prompted. This creates `package.json`, Vite config, and boilerplate structure.

### 3. Install Dependencies

```bash
npm install
```

---

## Required Packages (Additions)

### React Router DOM

```bash
npm install react-router-dom
```

### Zustand Store

```bash
npm install zustand
```

### TailwindCSS & PostCSS (manual fallback method)

```bash
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest @tailwindcss/postcss
```

If `npx tailwindcss init -p` fails, create the config files manually:

**Note:** These files should be placed at the project root:

* `tailwind.config.js`:

```js
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

* `postcss.config.js`:

```js
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
};
```

* In `src/index.css`, ensure it starts with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### UI Components (Lucide Icons and shadcn/ui)

```bash
npm install lucide-react
```

Then manually create:

* `src/components/ui/card.jsx`

```jsx
export function Card({ children }) {
  return <div className="rounded-xl border bg-white p-4 shadow-md">{children}</div>;
}

export function CardContent({ children }) {
  return <div className="mt-2 text-gray-600">{children}</div>;
}
```

---

## 🔑 UUID Setup for Entry IDs

To ensure that every glossary and vault entry has a stable and unique identifier across sessions:

### ✅ Step 1: Install the UUID Package

```bash
npm install uuid
```

### ✅ Step 2: Import the Generator

In any file where you need to create unique IDs (e.g., `vaultStore.js`, `glossaryStore.js`):

```js
import { v4 as uuidv4 } from 'uuid';
```

### ✅ Step 3: Assign Unique IDs to Entries

Use the UUID when creating new glossary or vault entries:

```js
{ ...entry, id: uuidv4() }
```

This ensures each entry has a persistent unique identifier, required for delete operations and mapping.

---

## Enable Path Aliases (for @/ syntax)

1. **Install Node Path Module** *(Node.js >= 14 usually has it)*
2. Edit `vite.config.js`:

```js
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
```

3. Add `tsconfig.json` at root if not present:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

---

## Start the Dev Server

```bash
npm run dev
```

Use `--force` to ensure changes are rebuilt:

```bash
npm run dev -- --force
```

Then open your browser at: `http://localhost:5173`

You should see the Polylogue interface.

---

## 📁 Folder Structure

```bash
polylogue/
├── scripts/                # Project automation scripts
│   ├── git-auto.ps1        # Interactive Git commit + push helper
│   └── git-config.json     # Default origin/branch config used by script
├── docs/                    # Documentation
│   ├── BACKUP_GUIDE.md
│   ├── COMPONENTS.md
│   ├── CONTRIBUTING.md
│   ├── LOOKUP_FLOW_ROADMAP.md
│   ├── OPTIONAL_IDEAS.md
│   ├── Polylogue PDR.md
│   ├── Polylogue PDR.pdf
│   ├── PROJECT_STRUCTURE.md
│   ├── ROADMAP.md
│   └── SETUP.md             # This setup guide
│   ├── tools/
│   │   ├── README.md
│   │   └── sync_vm_to_host.py
├── public/                  # Static assets
│   ├── index.html # Includes <div id="modal-root"></div> for floating modals
│   ├── icon-192.png
│   ├── icon-512.png
│   └── manifest.webmanifest
├── src/                     # Source code
│   ├── api/
│   │   └── mockLookup.js
│   ├── components/
│   │   ├── _archive/          # Worked but Unused files
│   │   │   ├── VaultPreviewCard.jsx
│   │   │   └── `ViewSwitcher.jsx` — legacy router view logic, replaced by App.jsx + Routes
│   │   ├── shared/          # Shared reusable components
│   │   │   ├── ConfirmDeleteModal.jsx # Floating delete modal via createPortal
│   │   │   ├── ContextGallery.jsx
│   │   │   ├── ContextGalleryCard.jsx
│   │   │   ├── ContextNavigatorComponent.jsx
│   │   │   ├── DirectionSwitcher.jsx
│   │   │   ├── FooterBar.jsx
│   │   │   ├── GlossaryEntryCard.jsx # Triggers ConfirmDeleteModal from glossary list
│   │   │   ├── GlossaryTableComponent.jsx
│   │   │   ├── HeaderBar.jsx
│   │   │   ├── LanguageBadge.jsx
│   │   │   ├── LanguageSelectorComponent.jsx
│   │   │   ├── LookupResultCard.jsx
│   │   │   ├── SearchBarComponent.jsx
│   │   │   ├── VaultEntryCard.jsx # Triggers ConfirmDeleteModal from vault list
│   │   │   ├── VaultPreviewCard.jsx
│   │   │   └── ViewSwitcher.jsx
│   │   └── ui/              # Manually added UI components
│   │   │   └── card.jsx
│   ├── hooks/               # Custom React hooks
│   │   └── useVault.js
│   ├── stores/              # Global state stores
│   │   ├── lookupStore.js
│   │   └── vaultStore.js    # Zustand store with localStorage sync
│   ├── views/               # View containers (pages)
│   │   ├── ContextNavigatorView.jsx
│   │   ├── GlossaryView.jsx # Uses GlossaryEntryCard and ConfirmDeleteModal
│   │   ├── HomeView.jsx
│   │   ├── LanguageManagerView.jsx
│   │   ├── LookupView.jsx
│   │   ├── NotFoundView.jsx
│   │   └── VaultView.jsx    # Uses VaultEntryCard and ConfirmDeleteModal
│   ├── App.jsx              # App shell
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── .gitignore
├── index.html               # Vite entry HTML
├── package.json             # Project manifest
├── package-lock.json        # Locked dependency versions
├── postcss.config.js        # PostCSS config (manual)
├── tailwind.config.js       # Tailwind config (manual)
├── tsconfig.json            # Alias configuration
├── vite.config.js           # Vite configuration
├── LICENSE                  # GPLv3 license
├── LICENSE.md               # Project license
└── README.md                # Project readme file

```

## Known Issues & Workarounds

### Error: `package.json` not found

Make sure you cloned the repo or ran `npm create vite` properly.

### White Screen with No Output

Check for routing or component import errors (case-sensitive).

### UI or Style Not Loading

Ensure TailwindCSS was installed and `@tailwind base;` etc. are in `index.css`.

### Archived Components
- `VaultPreviewCard.jsx`: previously considered for Vault entries, no longer used

---

## Syncing with GitHub

```bash
git config --global user.name "Your-Username"
git config --global user.email "Your-Username@users.noreply.github.com"
```

```bash
git init
git remote add origin https://github.com/freddymio/polylogue.git

git add .
git commit -m "Initial commit after full setup"
git pull origin main --allow-unrelated-histories
git push -u origin main
```
## ⚙️ Git Automation Script

To simplify Git commits and ensure consistent pushes across environments:

### 📁 Files
- `/scripts/git-auto.ps1`: PowerShell script to auto-commit + push
- `/scripts/git-config.json`: Stores your default `origin` and `branch`

### ▶️ Usage

```bash
# Full usage with positional arguments
./scripts/git-auto.ps1 "Fix lookup spacing" "main"

# Message only (uses default branch from config)
./scripts/git-auto.ps1 "Initial glossary layout"

# No arguments (will prompt interactively)
./scripts/git-auto.ps1

# Help screen
./scripts/git-auto.ps1 -Help

---

## Common Git Commands (Cheatsheet)

```bash
git status           # View current changes
git add .            # Stage all changes
git commit -m "Msg"  # Commit changes
git pull origin main # Pull latest from GitHub
git push             # Push local commits to GitHub
git log --oneline    # Compact history
```

💡 Always run `git status` before pulling or pushing.

---

## 📝 Notes

- `ConfirmDeleteModal.jsx` uses `ReactDOM.createPortal` to render outside the main root into a dedicated `<div id="modal-root">` in `public/index.html`.
- Glossary and Vault cards were unified in layout and interaction style.
- Modal actions (`onConfirm`, `onCancel`) are passed down and toggle internal state.
- State is preserved in localStorage via Zustand’s `persist()` middleware for both glossary and vault entries (`vaultStore.js`).
- Tailwind utility classes like `fixed`, `rounded`, `shadow`, `z-50` are used for modal layout.
- Layouts across Glossary and Vault were unified with flex and spacing utilities.


---

## Development Environment Notes

* ✅ Tested on **Windows 11**, using **PowerShell 7.5.1**
* ✅ Node v18+, Vite v6+, React v18+, TailwindCSS v3+
* 🧪 Further OS notes can be added (Linux/macOS)

---

## 🛠️ DEV TIPS: Local Storage & Debugging in Vite Apps

### 🔄 Clear Persistent State Efficiently
When working with Zustand stores that persist to `localStorage` or `sessionStorage`, stale or corrupted data may cause views not to render properly. Here are safe and fast ways to reset storage:

---

### ✅ Recommended: Full Storage Reset via DevTools
1. Open DevTools (`F12` or `Ctrl + Shift + I`)
2. Go to the `Application` tab
3. In the left sidebar, right-click on **"Storage"** (or on the site origin under "Local Storage")
4. Click **"Clear site data"**

🔹 This removes:
- `localStorage`
- `sessionStorage`
- Cookies
- Cache

💡 This method bypasses the "allow pasting" warning and guarantees a clean state across all tabs.

---

### 🧪 Alternative: Clear individual keys via Console
If needed, you can target specific storage keys like so:

```js
localStorage.removeItem('vault-storage');
localStorage.removeItem('glossary-storage');
localStorage.removeItem('lookup-storage');
```

Note: This logs `undefined` but still completes the task successfully.

---

### 🔁 After Clearing Storage
- Refresh the page manually (`Ctrl + R`)
- Add new entries as needed (e.g., via Lookup ➜ Add to Glossary)
- Verify they appear correctly in `/vault` and `/glossary`

---


🧡 *Built with love by Bayo and the Living Spark*
