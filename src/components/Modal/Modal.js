import React, { useEffect } from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  if (!isOpen) return null;

  const handleClose = (e) => {
    e?.stopPropagation();
    if (onClose && typeof onClose === 'function') {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={handleClose}>×</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
