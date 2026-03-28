import React from "react";

export default function TodoItem({
  todo,
  editId,
  editText,
  setEditText,
  startEdit,
  saveEdit,
  deleteTodo,
  toggleComplete
}) {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") saveEdit(todo.id);
  };

  return (
    <li className={todo.completed ? "completed" : ""}>
      {editId === todo.id ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button onClick={() => saveEdit(todo.id)}>Save</button>
        </>
      ) : (
        <>
          <span onClick={() => toggleComplete(todo.id)}>{todo.text}</span>
          <button onClick={() => startEdit(todo.id, todo.text)}>Edit</button>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </>
      )}
    </li>
  );
}