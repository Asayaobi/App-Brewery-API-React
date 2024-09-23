import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([])
  
  //receiving newNote from CreateArea.jsx
  function addForm(newNote){
    //putting newNote and the oldNotes in one array
    const allNotes = prevNotes => [...prevNotes, newNote]
    setNotes(allNotes) 
  }

  function deleteNote(id){
    console.log('delete id', id)
    const filteredNotes = notes.filter((n, index) => index !== id)
    console.log('filteredNotes',filteredNotes)
    setNotes(filteredNotes)
  }
  return (
    <div>
      <Header />
      <CreateArea addForm={addForm}/>
      {notes.map((note, index) => 
      <Note 
        key={index} 
        id={index}
        title={note.title} 
        content={note.content}
        deleteNote={deleteNote} 
        />)}
      <Footer />
    </div>
  );
}

export default App;
