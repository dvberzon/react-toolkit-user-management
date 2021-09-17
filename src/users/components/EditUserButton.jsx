import React, { useState } from 'react';
import Modal from 'components/modal/Modal';
import UserForm from './UserForm';

function EditUserButton({
    user,
  }) {
  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = () => setModalOpen(false)
  return (
    <>
      <button
        type="button"
        className="add-user-button"
        onClick={() => setModalOpen(true)}
      >
        Edit User
      </button>
      {modalOpen && (
        <Modal
          closeModal={closeModal}
        >
          <UserForm
            user={user}
            closeModal={closeModal}
          />
        </Modal>
      )}
    </>
  );
}

export default EditUserButton;