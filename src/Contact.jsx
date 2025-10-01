import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  // State management for form data
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const navigate = useNavigate();

  // Function to update form values as user types
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // Function to handle form submission
  function handleSubmit(e) {
    e.preventDefault();

    // Basic form validation
    if (!form.firstName || !form.email || !form.message) {
      alert("Please fill in your first name, email, and message.");
      return;
    }

    // Save form submission to localStorage (simulating backend storage)
    const submissions = JSON.parse(localStorage.getItem("contacts") || "[]");
    submissions.push({ ...form, date: new Date().toLocaleString() });
    localStorage.setItem("contacts", JSON.stringify(submissions));

    alert("Message sent successfully!");

    // Redirect back to Home page after successful submission
    navigate("/");
  }

  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1 className="page-title">Contact Me</h1>
        
        <div className="contact-main">
          {/* Contact Information Panel */}
          <div className="contact-info-panel">
            <h3>Get In Touch</h3>
            <div className="contact-details">
              <div className="contact-item">
                <strong>Email:</strong>
                <a href="mailto:athavan@example.com">athavan@example.com</a>
              </div>
              <div className="contact-item">
                <strong>Phone:</strong>
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </div>
              <div className="contact-item">
                <strong>Location:</strong>
                <span>Markham, Canada</span>
              </div>
              <div className="contact-item">
                <strong>LinkedIn:</strong>
                <a href="https://linkedin.com/in/athavan" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/athavan
                </a>
              </div>
              <div className="contact-item">
                <strong>GitHub:</strong>
                <a href="https://github.com/athavan" target="_blank" rel="noopener noreferrer">
                  github.com/athavan
                </a>
              </div>
            </div>
            
            <div className="contact-hours">
              <h4>Available Hours</h4>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Weekend: By appointment</p>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="contact-form-section">
            <h3>Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <input 
                  name="firstName" 
                  placeholder="First Name" 
                  value={form.firstName} 
                  onChange={handleChange} 
                  required 
                  className="form-input"
                />
                <input 
                  name="lastName" 
                  placeholder="Last Name" 
                  value={form.lastName} 
                  onChange={handleChange} 
                  className="form-input"
                />
              </div>
              
              <div className="form-row">
                <input 
                  name="email" 
                  placeholder="Email Address" 
                  type="email" 
                  value={form.email} 
                  onChange={handleChange} 
                  required 
                  className="form-input"
                />
                <input 
                  name="phone" 
                  placeholder="Phone Number" 
                  value={form.phone} 
                  onChange={handleChange} 
                  className="form-input"
                />
              </div>
              
              <textarea 
                name="message" 
                placeholder="Your Message" 
                rows="6" 
                value={form.message} 
                onChange={handleChange} 
                required 
                className="form-textarea"
              />
              
              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
