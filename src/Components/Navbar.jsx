import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="logo.png" alt="ANI-VERSE Logo" />
        <h2 className="logo">ANI-VERSE</h2>
      </div>

      {/* Hamburger Menu Button */}
      <button 
        className={`hamburger ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navigation Links */}
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li>
          <NavLink to="/home" end className={({ isActive }) => isActive ? "active" : ""} onClick={closeMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMenu}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/watch" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMenu}>
            Watch
          </NavLink>
        </li>
        <li>
          <NavLink to="/user" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMenu}>
            User
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMenu}>
            Logout
          </NavLink>
        </li>
      </ul>

      {/* Overlay for mobile menu */}
      {isMenuOpen && <div className="nav-overlay" onClick={closeMenu}></div>}
    </nav>
  );
}

export default Navbar;
