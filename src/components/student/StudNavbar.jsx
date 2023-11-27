import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function StudNavbar() {
  
    const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className='navbar'>
      <div className='logo'>
       <img
          src="images/brown_background.png"
          alt='LOGO'
          loading='lazy'/>
      </div>

      <div className='nav-wrapper'>
        <ul className={isMobile ? "nav-Links-mobile" : "nav-Links"}
          onClick={() => setIsMobile(false)}>
          <Link to='/' className='home'>
            <li>Home</li>
          </Link>
          <Link to='/courses' className='courses'>
            <li>Courses</li>
          </Link>
          <Link to='/success_story' className='success_story'>
            <li>Success Story</li>
          </Link>
          <Link to='/registration' className='registration'>
            <li>Registration</li>
          </Link>
          <Link to='/about_us' className='about_us'>
            <li>About Us</li>
          </Link>
          <Link to='/contact' className='contact'>
            <li>Contact</li>
          </Link>
        </ul>
        <button className="mobile-menu-icon"
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </button>
      </div>
    </nav>
  );
};

export default StudNavbar