import React from "react"

function ToDoItem(props) {

    return ( 
    <div onClick={() => {props.clickList(props.textId)}}>
        <li>{props.text}</li>
        </div>
)
}

export default ToDoItem