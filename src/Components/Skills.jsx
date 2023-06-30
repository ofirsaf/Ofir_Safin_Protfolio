import React from "react";
import "../Styles/Skills.css";
import { skillsData } from "../Db/Data";
import "devicon/devicon.min.css";

export default function Skills() {
  return (
    <div className="skills-container">
      <h2>My Skills</h2>
      <div className="skills-list">
        {skillsData.map((skill, index) => (
          <span key={index} className="skill-item">
            {skill.icon}
            <p className="icon-name">{skill.name}</p>
          </span>
        ))}
      </div>
    </div>
  );
}
