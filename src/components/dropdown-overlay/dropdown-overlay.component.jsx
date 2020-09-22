import React from "react";
import { DropDownBlock } from "./dropdown-overlay.styles";

export const DropdownOverlay = ({ sectiona, sectionb, sectionc, sectiond }) => {
  return (
    <DropDownBlock>
      <div className="overlay-section">
        <h2>{sectiona}</h2>
      </div>
      <div className="overlay-section">
        <h2>{sectionb}</h2>
      </div>
      <div className="overlay-section">
        <h2>{sectionc}</h2>
      </div>
      <div className="overlay-section">
        <h2>{sectiond}</h2>
      </div>
    </DropDownBlock>
  );
};
