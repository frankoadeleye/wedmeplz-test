import React from "react";
import { ItemData } from "./item-data";
import { SidebarItem } from "./item";
import { SidebarContainer, ItemsContainer } from "./sidebar-menu.styles";
export const HamburgerSideBar = ({ onClick, ...otherStyles }) => (
  <SidebarContainer style={{ ...otherStyles }}>
    <ItemsContainer>
      {ItemData.map((item, index) => {
        return <SidebarItem onClick={onClick} key={index} itemData={item} />;
      })}
    </ItemsContainer>
  </SidebarContainer>
);
