// VIEW: GlossaryView
// PURPOSE: Display the multilingual glossary entries using the GlossaryTableComponent

import React from 'react';
import { useVaultStore } from '../stores/vaultStore';

const GlossaryView = () => {
  const glossary = useVaultStore((state) => state.glossary);

  return (
    <div className="p-4 space-y-4 max-w-xl mx-auto">
      <h2 className="text-xl font-bold">📚 Your Glossary</h2>

      {glossary.length === 0 ? (
        <p className="italic text-muted-foreground">No saved entries yet.</p>
      ) : (
        <ul className="space-y-2">
          {glossary.map((entry, index) => (
            <li key={index} className="border p-3 rounded shadow-sm bg-white">
              <strong>{entry.word}</strong> — {entry.meaning} ({entry.lang})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GlossaryView;
