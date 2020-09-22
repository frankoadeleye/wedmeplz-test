import React from "react";
import { SidebarContainer, ItemsContainer } from "./sidebar-menu.styles";

export const HamburgerSideBar = ({ onSiginClick, onClick, ...otherStyles }) => (
  <SidebarContainer style={{ ...otherStyles }}>
    <ItemsContainer></ItemsContainer>
  </SidebarContainer>
);
