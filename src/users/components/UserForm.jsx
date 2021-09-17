import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUserAction } from 'users/redux/usersActions';

function UserForm ({
  user,
  closeModal,
}) {
  const [firstName, setFirstName] = useState(user ? user.firstName : '');
  const [lastName, setLastName] = useState(user ? user.lastName : '');
  const [email, setEmail] = useState(user ? user.email : '');
  const [bio, setBio] = useState(user ? user.bio : '');
  const dispatch = useDispatch();
  const submitForm = () => {
    const user = {
      firstName,
      lastName,
      email,
      bio,
    };
    dispatch(addUserAction(user)).then(closeModal);
  }
  return (
    <div className="user-form">
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
      <p>
        <button type="button" onClick={closeModal}>Cancel</button>
        <button type="button" onClick={submitForm}>Submit</button>
      </p>
    </div>
  )
}

export default UserForm;
