import React, { useState } from 'react'
import "../Styles/todo.css"

const generateId = () => {
    return Math.floor(Math.random() * 10)
}

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [inputvalue, setInputValue] = useState("");


    const handleSubmit = () => {
        if (inputvalue.trim()) {
            setTodos((prevTodos) => [...prevTodos, {
                text: inputvalue,
                id: generateId(),
            }] )
            setInputValue("");
            
        }
    }
    const removeTodo = (id) => setTodos((prevTodos) => prevTodos.filter((t) => t.id !== id));
  return (
    <div className='container'>
        <input type="text" placeholder='New Todo' value={inputvalue} onChange={(e) => setInputValue(e.target.value)} />
        <button onClick={handleSubmit}>Submit</button>
        <ul className='todos-list'>
            {todos.map((todo) => (
                <li className='todo' key={todo.id}>
                    <span>{todo.text}</span>
                    <button className='close' onClick={(id) => removeTodo(todo.id)}>X</button>
                </li>
            ))}
        </ul>
    </div>
  );
};

export default Todo;