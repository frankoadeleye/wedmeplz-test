import React from "react";
import { SearchIconBlock } from "./search-icon.styles";
import { Images } from "../../assets/images";

const { SearchIconImg } = Images;

export const SearchIcon = () => {
  return (
    <SearchIconBlock>
      <img src={SearchIconImg} alt="search-icon" />
    </SearchIconBlock>
  );
};
