import React from "react";
// import { CustomFXSpinner } from "../custom-fx-spinner/custom-fx-spinner.component";

export const Button = ({ text, spinner }) => {
  return <React.Fragment>{!spinner ? text : "please wait"}</React.Fragment>;
};
