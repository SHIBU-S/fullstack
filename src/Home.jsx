import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="d-flex justify-content-center">
      <h1>Home Page</h1>
      <p>Select a user:</p>
      <ul>
        <li><Link to="/user/1">User 1</Link></li>
        <li><Link to="/user/2">User 2</Link></li>
      </ul>
    </div>
  );
}

export default Home;
