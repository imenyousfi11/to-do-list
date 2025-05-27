import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';

export default function TodoList({ todos, toggleComplete, deleteTodo }) {
  if (todos.length === 0) {
    return <p style={{ textAlign: 'center', color: '#7f8c8d' }}>No tasks yet. Add one above!</p>;
  }

  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}
