import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Icon({ id, link, icon, color }) {
  return (
    <a
      key={id}
      href={link}
      target="_blank"
      className="icon"
      rel="noopener noreferrer"
      style={{ color: color }}
    >
      <FontAwesomeIcon icon={icon} />
    </a>
  );
}
