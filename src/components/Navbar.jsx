import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar-section ${scrolled ? "scrolled" : ""}`}>
      <a href="#home">Home</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#about">About me</a>
      <a href="#contact">Contact</a>
    </nav>
  );
};

export default Navbar;
