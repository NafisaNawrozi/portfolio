import React from 'react';

const ProjectCard = ({ project }) => {
  const { name, image, description, live, tech, featured } = project;

  return (
    <article className="project-card card" style={{ padding: 0 }}>
      {featured && <div className="featured">🌟 Featured</div>}
      
      <img className="project-image" alt={name} src={image} />

      <div className="project-body">
        <div>
          <h3 className="project-title">{name}</h3>
          <p className="project-desc">{description}</p>
        </div>
        
        <div className="tech-list">
          {tech.map((t) => (
            <span key={t} className="tech-badge">
              {t}
            </span>
          ))}
        </div>
        
        <a 
          className="live-link" 
          href={live} 
          target="_blank" 
          rel="noopener"
        >
          View Live
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;