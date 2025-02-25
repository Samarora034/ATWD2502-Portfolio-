import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "../src/pages/Home";
import Aboutme from "../src/pages/Aboutme";
import ProjectsSection from "../src/pages/ProjectsSection";
import Contactme from "../src/pages/Contactme";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="main-body">
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="aboutme">
        <Aboutme />
      </section>
      <section id="projects">
        <ProjectsSection />
      </section>
      <section id="contactme">
        <Contactme />
      </section>
      <Footer />
    </div>
  );
}

export default App;
