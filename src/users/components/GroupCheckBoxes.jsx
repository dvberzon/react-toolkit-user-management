import React from 'react';
import { useSelector } from 'react-redux';
import { allGroupsSelector } from 'groups/redux/groupsSelectors';
import { toggleValueInArray } from 'utils/arrayUtils';
import './GroupCheckBoxes.css';

function GroupCheckBoxes({
  setGroupIds,
  groupIds,
}) {
  const groups = useSelector(allGroupsSelector);
  const toggleId = (id) => {
    const newGroupIds = toggleValueInArray(groupIds, id);
    setGroupIds(newGroupIds);
  }
  return (
    <div className="group-checkboxes">
      <label>Groups</label>
      <ul>
        {groups.map(({ name, id }) => {
          const checked = groupIds.includes(id);
          const htmlId = `group-${id}`;
          return (
            <li key={id}>
              <label htmlFor={htmlId}>
                <input
                  id={htmlId}
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggleId(id)}
                />
                {name}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  )
};

export { GroupCheckBoxes };

