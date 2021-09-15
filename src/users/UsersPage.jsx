import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersAction } from 'users/redux/usersActions';
import AddUserButton from './components/AddUserButton';
import UserListCard from './components/UserListCard';

function UsersPage() {
  const dispatch = useDispatch();
  const userIds = useSelector((state) => state.users.userIds);
  useEffect(() => {
    dispatch(fetchUsersAction());
  }, [dispatch]);
  return (
    <>
      <h1>Users</h1>
      <AddUserButton />
      <ul>
        {userIds && userIds.map((id) => (
          <UserListCard
            userId={id}
          />
        ))}
      </ul>
    </>
  );
}

export default UsersPage;
