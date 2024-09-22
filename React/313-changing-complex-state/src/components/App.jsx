import React, { useState } from "react";

function App() {
  const [fName, setfName] = useState("")
  const [lName, setlName] = useState("")

  function handlefName(event){
    const firstName = event.target.value
    setfName(firstName)
  }
  function handlelName(event){
    const lastName = event.target.value
    setlName(lastName)
  }
  return (
    <div className="container">
      <h1>Hello {fName} {lName}</h1>
      <form>
        <input onChange={handlefName} name="fName" placeholder="First Name" value={fName}/>
        <input onChange={handlelName} name="lName" placeholder="Last Name" value={lName}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
