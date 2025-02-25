import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import "../styles/SocialMediaLinks.css";

const SocialMediaLinks = () => {
  return (
    <div className="social-media-links">
      <h2>Connect with Me</h2>
      <div className="icons">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub">
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter">
          <FaTwitter />
        </a>
        <a
          href="mailto:yourname@example.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email">
          <FaEnvelope />
        </a>
      </div>
    </div>
  );
};

export default SocialMediaLinks;
