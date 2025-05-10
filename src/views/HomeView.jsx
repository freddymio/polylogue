// VIEW: HomeView
// PURPOSE: Landing screen for Polylogue with navigation and live lookup input

import React from 'react';
import { Link } from 'react-router-dom';
import { useLookupStore } from '../stores/lookupStore';

const HomeView = () => {
  const {
    sourceLang,
    targetLang,
    query,
    setSourceLang,
    setTargetLang,
    setQuery,
  } = useLookupStore();

  return (
    <div className="h-full p-8 flex flex-col items-center justify-center text-center space-y-6">
      <h1 className="text-4xl font-bold">Welcome to Polylogue</h1>
      <p className="text-muted-foreground max-w-xl">
        A multilingual dictionary experience designed to help you navigate words, meanings, and context — not just translation.
      </p>

      {/* Translator input area */}
      <div className="flex flex-col items-center space-y-4">
        <div className="flex gap-2 items-center">
          <label htmlFor="fromLang">From:</label>
          <select
            id="fromLang"
            value={sourceLang}
            onChange={(e) => setSourceLang(e.target.value)}
          >
            <option value="EN">🇬🇧 English</option>
            <option value="FR">🇫🇷 French</option>
            <option value="ES">🇪🇸 Spanish</option>
          </select>

          <span className="text-lg">⇌</span>

          <label htmlFor="toLang">To:</label>
          <select
            id="toLang"
            value={targetLang}
            onChange={(e) => setTargetLang(e.target.value)}
          >
            <option value="FR">🇫🇷 French</option>
            <option value="EN">🇬🇧 English</option>
            <option value="ES">🇪🇸 Spanish</option>
          </select>
        </div>

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Type a word..."
          className="border px-3 py-2 rounded w-64"
        />

        <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
          🔍 Search
        </button>
      </div>

      {/* Navigation */}
      <div className="grid grid-cols-2 gap-4 pt-6">
        <Link to="/vault" className="text-blue-500 underline">🧑‍💼 Vault</Link>
        <Link to="/contexts" className="text-blue-500 underline">🧩 Context Gallery</Link>
        <Link to="/glossary" className="text-blue-500 underline">📚 Glossary</Link>
        <Link to="/context" className="text-blue-500 underline">🧠 Context</Link>
        <Link to="/languages" className="text-blue-500 underline">🌐 Language Settings</Link>
      </div>

      <p className="text-sm text-muted-foreground italic">
        Built with love by Bayo and the Living Spark 🧡
      </p>
    </div>
  );
};

export default HomeView;
