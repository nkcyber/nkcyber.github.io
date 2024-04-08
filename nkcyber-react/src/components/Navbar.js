// Code: Navbar Component
// Create a new file named and run the following command to get a starter code for the Navbar component:
// rfce

import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" classname="navbar-logo">
          NKCYBER <i className="fab fa-typo3" />
        </Link>
        <div className='menu-icon'>
          
        </div>
      </div>
    </nav>
    </>
  );
}

export default Navbar
