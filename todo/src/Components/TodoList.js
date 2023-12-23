import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
  const reversedTodoList = [...props.todoList].reverse();
  return (
    <section>
      {props.todoList.map(todo => (
        <Todo key={todo.id} todo={todo} onDelete={props.onDelete} />
      ))}
    </section>
  )
}

export default TodoList;
