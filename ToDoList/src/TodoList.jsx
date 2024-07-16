/* eslint-disable react/prop-types */

const TodoList = ({ todos, updateTodo, deleteTodo, markAsCompleted }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => markAsCompleted(todo.id)}
          />
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.title}
          </span>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          <button onClick={() => updateTodo(todo)}>Edit</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;