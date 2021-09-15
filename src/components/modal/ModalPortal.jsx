import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById("modal");
const el = document.createElement("div");
  

function ModalPortal({ children }) {   
  useEffect(() => {    
   modalRoot.appendChild(el);  
  }, []);   
  useEffect(() => {    
   return () => modalRoot.removeChild(el); 
  });   
 return createPortal(children, el);
}

export default ModalPortal;