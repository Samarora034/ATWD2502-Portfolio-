import React from "react";
import "../styles/ProjectsSection.css";

const projects = [
  {
    title: "Project 1",
    description: "A brief description of Project 1.",
    image: "https://via.placeholder.com/300",
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Project 2",
    description: "A brief description of Project 2.",
    image: "https://via.placeholder.com/300",
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Project 3",
    description: "A brief description of Project 3.",
    image: "https://via.placeholder.com/300",
    demoLink: "#",
    githubLink: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section className="projects-section" id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer">
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
