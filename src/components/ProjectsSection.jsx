import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection = ({ projects }) => {
  return (
    <section className="projects card" style={{ marginTop: '20px' }}>
      <h2>Projects</h2>
      <div className="projects-grid" aria-live="polite">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;