import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const InputField = ({ name, label, type, value, onChange }) => {
  const inputProps = {
    name,
    className: "form-control",
    id: name.toLowerCase(),
    value,
    onChange,
  };

  return (
    <div className="mb-3">
      <label htmlFor={name.toLowerCase()} className="form-label">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea {...inputProps} />
      ) : (
        <input type={type} {...inputProps} />
      )}
    </div>
  );
};

const NewTodo = (props) => {
    const [todo, setTodo] = useState({ title: "", description: "" });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setTodo((prevTodo) => ({ ...prevTodo, [name]: value }));
      resetToast(name);
    };
  
    const resetToast = (name) => {
      // Remove the references to setShowTitleToast and setShowDescriptionToast
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (!todo.title.trim() || !todo.description.trim()) {
        const errorMsg = !todo.title.trim()
          ? "Please fill in the title."
          : "Please fill in the description.";
  
        toast.error(errorMsg, {
          position: toast.POSITION.TOP_RIGHT,
          className: "red-toast",
        });
        return;
      }
  
      const newTodo = { ...todo, id: uuidv4() };
      props.onAddProps(newTodo);
      setTodo({ title: "", description: "" });
  
      toast.success("Todo added successfully!", {
        position: toast.POSITION.TOP_RIGHT,
        className: "green-toast",
      });
    };

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
