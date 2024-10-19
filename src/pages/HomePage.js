import React, { useState } from 'react';
import TodoList from '../components/TodoList';
import UserSelect from '../components/userSelect';

const HomePage = () => {
  const [currentUser, setCurrentUser] = useState('');

  return (
    <div className="container">
      <h1>Todo List</h1>
      <UserSelect setCurrentUser={setCurrentUser} />
      {currentUser ? (
        <TodoList />
      ) : (
        <p>Please select a user to view the todo list.</p>
      )}
    </div>
  );
};

export default HomePage;
