import React from "react";

export default function About() {
  // Handle resume download functionality
  const handleResumeDownload = () => {
    // Create a link element to download the resume PDF
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Path to your actual resume PDF
    link.download = 'Athavan_Yokanathan_Resume.pdf'; // Suggested filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="page-title">About Me</h1>
        
        <div className="about-main">
          {/* Profile Image Section */}
          <div className="profile-image-section">
            <img
              src="/profile-image.jpg"
              alt="Athavan Yokanathan Profile"
              className="profile-image"
            />
          </div>

          {/* About Text Section */}
          <div className="about-text-section">
            <h2 className="legal-name">Athavan Yokanathan</h2>
            
            <div className="about-description">
              <p>
                I am a passionate software engineering student with a strong foundation in 
                modern web development technologies. My journey in programming began with a 
                curiosity about how digital applications work, and has evolved into a deep 
                passion for creating efficient, user-friendly solutions.
              </p>
              
              <p>
                Currently pursuing my studies in software engineering, I have developed 
                expertise in React, JavaScript, HTML, CSS, and various other technologies. 
                I enjoy tackling complex problems and turning them into simple, beautiful 
                solutions that provide real value to users.
              </p>
              
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing 
                to open-source projects, or working on personal projects that challenge my 
                skills and expand my knowledge base. I believe in continuous learning and 
                staying up-to-date with the latest industry trends.
              </p>
            </div>

            {/* Resume Download Section */}
            <div className="resume-section">
              <button className="resume-button" onClick={handleResumeDownload}>
                Download My Resume (PDF)
              </button>
            </div>
          </div>
        </div>

        {/* Technical Skills Section */}
        <div className="skills-section">
          <h3>Technical Skills</h3>
          <div className="skills-grid">
            <div className="skill-item">React</div>
            <div className="skill-item">JavaScript</div>
            <div className="skill-item">HTML/CSS</div>
            <div className="skill-item">Node.js</div>
            <div className="skill-item">Git</div>
            <div className="skill-item">Responsive Design</div>
          </div>
        </div>
      </div>
    </div>
  );
}
