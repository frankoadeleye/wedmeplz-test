import React from "react";
import { IconContainer } from "./sidebar-menu.styles";

export const SidebarItem = ({ itemData, onClick }) => {
  const { icon, name, route } = itemData;
  return (
    <IconContainer
      to={route}
      exact={true}
      activeClassName="is-active"
      onClick={onClick}
    >
      <div className="icon__container">{icon}</div>
      <div className="link">{name}</div>
    </IconContainer>
  );
};
