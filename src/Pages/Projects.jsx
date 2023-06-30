import React, { useState } from "react";
import { motion } from "framer-motion";
import { projectText, projectData } from "../Db/Data";
import "../Styles/Projects.css";
import logo from "../assets/Projects.png";
import Trigger from "react-scroll-trigger";

export default function Projects() {
  const [animationPlayed, setAnimationPlayed] = useState(false);
  const [projectsAnimationPlayed, setProjectsAnimationPlayed] = useState(false);
  const [clickedProject, setClickedProject] = useState(null);

  const onEnterViewport = () => {
    if (!animationPlayed) {
      setAnimationPlayed(true);
    }
  };

  const onProjectsEnterViewport = () => {
    if (!projectsAnimationPlayed) {
      setProjectsAnimationPlayed(true);
      setClickedProject(null); // Set the clicked project to trigger animation
    }
  };

  const variants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  const transition = {
    duration: 0.7,
  };

  return (
    <>
      <div className="Project-page">
        <div className="left-side">
          <Trigger onEnter={onEnterViewport}>
            <motion.h1
              initial="initial"
              animate={animationPlayed ? "animate" : "initial"}
              variants={variants}
              transition={transition}
            >
              {projectText.title}
            </motion.h1>
            <motion.p
              initial="initial"
              animate={animationPlayed ? "animate" : "initial"}
              variants={variants}
              transition={transition}
            >
              {projectText.text}
            </motion.p>
          </Trigger>
        </div>
        <div className="right-side">
          <Trigger onEnter={onEnterViewport}>
            <motion.img
              className="img-project"
              src={logo}
              alt="undraw-Portfolio-re-f5kc"
              border="0"
              initial="initial"
              animate={animationPlayed ? "animate" : "initial"}
              variants={variants}
              transition={transition}
            />
          </Trigger>
        </div>
      </div>
      <Trigger onEnter={onProjectsEnterViewport}>
        <motion.div
          className="project-container"
          initial="initial"
          animate={projectsAnimationPlayed ? "animate" : "initial"}
          variants={variants}
          transition={transition}
        >
          <h2>My Projects</h2>
          <div className="project-card-row">
            {projectData.map((project, index) => (
              <div
                className={`project-card ${
                  clickedProject === index ? "clicked" : ""
                }`}
                key={index}
                onClick={() => {
                  if (clickedProject === index) {
                    setClickedProject(null); // Close the clicked project
                  } else {
                    setClickedProject(index); // Open the clicked project
                  }
                }}
              >
                <img src={project.image} alt={project.title} />
                <div className="project-info">
                  <h3>{project.title}</h3>
                  {clickedProject === index && (
                    <div>
                      <p className="project-description">{project.text}</p>
                      <p className="project-link">
                        <strong>Link:</strong>{" "}
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {project.link}
                        </a>
                      </p>
                      <p className="project-technologies">
                        <strong>Technologies:</strong>{" "}
                        {project.technologies.join(", ")}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </Trigger>
    </>
  );
}
