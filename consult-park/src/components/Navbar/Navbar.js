import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import textLogo from "../../assets/textLogo.jpg"; // Corrected path
import "./Navbar.css"; // Corrected path

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isMobile = windowWidth <= 768;

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
          <img src={textLogo} alt="Consult Park Logo" className="logo-image" />
          <span className="logo-text">Consult Park</span>
        </Link>
      </div>

      {/* Mobile menu button */}
      {isMobile && (
        <button 
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>
      )}

      {/* Navigation links */}
      <div 
        className={`nav-links ${isMobile ? (isMenuOpen ? "mobile-open" : "mobile-closed") : ""}`}
      >
        <Link 
          to="/" 
          className="nav-link"
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </Link>
        <Link 
          to="/about" 
          className="nav-link"
          onClick={() => setIsMenuOpen(false)}
        >
          About
        </Link>
        <Link 
          to="/services" 
          className="nav-link"
          onClick={() => setIsMenuOpen(false)}
        >
          Services
        </Link>
        <Link 
          to="/outsource" 
          className="nav-link"
          onClick={() => setIsMenuOpen(false)}
        >
          BPO Solutions
        </Link>
        <Link 
          to="/contact" 
          className="nav-link contact-link"
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;