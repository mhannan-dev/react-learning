import React, { useState } from "react";
import NewTodo from './NewTodo';
import TodoList from './TodoList';

const Home = () => {
    const [todoList, setTodoList] = useState([]);

    const handleAddTodo = (newTodo) => {
        setTodoList(prevTodos => [...prevTodos, newTodo]);
    }

    const handleDeleteTodo = (id) => {
        setTodoList(prevTodos => prevTodos.filter(todo => todo.id !== id));
    }

    return (
        <div>
            <h2 className="text-center">Todo App using React</h2>
            <NewTodo onAddProps={handleAddTodo} />
            <TodoList todoList={todoList} onDelete={handleDeleteTodo} />
        </div>
    )
}

export default Home
