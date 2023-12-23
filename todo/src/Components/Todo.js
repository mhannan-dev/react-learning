import React from "react";
import { FaRegTrashCan } from "react-icons/fa6";

const Todo = (props) => {
    const { id, title, description } = props.todo;

    const handleClick = (id) => {
        console.log({ id }, 'clicked on button');
        props.onDelete(id);
    };

    return (
        <article className="d-flex justify-content-between border p-4">
            <div className="todo-content">
                <p className="font-monospace text-primary">{id}</p>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div className="todo-icon">
                <FaRegTrashCan className="text-danger fa-lg" onClick={() => handleClick(id)} />
            </div>
        </article>
    );
};

export default Todo;
