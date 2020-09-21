import React from "react";
import { CustomButtonBlock } from "./custom-button.styles";

export const CustomButton = ({ text, ...otherProps }) => {
  return <CustomButtonBlock {...otherProps}>{text}</CustomButtonBlock>;
};
