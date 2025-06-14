// 📁 src/views/GlossaryView.jsx
// 📝 Purpose: Displays saved glossary entries with ability to remove via floating modal.

import React from 'react';
import { useGlossaryStore } from '../stores/glossaryStore';
import EntryCard from '../components/shared/EntryCard';

export default function GlossaryView() {
  const glossary = useGlossaryStore((s) => s.glossary);
  const removeFromGlossary = useGlossaryStore((s) => s.removeFromGlossary);

  return (
    <div className="p-4 md:p-6 max-w-screen-md mx-auto space-y-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-foreground">
        📘 Glossary
      </h1>

      {glossary.length === 0 ? (
        <p className="text-muted-foreground">No glossary entries yet.</p>
      ) : (
        glossary.map((entry, idx) => (
          <EntryCard
            key={entry.id ?? idx}
            id={entry.id}
            term={entry.word}
            translation={entry.translation}
            direction={entry.direction ?? 'unknown'}
            onDelete={() => removeFromGlossary(entry.id)}
          />
        ))
      )}
    </div>
  );
}
