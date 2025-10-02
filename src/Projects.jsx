import React from "react";
import { Link } from "react-router-dom";

export default function Projects() {
  // Project data array containing information about each project
  const projects = [
    {
      id: 1,
      title: "Personal Portfolio Website",
      description: "A responsive personal portfolio website showcasing my projects and skills. Built using HTML5, CSS3, and vanilla JavaScript with modern design principles.",
      image: "https://via.placeholder.com/400x250/74ebd5/ffffff?text=Portfolio+Website",
      role: "Frontend Developer",
      outcome: "Created a professional portfolio that effectively showcases my work and skills to potential employers and clients.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"]
    },
    {
      id: 2,
      title: "Interactive Calculator",
      description: "A fully functional calculator application with a clean, modern interface. Features basic arithmetic operations and a responsive design that works on all devices.",
      image: "https://via.placeholder.com/400x250/9face6/ffffff?text=Calculator+App",
      role: "Frontend Developer",
      outcome: "Developed a user-friendly calculator that demonstrates strong JavaScript programming skills and CSS styling abilities.",
      technologies: ["HTML5", "CSS3", "JavaScript", "DOM Manipulation"]
    },
    {
      id: 3,
      title: "To-Do List Application",
      description: "A simple yet effective to-do list application that allows users to add, edit, delete, and mark tasks as complete. Features local storage for data persistence.",
      image: "https://via.placeholder.com/400x250/2b2d42/ffffff?text=To-Do+List",
      role: "Frontend Developer",
      outcome: "Built a practical application that demonstrates understanding of JavaScript fundamentals, DOM manipulation, and local storage usage.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Local Storage"]
    }
  ];

  return (
    <div className="projects-container">
      <div className="projects-content">
        <h1 className="page-title">My Projects</h1>
        <p className="projects-intro">
          Here are some of the projects I've worked on that showcase my skills and passion for development.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              
              <div className="project-content">
                <Link 
                  to={`/projects/${project.id}`} 
                  className="project-title-link"
                >
                  <h3 className="project-title">{project.title}</h3>
                </Link>
                <p className="project-description">{project.description}</p>
                
                <div className="project-details">
                  <div className="project-role">
                    <strong>My Role:</strong> {project.role}
                  </div>
                  <div className="project-outcome">
                    <strong>Outcome:</strong> {project.outcome}
                  </div>
                </div>
                
                <div className="project-technologies">
                  <strong>Technologies Used:</strong>
                  <div className="tech-tags">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
