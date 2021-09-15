import { createAsyncThunk } from '@reduxjs/toolkit';
import fetchUsers from 'users/api/fetchUsers';

export const fetchUsersAction = createAsyncThunk(
  'users/fetchUsers',
  () => fetchUsers(),
);

