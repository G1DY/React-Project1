import React from 'react'
import { useState } from 'react'
import "../Styles/counter.css";

const Counter = () => {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
  return (
    <div className='container'>
        <div className='Container'>
            <h1 className='number'>Count: {count}</h1>
        </div>
        <div className='btns-container'>
            <button onClick={increment} className='increment'>+</button>
            <button onClick={decrement} className='decrement'>-</button>
        </div>
    </div>
  )
}

export default Counter