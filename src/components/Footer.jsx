import React from 'react';

const Footer = ({ owner }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container footer-inner card">
        <div className="socials" aria-label="Social links">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener">LinkedIn</a>
        </div>
        <div className="copyright">
          © {currentYear} {owner.name}
        </div>
      </div>
    </footer>
  );
};

export default Footer;