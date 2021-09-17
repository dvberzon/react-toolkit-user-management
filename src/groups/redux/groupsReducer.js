import { createReducer } from '@reduxjs/toolkit';
import { addGroupAction, deleteGroupAction, fetchGroupsAction, updateGroupAction } from './groupsActions';

const initialState = {
  groupIds: [],
  groupsById: {},
};

// action handler functions
function fetchGroupsFulfilled(state, action) {
  const groups = action.payload;
  const groupIds = groups.map((group) => group.id);
  const groupsById = groups.reduce((prevGroupsById, group) => ({
    ...prevGroupsById,
    [group.id]: group,
  }), {});
  return ({
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