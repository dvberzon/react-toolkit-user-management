import Modal from 'components/modal/Modal';
import React, { useState } from 'react';
import GroupForm from './GroupForm';

function AddGroupButton() {
  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = () => setModalOpen(false)
  return (
    <>
      <button
        type="button"
        className="add-user-button"
        onClick={() => setModalOpen(true)}
      >
        Add Group
      </button>
      {modalOpen && (
        <Modal
          closeModal={closeModal}
        >
          <GroupForm
            closeModal={closeModal}
          />
        </Modal>
      )}
    </>
  );
}

export default AddGroupButton;