import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectVotes, addVote } from '../features/voteSlice';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const votes = useSelector(selectVotes);
  
  return (
    <div className="todo-item">
      <Link to={`/detail/${todo.id}`}>
        <p>{todo.text} - {todo.user}</p>
      </Link>
      <div>
        <span className="vote-count">Votes: {votes[todo.id] || 0}</span>
        <button onClick={() => dispatch(addVote({ id: todo.id }))}>Vote</button>
      </div>
    </div>
  );
};

export default TodoItem;
