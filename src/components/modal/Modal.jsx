import React from 'react';
import ModalPortal from './ModalPortal';
import './Modal.css';

const Modal = ({
  children,
  closeModal,
}) => (
  <ModalPortal>
    <div className="modal-wrapper">
      <div className="modal-card">
        {children}
      </div>
      <div className="modal-background" onClick={closeModal} />
    </div>
  </ModalPortal>
);

export default Modal;