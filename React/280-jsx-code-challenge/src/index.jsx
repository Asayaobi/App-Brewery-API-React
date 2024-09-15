//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
import React from "react"
import ReactDOM from "react-dom"

//variable
const year = new Date().getFullYear()  // returns the current year

ReactDOM.render(
    <div>
        <h1>My Favorite Food</h1>
        <ul>
            <li>Jamon Iberico</li>
            <li>Korean BBQ</li>
            <li>Papaya Salad</li>
        </ul>
        <p> Created by Asaya Obi</p>
        <p>Copyright {year}</p>
    </div>
    ,
    document.getElementById("root")
)