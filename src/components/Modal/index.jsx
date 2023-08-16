import React from "react";

const Modal = ({ onClose, children }) => (
  <div className="flex justify-evenly items-center rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-md bg-white p-6">
    {children}
  </div>
);

export default Modal;
