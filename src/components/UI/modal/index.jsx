import { useEffect } from "react";
import React  from 'react';
import './modal.css';

export default function Modal({open, onClose, children}) {
    
   //  const handleClick = () => {
   //      if (onClose) {
   //          onClose();
   //       }

   //  }
    useEffect(() => {
        if (open) {
           if (typeof window != 'undefined' && window.document) {
              document.body.style.overflow = 'hidden';
           }
        } else document.body.style.overflow = 'unset';
  
        return () => {
           document.body.style.overflow = 'unset';
        };
     }, [open]);


  return (
    <div className={open ? 'modal-bckdrop' : 'modal-inactive'}>
        <button className="cancel-btn" onClick={onClose}>X</button>
    <div className='modals'>
        {children}
    </div>
    </div>
  )
}
