import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import classes from './Modal.module.css'

function Modal({ children, open, className = "", onClose }) {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;

    if (open) {
      modal.showModal();
    }

    return () => modal.close();
  }, [open]);

  return createPortal(
    <dialog onClose={onClose} onKeyDown={onClose} ref={dialog} className={`${classes.modal} ${className}`}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
