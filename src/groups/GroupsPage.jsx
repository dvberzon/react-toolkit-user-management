import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGroupsAction } from 'groups/redux/groupsActions';
import AddGroupButton from './components/AddGroupButton';
import GroupListCard from './components/GroupListCard';

function GroupsPage() {
  const dispatch = useDispatch();
  const groupIds = useSelector((state) => state.groups.groupIds);
  useEffect(() => {
    dispatch(fetchGroupsAction());
  }, [dispatch]);
  return (
    <>
      <h1>Groups</h1>
      <AddGroupButton />
      <ul>
        {groupIds && groupIds.map((id) => (
          <GroupListCard
            key={id}
            groupId={id}
          />
        ))}
      </ul>
    </>
  );
}

export default GroupsPage;
