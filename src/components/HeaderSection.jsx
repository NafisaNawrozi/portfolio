import React from 'react';

const HeaderSection = ({ owner, quote }) => {
  return (
    <header className="header card" role="banner" style={{ marginTop: '16px' }}>
      <h1>{owner.name}</h1>
      <p className="welcome">{owner.welcomeMessage}</p>
      <p className="quote">"{quote}"</p>
    </header>
  );
};

export default HeaderSection;