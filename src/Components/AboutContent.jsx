import React from "react";

export default function AboutContent({ title, text }) {
  return (
    <div className="about-text">
      <div className="about-title">{title}</div>
      <p>{text}</p>
    </div>
  );
}
