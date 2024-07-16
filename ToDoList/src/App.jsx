import { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoFilter from './TodoFilter';
import './index.css';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const updateTodo = (updatedTodo) => {
    setTodos(todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo)));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const markAsCompleted = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    const filtered = todos.filter((todo) => todo.title.toLowerCase().includes(term.toLowerCase()));
    setFilteredTodos(filtered);
  };

  return (
    <div className="container">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoFilter searchTerm={searchTerm} handleSearch={handleSearch} />
      <TodoList
        todos={searchTerm ? filteredTodos : todos}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
        markAsCompleted={markAsCompleted}
      />
    </div>
  );
};

export default TodoApp;
