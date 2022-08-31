import React from 'react'
import './Sidebar.css'

const Sidebar = ({
    addNote,
    deleteNote,
    notes,
    isActive,
    setIsActive
  }) => {

    const sortedNotes = notes.sort((a, b) => b.updatedAt - a.updatedAt);

    return (
      <div className="sidebar">
        <div className="sidebar-header">
          <h1>ノート</h1>
          <button onClick={addNote}>追加</button>
        </div>
        <div className="sidebar-notes">
          {sortedNotes.map((note) => (
            <div
              className={`sidebar-note ${note.id === isActive && "active"}`}
              key={note.id}
              onClick={() => setIsActive(note.id)}
            >
              <div className="sidebar-note-title">
                <h2>{note.title}</h2>
                <button onClick={() => deleteNote(note.id)}>削除</button>
              </div>
              <p>{note.body}</p>
              <small>{new Date(note.updatedAt).toLocaleDateString('ja-JP', {
                hour: '2-digit',
                minute: '2-digit'
              })}</small>
            </div>
            )
          )}
        </div>
      </div>
    )
}

export default Sidebar
