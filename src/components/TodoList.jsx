import React, { useState, useEffect } from 'react';

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [filter, setFilter] = useState('all'); // 'all', 'active', 'completed'

  // Load todos from localStorage on component mount
  useEffect(() => {
    const savedTodos = localStorage.getItem('portfolio-todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem('portfolio-todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      const todo = {
        id: Date.now(),
        text: newTodo.trim(),
        completed: false,
        createdAt: new Date().toLocaleString()
      };
      setTodos([...todos, todo]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    if (newText.trim() !== '') {
      setTodos(todos.map(todo =>
        todo.id === id ? { ...todo, text: newText.trim() } : todo
      ));
    }
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const toggleAll = () => {
    const allCompleted = todos.every(todo => todo.completed);
    setTodos(todos.map(todo => ({ ...todo, completed: !allCompleted })));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const activeTodosCount = todos.filter(todo => !todo.completed).length;
  const completedTodosCount = todos.filter(todo => todo.completed).length;

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div className="todo-list">
      <div className="todo-header">
        <h3>My Todo List</h3>
        <div className="todo-stats">
          <span className="todo-count">Total: {todos.length}</span>
          <span className="todo-count">Active: {activeTodosCount}</span>
          <span className="todo-count">Completed: {completedTodosCount}</span>
        </div>
      </div>

      <div className="todo-input-section">
        <div className="todo-input-container">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Add a new task..."
            className="todo-input"
          />
          <button onClick={addTodo} className="todo-add-btn">
            Add Task
          </button>
        </div>
        {todos.length > 0 && (
          <button onClick={toggleAll} className="todo-toggle-all">
            {todos.every(todo => todo.completed) ? 'Uncheck All' : 'Check All'}
          </button>
        )}
      </div>

      <div className="todo-filters">
        <button
          className={filter === 'all' ? 'todo-filter active' : 'todo-filter'}
          onClick={() => setFilter('all')}
        >
          All ({todos.length})
        </button>
        <button
          className={filter === 'active' ? 'todo-filter active' : 'todo-filter'}
          onClick={() => setFilter('active')}
        >
          Active ({activeTodosCount})
        </button>
        <button
          className={filter === 'completed' ? 'todo-filter active' : 'todo-filter'}
          onClick={() => setFilter('completed')}
        >
          Completed ({completedTodosCount})
        </button>
      </div>

      <div className="todo-list-container">
        {filteredTodos.length === 0 ? (
          <div className="todo-empty">
            {filter === 'all' ? 'No tasks yet. Add one above!' : 
             filter === 'active' ? 'No active tasks!' : 
             'No completed tasks!'}
          </div>
        ) : (
          <ul className="todo-items">
            {filteredTodos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
                onEdit={editTodo}
              />
            ))}
          </ul>
        )}
      </div>

      {completedTodosCount > 0 && (
        <div className="todo-clear-section">
          <button onClick={clearCompleted} className="todo-clear-completed">
            Clear Completed ({completedTodosCount})
          </button>
        </div>
      )}
    </div>
  );
}

function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (editText.trim() !== '') {
      onEdit(todo.id, editText);
      setIsEditing(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleEdit();
    } else if (e.key === 'Escape') {
      setEditText(todo.text);
      setIsEditing(false);
    }
  };

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="todo-checkbox"
      />
      
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onKeyPress={handleKeyPress}
          onBlur={handleEdit}
          className="todo-edit-input"
          autoFocus
        />
      ) : (
        <span 
          className="todo-text"
          onDoubleClick={() => setIsEditing(true)}
        >
          {todo.text}
        </span>
      )}
      
      <div className="todo-actions">
        {!isEditing && (
          <button 
            onClick={() => setIsEditing(true)}
            className="todo-edit-btn"
            title="Edit task"
          >
            ✏️
          </button>
        )}
        <button 
          onClick={() => onDelete(todo.id)}
          className="todo-delete-btn"
          title="Delete task"
        >
          🗑️
        </button>
      </div>
      
      <div className="todo-meta">
        <small className="todo-date">{todo.createdAt}</small>
      </div>
    </li>
  );
}
