import Modal from 'components/modal/Modal';
import React, { useState } from 'react';
import UserForm from './UserForm';

function AddUserButton() {
  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = () => setModalOpen(false)
  return (
    <div className="add-user-button">
      <button
        type="button"
        onClick={() => setModalOpen(true)}
      >
        Add User
      </button>
      {modalOpen && (
        <Modal
          closeModal={closeModal}
        >
          <UserForm
            closeModal={closeModal}
          />
        </Modal>
      )}
    </div>
  );
}

export default AddUserButton;