import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersAction } from 'users/redux/usersActions';
import { fetchGroupsAction } from 'groups/redux/groupsActions';
import AddUserButton from './components/AddUserButton';
import UserListCard from './components/UserListCard';
import './UsersPage.css';

function UsersPage() {
  const dispatch = useDispatch();
  const userIds = useSelector((state) => state.users.userIds);
  useEffect(() => {
    dispatch(fetchUsersAction());
    dispatch(fetchGroupsAction());
  }, [dispatch]);
  return (
    <>
      <h1>Users</h1>
      <AddUserButton />
      <ul className="users-list">
        {userIds && userIds.map((id) => (
          <UserListCard
            key={id}
            userId={id}
          />
        ))}
      </ul>
    </>
  );
}

export default UsersPage;
