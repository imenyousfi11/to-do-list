import React from 'react';
import { FiTrash2, FiCheck } from 'react-icons/fi';
import './TodoItem.css';

export default function TodoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <li className="todo-item">
      <div
        className={`checkbox-container ${todo.completed ? 'checked' : ''}`}
        onClick={() => toggleComplete(todo.id)}
        aria-label={todo.completed ? "Mark as incomplete" : "Mark as complete"}
        role="checkbox"
        aria-checked={todo.completed}
        tabIndex={0}
        onKeyDown={e => e.key === 'Enter' && toggleComplete(todo.id)}
      >
        <FiCheck />
      </div>
      <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
      <button onClick={() => deleteTodo(todo.id)} aria-label="Delete todo">
        <FiTrash2 />
      </button>
    </li>
  );
}
