import { useSelector } from 'react-redux';
import { userSelector } from 'users/redux/usersSelectors';
import EditUserButton from './EditUserButton';
import DeleteUserButton from './DeleteUserButton';

function UserListCard({
  userId
}) {
  const user = useSelector(userSelector(userId));
  // if user not found don't render
  if (!user) { return null }
  const { firstName, lastName, email } = user;
  return (
    <li>
      <p>First name: {firstName}</p>
      <p>Last name: {lastName}</p>
      <p>Email: {email}</p>
      <p>
        <EditUserButton
          user={user}
        />
        <DeleteUserButton
          user={user}
        />
      </p>
    </li>
  );
}

export default UserListCard;