import React from "react";
import { Navbar } from "../navbar/navbar.component";
import { LayoutBlock } from "./layout.styles";
import {
  VenueDropDown,
  VendorsDropDown,
  PhotosDropDown,
  RealWedDropDown,
  BlogDropDown,
} from "../dropdowns/dropdowns";
import NavbarItem from "../navbar-item/navbar-item.component";

export function Layout({ children }) {
  const [generalSeen, setGen] = React.useState(false);
  const [venueSeen, setVenue] = React.useState(false);
  const [vendorSeen, setVendorSeen] = React.useState(false);
  const [photosSeen, setPhotos] = React.useState(false);
  const [realWedSeen, setRealWed] = React.useState(false);
  const [blogSeen, setBlog] = React.useState(false);

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
          /* auto_width */
          grow_width=""
          route="/intermediate-wedding"
          name="Intermediate Wedding"
        />
        <NavbarItem route="/shop" name="Shop" />
      </Navbar>
      {generalSeen && <VenueDropDown />}
      {venueSeen && <VenueDropDown />}
      {vendorSeen && <VendorsDropDown />}
      {photosSeen && <PhotosDropDown />}
      {realWedSeen && <RealWedDropDown />}
      {blogSeen && <BlogDropDown />}
      {children}
    </LayoutBlock>
  );
}
