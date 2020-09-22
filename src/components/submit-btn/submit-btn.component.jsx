import React from "react";
import { SubmitButtonBlock } from "./submit-btn.styles";

export const SubmitButton = ({ title = "Subcribe Now", type, onPress }) => {
  return (
    <React.Fragment>
      <SubmitButtonBlock onClick={onPress} type={type}>
        {<p>{title}</p>}
      </SubmitButtonBlock>
    </React.Fragment>
  );
};
