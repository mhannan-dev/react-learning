import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const InputField = ({ name, label, type, value, onChange }) => (
    <div className="mb-3">
        <label htmlFor={name.toLowerCase()} className="form-label">
            {label}
        </label>
        {type === "textarea" ? (
            <textarea
                name={name}
                className="form-control"
                id={name.toLowerCase()}
                value={value}
                onChange={onChange}
            />
        ) : (
            <input
                type={type}
                name={name}
                className="form-control"
                id={name.toLowerCase()}
                value={value}
                onChange={onChange}
            />
        )}
    </div>
);

const NewTodo = (props) => {
    const [showTitleToast, setShowTitleToast] = useState(false);
    const [showDescriptionToast, setShowDescriptionToast] = useState(false);
    const [todo, setTodo] = useState({ title: "", description: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTodo({ ...todo, [name]: value });

        if (name === "title") {
            setShowTitleToast(false);
        } else if (name === "description") {
            setShowDescriptionToast(false);
        }
    };

    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!todo.title.trim()) {
            toast.error("Please fill in the title.", {
                position: toast.POSITION.TOP_RIGHT,
                className: 'red-toast'
            });
            return;
        }

        if (!todo.description.trim()) {
            toast.error("Please fill in the description.", {
                position: toast.POSITION.TOP_RIGHT,
                className: 'red-toast'
            });
            return;
        }
        const newTodo = { ...todo, id: uuidv4() };
        props.onAddProps(newTodo);
        setTodo({ title: "", description: "" });
        toast.success("Todo added successfully!", {
            position: toast.POSITION.TOP_RIGHT,
            className: 'green-toast'
        });

    };
    const toastStyle = { position: "fixed", top: "10px", right: "10px", color: "red" };
    return (
        <div className="p-3 mb-2 bg-light text-dark border">
            <form onSubmit={handleSubmit}>
                <InputField
                    name="title"
                    label="Title"
                    type="text"
                    value={todo.title}
                    onChange={handleChange}
                />
                <InputField
                    name="description"
                    label="Description"
                    type="textarea"
                    value={todo.description}
                    onChange={handleChange}
                />

                <ToastContainer
                    position="top-right"
                    autoClose={1500} 
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                <button type="submit" className="btn btn-success btn-lg">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default NewTodo;
