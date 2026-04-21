import React from 'react'
import "./css/sidebaropt.css"

function Sidebaropt({ Icon, title, number, isactive, onClick }) {
  return (
    <div
      className={`sidebaropt ${isactive ? "sidebaropt--active" : ""}`}
      onClick={onClick}
    >
      <Icon />
      <h4>{title}</h4>
      {number && <p>{number}</p>}
    </div>
  )
}

export default Sidebaropt
