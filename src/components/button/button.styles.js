import styled, { css } from "styled-components";

const whiteButtonStyle = css`
  color: #4081de;
  background-color: #ffffff;

  &:hover {
  }
`;

const blueButtonStyle = css`
  background-color: #4081de;
  color: #ffffff;
`;

const GenButtonStyle = css`
  min-width: 11rem;
  padding 0.6rem 0.5rem;
  border-radius: 12px;
  outline-style: none;
  border: inherit;
  font-size: 1.1rem;
  font-weight: bold;
  font-family: inherit;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    filter: brightness(95%);
  }

  &:focus{
    outline-style: none;
  }

  @media (min-width: 1600px) {
    font-size: 1.4rem;
    padding 1.2rem 2.5rem;
    min-width: 17rem;
    
  }
`;

export const BlueButton = styled.button`
  ${GenButtonStyle}
  ${blueButtonStyle}
`;

export const WhiteButton = styled.button`
  ${GenButtonStyle}
  ${whiteButtonStyle}
`;
