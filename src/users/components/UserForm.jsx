import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUserAction, updateUserAction } from 'users/redux/usersActions';
import { GroupCheckBoxes } from './GroupCheckBoxes';

function UserForm ({
  user,
  closeModal,
}) {
  const [firstName, setFirstName] = useState(user ? user.firstName : '');
  const [lastName, setLastName] = useState(user ? user.lastName : '');
  const [email, setEmail] = useState(user ? user.email : '');
  const [bio, setBio] = useState(user ? user.bio : '');
  const [groupIds, setGroupIds] = useState(user ? user.groupIds : []);
  const dispatch = useDispatch();

  const submitForm = () => {
    const updatedUser = {
      id: user ? user.id : null,
      firstName,
      lastName,
      email,
      bio,
      groupIds,
    };
    // action is edit or update depending on whether an existing user was passed in
    const action = user ? updateUserAction : addUserAction;
    dispatch(action(updatedUser)).then(closeModal);
  }

  return (
    <div className="form">
      <div className="columns">
        <div className="column">
          <p>
            <label htmlFor="firstName">First Name:</label>
            <input
              id="firstName"
              type="text" 
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </p>
          <p>
            <label htmlFor="firstName">Last Name:</label>
            <input
              id="lastName"
              type="text" 
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </p>
          <p>
            <label htmlFor="firstName">Email:</label>
            <input
              id="lastName"
              type="text" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </p>
          <p>
            <label htmlFor="bio">Biography:</label>
            <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
          </p>
        </div>
        <div className="column">
          <GroupCheckBoxes
            groupIds={groupIds}
            setGroupIds={setGroupIds}
          />
        </div>
      </div>
      <p className="controls">
        <button type="button" onClick={closeModal}>Cancel</button>
        <button type="button" onClick={submitForm}>Submit</button>
      </p>
    </div>
  )
}

export default UserForm;
