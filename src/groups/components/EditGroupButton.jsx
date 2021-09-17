import React, { useState } from 'react';
import Modal from 'components/modal/Modal';
import GroupForm from './GroupForm';

function EditGroupButton({
    group,
  }) {
  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = () => setModalOpen(false)
  return (
    <>
      <button
        type="button"
        className="add-group-button"
        onClick={() => setModalOpen(true)}
      >
        Edit
      </button>
      {modalOpen && (
        <Modal
          closeModal={closeModal}
        >
          <GroupForm
            group={group}
            closeModal={closeModal}
          />
        </Modal>
      )}
    </>
  );
}

export default EditGroupButton;