import React,{useState} from 'react';
import Modal from '../requestmodal/Modal'
import { truncate } from "lodash";


const Product = ({data}) => {
const [showModal, setShowModal] = useState(false);

const handleClose = ()=> setShowModal(false);
  return (
    <div>
   
      

         
         
         <div className="relative grid items-center gap-4 pb-2 rounded-lg shadow shadow-slate-200 ring-1 ring-slate-200">
          <div className="flex items-center justify-center max-w-lg max-h-96 ">
            <img
              src={data.img}
              
              className="w-full object-cover shadow-md shadow-slate-200 rounded-tl-lg rounded-tr-lg"
              alt=""
              />
          </div>

          <div className="grid items-center justify-items-start px-4">
            <h1 className="text-base font-semibold lg:text-sm">{data.title}</h1>
            <p className="text-sm text-justify lg:text-xs">
              {truncate(data.details, { length: 167 })}
            </p>
          </div>
          
          <div className="flex items-center justify-center px-4 w-full">
            <a
             onClick={()=> setShowModal(true)}
              href={data.linkurl}
              role={'button'}
              className="w-full bg-gradient-to-b from-slate-900 to-black shadow-md shadow-black text-center text-slate-100 py-1.5 button-theme"
              >
              {data.btn}
            </a>
          </div>
        </div>
     
  <Modal onClose={handleClose} visible={showModal} />
    </div>
  );
};

export default Product;
