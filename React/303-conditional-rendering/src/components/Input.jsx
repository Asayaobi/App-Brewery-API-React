import React from "react"

//<input type="text" placeholder="Username" />
//<input type="password" placeholder="Password" />

function Input(props) {
    return (<input type={props.type} placeholder={props.placeholder} />)
}

export default Input