import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">magnifico</div>

      <ul className="navbar-menu">
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
      </ul>

      <div className="navbar-right">
        <a href="#" className="login">
          Log In
        </a>
        <button className="signup-btn">
          Sign Up Free <span className="arrow-right">→</span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
