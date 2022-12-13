import React from 'react'
import ModalMain from "./ModalMain"
const Modal = ({visible,onClose}) => {

    const handleOnClose = (e)=> {
        if(e.target.id === 'modal_container' || e.target.id === "close_button") {
            onClose()
        }
       

    }
    if(!visible) return null;

  return (
    <div id="modal_container" onClick={handleOnClose} className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-105">

        <div className=" p-5 min-w-[512px] bg-white">
            
           

           <ModalMain />
           <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
              <button
                id="close_button"
                type="button"
                className="inline-block px-6 py-2.5 bg-primary text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-primary hover:shadow-lg focus:bg-primary focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
        </div>
    </div>
  )
}

export default Modal