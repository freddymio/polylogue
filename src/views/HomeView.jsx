// VIEW: HomeView.jsx
// PURPOSE: Landing page with language selectors, query input, and search navigation

import React from 'react';
import { useLookupStore } from '../stores/lookupStore';
import { useNavigate } from 'react-router-dom';

const HomeView = () => {
  const navigate = useNavigate();

  const sourceLang = useLookupStore((s) => s.sourceLang);
  const targetLang = useLookupStore((s) => s.targetLang);
  const query = useLookupStore((s) => s.query);
  const setSourceLang = useLookupStore((s) => s.setSourceLang);
  const setTargetLang = useLookupStore((s) => s.setTargetLang);
  const setQuery = useLookupStore((s) => s.setQuery);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents full page reload
    navigate('/lookup'); // Will route to LookupView
  };

  return (
    <div className="h-full p-8 flex flex-col items-center justify-center text-center space-y-6">
      <h1 className="text-3xl font-bold">Welcome to Polylogue</h1>
      <p className="max-w-xl text-muted-foreground">
        A multilingual dictionary experience designed to help you navigate words, meanings, and context — not just translation.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-2">
        <div className="flex gap-2 items-center">
          <label>From:</label>
          <select value={sourceLang} onChange={(e) => setSourceLang(e.target.value)}>
            <option value="en">🇬🇧 English</option>
            <option value="fr">🇫🇷 French</option>
            <option value="es">🇪🇸 Spanish</option>
          </select>
          <span>⇌</span>
          <label>To:</label>
          <select value={targetLang} onChange={(e) => setTargetLang(e.target.value)}>
            <option value="en">🇬🇧 English</option>
            <option value="fr">🇫🇷 French</option>
            <option value="es">🇪🇸 Spanish</option>
          </select>
        </div>

        <input
          type="text"
          placeholder="Type a word..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border px-3 py-1 rounded w-64 text-center"
        />
{/*
        <button type="submit" className="bg-white border rounded px-4 py-1 hover:bg-gray-100">
          🔍 Search
        </button>
*/}
      </form>

      <p className="italic text-muted-foreground mt-8">
        Built with love by Bayo and the Living Spark 🧡
      </p>
    </div>
  );
};

export default HomeView;
