import Modal from 'components/modal/Modal';
import React, { useState } from 'react';

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
          <h2>Add User</h2>
        </Modal>
      )}
    </>
  );
}

export default AddUserButton;