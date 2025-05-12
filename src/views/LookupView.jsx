// VIEW: LookupView.jsx
// PURPOSE: Displays lookup results based on current query and language settings

import React, { useEffect, useState } from 'react';
import { useLookupStore } from '../stores/lookupStore';
import LookupResultCard from '../components/shared/LookupResultCard';

const LookupView = () => {
  const { query, sourceLang, targetLang, loading, setLoading } = useLookupStore();
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!query) return;

    setLoading(true);

    // Simulate API delay (1 second)
    const timeout = setTimeout(() => {
      setResults([
        {
          word: query,
          language: targetLang,
          translation: `Traduction de "${query}"`,
          example: `Used in a sentence: "The ${query} was beautiful."`,
        },
      ]);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [query, sourceLang, targetLang, setLoading]);

  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-semibold mb-4">
        Lookup: <span className="italic">{query}</span>
      </h2>

      {loading ? (
        <div className="text-gray-500 italic animate-pulse">Loading...</div>
      ) : (
        results.map((res, i) => <LookupResultCard key={i} result={res} />)
      )}
    </div>
  );
};

export default LookupView;
