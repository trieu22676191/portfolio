import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="portfolio-header">
      <div className="header-content">
        <Link to="/" className="header-logo">
          <img src={logo} alt="Logo" />
        </Link>
        <nav className="header-nav">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/project">Project</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
