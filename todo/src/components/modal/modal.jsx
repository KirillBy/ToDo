import React from 'react';
import './modal.css';

const Modal = ({onClose, show, children}) => {

  const closeModal = e => {
    onClose && onClose(e);
  };

    if (!show) {
      return null;
    }
    return (
      <div class="modal" id="modal">
        <h2>Modal Window</h2>
        <div class="content">{children}</div>
        <div class="actions">
          <button class="toggle-button" onClick={closeModal}>
            close
          </button>
        </div>
      </div>
    );
  }

export default Modal;