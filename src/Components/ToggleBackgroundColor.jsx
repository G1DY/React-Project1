import React from 'react'
import { useState } from 'react'
import "../Styles/ToggleBackgroundColor.css"

const ToggleBackgroundColor = () => {
    const [backgroundcolor, setBackgroundColor] = useState("White");
    const [textcolor, setTextColor] = useState("#1b1b1b");
    const [buttonstyle, setButtonStyle] = useState("White");

    const handleClick = () => {
        setBackgroundColor(backgroundcolor == "White" ? "#1b1b1b" : "White");
        setTextColor(textcolor == "#1b1b1b" ? "#ffa31a" : "#1b1b1b");
        setButtonStyle(buttonstyle == "White" ? "#1b1b1b" : "White");
    }
  return (
    <section style={{backgroundcolor, color: textcolor}}>
        <button style={{buttonstyle, color: textcolor, border: `2px, solid ${textcolor}`}} onClick={handleClick}>
            {backgroundcolor == "#1b1b1b" ? "Black Theme" : "White Theme"}
        </button>
        <section className='cotent'>
            <h1>Welcome to <br />toggle project</h1>
        </section>
    </section>
  );
};

export default ToggleBackgroundColor