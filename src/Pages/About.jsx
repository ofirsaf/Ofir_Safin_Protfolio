import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "../Styles/About.css";
import logo from "../assets/Ofir_Img.png";
import factLogo from "../assets/facts.png";
import educationLogo from "../assets/education.png";
import DiplomaImage1 from "../assets/DiplomaImage1.png";
import DiplomImage2 from "../assets/DiplomaImage2.png";
import { AboutData } from "../Db/Data";
import { RandomFacts } from "../Db/Data";
import Trigger from "react-scroll-trigger";
import Skills from "../Components/Skills";
import { educationData } from "../Db/Data";
import typingSound from "../assets/typingSound.mp3";

import Typed from "typed.js";

export default function About() {
  const typeTarget = useRef(null);

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
    duration: 1,
  };

  const [visible, setVisible] = useState(false);
  const [animationPlayed, setAnimationPlayed] = useState(false);

  const onEnterViewport = () => {
    if (!animationPlayed) {
      setVisible(true);
      setAnimationPlayed(true);
    }
  };
  useEffect(() => {
    const typing = new Audio(typingSound);
    typing.loop = true;

    const typed = new Typed(typeTarget.current, {
      strings: [AboutData.text],
      typeSpeed: 8,
      showCursor: false,
      preStringTyped: () => {
        typing.play();
      },
      onComplete: () => {
        typing.pause();
        typing.currentTime = 0;
      },
    });

    return () => {
      typed.destroy();
      typing.pause();
    };
  }, []);

  const [skillsVisible, setSkillsVisible] = useState(false);
  const [skillsAnimationPlayed, setSkillsAnimationPlayed] = useState(false);

  const onEnterSkillsViewport = () => {
    if (!skillsAnimationPlayed) {
      setSkillsVisible(true);
      setSkillsAnimationPlayed(true);
    }
  };

  const [educationVisible, setEducationVisible] = useState(false);
  const [educationAnimationPlayed, setEducationAnimationPlayed] =
    useState(false);

  const onEnterEducationViewport = () => {
    if (!educationAnimationPlayed) {
      setEducationVisible(true);
      setEducationAnimationPlayed(true);
    }
  };

  return (
    <>
      <div className="about-page">
        <motion.div
          className="about-content"
          initial="initial"
          animate="animate"
          variants={variants}
          transition={transition}
        >
          <div className="about-text">
            <div className="about-title">{AboutData.title}</div>
            <p ref={typeTarget}></p>
          </div>
          <div className="about-image">
            <img src={logo} alt="Ofir Safin" />
          </div>
        </motion.div>
      </div>
      <Trigger onEnter={onEnterViewport}>
        <motion.div
          className="about-facts"
          initial={{ opacity: 0 }}
          animate={{ opacity: visible ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <div className="facts-image">
            <img className="factLogo-img" src={factLogo} alt="Facts Image" />
          </div>
          <div className="facts-content">
            <h1>Random Facts</h1>
            {RandomFacts.map((fact, index) => (
              <p key={fact.id}>{fact.title}</p>
            ))}
          </div>
        </motion.div>
      </Trigger>
      <Trigger onEnter={onEnterSkillsViewport}>
        <motion.div
          className="skills-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: skillsVisible ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <Skills />
        </motion.div>
      </Trigger>
      <Trigger onEnter={onEnterEducationViewport}>
        {" "}
        <motion.div
          className="education-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: educationVisible ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <img
            className="education-image"
            src={educationLogo}
            alt="Ofir Safin"
          />
          <div className="education-with-img">
            <h1>Education</h1>
            <ul>
              {educationData.map((education, index) => (
                <li key={index}>
                  <p>{education.title}</p>
                </li>
              ))}
            </ul>

            <div className="diploma-cards">
              <div className="diploma-card">
                <a
                  href={DiplomaImage1}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={DiplomaImage1} alt="Diploma 1" />
                </a>
              </div>
              <div className="diploma-card">
                <a
                  href={DiplomImage2}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={DiplomImage2} alt="Diploma 2" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </Trigger>
    </>
  );
}
