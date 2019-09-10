import React from 'react'
import { NavLink } from 'react-router-dom';


function Header() {
  return (
    <div className="Header">
    <NavLink to="/" activeClassName="hurray">Home</NavLink>
    <NavLink to="/about" activeClassName="hurray">About</NavLink>
    <NavLink to="/contact" activeClassName="hurray">Contact</NavLink>
    </div>
  )
}

export default Header

//
// <a href="#">Home</a>
// <a href="#">About</a>
// <a href="#">Contact</a>
