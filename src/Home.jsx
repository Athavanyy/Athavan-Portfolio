import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  // Handle navigation to About page
  const handleLearnMore = () => {
    navigate("/about");
  };

  // Handle navigation to Projects page
  const handleViewProjects = () => {
    navigate("/projects");
  };

  return (
    <div className="home-container">
      <div className="home-content">
        {/* Welcome Section */}
        <div className="welcome-section">
          <h1 className="welcome-title">
            Welcome to <span className="highlight">Athavan's Portfolio</span>
          </h1>
          <p className="welcome-subtitle">
            A showcase of my projects, skills, and journey as a software engineer.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="mission-section">
          <h2>My Mission</h2>
          <p className="mission-text">
            To create innovative digital solutions that make a positive impact on people's lives. 
            I am passionate about developing clean, efficient code and building user-friendly applications 
            that solve real-world problems. My goal is to continuously learn and grow while contributing 
            to meaningful projects that benefit society.
          </p>
        </div>

        {/* Call to Action Buttons */}
        <div className="cta-section">
          <button className="cta-button" onClick={handleLearnMore}>
            Learn More About Me
          </button>
          <button className="cta-button secondary" onClick={handleViewProjects}>
            View My Projects
          </button>
        </div>

        {/* Quick Stats */}
        <div className="stats-section">
          <div className="stat-item">
            <h3>3+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat-item">
            <h3>2+</h3>
            <p>Years Learning</p>
          </div>
          <div className="stat-item">
            <h3>5+</h3>
            <p>Technologies</p>
          </div>
        </div>
      </div>
    </div>
  );
}
