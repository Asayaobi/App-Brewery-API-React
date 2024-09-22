import React, { useState } from "react";

function App() {
  const [fullName, setfullName] = useState({
    fName: "",
    lName: ""
  })

  function handleChange(event){
    const value = event.target.value //whatever you are typing Y a r o..
    const input = event.target.name //the name of the input that you're typing fName

    //when passing object, without prevValue, it'll reset the currect value and lose the prev value eg. get firstname and lastname blank
    setfullName(prevValue => {
      if (input === 'fName'){
        return {
          fName: value,
          lName: prevValue.lName
        }
      } else if (input === 'lName') {
        return {
          fName: prevValue.fName,
          lName: value
        }
      }
    })
  }

  return (
    <div className="container">
      <h1>Hello {fullName.fName} {fullName.lName}</h1>
      <form>
        <input onChange={handleChange} name="fName" placeholder="First Name" value={fullName.fName}/>
        <input onChange={handleChange} name="lName" placeholder="Last Name" value={fullName.lName}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
