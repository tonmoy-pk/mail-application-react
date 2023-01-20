import React from 'react'
import "./css/sidebaropt.css"

function Sidebaropt({Icon,title,number,isactive}) {
  return (
    <div className={`sidebaropt ${isactive && "sidebaropt--active"}`}>
      <Icon/>
      <h4>{title}</h4>
      <p>{number}</p>
    </div>
  )
}

export default Sidebaropt
