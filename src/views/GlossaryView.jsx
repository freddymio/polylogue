// 📁 GlossaryView.jsx
// 📝 Purpose: Displays saved glossary entries with ability to remove via floating modal.

import { useGlossaryStore } from '../stores/glossaryStore';
import EntryCard from '../components/shared/EntryCard';

export default function GlossaryView() {
  const glossary = useGlossaryStore((state) => state.glossary);
  const removeFromGlossary = useGlossaryStore((state) => state.removeFromGlossary);

  return (
    <main className="min-h-screen flex flex-col">
      <header className="bg-gray-100 px-4 py-3 border-b border-gray-300 mb-4 sticky top-0 z-20">
        <nav className="max-w-4xl mx-auto flex flex-wrap justify-center gap-3">
          <a href="/" className="rounded-xl text-gray-500 bg-gray-100 no-underline text-sm outline-none transition-all">
            <span className="px-3 py-1 inline-block">🏠 Home</span>
          </a>
          <a href="/vault" className="rounded-xl text-gray-500 no-underline text-sm transition-all bg-gray-100 outline-none">
            <span className="px-3 py-1 inline-block">🧑‍💼 Vault</span>
          </a>
          <a href="/contexts" className="rounded-xl text-gray-500 no-underline text-sm transition-all bg-gray-100 outline-none">
            <span className="px-3 py-1 inline-block">🧩 Context Gallery</span>
          </a>
          <a href="/glossary" className="rounded-xl text-indigo-700 bg-white font-bold shadow text-sm outline-none">
            <span className="px-3 py-1 inline-block">📚 Glossary</span>
          </a>
          <a href="/context" className="rounded-xl text-gray-500 no-underline text-sm transition-all bg-gray-100 outline-none">
            <span className="px-3 py-1 inline-block">🧠 Context</span>
          </a>
          <a href="/languages" className="rounded-xl text-gray-500 no-underline text-sm transition-all bg-gray-100 outline-none">
            <span className="px-3 py-1 inline-block">🌐 Language Settings</span>
          </a>
        </nav>
      </header>

      <div className="p-4 md:p-6 max-w-screen-md mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-foreground">📘 Glossary</h1>

        <div className="space-y-4">
          {glossary.map((entry, idx) => (
            <EntryCard
              key={entry.id}
              id={entry.id}
              term={entry.word}
              translation={entry.translation}
              direction={entry.direction ?? "unknown"}
              onDelete={() => removeFromGlossary(entry.id)} // o removeFromVault
            />
          ))}
        </div>
      </div>
    </main>
  );
}
