import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function ManageTodo() {
  //check if a todo list already exist, if not set to empty array
  const initialValue = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];
  const [todos, setTodos] = useState(initialValue);
  const [todo, setTodo] = useState({
    id: null,
    task: "",
    completed: false
  });
  //Save to loacal storage when leaving the page
  useEffect(() => {
    const saveLocalStorage = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
    };

    window.addEventListener("beforeunload", saveLocalStorage);

    return () => {
      window.removeEventListener("beforeunload", saveLocalStorage);
    };
  }, [todos]);

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

  function handleClear() {
    const temp = [];
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
      <TodoList
        todos={todos}
        onToggle={handleToggle}
        onDelete={handleDelete}
        onClear={handleClear}
      />
    </>
  );
}
//
export default ManageTodo;
