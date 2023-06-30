import React, { useState } from "react";
import { motion } from "framer-motion";
import MyImage from "../Components/MyImage";
import logo from "../assets/Ofir_Img.png";
import { iconData } from "../Db/Data";
import "../Styles/Contact.css";
import Icon from "../Components/Icon";
import Trigger from "react-scroll-trigger";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  const [visible, setVisible] = useState(false);
  const [animationPlayed, setAnimationPlayed] = useState(false);
  const [formAnimationPlayed, setFormAnimationPlayed] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const onEnterViewport = () => {
    if (!animationPlayed) {
      setVisible(true);
      setAnimationPlayed(true);
    }
  };

  const onEnterFormViewport = () => {
    if (!formAnimationPlayed) {
      setFormAnimationPlayed(true);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsButtonClicked(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_APP_SERVICE_ID,
        import.meta.env.VITE_APP_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_APP_USER_ID
      )
      .then(
        (result) => {
          toast.success("Email sent successfully!");
          setIsButtonClicked(false);
        },
        (error) => {
          toast.error("Error sending email...");
          setIsButtonClicked(false);
        }
      );

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <div className="contact-page">
        <Trigger onEnter={onEnterViewport}>
          <motion.div
            className="about-content"
            initial="initial"
            animate="animate"
            variants={variants}
            transition={transition}
          >
            <div className="flex-container">
              <div className="left-half">
                <h1>Contact</h1>
                <h4>Get in touch with me via social media or email</h4>
                <div className="icons">
                  {iconData.map((icon) => (
                    <Icon
                      key={icon.id}
                      link={icon.link}
                      icon={icon.icon}
                      color={icon.color}
                    />
                  ))}
                </div>
              </div>
              <div className="right-half">
                <MyImage logo={logo} />
              </div>
            </div>
          </motion.div>
        </Trigger>
      </div>
      <div className="form-email">
        <Trigger onEnter={onEnterFormViewport}>
          <motion.form
            onSubmit={handleSubmit}
            initial="initial"
            animate={formAnimationPlayed ? "animate" : "initial"}
            variants={variants}
            transition={transition}
          >
            <h2>Send me an email</h2>
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="email"
              name="to_name"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <textarea
              name="message"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <button
              type="submit"
              className={isButtonClicked ? "celebration" : ""}
            >
              {isButtonClicked ? (
                <FontAwesomeIcon icon={faSpinner} spin />
              ) : (
                "Submit"
              )}
            </button>
          </motion.form>
        </Trigger>
      </div>
    </>
  );
}
