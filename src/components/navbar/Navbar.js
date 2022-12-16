import React from 'react'
import { Link } from 'react-router-dom'
import "../style/NavBar.css"

export default function Navbar() {
  return (
    <>
      <div className='nav-bar__container'>
        <div className='nav-bar__link'>
            <h1 className='nav-bar__logo'>Mboté</h1>
            <nav className='nav-bar__nav'>
                <Link className='nav-bar__Link' to="/">Home</Link>
                <Link className='nav-bar__Link' to="appart">Appartement</Link>  
                <Link className='nav-bar__Link' to="connexion">Connexion</Link> 
            </nav>
        </div>    
    </div>
    </>
  )
}
