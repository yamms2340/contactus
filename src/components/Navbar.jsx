import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import './Navbar.css'
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar" style={{  height: '80px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2rem', position: 'sticky', top: '0', zIndex: '999' }}>
      <div className="navbar-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <a href="/" className="navbar-logo" style={{ color: '#fff', fontSize: '1.8rem', textDecoration: 'none' }}>Mental health</a>
        <FaBars className="menu-icon" style={{ display: 'none', color: '#fff', fontSize: '1.5rem', cursor: 'pointer' }} onClick={toggleMenu} />
        <ul className={isOpen ? "nav-menu active" : "nav-menu"} style={{ listStyle: 'none', margin: '0', padding: '0', display: 'flex' }}>
          <li className="nav-item" style={{ marginRight: '15px' }}><a href="/" className="nav-link" style={{ color: '#fff', textDecoration: 'none', fontSize: '1rem', padding: '10px', transition: 'color 0.3s ease' }}>Home</a></li>
          <li className="nav-item" style={{ marginRight: '15px' }}><a href="/" className="nav-link" style={{ color: '#fff', textDecoration: 'none', fontSize: '1rem', padding: '10px', transition: 'color 0.3s ease' }}>About</a></li>
          <li className="nav-item" style={{ marginRight: '15px' }}><a href="/" className="nav-link" style={{ color: '#fff', textDecoration: 'none', fontSize: '1rem', padding: '10px', transition: 'color 0.3s ease' }}>Services</a></li>
          <li className="nav-item"><a href="/" className="nav-link" style={{ color: '#fff', textDecoration: 'none', fontSize: '1rem', padding: '10px', transition: 'color 0.3s ease' }}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
