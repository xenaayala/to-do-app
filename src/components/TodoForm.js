import React from "react";

function TodoForm(props) {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-12">
          <form onSubmit={props.onSubmit} className="form-inline">
            <div className="flex-fill mr-2">
              <input
                id="task"
                name="task"
                type="text"
                placeholder="Enter a task"
                value={props.todo.task}
                className="form-control"
                onChange={props.onChange}
                required
              />
            </div>

            <input
              type="submit"
              value="Add Task"
              name="save"
              className="btn btn-secondary"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default TodoForm;
