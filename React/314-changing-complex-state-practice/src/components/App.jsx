import React, { useState } from "react";

function App() {
  const [inputContact, setInputContact] = useState({
    fName: "",
    lName: "",
    email: ""
  })
  const [contact, setContact] = useState({})

  function handleChange(event) {
    const {name, value} = event.target    
    
    //[name] is the ES6 syntax to get js variable event.target.name
    setInputContact(prevContact => {
      return {
        ...prevContact, 
        [name]: value }
    }
  )}

    function handleClick(event) {
      setContact(inputContact)
      event.preventDefault()
    }
  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form onSubmit={handleClick}>
        <input onChange={handleChange} name="fName" placeholder="First Name" value={inputContact.fName}/>
        <input onChange={handleChange} name="lName" placeholder="Last Name" value={inputContact.lName}/>
        <input onChange={handleChange} name="email" placeholder="Email" value={inputContact.email}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
