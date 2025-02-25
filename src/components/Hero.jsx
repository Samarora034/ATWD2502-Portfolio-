import React from "react";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Welcome to My Portfolio</h1>
        <p>
          I'm a web developer with a passion for creating amazing experiences.
        </p>
        <button
          className="cta-btn"
          onClick={() =>
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: "smooth",
            })
          }>
          View My Work
        </button>
        <div className="scroll-indicator">↓</div>
      </div>
    </div>
  );
};

export default Hero;
