import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login({ setIsAuthenticated }) {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username) {
      localStorage.setItem("user", username); 
      setIsAuthenticated(true);
      navigate("/dashboard");
    } else {
      alert("Please enter a username");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;

