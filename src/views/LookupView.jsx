// VIEW: LookupView.jsx
// PURPOSE: Displays lookup results based on current query and language settings

import React, { useEffect, useState } from 'react';
import { useLookupStore } from '../stores/lookupStore';
import LookupResultCard from '../components/shared/LookupResultCard';

const LookupView = () => {
  const { query, sourceLang, targetLang, loading, setLoading } = useLookupStore();
  const [results, setResults] = useState([]);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      // Simulate fetched result
      setResults([
        {
          word: query,
          partOfSpeech: 'noun',
          translation: `${targetLang.toUpperCase()} Traduction de "${query}"`,
          example: `Used in a sentence: "The ${query} was beautiful."`,
        },
      ]);
      setLoading(false);
    }, 1000);
  }, [query, sourceLang, targetLang]);

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">
        Lookup: <span className="italic">{query}</span>
      </h2>

      {loading ? (
        <div className="italic text-muted-foreground">Looking it up...</div>
      ) : (
        <div className="space-y-4">
          {results.map((res, i) => (
            <LookupResultCard key={i} result={res} />
          ))}
        </div>
      )}
    </div>
  );
};

export default LookupView;
