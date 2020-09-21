import React from "react";
import { NavbarBlock } from "./navbar.styles";
import { Logo } from "../logo/logo.component";
import { NavbarItems } from "../navbar-items/navbar-items.component";
import { StyledLink } from "../navbar-items/navbar-items.styles";
import { CustomButton } from "../custom-button/custom-button.component";
import { SearchIcon } from "../search-icon/search-icon.componnent";

export function Navbar({ children, showGenDropDown, hideGenDropdown }) {
  return (
    <NavbarBlock>
      <Logo />
      <NavbarItems
        onMouseEnter={showGenDropDown}
        onMouseLeave={hideGenDropdown}
      >
        {children}
      </NavbarItems>
      <SearchIcon />
      <StyledLink to="/signin">
        <CustomButton text="log in" />
      </StyledLink>
    </NavbarBlock>
  );
}
