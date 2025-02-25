import React from "react";
import SocialMediaLinks from "./SocialMediaLinks";
import Testimonial from "./Testimonials";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <Testimonial />
        <SocialMediaLinks />
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
        <p>Built with React, CSS, and ❤️</p>
        <p>
          Designed by 
          <a href="https://github.com/Samarora034"> Saksham Midha </a>
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="back-to-top">
          ↑ Back to Top
        </button>
      </div>
    </footer>
  );
};

export default Footer;
