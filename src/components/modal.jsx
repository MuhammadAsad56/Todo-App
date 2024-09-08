
import React from "react";

function Modal({ closeModal, handleDeleteTodo, data }) {
  return (
    <>
      <div
        className="fixed inset-0 z-10 flex items-center justify-center bg-gray-600 bg-opacity-75"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
        onClick={closeModal} // This closes the modal when clicking outside
      >
        <div
          className="relative bg-white rounded-lg shadow-xl w-full max-w-md mx-4 sm:mx-0 p-6"
          onClick={(e) => e.stopPropagation()} // Prevents modal from closing when clicking inside
        >
          <h2 className="text-xl font-serif mb-3">Are you sure you want to delete this todo?</h2>
          <div className="flex justify-end gap-5">
            <button onClick={closeModal} className="bg-gray-400 rounded px-4 py-2 font-medium">
              No
            </button>
            <button onClick={() => handleDeleteTodo(data.id)} className="bg-red-500 text-white rounded px-4 py-2 font-medium">
              Yes
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
