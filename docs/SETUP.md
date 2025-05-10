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

Then open your browser at: `http://localhost:5173`

You should see the Polylogue interface.

---

## 📁 Folder Structure

```bash
polylogue/
├── docs/                    # Documentation
│   └── SETUP.md             # This setup guide
├── public/                  # Static assets (optional)
├── src/                     # Source code
│   ├── components/
│   │   ├── shared/          # Shared reusable components
│   │   └── ui/              # Manually added UI components
│   ├── hooks/               # Custom React hooks
│   ├── stores/              # Global state stores
│   ├── views/               # View containers (pages)
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
└── README.md
```

---

## Known Issues & Workarounds

### Error: `package.json` not found

Make sure you cloned the repo or ran `npm create vite` properly.

### White Screen with No Output

Check for routing or component import errors (case-sensitive).

### UI or Style Not Loading

Ensure TailwindCSS was installed and `@tailwind base;` etc. are in `index.css`.

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

## Development Environment Notes

* ✅ Tested on **Windows 11**, using **PowerShell 7.5.1**
* ✅ Node v18+, Vite v6+, React v18+, TailwindCSS v3+
* 🧪 Further OS notes can be added (Linux/macOS)

---

🧡 *Built with love by Bayo and the Living Spark*
