import React from "react"
import Avatar from "./Avatar"

function Card(props) {
    //receiving props of contacts from App.jsx
    console.log(props)
    //passing img props to Avartar.jsx
    return (
        <div className="card">
          <div className="top">
            <h2 className="name">{props.name}</h2>
            <Avatar img={props.img} />
          </div>
          <div className="bottom">
            <p className="info">{props.phone}</p>
            <p className="info">{props.email}</p>
          </div>
        </div>
      )
}

export default Card