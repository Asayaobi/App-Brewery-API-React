import React from "react"
import Login from "./Login"

var isLoggedin = false
//if the user logged in -> show <h1>Hello</h1>
//if not loggeg in -> show form to input username/ password

let currentTime = new Date().getHours()
currentTime = 11
function App() {
  return (
    <div className="container">
      {isLoggedin ? <h1>Hello</h1> : <Login />}
      {/* {currentTime < 12 && <h1>Why are you still working?</h1>} */}
    </div>
  )
}

export default App
