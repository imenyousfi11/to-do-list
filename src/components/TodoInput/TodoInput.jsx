import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import './TodoInput.css';

export default function TodoInput({ addTodo }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(input);
    setInput('');
  };

  return (
    <form className="todo-input-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task..."
        value={input}
        onChange={e => setInput(e.target.value)}
        aria-label="New todo"
        required
      />
      <button type="submit" aria-label="Add todo">
        <FiPlus size={24} />
      </button>
    </form>
  );
}
