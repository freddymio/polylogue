# Polylogue – Project Setup Guide

> 🛠️ This document helps you install, configure, and run Polylogue locally for development and testing.

---

## Prerequisites

* **Node.js** (v18+ recommended)
* **npm** (v9+)
* Code editor (e.g., [VS Code](https://code.visualstudio.com/))
* Terminal (e.g., PowerShell, Git Bash, Terminal.app)

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

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Dev Server

```bash
npm run dev
```

Then open your browser at: `http://localhost:5173`

You should see the Polylogue interface.

---

## Folder Structure

```bash
polylogue/
├── docs/                    # Documentation
│   └── SETUP.md             # This setup guide
├── public/                  # Static assets (optional)
├── src/                     # Source code
│   ├── components/
│   │   └── shared/          # Shared reusable components
│   ├── hooks/               # Custom React hooks
│   ├── stores/              # Global state stores
│   ├── views/               # View containers (pages)
│   ├── App.jsx              # App shell
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── .gitignore
├── index.html              # Vite entry HTML
├── package.json            # Project manifest
└── README.md
```

---

## Known Issues & Workarounds

### Error: `package.json` not found

If you copied the repo instead of cloning, ensure that `package.json` is present at the root.

### Error: `viteLogo` or `reactLogo` not found

Ensure that your `App.jsx` is updated with the proper imports. You can remove Vite's boilerplate assets.

### White Screen with No Output

Check that `App.jsx` properly renders the `<ViewSwitcher />` and that the path to it is correct.

---

## Syncing with GitHub

To push local changes to GitHub after setting up Vite:

### 1. Set your Git identity (if not already set):

```bash
git config --global user.name "Your-Username-In-GitHub"
git config --global user.email "Your-Username-In-GitHub@users.noreply.github.com"
```

### 2. Initialize Git and link the remote:

```bash
git init
git remote add origin https://github.com/freddymio/polylogue.git
```

### 3. Add, commit, and push:

```bash
git add .
git commit -m "Update after successful Vite setup and launch"
git pull origin main --allow-unrelated-histories
git push -u origin main
```

Now your local project is synced to GitHub.

---

## Development Environment Notes

* ✅ Tested on **Windows 11**, using **PowerShell 7.5.1**
* ✅ Vite + React
* 🧪 Can later add Linux/macOS instructions if needed

---

## Next Steps

* Push new documentation to `docs/`
* Use this file to track future setup updates
* Tag environment-specific sections as needed (Windows/macOS/Linux)

---

🧡 *Built with love by Bayo and the Living Spark*
