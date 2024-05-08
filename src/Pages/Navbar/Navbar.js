import React from 'react'
import { Link } from "react-router-dom"
import './Navbar.module.css'


const Navbar = () => {
  return (
    <nav>
    <div class="nav-content">
      <ul class="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">Home</Link></li>
      </ul>
    </div>
  </nav>
  )
}

export default Navbar
