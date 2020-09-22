import React, { useState, useEffect } from "react";
import { Navbar } from "../navbar/navbar.component";
import { LayoutBlock } from "./layout.styles";
import {
  VenueDropDown,
  VendorsDropDown,
  PhotosDropDown,
  RealWedDropDown,
  BlogDropDown,
  ShopDropDown,
} from "../dropdowns/dropdowns";
import NavbarItem from "../navbar-item/navbar-item.component";
import Sidebar from "react-sidebar";
import { HamburgerSideBar } from "../sidebar-menu/sidebar-menu.component";
import { SidebarIcon } from "../sidebar-icon/sidebar-icon.component";
import { sidebarStyles } from "../sidebar-styles";

const mql = window.matchMedia(`(min-width: 777px)`);

export function Layout({ children }) {
  /* configuring hamburger sidebar menu to layout__________________ */
  const [sidebarOpen, setSidebarState] = useState(false);
  const [sidebarDocked, setSidebarDocked] = useState(mql.matches);
  useEffect(() => {
    mql.addEventListener("resize", mediaQueryChanged);

    /*for cleanup, that is for unmounting: */
    return mql.removeEventListener("resize", mediaQueryChanged);
  }, []);
  const mediaQueryChanged = () => {
    setSidebarDocked(mql.matches);
    setSidebarState(false);
  };
  const onSetSidebarOpen = (open) => {
    setSidebarState(open);
  };
  /* _______________________________________________________________ */

  const [generalSeen, setGen] = useState(false);
  const [venueSeen, setVenue] = useState(false);
  const [vendorSeen, setVendorSeen] = useState(false);
  const [photosSeen, setPhotos] = useState(false);
  const [realWedSeen, setRealWed] = useState(false);
  const [blogSeen, setBlog] = useState(false);
  const [shopSeen, setShop] = useState(false);

  const handleGenShow = () => {
    setGen(true);
  };
  const handleGenHide = () => {
    setGen(false);
  };
  const handleVenueShow = () => {
    setVenue(true);
  };
  const handleVenueHide = () => {
    setVenue(false);
  };

  const handleVendorShow = () => {
    setVendorSeen(true);
  };
  const handleVendorHide = () => {
    setVendorSeen(false);
  };

  const handlePhotoShow = () => {
    setPhotos(true);
  };
  const handlePhotoHide = () => {
    setPhotos(false);
  };

  const handleRealWedShow = () => {
    setRealWed(true);
  };
  const handleRealWedHide = () => {
    setRealWed(false);
  };

  const handleBlogShow = () => {
    setBlog(true);
  };
  const handleBlogHide = () => {
    setBlog(false);
  };

  const handleShopShow = () => {
    setShop(true);
  };
  const handleShopHide = () => {
    setShop(false);
  };
  return (
    <LayoutBlock>
      <Navbar
        showGenDropDown={true && handleGenShow}
        hideGenDropdown={true && handleGenHide}
      >
        <NavbarItem
          showDropDown={true && handleVenueShow}
          hideDropDown={true && handleVenueHide}
          route="/venues"
          name="venues"
        />
        <NavbarItem
          showDropDown={true && handleVendorShow}
          hideDropDown={true && handleVendorHide}
          route="/vendors"
          name="Vendors"
        />
        <NavbarItem
          showDropDown={true && handlePhotoShow}
          hideDropDown={true && handlePhotoHide}
          route="/photos"
          name="Photos"
        />
        <NavbarItem
          showDropDown={true && handleRealWedShow}
          hideDropDown={true && handleRealWedHide}
          route="/real-wedding"
          name="Real Wedding"
        />
        <NavbarItem
          showDropDown={true && handleBlogShow}
          hideDropDown={true && handleBlogHide}
          route="/blog"
          name="Blog"
        />
        <NavbarItem
          grow_width=""
          route="/intermediate-wedding"
          name="Intermediate Wedding"
        />
        <NavbarItem
          showDropDown={true && handleShopShow}
          hideDropDown={true && handleShopHide}
          route="/shop"
          name="Shop"
        />
      </Navbar>
      {/* ___________________________imported sidebar __________________ */}
      <Sidebar
        sidebar={<HamburgerSideBar onClick={() => setSidebarState(false)} />}
        open={sidebarOpen}
        onSetOpen={onSetSidebarOpen}
        styles={{ ...sidebarStyles }}
        touchHandleWidth={40}
        shadow={true}
      >
        <SidebarIcon
          show={sidebarOpen}
          showShowSidebar={() => onSetSidebarOpen(true)}
        />
      </Sidebar>
      {/* ________________________________________________________________*/}
      {generalSeen && <VenueDropDown />}
      {venueSeen && <VenueDropDown />}
      {vendorSeen && <VendorsDropDown />}
      {photosSeen && <PhotosDropDown />}
      {realWedSeen && <RealWedDropDown />}
      {blogSeen && <BlogDropDown />}
      {shopSeen && <ShopDropDown />}
      {children}
    </LayoutBlock>
  );
}
