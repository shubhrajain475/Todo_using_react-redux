import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
    const [todo, setTodo] = useState("");
    const dispatch = useDispatch();

    const addTodoHandler = () => {
        dispatch(addTodo({ text: todo }));
        setTodo('');
    };


    return (
        <div>
            <h2>Add Todo</h2>
            <form
                onSubmit={(e) => {
                    e.preventDefault(); // Prevent default form submission
                    addTodoHandler();
                }}
            >
                <input
                    type="text"
                    placeholder="Enter a todo"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    );
}

export default AddTodo;
