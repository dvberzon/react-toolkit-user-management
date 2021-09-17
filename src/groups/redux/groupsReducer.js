import { createReducer } from '@reduxjs/toolkit';
import { addGroupAction, deleteGroupAction, fetchGroupsAction, updateGroupAction } from './groupsActions';

const initialState = {
  groupIds: [],
  groupsById: {},
  fetched: false,
};

// action handler functions
function fetchGroupsFulfilled(state, action) {
  // as the apis don't actually exist, we want to maintain local changes
  // and not override with the dummy data each time we hit the groups tab
  // so if we have already fetched the groups data, don't change the state
  if (state.fetched) { return state };
  const groups = action.payload;
  const groupIds = groups.map((group) => group.id);
  const groupsById = groups.reduce((prevGroupsById, group) => ({
    ...prevGroupsById,
    [group.id]: group,
  }), {});
  return ({
    ...state,
    fetched: true,
    groupIds,
    groupsById,
  });
};

function addGroupFulfilled(state, action) {
  const group = action.payload;
  const { id } = group;
  const groupIds = [
    id,
    ...state.groupIds,
  ];
  const groupsById = {
    ...state.groupsById,
    [id]: group,
  }
  return ({
    ...state,
    groupIds,
    groupsById,
  })
}

function updateGroupFulfilled(state, action) {
  const group = action.payload;
  const { id } = group;
  const groupsById = {
    ...state.groupsById,
    [id]: group,
  }
  return ({
    ...state,
    groupsById,
  });
}

function deleteGroupFulfilled(state, action) {
  const groupIds = action.payload;
  const newGroupIds = state.groupIds.filter((id) => id !== groupIds);
  const newGroupsById = {...state.groupsById}
  delete newGroupsById[groupIds];
  return ({
    ...state,
    groupIds: newGroupIds,
    groupsById: newGroupsById,
  });
}

export const groupsReducer = createReducer(
  initialState,
  (builder) => {
    builder
      .addCase(fetchGroupsAction.fulfilled, fetchGroupsFulfilled)
      .addCase(addGroupAction.fulfilled, addGroupFulfilled)
      .addCase(updateGroupAction.fulfilled, updateGroupFulfilled)
      .addCase(deleteGroupAction.fulfilled, deleteGroupFulfilled)
  }
);