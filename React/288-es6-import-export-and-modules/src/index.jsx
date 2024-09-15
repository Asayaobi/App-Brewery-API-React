import React from "react";
import ReactDOM from "react-dom/client";
import pie, {doublePi, triplePi} from "./math"


const root = ReactDOM.createRoot(document.getElementById("root"))

//const pi can be called in any name because it's exported by default
//doublePi, triplePi have to match the original name because it uses export
//to called doublePi, triplePi, you need () because they are functions
root.render(
  <ul>
    <li>{pie}</li>
    <li>{doublePi()}</li>
    <li>{triplePi()}</li>
  </ul>
)


// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
