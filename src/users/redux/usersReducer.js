import { createReducer } from '@reduxjs/toolkit';
import { addUserAction, deleteUserAction, fetchUsersAction, updateUserAction } from './usersActions';

const initialState = {
  userIds: [],
  usersById: {},
  fetched: false,
};

// action handler functions
function fetchUsersFulfilled(state, action) {
  // as the apis don't actually exist, we want to maintain local changes
  // and not override with the dummy data each time we hit the users tab
  // so if we have already fetched the users data, don't change the state
  if (state.fetched) { return state };
  const users = action.payload;
  const userIds = users.map((user) => user.id);
  const usersById = users.reduce((prevUsersById, user) => ({
    ...prevUsersById,
    [user.id]: user,
  }), {});
  return ({
    ...state,
    fetched: true,
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
    ...state,
    userIds,
    usersById,
  })
}

function updateUserFulfilled(state, action) {
  const user = action.payload;
  const { id } = user;
  const usersById = {
    ...state.usersById,
    [id]: user,
  }
  return ({
    ...state,
    usersById,
  });
}

function deleteUserFulfilled(state, action) {
  const userId = action.payload;
  const newUserIds = state.userIds.filter((id) => id !== userId);
  const newUsersById = {...state.usersById}
  delete newUsersById[userId];
  return ({
    ...state,
    userIds: newUserIds,
    usersById: newUsersById,
  });
}

export const usersReducer = createReducer(
  initialState,
  (builder) => {
    builder
      .addCase(fetchUsersAction.fulfilled, fetchUsersFulfilled)
      .addCase(addUserAction.fulfilled, addUserFulfilled)
      .addCase(updateUserAction.fulfilled, updateUserFulfilled)
      .addCase(deleteUserAction.fulfilled, deleteUserFulfilled)
  }
);