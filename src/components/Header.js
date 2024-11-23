import React from 'react';
import './Header.css';

function Header({ setActiveSection }) {
  return (
    <header className="header">
      <div className="logo">
        <img src="/images/icon.png" alt="Logo Icon" className="logo-icon" />
        <span className="logo-text">Blog World</span>
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#trending" onClick={() => setActiveSection('home')}>Trending Blogs</a></li>
          <li><a href="#features" onClick={() => setActiveSection('home')}>Features</a></li>
          <li><a href="#about-us" onClick={() => setActiveSection('home')}>About Us</a></li>
        </ul>
      </nav>
      <div className="search-login">
        <input type="text" placeholder="Search..." className="search-bar" />
        <button className="login-btn" onClick={() => setActiveSection('login')}>Login</button>
        <button className="register-btn" onClick={() => setActiveSection('register')}>Register</button>
      </div>
    </header>
  );
}

export default Header;
