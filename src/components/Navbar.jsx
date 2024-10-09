import React from 'react';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <Link to="/">Spark! BookPals!</Link>
      </div>
      <div className="navbar-right">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
}
