import Modal from 'components/modal/Modal';
import React, { useState } from 'react';
import UserForm from './UserForm';

function AddUserButton() {
  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = () => setModalOpen(false)
  return (
    <>
      <button
        type="button"
        className="add-user-button"
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
    </>
  );
}

export default AddUserButton;