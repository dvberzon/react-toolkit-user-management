import Modal from 'components/modal/Modal';
import React, { useState } from 'react';
import UserForm from './UserForm';

function AddUserButton() {
  const [modalOpen, setModalOpen] = useState(false);
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
          closeModal={() => setModalOpen(false)}
        >
          <UserForm />
        </Modal>
      )}
    </>
  );
}

export default AddUserButton;