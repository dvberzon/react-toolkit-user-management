import { createReducer } from '@reduxjs/toolkit';
import { addUserAction, fetchUsersAction } from './usersActions';

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

function addUserFulfilled(state, action) {
  const user = action.payload;
  const { id } = user;
  const userIds = [
    id,
    ...state.userIds,
  ];
  const usersById = {
    ...state.usersById,
    [id]: user,
  }
  return ({
    userIds,
    usersById,
  })
}

export const usersReducer = createReducer(
  initialState,
  (builder) => {
    builder
      .addCase(fetchUsersAction.fulfilled, fetchUsersFulfilled)
      .addCase(addUserAction.fulfilled, addUserFulfilled)
  }
);