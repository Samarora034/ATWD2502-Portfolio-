import React from 'react';
import '../styles/Hero.css';

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Welcome to My Portfolio</h1>
        <p>I'm a web developer with a passion for creating amazing experiences.</p>
        <button className="cta-btn" onClick={() => window.scrollTo(0, document.body.scrollHeight)}>
          View My Work
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
