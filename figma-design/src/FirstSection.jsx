import React from "react";

function FirstSection() {
  return (
    <div className="container mt-5 mb-5 border-bottom ">
      <div className="row p-3">
        <div className="col-6 p-3 mt-5">
          <h3 className="fw-bold fs-1">
            Team projects,
            <br />
            done well
          </h3>
          <p className="text-muted mt-3">
            The only platform that gives your team all the tools needed to work
            <br />
            together on their awesome projects.
          </p>
          <div className="container mt-3">
            <div className="row">
              <input className="col-8 input" placeholder="Enter your email" />
              <div className="col-1"></div>
              <button className="col-3 signup-btn">
                Sign Up Free <span className="arrow-right">→</span>
              </button>
            </div>
          </div>
          <div className="mt-3 bg-light p-2">
            <img src="media/images/Logos.png" />
          </div>
        </div>
        <div className="col-6 p-">
          <img  src="media/images/Left.png"/>
        </div>
      </div>
    </div>
  );
}

export default FirstSection;
