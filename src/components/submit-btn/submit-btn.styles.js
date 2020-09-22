import styled from "styled-components";

export const SubmitButtonBlock = styled.button`
  width: 60%;
  border: 1px solid #c6450cf2;
  display: flex;
  border-radius: 2px;
  background-color: inherit;
  color: #c6450cf2;
  padding: 0rem 0rem;
  justify-content: center;
  align-items: center;
  height: auto;
  transition: 0.3s;
  cursor: pointer;

  &:focus {
    outline-style: none;
  }

  &:hover {
    background-color: #c6450cf2;
    color: white;
  }

  p {
    margin: 0.5rem auto;
  }
`;
