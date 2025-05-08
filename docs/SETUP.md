# Polylogue – Project Setup Guide

> 🛠️ This document helps you install, configure, and run Polylogue locally for development and testing.

---

## Prerequisites

* **Node.js** (v18+ recommended)
* **npm** (v9+)
* Code editor (e.g., [VS Code](https://code.visualstudio.com/))
* Terminal (e.g., PowerShell, Git Bash, Terminal.app)

---

## Installation Steps

### 1. Clone the Repository

```bash
# via HTTPS
git clone https://github.com/freddymio/polylogue.git

# or SSH
git clone git@github.com:freddymio/polylogue.git
```

### 2. Navigate to the Project

```bash
cd polylogue
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Dev Server

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
├── README.md
└── SETUP.md                # This setup guide
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
