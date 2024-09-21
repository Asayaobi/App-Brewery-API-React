import React, {useState} from "react"


function App() {
//Show the latest time when the Get Time button is pressed
  let now = new Date().toLocaleTimeString()
  const [time, setTime] = useState(now)

  function updateTime(){
    now = new Date().toLocaleTimeString()
    setTime(now)
  }

//using the setInterval method to update the time automatically every second
  setInterval(updateTime, 1000)

    return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  )
}

export default App
