// TodoList.js
import React, { useContext } from 'react';
import { TodoContext } from './TodoContext';

const TodoList = () => {
  const { todos, dispatch } = useContext(TodoContext);

  const toggleTodo = (id) => {
    dispatch({ type: 'TOGGLE_TODO', payload: id });
  };

  const removeTodo = (id) => {
    dispatch({ type: 'REMOVE_TODO', payload: id });
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} className='mt-2'>
          <span
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            onClick={() => toggleTodo(todo.id)}
          >
            {todo.text}
          </span>
          <button className='btn btn-danger btn-sm' onClick={() => removeTodo(todo.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
