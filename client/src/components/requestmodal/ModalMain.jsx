import React from 'react';
import Form from "./Form";

const ModalMain = () => {

   
  return (
   
      <div
        
        className="  top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        tabindex="-1"
        aria-labelledby="exampleModalFullscreenLabel"
        aria-hidden="true"
       
      >
        <div className="modal-dialog modal-fullscreen relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5
                className="text-xl font-medium leading-normal text-gray-800"
                id="exampleModalFullscreenLabel"
              >
               Request A Quote
              </h5>
             
            </div>
            <div className="modal-body relative p-4">
                <Form />
            </div>
            
          </div>
        </div>
      </div>
    
  );
};

export default ModalMain;
