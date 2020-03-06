import React from "react";
import "./App.css";
import ManageTodo from "./components/ManageTodo";

function App() {
  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <h1 className="ml-3">To Do List</h1>
      </div>
      <div className="App">
        <ManageTodo />
      </div>
    </>
  );
}

export default App;
