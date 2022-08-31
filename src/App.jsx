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
      title: "note1",
      body: "body",
      updatedAt: Date.now(),
    };
    setNotes([...notes, newNote]);
    console.log(notes);
  }

  const deleteNote = (id) => {
    const filterNotes = notes.filter((note) => note.id !== id);
    setNotes(filterNotes);
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
      <Main />
    </div>
  )
}

export default App
