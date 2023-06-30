import React from "react";
import { Link } from "react-router-dom";

const NavbarSection = ({ id, name, link, isActive, onClick }) => {
  return (
    <li key={id}>
      <Link
        to={link}
        onClick={onClick}
        style={{ color: isActive ? "grey" : "white" }}
      >
        {name}
      </Link>
    </li>
  );
};

export default NavbarSection;
