import React from "react"

//1. Show Login as the button text if userIsRegistered is true.
//Show Register as the button text if userIsRegistered is false.
//2. Only show the Confirm Password input if userIsRegistered is false.
//Don't show it if userIsRegistered is true.

function Form(props) {
  var userIsRegistered = props.userIsRegistered
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
       {!userIsRegistered && <input type="password" placeholder="Confirm Password" />}
      <button type="submit">
        {userIsRegistered ? "Log In" : "Register"}
      </button>
    </form>
  )
}

export default Form