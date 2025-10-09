import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignup = (e) => {
    e.preventDefault();
    setError("");

    const raw = localStorage.getItem("userData");
    let existingUsers = [];

    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) existingUsers = parsed;
        else if (parsed && typeof parsed === "object") existingUsers = [parsed];
      } catch (err) {
        console.warn("Could not parse userData from localStorage, resetting it.", err);
      }
    }

    const emailToCheck = formData.email.trim().toLowerCase();
    if (!emailToCheck) {
      setError("Please enter an email.");
      return;
    }

    const emailExists = existingUsers.some(
      (user) => user.email.trim().toLowerCase() === emailToCheck
    );

    if (emailExists) {
      setError("Email already exists! Please login instead.");
      return;
    }

    const newUser = {
      firstname: formData.firstname.trim(),
      lastname: formData.lastname.trim(),
      email: formData.email.trim(),
      password: formData.password,
    };

    const updatedUsers = [...existingUsers, newUser];
    localStorage.setItem("userData", JSON.stringify(updatedUsers));

    Cookies.set("isLoggedIn", "true", { expires: 1 });
    Cookies.set("username", newUser.firstname, { expires: 1 });

    setFormData({ firstname: "", lastname: "", email: "", password: "" });
    navigate("/user");
  };

  return (
    <div className="container">
      <div className="container-card">
        <h1>Sign Up</h1>
        <form className="signupForm" onSubmit={handleSignup}>
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            required
            value={formData.firstname}
            onChange={handleChange}
          />

          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            required
            value={formData.lastname}
            onChange={handleChange}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={formData.password}
            onChange={handleChange}
          />

          {error && <p style={{ color: "red" }}>{error}</p>}

          <button type="submit">Sign Up</button>
        </form>

        <div className="login-text">
          Already have an account? &nbsp;
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
