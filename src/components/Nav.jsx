import React from 'react';

const Nav = ({ theme, toggleTheme }) => {
  return (
    <nav className="nav" aria-label="Main navigation">
      <div className="nav-inner container">
        <div className="brand">Nafisa Nawrozi</div>
        <ul className="nav-links" role="list">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
        {/* small controls */}
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <label style={{ fontSize: '13px', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <input 
              id="themeToggle" 
              type="checkbox" 
              aria-label="Toggle dark theme" 
              checked={theme === 'dark'}
              onChange={toggleTheme}
            /> 
            Dark
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Nav;