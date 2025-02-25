import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaCube } from "react-icons/fa";
import "../styles/Skills.css";

const Skills = () => {
  return (
    <div className="skills">
      <h2>Skills</h2>
      <div className="skill-list">
        <div className="skill">
          <FaHtml5 size={30} />
          <div className="progress-bar">
            <div className="progress" style={{ width: "80%" }}></div>
          </div>
          <p>HTML5</p>
        </div>
        <div className="skill">
          <FaCss3Alt size={30} />
          <div className="progress-bar">
            <div className="progress" style={{ width: "80%" }}></div>
          </div>
          <p>CSS3</p>
        </div>
        <div className="skill">
          <FaReact size={30} />
          <div className="progress-bar">
            <div className="progress" style={{ width: "70%" }}></div>
          </div>
          <p>React</p>
        </div>
        <div className="skill">
          <FaCube size={30} />
          <div className="progress-bar">
            <div className="progress" style={{ width: "60%" }}></div>
          </div>
          <p>Three.js</p>
        </div>
        <div className="skill">
          <FaNodeJs size={30} />
          <div className="progress-bar">
            <div className="progress" style={{ width: "40%" }}></div>
          </div>
          <p>Node.js</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;

