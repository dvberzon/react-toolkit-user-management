import { createAsyncThunk } from '@reduxjs/toolkit';
import addGroup from 'groups/api/addGroup';
import deleteGroup from 'groups/api/deleteGroup';
import fetchGroups from 'groups/api/fetchGroups';
import updateGroup from 'groups/api/updateGroup';

export const fetchGroupsAction = createAsyncThunk(
  'groups/fetchGroups',
  () => fetchGroups(),
);

export const addGroupAction = createAsyncThunk(
  'groups/add',
  (user) => addGroup(user),
);

export const updateGroupAction = createAsyncThunk(
  'groups/update',
  (user) => updateGroup(user),
);

export const deleteGroupAction = createAsyncThunk(
  'groups/delete',
  (id) => deleteGroup(id),
);

