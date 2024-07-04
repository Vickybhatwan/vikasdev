import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h1>Projects</h1>
        <div className="project">
          <div className="project-info">
            <h2>Project 1</h2>
            <p>Description of project 1...</p>
            <a href="#" className="btn">View Project</a>
          </div>
          <div className="project-image">
            <img src="project1.jpg" alt="Project 1" />
          </div>
        </div>
        <div className="project">
          <div className="project-info">
            <h2>Project 2</h2>
            <p>Description of project 2...</p>
            <a href="#" className="btn">View Project</a>
          </div>
          <div className="project-image">
            <img src="project2.jpg" alt="Project 2" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
