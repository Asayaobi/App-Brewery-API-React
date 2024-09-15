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
        <img className="food-img" alt="random" src={randomPic + "?grayscale"} />
        <li>Surprise me!</li>
      </ul>
      <p> Created by Asaya Obi</p>
      <p>Copyright {year}</p>
    </div>,
    document.getElementById('root')
  )