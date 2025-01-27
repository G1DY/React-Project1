import React from 'react'
import { accordionData } from './Components/Utils/content'
import Accordion from './Components/Accordion'

const App = () => {
  return (
    <div className="accordion">
      {accordionData.map((title, content) => (
        <Accordion title={title} content={content}/>
      ))}
    </div>
  )
}

export default App