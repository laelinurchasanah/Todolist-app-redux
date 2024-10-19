import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTodos } from "../features/todoSlice";
import { selectVotes } from "../features/voteSlice";

const DetailPage = () => {
  const { id } = useParams();
  const todos = useSelector(selectTodos);
  const votes = useSelector(selectVotes);

  const todo = todos.find((item) => item.id === parseInt(id));

  if (!todo) {
    return <p>Todo not found</p>;
  }

  return (
    <div className="container">
      <div className="detail-page">
        <h1>{todo.text}</h1>
        <p>Assigned to: {todo.user}</p>
        <p className="votes">Votes: {votes[todo.id] || 0}</p>
      </div>
    </div>
  );
};

export default DetailPage;
