import React from "react";
import { LoginSectionBlock, LoginIllustnBlock } from "./login-section.styles";
import { LoginForm } from "../login-form/login-form.component";
import { Logo } from "../logo/logo.component";

export const LoginSection = () => {
  return (
    <LoginSectionBlock>
      <div className="company-logo">
        <Logo />
      </div>
      <LoginIllustration />
      <LoginForm />
    </LoginSectionBlock>
  );
};

export const LoginIllustration = () => {
  return <LoginIllustnBlock></LoginIllustnBlock>;
};
