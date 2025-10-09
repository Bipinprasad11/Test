import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Loginpage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    const storedUser = localStorage.getItem("userData");
    if (!storedUser) {
      setError("No user found. Please sign up first.");
      return;
    }

    try {
      const parsedUsers = JSON.parse(storedUser);

      if (!Array.isArray(parsedUsers)) {
        setError("User data is corrupted. Please sign up again.");
        return;
      }

      const foundUser = parsedUsers.find(
        (user) =>
          user.email.trim().toLowerCase() === email.trim().toLowerCase() &&
          user.password === password
      );

      if (foundUser) {
        Cookies.set("isLoggedIn", "true", { expires: 1 });
        Cookies.set("username", foundUser.firstname, { expires: 1 });
        navigate("/user");
      } else {
        setError("Invalid email or password!");
      }
    } catch (err) {
      console.error("Error reading user data:", err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="container-card">
        <h1>Login</h1>

        <form className="signupForm" onSubmit={handleLogin}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p style={{ color: "red" }}>{error}</p>}

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Loginpage;
