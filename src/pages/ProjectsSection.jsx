import React from "react";
import "../styles/ProjectsSection.css";
import iphone from "../assets/Project1.png";
import Amusic from "../assets/Project2.png";
import starwars from "../assets/Project3.png";

const projects = [
  {
    title: "iPhone 15 Webpage",
    description:
      "A webpage for the iPhone 15 made in React and threejs to provide an immersive experience to the user.",
    image: iphone,
    demoLink: "https://iphone-swart.vercel.app/",
    githubLink: "https://github.com/Samarora034/iphone",
  },
  {
    title: "Amusic",
    description: "A music hosting website made using HTML, CSS and react.",
    image: Amusic,
    demoLink: "https://amusic-peach.vercel.app/",
    githubLink: "https://github.com/Samarora034/Amusic",
  },
  {
    title: "Star Wars",
    description: "A star wars game built in HTML, CSS, JS and THREEjs.",
    image: starwars,
    demoLink: "https://main-game-eight.vercel.app/",
    githubLink: "https://github.com/Samarora034/main_game",
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
