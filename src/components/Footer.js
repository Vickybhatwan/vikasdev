import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="social-links">
          <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://linkedin.com/in/example" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/example" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </div>
        <p>&copy; 2024 Vikas. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
