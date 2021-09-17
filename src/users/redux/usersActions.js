import { createAsyncThunk } from '@reduxjs/toolkit';
import addUser from 'users/api/addUser';
import fetchUsers from 'users/api/fetchUsers';

export const fetchUsersAction = createAsyncThunk(
  'users/fetchUsers',
  () => fetchUsers(),
);

export const addUserAction = createAsyncThunk(
  'users/add',
  (user) => addUser(user),
);


