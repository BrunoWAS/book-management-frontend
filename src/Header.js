import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="system-name">BookKeeper</h1>
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/books" className="nav-link">Books</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
