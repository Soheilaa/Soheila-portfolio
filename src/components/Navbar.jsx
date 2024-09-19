import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import logo from '../assets/logo.jpg'; // Replace with your logo path
import './Navbar.css'; // For styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Intro</Link></li>
        <li><Link to="/AboutMe">About Me</Link></li>
        <li><Link to="/Projects">Projects</Link></li>
        <li><Link to="/GetInTouch">Get In Touch</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
