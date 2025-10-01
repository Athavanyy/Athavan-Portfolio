import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Calculator from "./components/Calculator";
import TodoList from "./components/TodoList";
import PortfolioDemo from "./components/PortfolioDemo";

export default function ProjectDetail() {
  const { projectId } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [isLoaded, setIsLoaded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Project data array - same as in Projects.jsx but accessible here
  const projects = [
    {
      id: 1,
      title: "Personal Portfolio Website",
      description: "A responsive personal portfolio website showcasing my projects and skills. Built using HTML5, CSS3, and vanilla JavaScript with modern design principles.",
      image: "https://via.placeholder.com/400x250/74ebd5/ffffff?text=Portfolio+Website",
      role: "Frontend Developer",
      outcome: "Created a professional portfolio that effectively showcases my work and skills to potential employers and clients.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      longDescription: "This portfolio website was my first major project and represents my journey into web development. I built it from scratch using vanilla HTML, CSS, and JavaScript to demonstrate my understanding of fundamental web technologies. The site features a clean, modern design with smooth animations and responsive layouts that work seamlessly across all device sizes. I focused on creating an intuitive user experience while showcasing my technical skills and projects in an organized manner.",
      features: [
        "Responsive design that works on desktop, tablet, and mobile",
        "Smooth scrolling navigation",
        "Interactive hover effects and animations",
        "Clean and modern UI/UX design",
        "Optimized loading times",
        "Cross-browser compatibility"
      ],
      challenges: "One of the main challenges was ensuring the website worked consistently across different browsers and devices. I had to learn about CSS media queries and responsive design principles to create a seamless experience for all users.",
      lessons: "This project taught me the importance of user experience design and how small details can make a big difference in how users interact with a website. I also learned about the fundamentals of web performance optimization."
    },
    {
      id: 2,
      title: "Interactive Calculator",
      description: "A fully functional calculator application with a clean, modern interface. Features basic arithmetic operations and a responsive design that works on all devices.",
      image: "https://via.placeholder.com/400x250/9face6/ffffff?text=Calculator+App",
      role: "Frontend Developer",
      outcome: "Developed a user-friendly calculator that demonstrates strong JavaScript programming skills and CSS styling abilities.",
      technologies: ["HTML5", "CSS3", "JavaScript", "DOM Manipulation"],
      longDescription: "This calculator application was built to showcase my JavaScript programming skills and understanding of DOM manipulation. The calculator features a sleek, modern interface with a dark theme and smooth button interactions. It handles all basic arithmetic operations including addition, subtraction, multiplication, and division, with proper error handling for edge cases like division by zero.",
      features: [
        "Basic arithmetic operations (+, -, ×, ÷)",
        "Clear and delete functionality",
        "Error handling for invalid operations",
        "Responsive design for all screen sizes",
        "Smooth button animations and hover effects",
        "Keyboard support for number input"
      ],
      challenges: "Implementing proper error handling and edge cases was challenging. I had to ensure the calculator behaved correctly when users tried to divide by zero or perform invalid operations.",
      lessons: "This project reinforced my understanding of JavaScript fundamentals, event handling, and DOM manipulation. I learned how to create robust applications that handle user input gracefully."
    },
    {
      id: 3,
      title: "To-Do List Application",
      description: "A simple yet effective to-do list application that allows users to add, edit, delete, and mark tasks as complete. Features local storage for data persistence.",
      image: "https://via.placeholder.com/400x250/2b2d42/ffffff?text=To-Do+List",
      role: "Frontend Developer",
      outcome: "Built a practical application that demonstrates understanding of JavaScript fundamentals, DOM manipulation, and local storage usage.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Local Storage"],
      longDescription: "This to-do list application demonstrates my ability to create practical, user-focused applications. The app allows users to manage their daily tasks with an intuitive interface. Users can add new tasks, mark them as complete, edit existing tasks, and delete unwanted items. The application uses browser local storage to persist data, so tasks remain saved even after closing the browser.",
      features: [
        "Add new tasks with a simple form",
        "Mark tasks as complete with visual feedback",
        "Edit existing tasks inline",
        "Delete individual tasks",
        "Local storage for data persistence",
        "Clean and intuitive user interface",
        "Task counter showing completed vs total tasks"
      ],
      challenges: "Implementing local storage functionality was the most challenging part. I had to ensure that data was properly saved and retrieved, and handle cases where local storage might not be available.",
      lessons: "This project taught me about data persistence in web applications and how to create user-friendly interfaces for data management. I also learned about the importance of providing clear feedback to users about their actions."
    }
  ];

  // Find the project with the matching ID
  const project = projects.find(p => p.id === parseInt(projectId));

  useEffect(() => {
    // Add loading animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, [projectId]);

  useEffect(() => {
    // Handle scroll effect for header
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!project) {
    return (
      <div className="project-detail-container-new">
        <div className="error-page">
          <div className="error-content">
            <h1 className="error-title">🚫 Project Not Found</h1>
            <p className="error-message">The project you're looking for doesn't exist.</p>
            <Link to="/projects" className="error-back-btn">
              ← Back to Projects
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'overview', label: 'Project Overview', icon: '📋', description: 'About this project' },
    { id: 'features', label: 'Key Features', icon: '⚡', description: 'What it includes' },
    { id: 'demo', label: 'Live Demo', icon: '🚀', description: 'Try it yourself' },
    { id: 'tech', label: 'Tech Stack', icon: '🛠️', description: 'Technologies used' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="tab-content">
            <div className="project-hero-enhanced">
              <div className="hero-content">
                <div className="project-badge">
                  <span className="badge-text">{project.role}</span>
                </div>
                <h1 className="project-title-new">{project.title}</h1>
                <p className="project-subtitle">{project.description}</p>
                
                <div className="project-highlights">
                  <div className="highlight-item">
                    <div className="highlight-icon">🎯</div>
                    <div className="highlight-content">
                      <h4>Objective</h4>
                      <p>Create a professional showcase of skills</p>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <div className="highlight-icon">✅</div>
                    <div className="highlight-content">
                      <h4>Status</h4>
                      <p>Completed Successfully</p>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <div className="highlight-icon">🚀</div>
                    <div className="highlight-content">
                      <h4>Impact</h4>
                      <p>{project.outcome}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero-image">
                <img src={project.image} alt={project.title} />
                <div className="image-overlay">
                  <div className="overlay-content">
                    <h3>Project Preview</h3>
                    <p>Click to view full size</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="content-grid">
              <div className="content-section">
                <div className="section-header">
                  <h2>📝 Project Description</h2>
                  <div className="section-divider"></div>
                </div>
                <div className="description-content">
                  <p className="description-text">{project.longDescription}</p>
                  <div className="description-stats">
                    <div className="stat-card">
                      <span className="stat-number">{project.technologies.length}</span>
                      <span className="stat-text">Technologies</span>
                    </div>
                    <div className="stat-card">
                      <span className="stat-number">{project.features.length}</span>
                      <span className="stat-text">Features</span>
                    </div>
                    <div className="stat-card">
                      <span className="stat-number">100%</span>
                      <span className="stat-text">Complete</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="content-section">
                <div className="section-header">
                  <h2>🎯 Challenges & Solutions</h2>
                  <div className="section-divider"></div>
                </div>
                <div className="challenge-solution-grid">
                  <div className="challenge-box">
                    <div className="box-header">
                      <div className="box-icon challenge-icon">⚠️</div>
                      <h3>Challenge</h3>
                    </div>
                    <p>{project.challenges}</p>
                  </div>
                  <div className="solution-box">
                    <div className="box-header">
                      <div className="box-icon solution-icon">💡</div>
                      <h3>Key Learning</h3>
                    </div>
                    <p>{project.lessons}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'features':
        return (
          <div className="tab-content">
            <div className="features-header">
              <h2>⚡ Key Features</h2>
              <p>Explore the main capabilities and functionality of this project</p>
            </div>
            <div className="features-grid-enhanced">
              {project.features.map((feature, index) => (
                <div key={index} className="feature-card-enhanced">
                  <div className="feature-card-header">
                    <div className="feature-number">0{index + 1}</div>
                    <div className="feature-icon">
                      {index === 0 && '📱'}
                      {index === 1 && '🎨'}
                      {index === 2 && '⚡'}
                      {index === 3 && '🔧'}
                      {index === 4 && '🚀'}
                      {index === 5 && '🌐'}
                      {index > 5 && '✨'}
                    </div>
                  </div>
                  <div className="feature-content">
                    <h3 className="feature-title">Feature {index + 1}</h3>
                    <p className="feature-description">{feature}</p>
                    <div className="feature-status">
                      <span className="status-dot"></span>
                      <span className="status-text">Implemented</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="features-summary">
              <div className="summary-card">
                <h3>📊 Project Summary</h3>
                <div className="summary-stats">
                  <div className="summary-item">
                    <span className="summary-number">{project.features.length}</span>
                    <span className="summary-label">Total Features</span>
                  </div>
                  <div className="summary-item">
                    <span className="summary-number">100%</span>
                    <span className="summary-label">Completion Rate</span>
                  </div>
                  <div className="summary-item">
                    <span className="summary-number">A+</span>
                    <span className="summary-label">Quality Rating</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'demo':
        return (
          <div className="tab-content">
            <div className="demo-header-enhanced">
              <div className="demo-title-section">
                <h2>🚀 Live Interactive Demo</h2>
                <p>Experience the project in action. This is a fully functional demo of the actual application.</p>
              </div>
              <div className="demo-info">
                <div className="demo-badge">
                  <span className="badge-icon">▶️</span>
                  <span className="badge-text">Live Demo</span>
                </div>
                <div className="demo-instructions">
                  <h4>How to use:</h4>
                  <ul>
                    <li>Interact with the demo below</li>
                    <li>Test all functionality</li>
                    <li>Experience the user interface</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="demo-container-enhanced">
              <div className="demo-wrapper">
                {project.id === 1 && <PortfolioDemo />}
                {project.id === 2 && <Calculator />}
                {project.id === 3 && <TodoList />}
              </div>
            </div>
            
            <div className="demo-footer">
              <div className="demo-note">
                <span className="note-icon">💡</span>
                <span className="note-text">This demo showcases the actual functionality described in the project overview.</span>
              </div>
            </div>
          </div>
        );

      case 'tech':
        return (
          <div className="tab-content">
            <div className="tech-stack-enhanced">
              <div className="tech-header">
                <h2>🛠️ Technology Stack</h2>
                <p>Technologies and tools used to build this project</p>
              </div>
              
              <div className="tech-categories">
                <div className="tech-category">
                  <h3>Frontend Technologies</h3>
                  <div className="tech-grid-enhanced">
                    {project.technologies.filter(tech => 
                      ['React', 'JavaScript', 'HTML5', 'CSS3', 'Responsive Design'].includes(tech)
                    ).map((tech, index) => (
                      <div key={index} className="tech-card-enhanced">
                        <div className="tech-card-header">
                          <div className="tech-logo">
                            {tech === 'React' && '⚛️'}
                            {tech === 'JavaScript' && '🟨'}
                            {tech === 'HTML5' && '🌐'}
                            {tech === 'CSS3' && '🎨'}
                            {tech === 'Responsive Design' && '📱'}
                          </div>
                          <div className="tech-level">
                            <span className="level-text">Expert</span>
                          </div>
                        </div>
                        <div className="tech-content">
                          <h3>{tech}</h3>
                          <div className="tech-progress">
                            <div className="progress-bar">
                              <div className="progress-fill" style={{width: '90%'}}></div>
                            </div>
                            <span className="progress-text">90%</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="tech-category">
                  <h3>Development Tools</h3>
                  <div className="tech-grid-enhanced">
                    {project.technologies.filter(tech => 
                      ['Git', 'Node.js', 'DOM Manipulation', 'Local Storage'].includes(tech)
                    ).map((tech, index) => (
                      <div key={index} className="tech-card-enhanced">
                        <div className="tech-card-header">
                          <div className="tech-logo">
                            {tech === 'Git' && '📦'}
                            {tech === 'Node.js' && '🟢'}
                            {tech === 'DOM Manipulation' && '🔧'}
                            {tech === 'Local Storage' && '💾'}
                          </div>
                          <div className="tech-level">
                            <span className="level-text">Advanced</span>
                          </div>
                        </div>
                        <div className="tech-content">
                          <h3>{tech}</h3>
                          <div className="tech-progress">
                            <div className="progress-bar">
                              <div className="progress-fill" style={{width: '85%'}}></div>
                            </div>
                            <span className="progress-text">85%</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="tech-summary">
                <div className="summary-header">
                  <h3>📊 Technical Summary</h3>
                </div>
                <div className="tech-metrics">
                  <div className="metric-item">
                    <span className="metric-number">{project.technologies.length}</span>
                    <span className="metric-label">Technologies</span>
                  </div>
                  <div className="metric-item">
                    <span className="metric-number">100%</span>
                    <span className="metric-label">Modern Stack</span>
                  </div>
                  <div className="metric-item">
                    <span className="metric-number">A+</span>
                    <span className="metric-label">Code Quality</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={`project-detail-container-new ${isLoaded ? 'loaded' : ''}`}>
      {/* Header with navigation */}
      <div className={`project-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-content">
          <Link to="/projects" className="back-button">
            <span className="back-icon">←</span>
            <span>Back to Projects</span>
          </Link>
          <div className="project-breadcrumb">
            <span>Projects</span>
            <span className="breadcrumb-separator">/</span>
            <span className="current-project">{project.title}</span>
          </div>
          <div className="header-actions">
            <button className="share-button" onClick={() => navigator.clipboard.writeText(window.location.href)}>
              <span className="share-icon">🔗</span>
              <span>Share</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div className="project-main">
        <div className="project-sidebar">
          <div className="sidebar-content">
            <div className="project-info-card">
              <div className="project-image-sidebar">
                <img src={project.image} alt={project.title} />
              </div>
              <h3 className="sidebar-title">{project.title}</h3>
              <p className="sidebar-description">{project.description}</p>
              
              <div className="project-stats">
                <div className="stat-item">
                  <span className="stat-number">{project.technologies.length}</span>
                  <span className="stat-label">Technologies</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">{project.features.length}</span>
                  <span className="stat-label">Features</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Complete</span>
                </div>
              </div>
            </div>

            <div className="tab-navigation">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                  title={tab.description}
                >
                  <span className="tab-icon">{tab.icon}</span>
                  <div className="tab-content">
                    <span className="tab-label">{tab.label}</span>
                    <span className="tab-description">{tab.description}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="project-content">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
}