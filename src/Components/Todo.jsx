import React, { useState } from 'react'
import "../Styles/todo.css"

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [inputvalue, setInputValue] = useState("");


    const handleSubmit = () => {
        setTodos((todos) => {
            return todos.concat(() => {
                text: input
                id: Math.floor(Math.random() * 10)
            });
        });
        setInputValue("");
    };
    const removeTodo = (id) => setTodos((todos) => todos.filter((t) => t.id !== id));
  return (
    <div className='container'>
        <input type="text" placeholder='New Todo' value={inputvalue} onChange={(e) => setInputValue(e.target.value)} />
        <button onClick={handleSubmit}>Submit</button>
        <ul className='todos-list'>
            {todos.map((text, id) => (
                <li className='todo' key={id}>
                    <span>{text}</span>
                    <button className='close' onClick={removeTodo}>X</button>
                </li>
            ))}
        </ul>
    </div>
  );
};

export default Todo;