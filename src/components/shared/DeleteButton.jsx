// COMPONENT: DeleteButton.jsx
// PURPOSE: Reusable delete action button styled to match Neumorphic UI and trace click

export default function DeleteButton({ onClick, label = "Remove" }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick?.();
      }}
      className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-surface text-red-500 text-sm shadow-neu hover:shadow-md transition"
    >
      🗑 {label}
    </button>
  );
}
