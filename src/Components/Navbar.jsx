import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../Styles/Navbar.css";
import logo from "../assets/Ofir_Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NavbarSection from "./Sections";
import { navbarData } from "../Db/Data";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleSectionClick = () => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div onClick={handleMenuToggle} className="hamburger">
        <FontAwesomeIcon icon={faBars} />
      </div>
      <ul className={`nav-links ${isOpen ? "show-menu" : ""}`}>
        {navbarData.map((section) => (
          <NavbarSection
            key={section.id}
            id={section.id}
            name={section.name}
            link={section.link}
            isActive={location.pathname === section.link}
            onClick={handleSectionClick}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
