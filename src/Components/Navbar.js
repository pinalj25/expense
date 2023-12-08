import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Your Logo</Link>
      </div>
      <div className="nav-links">
        <NavLink to="/login"  >
          Login
        </NavLink>
        <NavLink to="/signup"  >
          Sign-up
        </NavLink>
        <NavLink to="/et"  >
          main
        </NavLink>
      </div>
    </nav>
  );
}
