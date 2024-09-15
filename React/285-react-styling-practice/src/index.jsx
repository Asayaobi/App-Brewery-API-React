//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser

import React from "react"
import ReactDOM from "react-dom/client"

//get hour
let hour = new Date().getHours()

//display message
let message = ""
if (hour > 18){
    message = "Good evening"
} else if (hour > 12){
    message = "Good afternoon"
} else {
    message = "Good morning"
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<h1 className="heading">{message}</h1>)