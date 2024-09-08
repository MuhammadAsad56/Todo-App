import React from "react"
// import "./modal.css"

function Modal({closeModal,handleDeleteTodo,data }) {
    // if(!show){
    //     return null;
    // }
    return (
        <>
            <div
                className="relative z-10 cursor-pointer modal"
                aria-labelledby="modal-title"
                role="dialog"
                aria-modal="true"
            >
                <div
                    className="fixed inset-0 bg-gray-600  bg-opacity-75 transition-opacity"
                    aria-hidden="true"
                />
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 ">
                        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg " >
                            <div className="px-4 w-full pb-4 pt-5 sm:p-6 sm:pb-4 ">
                                <div className="sm:flex sm:items-start">
                                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                                      <div className="flex align-center">
                                        <div>
                                            <h2 className="text-xl font-serif mb-3">Are you sure you want to delete this message</h2>
                                          <div className="flex gap-5 justify-end">
                                          <button onClick={closeModal} className="bg-gray-400 rounded px-4 py-2 mt-2 font-medium">No</button>
                                          <button onClick={()=>handleDeleteTodo(data.id)}  className="bg-gray-400 rounded px-4 py-2 mt-2 font-medium">Yes</button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Modal