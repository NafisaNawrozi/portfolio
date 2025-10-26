import React, { useState } from 'react';

const AboutSection = ({ owner }) => {
  const [aboutOpen, setAboutOpen] = useState(false);

  const toggleAbout = () => {
    setAboutOpen(!aboutOpen);
  };

  return (
    <section className="about card">
      <h2>About Me</h2>
      <p id="shortAbout">I'm currently learning modern front-end development and building projects to strengthen my skills. My goals: get better at component design and state management.</p>

      <h3 style={{ marginTop: '12px' }}>Fun facts</h3>
      <ul id="hobbiesList">
        {owner.hobbies.map((h, index) => (
          <li key={index}>{h}</li>
        ))}
      </ul>

      <div style={{ display: aboutOpen ? 'block' : 'none', marginTop: '10px', color: 'var(--muted)' }}>
        <p>I enjoy exploring UI patterns, building small projects, and contributing to open-source when I can. I also like reading about usability and accessibility.</p>
      </div>

      <button 
        className="btn" 
        onClick={toggleAbout} 
        aria-expanded={aboutOpen}
      >
        {aboutOpen ? 'Show Less' : 'Show More'}
      </button>
    </section>
  );
};

export default AboutSection;