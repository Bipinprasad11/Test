import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function UserPage() {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = Cookies.get("isLoggedIn");
    const cookieName = Cookies.get("username");

    if (!loggedIn) {
      navigate("/login");
      return;
    }

    if (cookieName) {
      setUserName(cookieName);
      return;
    }

    const storedUsers = localStorage.getItem("userData");
    if (storedUsers) {
      try {
        const parsed = JSON.parse(storedUsers);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const lastUser = parsed[parsed.length - 1];
          setUserName(lastUser.firstname || "");
        }
      } catch (err) {
        console.error("Failed to parse userData from localStorage:", err);
      }
    }
  }, [navigate]);

  // const handleLogout = () => {
  //   Cookies.remove("isLoggedIn");
  //   Cookies.remove("username");
  //   navigate("/login");
  // };

  return (
    <div className="user-page">
      <h1 className="user">
        {userName ? `Welcome, ${userName}!` : "Welcome, User!"}
      </h1>
      {/* <button onClick={handleLogout}>Logout</button> */}
    </div>
  );
}

export default UserPage;
