import React from 'react';
import { useSelector } from 'react-redux';
import { selectTodos } from '../features/todoSlice';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todos = useSelector(selectTodos);

  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <li key={todo.id}>
          <TodoItem todo={todo} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
