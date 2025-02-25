import React from "react";
import profileImage from "../assets/profile.jpg";
import "../styles/Profile.css";

const Profile = () => {
  return (
    <div className="profile">
      <img src={profileImage} alt="profile" className="profile-image" />
      <div className="profile-info">
        <h2>Saksham Midha</h2>
        <p>
          A third-year CSE student with a passion for web development, skilled
          in building responsive and user-friendly web applications. Proficient
          in Three.js for interactive 3D experiences and strong in data
          structures and algorithms.
        </p>
      </div>
    </div>
  );
};

export default Profile;
