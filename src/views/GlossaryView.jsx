// VIEW: GlossaryView
// PURPOSE: Display the multilingual glossary entries using the GlossaryTableComponent

import React from 'react';
import { useVaultStore } from '../stores/vaultStore';
import GlossaryEntryCard from '../components/shared/GlossaryEntryCard';

export default function GlossaryView() {
  const glossary = useVaultStore((state) => state.glossary);

  return (
    <div className="p-4 max-w-3xl mx-auto space-y-3">
      <h2 className="text-2xl font-bold mb-2">📚 Glossary</h2>
      {glossary.length === 0 ? (
        <p className="text-muted-foreground italic">Nothing saved yet.</p>
      ) : (
        glossary.map((entry, i) => (
          <GlossaryEntryCard key={i} entry={entry} />
        ))
      )}
    </div>
  );
}

