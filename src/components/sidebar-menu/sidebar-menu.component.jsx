import React from "react";
// import { UserHeader } from "./sidebar-menu-header";
import { ItemData } from "./item-data";
import { SidebarItem } from "./item";
import { SidebarContainer, ItemsContainer } from "./sidebar-menu.styles";
export const HamburgerSideBar = ({ onSiginClick, onClick, ...otherStyles }) => (
  <SidebarContainer style={{ ...otherStyles }}>
    {/* <UserHeader onSiginClick={onSiginClick} /> */}
    <ItemsContainer>
      {ItemData.map((item, index) => {
        return <SidebarItem onClick={onClick} key={index} itemData={item} />;
      })}
    </ItemsContainer>
  </SidebarContainer>
);
