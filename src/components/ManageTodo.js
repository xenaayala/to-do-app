import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function ManageTodo() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({
    id: null,
    task: "",
    completed: false
  });

  function handleChange({ target }) {
    setTodo({ ...todo, [target.name]: target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let newTask = { ...todo, id: Date.now() };
    setTodos([...todos, newTask]);
    setTodo({ ...todo, task: "" });
  }

  function handleDelete(id) {
    const temp = todos.filter(todo => todo.id !== id);
    setTodos(temp);
  }

  function handleToggle(id) {
    const temp = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    setTodos(temp);
  }
  return (
    <>
      <TodoForm todo={todo} onChange={handleChange} onSubmit={handleSubmit} />
      <TodoList todos={todos} onToggle={handleToggle} onDelete={handleDelete} />
    </>
  );
}
//
export default ManageTodo;
