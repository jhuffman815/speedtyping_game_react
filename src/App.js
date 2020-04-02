import React, {useState, useEffect} from 'react';

import './App.css';

function App() {
  const [text, setText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(5)
  const [isTimeRunning, setIsTimeRunning] = useState(false)

  function handleChange(e) {
    const{value} = e.target
    setText(value)
  }

useEffect(() => {
  if(isTimeRunning && timeRemaining > 0) {
    setTimeout(() => {
      setTimeRemaining(time => time - 1)
    }, 1000)
  } else if(timeRemaining === 0) {
    setIsTimeRunning(false)
  }
}, [timeRemaining, isTimeRunning])

  console.log(text)
  return (
      <div>
          <h1>Title</h1>
          <textarea 
            onChange={handleChange} 
            value={text}/>
          <h4>Time Remaining: {timeRemaining}</h4>
          <button onClick={() => setIsTimeRunning(true)}>start game</button>
          <h1>Word Count</h1>
      </div>
  )
}


export default App;
