import React, { useState } from "react";

function App() {
  //1. When new text is written into the input, its state should be saved.
  const [inputText, setInputText] = useState("")
  //2. When the add button is pressed, the current data in the input should be
//added to an array.
  function handleChange(event) {
    const value = event.target.value
    setInputText(value)
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" />
        <button>
        <input onChange={handleChange} type="text" value={inputText}/>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <li>A Item</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
