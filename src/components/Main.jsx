import React from 'react'
import './Main.css'

const Main = ({ note, updateNote }) => {

  const editNote = (key, value) => [
    updateNote({
      ...note,
      [key]: value,
      updatedAt: Date.now(),
    })
  ]

  if (!note) {
    return <div className="none-note">ノートがありません</div>
  }

  return (
    <div className="main">
      <div className="main-note-edit">
        <input
          id="title"
          type="text"
          value={note.title}
          onChange={(e) => editNote("title", e.target.value)}
        />
        <textarea
          id="body"
          placeholder="本文"
          cols="30"
          rows="10"
          value={note.body}
          onChange={(e) => editNote("body", e.target.value)}
        ></textarea>
      </div>
      <div className="main-note-preview">
        <h1 className="preview-title">{note.title}</h1>
        <div className='markdown-preview'>{note.body}</div>
      </div>
    </div>
  )
}

export default Main
