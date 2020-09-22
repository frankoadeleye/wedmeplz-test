import React from "react";
import { SidebarIconContainer, StyledHamburger } from "./sidebar-icon.style";
import { Svg } from "../../assets/svg";

const { CompanyLogo } = Svg;

export const SidebarIcon = ({ showShowSidebar, show }) => {
  return (
    <SidebarIconContainer style={{ display: show ? "none" : "" }}>
      <div className="icon-block">
        <div className="icon-wrapper" onClick={showShowSidebar}>
          <StyledHamburger fontSize="large" />
        </div>
      </div>
      <div className="company-logo">
        <img src={CompanyLogo} alt="" />
      </div>
    </SidebarIconContainer>
  );
};
