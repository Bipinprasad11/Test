import React, {useState} from "react";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">magnifico</div>

      <div className={`navbar-menu ${isOpen ? "open" : ""}`}>
        <li>
          Products <span className="arrow">▼</span>
        </li>
        <li>
          Solutions <span className="arrow">▼</span>
        </li>
        <li>
          Services <span className="arrow">▼</span>
        </li>
        <li>
          Help Center <span className="arrow">▼</span>
        </li>
        <li>Pricing</li>
      </div>

      <div className="navbar-right">
        <a href="#" className="login">
          Log In
        </a>
        <button className="signup-btn">
          Sign Up Free <span className="arrow-right">→</span>
        </button>
      </div>

      <div
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;
