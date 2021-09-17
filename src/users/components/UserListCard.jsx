import { useSelector } from 'react-redux';
import { userSelector } from 'users/redux/usersSelectors';
import EditUserButton from './EditUserButton';
import DeleteUserButton from './DeleteUserButton';
import { groupsForIdsSelector } from 'groups/redux/groupsSelectors';
import './UserListCard.css';

function UserListCard({
  userId
}) {
  const user = useSelector(userSelector(userId));
  const { firstName, lastName, email, groupIds } = user || {};
  const groups = useSelector(groupsForIdsSelector(groupIds || []));
  const hasGroups = groups && groups.length > 0;
  // if user not found don't render
  if (!user) { return null }
  return (
    <li className="user-list-card">
      <div className="name-email">
      <p>
        {`${firstName} ${lastName}`}
      </p>
      <p>
        <a href="mailto:{email}">{email}</a>
      </p>
      </div>
      <div className="groups">
        {hasGroups && (
          <ul>
            {groups.map((group) => (
              <li>{group.name}</li>
            ))}
          </ul>
        )}
      </div>
      <div className="actions">
        <EditUserButton
          user={user}
        />
        <DeleteUserButton
          user={user}
        />
      </div>
    </li>
  );
}

export default UserListCard;