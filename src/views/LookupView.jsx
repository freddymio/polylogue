// VIEW: LookupView.jsx
// PURPOSE: Displays lookup results based on current query and language settings

import React, { useState, useEffect, useRef } from 'react';
import mockLookup from '../api/mockLookup';
import useLookupStore from '../stores/lookupStore';
import LookupResultCard from '../components/shared/LookupResultCard';

const MAX_HISTORY = 10;

export default function LookupView() {
  const query = useLookupStore((state) => state.query);
  const sourceLang = useLookupStore((state) => state.sourceLang);
  const targetLang = useLookupStore((state) => state.targetLang);
  const setQuery = useLookupStore((state) => state.setQuery);
  const setSourceLang = useLookupStore((state) => state.setSourceLang);
  const setTargetLang = useLookupStore((state) => state.setTargetLang);

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [recent, setRecent] = useState([]);
  const [lookupPerformed, setLookupPerformed] = useState(false);

  const inputRef = useRef();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }

    const saved = localStorage.getItem('recentLookups');
    if (saved) setRecent(JSON.parse(saved));
  }, []);

  const saveToRecent = (entry) => {
    const exists = recent.find(
      (e) =>
        e.query === entry.query &&
        e.sourceLang === entry.sourceLang &&
        e.targetLang === entry.targetLang
    );
    if (exists) return;
    const updated = [entry, ...recent].slice(0, MAX_HISTORY);
    setRecent(updated);
    localStorage.setItem('recentLookups', JSON.stringify(updated));
  };

  const handleLookup = async (manual = true) => {
    const trimmed = query.trim();
    if (!trimmed) return;

    setLoading(true);
    setError(null);
    setLookupPerformed(false);
    try {
      console.log("🚀 Executing mockLookup with:", trimmed);
      const res = await mockLookup(trimmed, sourceLang, targetLang);
      setResult({
        ...res,
        sourceLang,
        targetLang,
      });
      if (manual) saveToRecent({ query: trimmed, sourceLang, targetLang });
      setLookupPerformed(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const triggerRecent = (item) => {
    setQuery(item.query);
    setSourceLang(item.sourceLang);
    setTargetLang(item.targetLang);
    handleLookup(false);
  };

  return (
    <div className="p-4 max-w-xl mx-auto space-y-4">
      <form
        className="flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("🔁 Submitting from form via Enter key");
          handleLookup(true);
        }}
      >
        <input
          name="lookupInput"
          ref={inputRef}
          type="text"
          autoComplete="off"
          className="border p-2 flex-1 rounded"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter a word..."
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Lookup
        </button>
      </form>

      {recent.length > 0 && (
        <div className="border p-3 rounded bg-gray-50">
          <h3 className="font-semibold mb-2 text-sm">Recent Lookups:</h3>
          <ul className="text-sm space-y-1">
            {recent.map((item, i) => (
              <li
                key={i}
                onClick={() => triggerRecent(item)}
                className="cursor-pointer hover:underline"
              >
                {item.query}{' '}
                <span className="text-xs text-muted-foreground">
                  ({item.sourceLang} ⇌ {item.targetLang})
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {loading && <p className="italic text-muted-foreground">Looking it up…</p>}
      {error && <p className="text-red-600">{error}</p>}

      {lookupPerformed && result && (
        <LookupResultCard
          result={{
            word: result.word || query,
            translation: result.translation,
            partOfSpeech: 'noun',
            example: result.examples?.[0] || '',
            related: result.related || [],
            sourceLang: result.sourceLang,
            targetLang: result.targetLang,
            tone: 'highlight',
            theme: 'identity',
          }}
        />
      )}
    </div>
  );
}
