import React, { useState } from "react";
import TodoInput from "./TodoInput.jsx";
import TodoItem from "./TodoItem.jsx";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  // Add Todo
  const addTodo = () => {
    if (input.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
    setInput("");
  };

  // Delete Todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  // Start editing
  const startEdit = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  // Save edit
  const saveEdit = (id) => {
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, text: editText } : t))
    );
    setEditId(null);
    setEditText("");
  };

  // Toggle completed
  const toggleComplete = (id) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  return (
    <div className="app">
      <h1>Todo CRUD App</h1>
      <TodoInput input={input} setInput={setInput} addTodo={addTodo} />
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            editId={editId}
            editText={editText}
            setEditText={setEditText}
            startEdit={startEdit}
            saveEdit={saveEdit}
            deleteTodo={deleteTodo}
            toggleComplete={toggleComplete}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;