import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"
import notes from "../notes"


//const notes = [
// {
//     key: 1,
//     title: "Delegation",
//     content:
//       "Q. How many programmers does it take to change a light bulb? A. None – It’s a hardware problem"
//   }]

function App() {
  return (
    <div>
      <Header />

      {notes.map(note => (
        <Note key={note.key}
        title={note.title}
        content = {note.content}/>
      ))}
      
      <Footer />
    </div>
  )
}

export default App
