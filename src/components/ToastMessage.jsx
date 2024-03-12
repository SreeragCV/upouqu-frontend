import React from "react";
import { createPortal } from "react-dom";
import { ToastContainer } from "react-toastify";

function ToastMessage() {
  return createPortal(
    <div>
      <ToastContainer />
    </div>,
    document.getElementById("toast")
  );
}

export default ToastMessage;
