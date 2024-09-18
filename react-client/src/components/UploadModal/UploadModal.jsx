import React from "react";
import "./UploadModal.scss";

const UploadModal = ({ isOpen, onClose, onUploadAnother }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p>Photo uploaded successfully!</p>
        <div className="modal-buttons">
          <button onClick={onClose}>Return to Home</button>
          <button onClick={onUploadAnother}>Upload Another</button>
        </div>
      </div>
    </div>
  );
};

export default UploadModal;
