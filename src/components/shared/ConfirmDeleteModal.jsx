// ConfirmDeleteModal.jsx
// 📝 Purpose: Properly floating modal using createPortal into #modal-root

import ReactDOM from "react-dom";

export default function ConfirmDeleteModal({ open, word, onConfirm, onCancel }) {
  if (!open) return null;

  const modalRoot = document.getElementById("modal-root");

  return ReactDOM.createPortal(
    <div
      style={{
        position: "fixed",
        top: "20%",
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "white",
        padding: "2rem",
        border: "2px solid black",
        zIndex: 9999,
      }}
    >
      <h2>Delete “{word}”?</h2>
      <p>Are you sure you want to remove this word?</p>
      <div style={{ marginTop: "1rem" }}>
        <button onClick={onCancel}>Cancel</button>
        <button onClick={onConfirm} style={{ marginLeft: "1rem" }}>
          Delete
        </button>
      </div>
    </div>,
    modalRoot
  );
}
