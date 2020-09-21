import React from "react";
import { NavbarItemBlock } from "./navbar-item.styles";

const NavbarItem = ({
  name,
  route,
  grow_width,
  showDropDown,
  hideDropDown,
}) => {
  return (
    <NavbarItemBlock
      to={route}
      exact={true}
      activeClassName="is-active"
      className="item"
      onMouseEnter={showDropDown}
      onMouseLeave={hideDropDown}
      grow_width={grow_width}
    >
      {name}
    </NavbarItemBlock>
  );
};

export default NavbarItem;
