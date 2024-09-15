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
const randomPic = "https://picsum.photos/200"
ReactDOM.render(
    <div>
        <h1 className="heading">My Favorite Food</h1>
        <ul>
            <img className="food-img" alt="Jamon" src="https://spainiberico.com/wp-content/uploads/nc/products/Jamon_bellota_100_iberico_green_label.jpg"/>
            <li>Jamon Iberico</li>
            <img className="food-img" alt="BBQ" src="https://cloudfront-us-east-1.images.arcpublishing.com/pmn/WQS5BGVCHZATLDQOQ6XOKTGLAM.jpg"/>
            <li>Korean BBQ</li>
            <img className="food-img" alt="random" src={randomPic + "?grayscale"}/>
            <li>Surprise me!</li>
        </ul>
        <p> Created by Asaya Obi</p>
        <p>Copyright {year}</p>
    </div>
    ,
    document.getElementById("root")
)