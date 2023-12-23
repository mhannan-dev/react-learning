import React from 'react'
import Todo from './Todo';

const TodoList = (props) => {
  return (
    <section>
      {props.todoList.map(todo => (
        <Todo todo={todo} key={todo.id}/>
      ))}
    </section>
  )
}

export default TodoList
