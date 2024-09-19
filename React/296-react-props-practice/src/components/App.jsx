import React from "react"
import Card from "./Card"
import contacts from "../contacts"

// mapping contacts array
function createCard(contact) {
  return (<Card 
    key={contact.id}
    id={contact.id}
    name={contact.name} 
    img={contact.imgURL} 
    phone={contact.phone} 
    email={contact.email}/>)
}

function App() {
  //passing contacts array with props to Card.jsx
  return (
    <div>
        <h1 className="heading">My Contacts</h1>
        {contacts.map(createCard)}
    </div>
  )
}

export default App
