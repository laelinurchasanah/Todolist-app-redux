import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todoSlice';
import voteReducer from '../features/voteSlice';

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    votes: voteReducer
  },
});
