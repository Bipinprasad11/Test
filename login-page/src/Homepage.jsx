import React from 'react';
import { useNavigate } from 'react-router-dom'

function Homepage() {
    const navigate = useNavigate();
    const handleLogin = () => {
    navigate('/login');
  };

  const handleSignup = () => {
    navigate("/signup")
  };

  return (
    <>
      <div className="homepage-container">
        <div className="homepage-card">
          <h1 className="homepage-title">Welcome to Our Platform</h1>
          <p className="homepage-description"> 
            Get started today and unlock amazing features.
          </p>
          <div className="button-container">
            <button onClick={handleLogin} className="btn btn-login">
              Login
            </button>
            <button onClick={handleSignup} className="btn btn-signup">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Homepage;
