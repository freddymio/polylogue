// 📁 src/views/PolylogueView.jsx

import React, { useState, useEffect, useRef } from 'react';
import useLookupStore from '../stores/lookupStore';
import { lookupMockFetch } from '../api/mockLookup';
import LookupResultCard from '../components/shared/LookupResultCard';

export default function PolylogueView() {
  const query = useLookupStore((s) => s.query);
  const sourceLang = useLookupStore((s) => s.sourceLang);
  const targetLang = useLookupStore((s) => s.targetLang);
  const setQuery = useLookupStore((s) => s.setQuery);
  const setSourceLang = useLookupStore((s) => s.setSourceLang);
  const setTargetLang = useLookupStore((s) => s.setTargetLang);
  const addToRecent = useLookupStore((s) => s.addToRecent);

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [lookupPerformed, setLookupPerformed] = useState(false);

  const inputRef = useRef(null);

  // ✅ Auto-run + select input text
  useEffect(() => {
    if (query) {
      // Always auto-select input text on mount if there's a query
      requestAnimationFrame(() => {
        inputRef.current?.select();
      });
    }

    if (query && sourceLang && targetLang) {
      handleLookup();
    }
  }, []); // ← empty dependency list: run once on mount

  const handleLookup = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setError(null);
    setLookupPerformed(false);

    try {
      const res = await lookupMockFetch(query, sourceLang, targetLang);
      const resultObj = {
        ...res,
        sourceLang,
        targetLang,
      };
      setResult(resultObj);

      addToRecent({
        word: query,
        translation: res.translation ?? '',
        direction: `${sourceLang}→${targetLang}`,
      });

      setLookupPerformed(true);
    } catch (err) {
      setError('Failed to fetch translation.');
    } finally {
      setLoading(false);
    }
  };

  const handleSwap = () => {
    const temp = sourceLang;
    setSourceLang(targetLang);
    setTargetLang(temp);
  };

  return (
    <div className="min-h-screen px-4 py-8 max-w-screen-md mx-auto text-center space-y-6">
      <h1 className="text-3xl font-bold">Polylogue Lookup</h1>

      <div className="flex gap-3 justify-center">
        <select
          value={sourceLang}
          onChange={(e) => setSourceLang(e.target.value)}
          className="rounded-lg border px-3 py-2 shadow-inner"
        >
          <option value="en">🇬🇧 English</option>
          <option value="fr">🇫🇷 French</option>
          <option value="es">🇪🇸 Spanish</option>
        </select>

        <button
          onClick={handleSwap}
          className="text-xl px-2 py-1 hover:scale-105 transition"
        >
          ⇌
        </button>

        <select
          value={targetLang}
          onChange={(e) => setTargetLang(e.target.value)}
          className="rounded-lg border px-3 py-2 shadow-inner"
        >
          <option value="en">🇬🇧 English</option>
          <option value="fr">🇫🇷 French</option>
          <option value="es">🇪🇸 Spanish</option>
        </select>
      </div>

      <div className="flex gap-2 w-full">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-grow border px-4 py-2 rounded-xl"
          placeholder="Type a word or phrase..."
        />
        <button
          onClick={handleLookup}
          className="bg-blue-600 text-white px-4 py-2 rounded-xl"
        >
          Lookup
        </button>
      </div>

      {loading && <p className="italic text-muted-foreground">Looking it up…</p>}
      {error && <p className="text-red-600">{error}</p>}

      {lookupPerformed && result && (
        <LookupResultCard result={result} />
      )}
    </div>
  );
}
