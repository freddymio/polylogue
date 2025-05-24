// 📁 src/components/shared/GlossaryEntryCard.jsx
// 📘 GlossaryEntryCard – Displays a glossary word with translation and deletion
import { useState } from "react";
import { useLookupStore } from "@/stores/lookupStore";
import LanguageBadge from "./LanguageBadge";
import ConfirmDeleteModal from "./ConfirmDeleteModal";

export default function GlossaryEntryCard({ entry }) {
  const { word, translation, sourceLang, targetLang } = entry;
  const removeFromGlossary = useLookupStore((state) => state.removeFromGlossary);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleConfirmDelete = () => {
    removeFromGlossary(word);
    setShowConfirm(false);
  };

  return (
    <div className="rounded-2xl shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff] dark:shadow-[inset_4px_4px_8px_#1f1f1f,inset_-4px_-4px_8px_#2a2a2a] bg-white/90 dark:bg-zinc-900/70 p-4 flex flex-col items-start gap-2 transition-all">
      <div className="flex items-center justify-between w-full">
        <h3 className="text-base font-semibold text-foreground">
          {word} → {translation}
        </h3>
        <LanguageBadge source={sourceLang} target={targetLang} />
      </div>

      <button
        onClick={() => setShowConfirm(true)}
        className="text-red-500 text-sm hover:underline self-end"
      >
        🗑 Remove
      </button>

      <ConfirmDeleteModal
        open={showConfirm}
        word={word}
        onCancel={() => setShowConfirm(false)}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
}
