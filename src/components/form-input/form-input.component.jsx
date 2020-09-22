import React from "react";
import { FormBlock } from "./form-input.styles";

const FormInput = ({
  handleChange,
  formError,
  sigininStyles,
  signupPasswrdStyles,
  ...otherProps
}) => (
  <FormBlock
    sigininStyles={sigininStyles}
    signupPasswrdStyles={signupPasswrdStyles}
  >
    <input onChange={handleChange} {...otherProps} />
    <div className="invalid-feedback">{formError}</div>
  </FormBlock>
);

export default FormInput;
