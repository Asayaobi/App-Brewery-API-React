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

//alternative using wild card
// import * as pi from "./math"
// console.log(pi) //{doublePie: function doublePi(), triplePie: function triplePi(), default 3.14159}
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(
//   <ul>
//     <li>{pi.default}</li>
//     <li>{pi.doublePi()}</li>
//     <li>{pi.triplePi()}</li>
//   </ul>
// )