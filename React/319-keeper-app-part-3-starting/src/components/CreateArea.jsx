import React, { useState } from "react";

function CreateArea(props) {
  const [newNote, setNewNote] = useState({title:"", content:""})
  function createNewNote(event){
    const {name, value} = event.target
    setNewNote(prevNote => {
      return {...prevNote, [name]: value}
    })
  }
  return (
    <div>
      <form onSubmit={(event) => 
        {
          event.preventDefault()
          props.addForm(newNote)
          setNewNote({title:"", content:""})
          }}>
        <input onChange={createNewNote}name="title" placeholder="Title" value={newNote.title}/>
        <textarea onChange={createNewNote} name="content" placeholder="Take a note..." rows="3" value={newNote.content} />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
