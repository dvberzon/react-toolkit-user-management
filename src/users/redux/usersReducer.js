import { createReducer } from '@reduxjs/toolkit';
import { fetchUsersAction } from './usersActions';

const initialState = {
  userIds: [],
  usersById: {},
};

// action handler functions
function fetchUsersFulfilled(state, action) {
  const users = action.payload;
  const userIds = users.map((user) => user.id);
  const usersById = users.reduce((prevUsersById, user) => ({
    ...prevUsersById,
    [user.id]: user,
  }), {});
  return ({
    userIds,
    usersById,
  });
};

export const usersReducer = createReducer(
  initialState,
  (builder) => {
    builder.addCase(fetchUsersAction.fulfilled, fetchUsersFulfilled)  
  }
);