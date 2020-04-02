import React, {useState, useEffect} from 'react';

import './App.css';

function App() {
  const [text, setText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(5)

  function handleChange(e) {
    const{value} = e.target
    setText(value)
  }

useEffect(() => {
  if(timeRemaining > 0) {
    setTimeout(() => {
      setTimeRemaining(time => time - 1)
    }, 1000)
  }
}, [timeRemaining])

  console.log(text)
  return (
      <div>
          <h1>Title</h1>
          <textarea 
            onChange={handleChange} 
            value={text}/>
          <h4>Time Remaining: {timeRemaining}</h4>
          <button>start game</button>
          <h1>Word Count</h1>
      </div>
  )
}


export default App;
