import React from 'react'
import './Navbar.css'
import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <nav className='navbar'>
        <NavLink to= "/">
        <div className='navbar__logo'>
            <img src='logo.png' alt='logo' />
        </div>
        </NavLink>
        <NavLink to= "/">
            <div className='navbar__accueil'>Accueil</div>
        </NavLink>
        <NavLink to= "/about">
            <div className='navbar__propos'>À Propos</div>
        </NavLink>
    </nav>
  )
}

export default Navbar