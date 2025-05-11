// VIEW: LookupView.jsx
// PURPOSE: Displays lookup results based on current query and language settings

import { useEffect, useState } from 'react';
import { useLookupStore } from '../stores/lookupStore';

const LookupView = () => {
  const { query, sourceLang, targetLang } = useLookupStore();
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const timeout = setTimeout(() => {
      // Fake translation result for now
      setResults([
        {
          word: query,
          translation: `(${targetLang}) Translation of "${query}"`,
          from: sourceLang,
          to: targetLang,
        },
      ]);
    }, 300); // debounce time

    return () => clearTimeout(timeout);
  }, [query, sourceLang, targetLang]);

  return (
    <div className="p-6 space-y-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold">
        Lookup: <span className="italic text-muted-foreground">{query}</span>
      </h2>

      {results.length === 0 ? (
        <p className="text-muted-foreground italic">Start typing to see results...</p>
      ) : (
        <div className="space-y-4">
          {results.map((r, i) => (
            <div key={i} className="border rounded-lg p-4 shadow-sm bg-white">
              <p className="text-lg font-medium">{r.word}</p>
              <p className="text-sm text-muted-foreground">{r.translation}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LookupView;
