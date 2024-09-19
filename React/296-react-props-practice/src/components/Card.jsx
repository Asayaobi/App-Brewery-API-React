import React from "react"
import Avatar from "./Avatar"
import Detail from "./Detail"

function Card(props) {
    //receiving props of all deatils of 'contacts' from App.jsx
    console.log(props)
    //passing img props to Avartar.jsx
    //passing phone and email as props to Detail.jsx
    return (
        <div className="card">
          <div className="top">
            <h2 className="name">{props.name}</h2>
            <Avatar img={props.img} />
          </div>
            <Detail phone={props.phone} email={props.email}/>
        </div>
      )
}

export default Card