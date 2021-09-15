import { useState } from 'react';

function UserForm ({
  user,
}) {
  const [firstName, setFirstName] = useState(user ? user.firstName : '');
  const [lastName, setLastName] = useState(user ? user.lastName : '');
  const [email, setEmail] = useState(user ? user.email : '');
  const [bio, setBio] = useState(user ? user.bio : '');
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
    </div>
  )
}

export default UserForm;
