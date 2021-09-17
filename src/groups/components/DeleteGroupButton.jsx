import React, { useState } from 'react';
import Modal from 'components/modal/Modal';
import { useDispatch } from 'react-redux';
import { deleteGroupAction } from 'groups/redux/groupsActions';

function DeleteGroupButton({
  group,
}) {
  const [alertOpen, setAlertOpen] = useState(false);
  const dispatch = useDispatch();
  const closeAlert = () => setAlertOpen(false)
  const onConfirm = () => {
    dispatch(deleteGroupAction(group.id)).then(closeAlert);
  }
  return (
    <>
      <button
        type="button"
        className="add-group-button"
        onClick={() => setAlertOpen(true)}
      >
        Delete group
      </button>
      {alertOpen && (
        <Modal
          closeModal={closeAlert}
        >
          <div className="alert">
            <h2>{`Are you sure you want to delete group ${group.name}`}</h2>
            <button
              onClick={closeAlert}
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
            >
              Delete
            </button>
          </div>
        </Modal>
      )}
    </>
  );
}

export default DeleteGroupButton;