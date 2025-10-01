import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="navbar">
      {/* Custom Logo - Hexagon with initials */}
      <div className="logo">
        <div className="logo-shape">
          <span className="logo-text">AP</span>
        </div>
        <span className="logo-name">Athavan Portfolio</span>
      </div>

      {/* Navigation Links */}
      <nav className="nav-links">
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/about" className="nav-link">About</NavLink>
        <NavLink to="/projects" className="nav-link">Projects</NavLink>
        <NavLink to="/education" className="nav-link">Education</NavLink>
        <NavLink to="/services" className="nav-link">Services</NavLink>
        <NavLink to="/contact" className="nav-link">Contact</NavLink>
      </nav>
    </header>
  );
}

