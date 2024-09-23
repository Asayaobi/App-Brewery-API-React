import React from "react"
import { useState } from "react"

function ToDoItem(props) {
    const [isClicked, setClicked] = useState(false)

//if the list is click, cross or uncross the list.
    function handleClick(){
        setClicked(prevValue => {
            return !prevValue
        })
    }
    return ( 
    <div onClick={handleClick}>
        <li style={{textDecoration:isClicked && "line-through"}}>{props.text}</li>
        </div>
)
}

export default ToDoItem