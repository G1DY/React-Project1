import React from 'react'
import "../Styles/accordion.css"
import { useState } from 'react'


const Accordion = ({title, content}) => {
    const [isactive, setIsActive] = useState(false);
  return (
    <section className="accordion-card" key={Math.random()}>
        <div className="header" onClick={() => setIsActive(!isactive)}>
            <div>
                {title}
                <p className="icon">{isactive ? "-" : "+"}</p>
            </div>
        </div>
        <div className="content">{isactive && 
            <p className="card-info">{content}</p>
            }</div>
    </section>
  )
}

export default Accordion