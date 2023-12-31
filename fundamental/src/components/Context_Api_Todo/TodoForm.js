// TodoForm.js
import React, { useState, useContext } from 'react';
import { TodoContext } from './TodoContext';

const TodoForm = () => {
  const [newTodo, setNewTodo] = useState('');
  const { dispatch } = useContext(TodoContext);

  const addTodo = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_TODO', payload: newTodo });
    setNewTodo('');
  };

  return (
    
        <form onSubmit={addTodo}>
      <input
      className='form-control'
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add new todo"
        required
      />
      <button type="submit" className='btn btn-success mt-2'>Add Todo</button>
    </form>


  );
};

export default TodoForm;
