import React from 'react'
import { useState } from 'react'
import "../Styles/testimonials.css"

const Testimonials = () => {
    const [currentindex, setCurrentIndex] = useState(0);
    const testmonials = [
        {
            quote: "This is the best product I've ever used!",
            author: "Jane Doe",
          },
          {
            quote: "I highly recommend this product to everyone!",
            author: "John Smith",
          },
          {
            quote: "This product has completely changed my life!",
            author: "Bob Johnson",
          },
    ];

    const handleprev = () => {
        setCurrentIndex((currentindex - 1 + testmonials.length) % testmonials.length);
    };

    const handlenext = () => {
        setCurrentIndex((currentindex + 1) % testmonials.length);
    };
  return (
    <div className="testimonials">
        <div className="testimonials-quote">
            {testmonials[currentindex].quote}
        </div>
        <div className="testimonials-author">
            -{testmonials[currentindex].author}
        </div>
        <div className="testimonials-nav">
            <button onClick={handleprev}>prev</button>
            <button onClick={handlenext}>next</button>
        </div>
    </div>
  );
};

export default Testimonials