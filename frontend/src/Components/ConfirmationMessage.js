import React from 'react';

const Popup = ({ isVisible, onClose, children }) => {
  return isVisible ? (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>
          Cerrar
        </button>
        {children}
      </div>
    </div>
  ) : null;
};

export default Popup;