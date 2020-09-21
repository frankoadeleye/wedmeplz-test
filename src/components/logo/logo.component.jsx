import React from "react";
import { LogoBlock } from "./logo.styles";
import { Link } from "react-router-dom";
import { Svg } from "../../assets/svg";
const { CompanyLogo } = Svg;

export const Logo = () => {
  return (
    <Link to="/">
      <LogoBlock>
        <img src={CompanyLogo} alt="" />
      </LogoBlock>
    </Link>
  );
};
