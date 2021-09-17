import { useSelector } from 'react-redux';
import { groupSelector } from 'groups/redux/groupsSelectors';
import EditGroupButton from './EditGroupButton';
import DeleteGroupButton from './DeleteGroupButton';
import './GroupListCard.css';

function GroupListCard({
  groupId
}) {
  const group = useSelector(groupSelector(groupId));
  // if group not found don't render
  if (!group) { return null }
  const { name, description } = group;
  return (
    <li className="group-list-card">
      <div className="name-description">
        <h4>{name}</h4>
        <p>{description}</p>
        </div>
      <div className="actions">
        <EditGroupButton
          group={group}
        />
        <DeleteGroupButton
          group={group}
        />
      </div>
    </li>
  );
}

export default GroupListCard;