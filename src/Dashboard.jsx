import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard({ setIsAuthenticated }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user"); // Clear session
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {localStorage.getItem("user")}!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;




