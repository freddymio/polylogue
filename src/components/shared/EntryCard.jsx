import { useState } from "react"
import ConfirmDeleteModal from "./ConfirmDeleteModal"

/**
 * EntryCard displays a single glossary or vault entry.
 * Triggers a confirmation modal before deletion.
 */
export default function EntryCard({
  id,
  term,
  translation,
  direction,
  tag,
  onDelete
}) {
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    if (!id) {
      console.warn("⚠️ Entry has no ID. Cannot delete.");
      return;
    }
    setShowModal(true);
  };

  const confirmDelete = () => {
    console.log("💥 confirmDelete triggered for ID:", id);
    if (typeof onDelete === "function") {
      onDelete();
    }
    setShowModal(false);
  };

  return (
    <div className="rounded-2xl bg-white/90 dark:bg-zinc-900/60 shadow-neu px-4 py-3 transition-all">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">{term}</p>
          <h3 className="text-lg font-semibold text-foreground leading-tight">{translation}</h3>

          <div className="flex flex-wrap items-center gap-2 mt-1">
            {tag && (
              <span className="inline-block text-xs bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">
                {tag}
              </span>
            )}
            <span className="text-xs italic text-gray-400">
              Direction: {direction || "unknown"}
            </span>
          </div>
        </div>

        <div className="self-end">
          <button
            onClick={handleDelete}
            className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-surface text-red-500 text-sm shadow-neu hover:shadow-md transition"
          >
            🗑 Remove
          </button>
        </div>
      </div>

      <ConfirmDeleteModal
        open={showModal}
        word={term}
        onCancel={() => setShowModal(false)}
        onConfirm={confirmDelete}
      />
    </div>
  )
}
