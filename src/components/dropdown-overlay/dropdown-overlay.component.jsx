import React from "react";
import { DropDownBlock } from "./dropdown-overlay.styles";

export const DropdownOverlay = ({ sectiona, sectionb, sectionc, sectiond }) => {
  return (
    <DropDownBlock>
      <div className="overlay-section">{sectiona}</div>
      <div className="overlay-section">{sectionb}</div>
      <div className="overlay-section">{sectionc}</div>
      <div className="overlay-section">{sectiond}</div>
    </DropDownBlock>
  );
};
