// Code: Navbar Component
// Create a new file named and run the following command to get a starter code for the Navbar component:
// rfce

import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
  
  return (
    <>
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" classname='navbar-logo' onClick={closeMobileMenu} >
          NKCYBER <i className="fa-solid fa-shield-halved" />
        </Link>

        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fa-solid fa-bars'} />
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to="/projects" className='nav-links' onClick={closeMobileMenu}>
              projects
            </Link>
            </li>

            <li className='nav-item'>
            <Link to="/about" className='nav-links' onClick={closeMobileMenu}>
              About
            </Link>
          </li>

          <li className='nav-item'>
            <Link to="/wiki" className='nav-links' onClick={closeMobileMenu}>
              Wiki
            </Link>
          </li>

          <li className='nav-item'>
            <Link to="/divisons" className='nav-links' onClick={closeMobileMenu}>
              Divisions
            </Link>
          </li>

        </ul>
        {button && <Button buttonStyle='btn-outline'>link</Button>}
      </div>
    </nav>
    </>
  );
}

export default Navbar
