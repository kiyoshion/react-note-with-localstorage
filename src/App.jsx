import { useState } from 'react'
import './App.css'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import uuid from 'react-uuid'

function App() {
  const [notes, setNotes] = useState([]);
  const [isActive, setIsActive] = useState(false);

  const addNote = () => {
    console.log("New note was added!");
    const newNote = {
      id: uuid(),
      title: "新しいノート",
      body: "",
      updatedAt: Date.now(),
    };
    setNotes([...notes, newNote]);
    console.log(notes);
  }

  const deleteNote = (id) => {
    const filterNotes = notes.filter((note) => note.id !== id);
    setNotes(filterNotes);
  }

  const getActiveNote = () => {
    return notes.find((note) => note.id === isActive)
  }

  const updateNote = (updatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      } else {
        return note;
      }
    })
    setNotes(updatedNotesArray);
  }

  return (
    <div className="App">
      <Sidebar
        addNote={addNote}
        deleteNote={deleteNote}
        notes={notes}
        isActive={isActive}
        setIsActive={setIsActive}
      />
      <Main
        note={getActiveNote()}
        updateNote={updateNote}
      />
    </div>
  )
}

export default App
