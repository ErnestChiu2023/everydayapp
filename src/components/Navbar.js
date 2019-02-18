import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) =>{
  return(
    <nav className="nav-wrapper black">
      <div className="container">
        <a className="brand-log">Everyday Tasks</a>
        <ul className="right">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Weather">Weather</Link></li>
          <li><Link to="/Todo">To Do list</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
