import React from "react";
import { FaUser } from "react-icons/fa";
import "../styles/Profile.css";

const Profile = () => {
  return (
    <div className="profile">
      <FaUser size={100} />
      <div className="profile-info">
        <h2>John Doe</h2>
        <p>
          A web developer with over 5 years of experience building web
          applications with a focus on responsive design, performance, and
          usability.
        </p>
      </div>
    </div>
  );
};

export default Profile;
