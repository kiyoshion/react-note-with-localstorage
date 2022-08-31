import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1>ノート</h1>
        <button>追加</button>
      </div>
      <div className="sidebar-notes">
        <div className="sidebar-note">
          <div className="sidebar-note-title">
            <h2>タイトル</h2>
            <button>削除</button>
          </div>
          <p>内容</p>
          <span>最終更新日</span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
