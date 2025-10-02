import React from "react";
import { useNavigate } from "react-router-dom";

export default function Services() {
  const navigate = useNavigate();
  
  // Services data array containing all service offerings
  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Custom website development using modern technologies like React, HTML5, CSS3, and JavaScript.",
      image: "https://via.placeholder.com/300x200/74ebd5/ffffff?text=Web+Development",
      features: ["Responsive Design", "SEO Optimization", "Performance Optimization", "Cross-browser Compatibility"]
    },
    {
      id: 2,
      title: "Frontend Development",
      description: "Creating interactive and engaging user interfaces with React, Vue.js, and modern CSS frameworks.",
      image: "https://via.placeholder.com/300x200/9face6/ffffff?text=Frontend+Dev",
      features: ["React Applications", "Component Architecture", "State Management", "User Experience Design"]
    },
    {
      id: 3,
      title: "Mobile App Development",
      description: "Building mobile applications using React Native for cross-platform compatibility.",
      image: "https://via.placeholder.com/300x200/2b2d42/ffffff?text=Mobile+Apps",
      features: ["React Native", "iOS & Android", "App Store Deployment", "Performance Optimization"]
    },
    {
      id: 4,
      title: "General Programming",
      description: "Custom software solutions and automation scripts using various programming languages.",
      image: "https://via.placeholder.com/300x200/ff6b6b/ffffff?text=Programming",
      features: ["JavaScript", "Python", "Node.js", "API Development"]
    }
  ];

  return (
    <div className="services-container">
      <div className="services-content">
        <h1 className="page-title">Services I Offer</h1>
        <p className="services-intro">
          I provide comprehensive software development services to help bring your ideas to life.
        </p>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>
              
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                
                <div className="service-features">
                  <h4>Key Features:</h4>
                  <ul className="features-list">
                    {service.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="services-cta">
          <h3>Ready to Start Your Project?</h3>
          <p>Let's discuss how I can help bring your vision to life.</p>
          <button className="cta-button" onClick={() => navigate('/contact')}>
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
}
