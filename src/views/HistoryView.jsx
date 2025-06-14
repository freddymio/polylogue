// 📁 src/views/HistoryView.jsx
import React, { useState } from 'react';
import useLookupStore from '../stores/lookupStore';
import ConfirmDeleteModal from '../components/shared/ConfirmDeleteModal';
import EntryCard from '../components/shared/EntryCard';

export default function HistoryView() {
  const {
    recentLookups,
    removeFromRecent,
    clearRecent,
  } = useLookupStore();

  const [showConfirmClearAll, setShowConfirmClearAll] = useState(false);
  const [pendingDelete, setPendingDelete] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const confirmDeleteAll = () => {
    clearRecent();
    setShowConfirmClearAll(false);
  };

  const confirmDeleteOne = () => {
    if (pendingDelete) {
      removeFromRecent(pendingDelete);
      setPendingDelete(null);
    }
  };

  return (
    <div className="p-4 md:p-6 max-w-screen-md mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-foreground">Recent Lookups</h1>

      {Array.isArray(recentLookups) && recentLookups.length === 0 ? (
        <p className="text-muted-foreground">No history available yet.</p>
      ) : (
        <>
          <div className="text-right mb-4">
            <button
              className="border rounded px-3 py-1 hover:bg-destructive hover:text-white"
              onClick={() => setShowConfirmClearAll(true)}
            >
              🗑 Clear All
            </button>
          </div>

          <ul className="space-y-2">
            {recentLookups.map((entry, idx) => (
              <li key={idx} className="space-y-1">
                <div className="flex justify-between items-center border rounded px-2 py-1">
                  <button
                    className="text-blue-600 hover:underline"
                    onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
                  >
                    {entry.word} ({entry.direction})
                  </button>

                  <button
                    onClick={() => setPendingDelete(entry.word)}
                    className="border rounded px-2 py-1 text-sm hover:bg-muted"
                  >
                    🗑 Remove
                  </button>
                </div>

                {expandedIndex === idx && (
                  <div className="p-2 border-l-4 border-blue-400 bg-blue-50 rounded-md space-y-2">
                    <EntryCard
                      term={entry.word}
                      translation={entry.translation}
                      direction={entry.direction}
                    />

                    <button
                      onClick={() => {
                        const [source, target] = entry.direction?.split('→') ?? ['en', 'fr'];
                        const { setQuery, setSourceLang, setTargetLang } = useLookupStore.getState();
                        setQuery(entry.word);
                        setSourceLang(source);
                        setTargetLang(target);
                        window.location.href = '/lookup';
                      }}
                      className="text-sm underline text-blue-700 hover:text-blue-900"
                    >
                      🔁 Modify this word in Lookup
                    </button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </>
      )}

      {/* Confirm full clear */}
      <ConfirmDeleteModal
        open={showConfirmClearAll}
        onCancel={() => setShowConfirmClearAll(false)}
        onConfirm={confirmDeleteAll}
        message="Are you sure you want to delete your entire lookup history?"
      />

      {/* Confirm single entry */}
      <ConfirmDeleteModal
        open={!!pendingDelete}
        onCancel={() => setPendingDelete(null)}
        onConfirm={confirmDeleteOne}
        message={`Are you sure you want to delete ${pendingDelete?.trim() ? `"${pendingDelete}"` : 'this entry'
          } from your history?`}
      />
    </div>
  );
}
