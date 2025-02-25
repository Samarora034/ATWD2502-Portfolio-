import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";

const pages = [
  { name: "Home", link: "#home" },
  { name: "About me", link: "#aboutme" },
  { name: "Projects", link: "#projects" },
  { name: "Contact me", link: "#contactme" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activePage, setActivePage] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Dynamically update active page based on scroll position
      pages.forEach((page) => {
        const section = document.querySelector(page.link);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActivePage(page.link);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e, link) => {
    e.preventDefault();
    const target = document.querySelector(link);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setActivePage(link);
    } else {
      console.warn(`Element not found: ${link}`);
    }
  };

  return (
    <nav className={`navbar-section ${scrolled ? "scrolled" : ""}`}>
      {pages.map((page) => (
        <a
          key={page.name}
          href={page.link}
          onClick={(e) => handleSmoothScroll(e, page.link)}
          className={activePage === page.link ? "active" : ""}>
          {page.name}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
