import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from 'users/redux/usersReducer';

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
