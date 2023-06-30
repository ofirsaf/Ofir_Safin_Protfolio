import React from "react";

export default function MyImage({ logo }) {
  return (
    <div className="about-image">
      <img src={logo} alt="Ofir Safin" />
    </div>
  );
}
