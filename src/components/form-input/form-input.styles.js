import styled, { css } from "styled-components";

export const FormBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;

  input {
    outline: none;
    border: 0;
    border: 1px solid #cecece;
    height: 40px;
    width: 80%;
    margin: auto;
    font-family: inherit;
  }

  .invalid-feedback {
    width: 93%;
    margin: auto;
    color: red;
    font-size: 0.8rem;
    padding: 5px 0;
  }

  input:focus {
    border-bottom: 1px solid #c4c4c4;
  }

  @media (min-width: 600px) {
    .invalid-feedback {
      width: 97%;
    }
  }

  @media (min-width: 767px) {
    input {
      width: 80%;
    }

    .invalid-feedback {
      width: 94%;
    }
  }

  @media (min-width: 1300px) {
    input {
      width: 60%;
    }
  }

  ${(props) => props.sigininStyles && SigininFormStyles};
  ${(props) => props.signupPasswrdStyles && SignupPasswrdStyles};
`;

export const SigininFormStyles = css`
  width: 100%;
  margin-top: 0.5rem;

  input {
    width: 90%;
    background: #ffffff 0% 0% no-repeat padding-box;
    border-radius: 2px;
    opacity: 1;
    color: #8d8c8cad;
    padding-left: 1rem;
    margin: auto;

    &:focus {
      color: grey;
    }
  }

  @media (min-width: 600px) {
    width: 90%;
  }

  @media (min-width: 1024px) {
    margin-bottom: 1rem;
  }

  @media (min-width: 1600px) {
    input {
      font-size: 1.2rem;
    }
    .invalid-feedback {
      font-size: 1rem;
    }
  }

  @media (min-width: 1800px) {
    input {
      height: 60px;
      font-size: 1.6rem;
    }
  }

  @media (min-width: 2200px) {
    input {
      height: 70px;
      font-size: 1.6rem;
    }
  }
`;

const SignupPasswrdStyles = css`
  width: 100%;
  margin: auto;
  text-align: left;

  input {
    margin-top: 1rem;
  }

  @media (min-width: 600px) {
    input {
      margin-top: 1rem;
    }
  }

  @media (min-width: 1024px) {
    width: 48%;
  }
`;
