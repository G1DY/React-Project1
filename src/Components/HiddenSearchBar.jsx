import React from 'react'
import { FaSearch } from "react-icons/fa";
import { useState } from 'react';
import "../Styles/hiddensearchbar.css"

const HiddenSearchBar = () => {
  const [showinput, setShowInput] = useState(false);
  const [bgcolor, setBgColor] = useState('White');

  const handleClick = (e) => {
    setBgColor("1a1a1a");
    if (e.target.className === "container") {
      setShowInput(false);
      setBgColor("#fff");
    }
  }
  return (
    <section className='container' style={{backgroundColor: bgcolor}} onClick={handleClick}>
      {showinput ? (<input type='text' placeholder='...search'/>) : (<FaSearch onClick={() => setShowInput(true)}/>)}
    </section>
  );
};

export default HiddenSearchBar