import React, { useEffect, useState } from "react";

function UserPage() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    if (!storedUser) return;

    try {
      const parsed = JSON.parse(storedUser);
      const name =
        parsed?.firstname ||
        (parsed?.firstname && parsed?.lastname
          ? `${parsed.firstname} ${parsed.lastname}`
          : "");
      setUserName(name);
    } catch (err) {
      console.error("Failed to parse userData from localStorage:", err);
    }
  }, []);

  return (
    <div>
      <h1 className="user">Welcome {userName}</h1>
    </div>
  );
}

export default UserPage;
