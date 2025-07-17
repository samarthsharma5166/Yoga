import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/yogalogonew.png";
import "./CSS/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src={logo} alt="Logo" />
        </Link>

        {/* Toggle Icon (☰ or ✖) */}
        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? '✖' : '☰'}
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/price" onClick={closeMenu}>Pricing</Link></li>
          <li><Link to="/blogs" onClick={closeMenu}>Blog</Link></li>
          <li><Link to="/livestream" onClick={closeMenu}>Live Events</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact Us</Link></li>
         <li><Link to="/auth/login" onClick={closeMenu}>Login</Link></li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
