import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [
    { id: 1, text: 'Learn Redux Toolkit', user: 'Laeli NurC' },
    { id: 2, text: 'Build a Todo App', user: 'Minatozaki' },
    { id: 3, text: 'Understand Redux State', user: 'Sana' }
  ]
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {}
});

export const selectTodos = (state) => state.todos.todos;

export default todoSlice.reducer;
