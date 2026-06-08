import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar">
      <NavLink to="/" className="nav-logo" onClick={closeMenu}>
        SARVAM
        <span>Signature Globle</span>
      </NavLink>

      <div className={`nav-links ${open ? "active" : ""}`}>
        <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
        <NavLink to="/about" onClick={closeMenu}>About</NavLink>
        <NavLink to="/projects" onClick={closeMenu}>Projects</NavLink>
        <NavLink to="/services" onClick={closeMenu}>Services</NavLink>
        <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
      </div>

      <NavLink to="/contact" className="nav-btn" onClick={closeMenu}>
        Enquire Now
      </NavLink>

      <button className="menu-btn" onClick={() => setOpen(!open)}>
        {open ? "✕" : "☰"}
      </button>
    </header>
  );
};

export default Navbar;