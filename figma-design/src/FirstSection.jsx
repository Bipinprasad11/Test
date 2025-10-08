import React from "react";

function FirstSection() {
  return (
    <div className="main-container">
  <div className="content">
    <div className="left-section">
      <h3>Team projects,<br />done well</h3>
      <p>
        The only platform that gives your team all the tools needed to work
        together on their awesome projects.
      </p>

      <div className="signup-area">
        <input type="email" placeholder="Enter your email" />
        <button>Sign Up Free <span className="arrow-right">→</span></button>
      </div>

      <div className="logos">
        <img src="media/images/Logos.png" alt="Logos" />
      </div>
    </div>

    <div className="right-section">
      <img src="media/images/Left.png" alt="Illustration" />
    </div>
  </div>
</div>
  );
}

export default FirstSection;
