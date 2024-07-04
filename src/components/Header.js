import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src="/path/to/your/logo.png" alt="Logo" />
          <span>Vikas</span> {/* Replace with your name or brand */}
        </div>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
