import React from "react";
import { Link, useParams } from "react-router-dom";

function UserProfile() {
  const { id } = useParams(); // Get dynamic parameter from URL

  return (
    <div className="d-flex justify-content-center">
      <h1>User Profile</h1>
      <p>Displaying data for user with ID: {id}</p> 
      <Link to="/">Back</Link>
    </div>
  );
}

export default UserProfile;
