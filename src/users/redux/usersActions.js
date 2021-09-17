import { createAsyncThunk } from '@reduxjs/toolkit';
import addUser from 'users/api/addUser';
import deleteUser from 'users/api/deleteUser';
import fetchUsers from 'users/api/fetchUsers';
import updateUser from 'users/api/updateUser';

export const fetchUsersAction = createAsyncThunk(
  'users/fetchUsers',
  () => fetchUsers(),
);

export const addUserAction = createAsyncThunk(
  'users/add',
  (user) => addUser(user),
);

export const updateUserAction = createAsyncThunk(
  'users/update',
  (user) => updateUser(user),
);

export const deleteUserAction = createAsyncThunk(
  'users/delete',
  (id) => deleteUser(id),
);

