import React from 'react'
import './Sidebar.css'

const Sidebar = ({ addNote, notes }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1>ノート</h1>
        <button onClick={addNote}>追加</button>
      </div>
      <div className="sidebar-notes">
        {notes.map((note) => (
          <div
            className="sidebar-note"
            key={note.id}
          >
            <div className="sidebar-note-title">
              <h2>{note.title}</h2>
              <button>削除</button>
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
