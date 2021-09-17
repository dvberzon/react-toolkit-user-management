import { configureStore } from '@reduxjs/toolkit';
import { groupsReducer } from 'groups/redux/groupsReducer';
import { usersReducer } from 'users/redux/usersReducer';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    groups: groupsReducer,
  },
});
