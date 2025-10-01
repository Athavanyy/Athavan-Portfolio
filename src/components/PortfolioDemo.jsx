import React, { useState } from 'react';

export default function PortfolioDemo() {
  const [activeSection, setActiveSection] = useState('about');

  const sections = [
    { id: 'about', title: 'About Me', icon: '👤' },
    { id: 'projects', title: 'Projects', icon: '💼' },
    { id: 'skills', title: 'Skills', icon: '🛠️' },
    { id: 'contact', title: 'Contact', icon: '📧' }
  ];

  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Node.js', level: 70 },
    { name: 'Git', level: 80 },
    { name: 'Responsive Design', level: 90 }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'about':
        return (
          <div className="portfolio-demo-content">
            <h3>About Athavan Yokanathan</h3>
            <p>
              I am a passionate software engineering student with a strong foundation in 
              modern web development technologies. My journey in programming began with a 
              curiosity about how digital applications work, and has evolved into a deep 
              passion for creating efficient, user-friendly solutions.
            </p>
            <div className="demo-highlight">
              <strong>🎯 Mission:</strong> Creating efficient, user-friendly solutions
            </div>
          </div>
        );
      
      case 'projects':
        return (
          <div className="portfolio-demo-content">
            <h3>Featured Projects</h3>
            <div className="demo-projects">
              <div className="demo-project-card">
                <h4>📱 Interactive Calculator</h4>
                <p>Fully functional calculator with modern UI</p>
              </div>
              <div className="demo-project-card">
                <h4>📝 To-Do List App</h4>
                <p>Task management with local storage</p>
              </div>
              <div className="demo-project-card">
                <h4>🌐 Portfolio Website</h4>
                <p>Responsive personal portfolio</p>
              </div>
            </div>
          </div>
        );
      
      case 'skills':
        return (
          <div className="portfolio-demo-content">
            <h3>Technical Skills</h3>
            <div className="demo-skills">
              {skills.map((skill, index) => (
                <div key={index} className="demo-skill">
                  <div className="skill-name">{skill.name}</div>
                  <div className="skill-bar">
                    <div 
                      className="skill-level" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div className="skill-percentage">{skill.level}%</div>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'contact':
        return (
          <div className="portfolio-demo-content">
            <h3>Get In Touch</h3>
            <div className="demo-contact-info">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <span>athavan.yokanathan@email.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">💼</span>
                <span>linkedin.com/in/athavan-yokanathan</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🐙</span>
                <span>github.com/athavan-yokanathan</span>
              </div>
            </div>
            <div className="demo-note">
              <em>This is a demo - actual contact info would be displayed here</em>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="portfolio-demo">
      <div className="portfolio-demo-header">
        <h3>Portfolio Website Demo</h3>
        <p>Interactive navigation simulation</p>
      </div>
      
      <div className="portfolio-demo-nav">
        {sections.map(section => (
          <button
            key={section.id}
            className={`portfolio-demo-nav-btn ${activeSection === section.id ? 'active' : ''}`}
            onClick={() => setActiveSection(section.id)}
          >
            <span className="nav-icon">{section.icon}</span>
            <span className="nav-title">{section.title}</span>
          </button>
        ))}
      </div>
      
      <div className="portfolio-demo-main">
        {renderContent()}
      </div>
      
      <div className="portfolio-demo-features">
        <h4>Key Features Demonstrated:</h4>
        <ul>
          <li>✅ Responsive design that adapts to different screen sizes</li>
          <li>✅ Smooth navigation between sections</li>
          <li>✅ Interactive elements with hover effects</li>
          <li>✅ Modern, clean UI/UX design</li>
          <li>✅ Fast loading and optimized performance</li>
        </ul>
      </div>
    </div>
  );
}

