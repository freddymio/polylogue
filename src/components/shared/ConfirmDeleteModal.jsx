// COMPONENT: ConfirmDeleteModal.jsx
// PURPOSE: Central modal rendered via React Portal to confirm deletion of an entry
// FEATURES:
// - Portal rendering to #modal-root
// - Full screen fixed backdrop
// - Smooth center alignment using top/left/translate
// - Clean separation of logic and styles for maintainability

import ReactDOM from "react-dom";

export default function ConfirmDeleteModal({ open, word, message, onCancel, onConfirm }) {
  if (!open) return null;

  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) return null;

  return ReactDOM.createPortal(
    <div
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.3)",
        backdropFilter: "blur(4px)",
        zIndex: 9999,
      }}
    >
      <div className="bg-white text-black p-6 rounded-xl shadow-lg text-center space-y-4 max-w-sm w-full">
        <h2 className="text-xl font-bold">Confirm Deletion</h2>
        <p>
          {message ?? <>Are you sure you want to delete <strong>{word}</strong>?</>}
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={onCancel}
            className="px-4 py-1 bg-gray-200 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>,
    modalRoot
  );
}
