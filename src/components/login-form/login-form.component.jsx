import React from "react";
import FormInput from "../form-input/form-input.component";
import { LoginFormBlock } from "./login-form.styles";

export const LoginForm = () => {
  return (
    <LoginFormBlock onSubmit="">
      <div className="title signin-title">Sign In/Sign Up</div>
      <br />
      <FormInput
        type="name"
        name="username"
        placeholder="Enter email or mobile*"
        sigininStyles
      />
    </LoginFormBlock>
  );
};
