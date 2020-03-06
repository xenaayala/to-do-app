import React from "react";

const Todo = props => {
  return (
    <div className="card " key={props.key}>
      <div className="card-body">{props.todo}</div>
    </div>
  );
};

export default Todo;
