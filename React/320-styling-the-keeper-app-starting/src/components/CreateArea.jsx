import React, { useState } from "react"
import AddCircle from "@mui/icons-material/AddCircle"
import Fab from '@mui/material/Fab'
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  })
  //set the in props for zoom animation
  const [isZoomed, setIsZoomed] = useState(false)

  //when the text area is clicked isZoomed is true
  function expand() {
    setIsZoomed(true)
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }


  return (
    <div>
      <form className="create-note">
        {isZoomed &&
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        }
        <textarea
          name="content"
          onChange={handleChange}
          onClick={expand}
          value={note.content}
          placeholder="Take a note..."
          rows={isZoomed ? "3" : "1"}
        />
        <Zoom in={isZoomed}>
          <Fab onClick={submitNote}>
          <AddCircle />
        </Fab>
        </Zoom>

      </form>
    </div>
  );
}

export default CreateArea;
