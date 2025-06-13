// TestModal.jsx
import { useState } from "react";
import ReactDOM from "react-dom";

export default function TestModal() {
  const [showModal, setShowModal] = useState(false);

  const modalContent = (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="bg-white text-black p-6 rounded-2xl shadow-lg max-w-sm w-full mx-4 text-center space-y-4 border border-gray-200">
        <h2 className="text-xl font-semibold">Confirm Deletion</h2>
        <p>Are you sure you want to delete <span className="font-bold">"Love"</span>?</p>
        <div className="flex justify-center gap-4 pt-2">
          <button
            onClick={() => setShowModal(false)}
            className="px-4 py-1 rounded-full bg-white text-gray-700 text-sm border border-gray-300 hover:bg-gray-200 shadow"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              alert("Deleted");
              setShowModal(false);
            }}
            className="px-4 py-1 rounded-full bg-white text-red-500 text-sm border border-red-300 hover:bg-red-100 hover:text-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-6 max-w-md mx-auto space-y-4 text-center">
      <h1 className="text-2xl font-bold">Test Modal</h1>
      <button
        onClick={() => setShowModal(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded shadow"
      >
        Open Modal
      </button>

      {/* Portal target */}
      {showModal && ReactDOM.createPortal(modalContent, document.getElementById("modal-root"))}
    </div>
  );
}
