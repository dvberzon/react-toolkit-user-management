import { useSelector } from 'react-redux';
import { userSelector } from 'users/redux/usersSelectors';

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
    </li>
  );
}

export default UserListCard;