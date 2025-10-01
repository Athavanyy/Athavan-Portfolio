import React from "react";

export default function Education() {
  // Education data array containing all educational qualifications
  const educationData = [
    {
      id: 1,
      degree: "Software Engineering Technology Diploma",
      institution: "Centennial College",
      location: "Toronto, Canada",
      startDate: "2024",
      endDate: "2027",
      status: "In Progress",
      description: "Currently pursuing a comprehensive software engineering technology diploma covering programming fundamentals, software architecture, database design, and project management."
    },
    {
      id: 2,
      degree: "High School Diploma",
      institution: "Middlefield Collegiate Institute",
      location: "Markham, Ontario",
      startDate: "2018",
      endDate: "2022",
      status: "Completed",
      description: "Graduated with honors, focusing on mathematics, science, and computer studies. Participated in programming competitions and coding clubs."
    }
  ];

  return (
    <div className="education-container">
      <div className="education-content">
        <h1 className="page-title">Education & Qualifications</h1>
        <p className="education-intro">
          My educational journey and professional qualifications that have shaped my development skills.
        </p>

        <div className="education-timeline">
          {educationData.map((education) => (
            <div key={education.id} className="education-item">
              <div className="education-header">
                <h3 className="degree-title">{education.degree}</h3>
                <span className={`status-badge ${education.status.toLowerCase().replace(' ', '-')}`}>
                  {education.status}
                </span>
              </div>
              
              <div className="education-details">
                <div className="institution-info">
                  <h4 className="institution-name">{education.institution}</h4>
                  <p className="institution-location">{education.location}</p>
                </div>
                
                <div className="education-dates">
                  <span className="date-range">
                    {education.startDate} - {education.endDate}
                  </span>
                </div>
              </div>
              
              <p className="education-description">{education.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Certifications Section */}
        <div className="certifications-section">
          <h3>Additional Certifications</h3>
          <div className="certifications-grid">
            <div className="cert-item">
              <h4>React Developer Certification</h4>
              <p>Meta - 2024</p>
            </div>
            <div className="cert-item">
              <h4>JavaScript Algorithms and Data Structures</h4>
              <p>freeCodeCamp - 2023</p>
            </div>
            <div className="cert-item">
              <h4>Responsive Web Design</h4>
              <p>freeCodeCamp - 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
