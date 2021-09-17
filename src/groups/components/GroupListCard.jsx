import { useSelector } from 'react-redux';
import { groupSelector } from 'groups/redux/groupsSelectors';
import EditGroupButton from './EditGroupButton';
import DeleteGroupButton from './DeleteGroupButton';

function GroupListCard({
  groupId
}) {
  const group = useSelector(groupSelector(groupId));
  // if group not found don't render
  if (!group) { return null }
  const { name, description } = group;
  return (
    <li>
      <p>Name: {name}</p>
      <p>Description: {description}</p>
      <p>
        <EditGroupButton
          group={group}
        />
        <DeleteGroupButton
          group={group}
        />
      </p>
    </li>
  );
}

export default GroupListCard;