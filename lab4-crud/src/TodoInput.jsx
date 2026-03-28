import React from "react";

export default function TodoInput({ input, setInput, addTodo }) {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") addTodo();
  };

  return (
    <div className="input-section">
      <input
        type="text"
        placeholder="Enter todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
}