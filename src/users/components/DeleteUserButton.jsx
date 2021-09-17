import React, { useState } from 'react';
import Modal from 'components/modal/Modal';
import { useDispatch } from 'react-redux';
import { deleteUserAction } from 'users/redux/usersActions';

function DeleteUserButton({
  user,
}) {
  const [alertOpen, setAlertOpen] = useState(false);
  const dispatch = useDispatch();
  const closeAlert = () => setAlertOpen(false)
  const onConfirm = () => {
    dispatch(deleteUserAction(user.id)).then(closeAlert);
  }
  return (
    <>
      <button
        type="button"
        className="add-user-button"
        onClick={() => setAlertOpen(true)}
      >
        Delete
      </button>
      {alertOpen && (
        <Modal
          closeModal={closeAlert}
        >
          <div className="alert">
            <h2>{`Are you sure you want to delete user ${user.email}`}</h2>
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

export default DeleteUserButton;