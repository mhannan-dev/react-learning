import React, { useState } from "react";
import NewTodo from './NewTodo';
import TodoList from './TodoList';

const Home = () => {
    const [todoList, setTodoList] = useState([]);

    const handleAddTodo = (newTodo) => {
        // Update the todo list state with the new todo
        setTodoList(prevTodos => [...prevTodos, newTodo]);
    }

    return (
        <div>
            <h2 className="text-center">Todo App using React</h2>
            <NewTodo onAddProps={handleAddTodo} />
            <TodoList todoList={todoList} />
        </div>
    )
}

export default Home
