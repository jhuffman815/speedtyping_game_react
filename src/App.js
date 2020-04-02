import React, {useState} from 'react';

import './App.css';

function App() {
  const [text, setText] = useState("")

  function handleChange(e) {
    const{value} = e.target
    setText(value)
  }

  console.log(text)
  return (
      <div>
          <h1>Title</h1>
          <textarea 
            onChange={handleChange} 
            value={text}/>
          <h4>Time Remaining: 0</h4>
          <button>start game</button>
          <h1>Word Count</h1>
      </div>
  )
}


export default App;
