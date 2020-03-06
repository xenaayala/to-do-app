import React from "react";
import PropTypes from "prop-types";

function TodoList(props) {
  return (
    <div className="container">
      <table className="table m-2">
        <tbody>
          {props.todos.map(todo => {
            return (
              <tr
                key={todo.id}
                className={
                  todo.completed ? "table-success" : "table text-white"
                }
              >
                <td style={{ width: "75%" }}>{todo.task}</td>
                <td>
                  <button
                    className="btn btn-outline-light mr-2"
                    onClick={() => {
                      props.onToggle(todo.id);
                    }}
                  >
                    Complete
                  </button>

                  <button
                    className="btn btn-outline-light mr-1"
                    onClick={() => {
                      props.onDelete(todo.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
          <tr>
            <td colSpan="2" align="center">
              <button
                className={
                  props.todos.length > 0
                    ? "btn btn-outline-light mr1 d-block"
                    : "btn btn-outline-light mr1 d-none"
                }
                onClick={() => {
                  props.onClear();
                }}
              >
                Clear List
              </button>{" "}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
};

TodoList.defaultProps = {
  todos: []
};

export default TodoList;
