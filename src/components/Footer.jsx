import React from "react";
import SocialMediaLinks from "./SocialMediaLinks";
import Testimonial from "./Testimonials";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <SocialMediaLinks />
        <Testimonial />
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
