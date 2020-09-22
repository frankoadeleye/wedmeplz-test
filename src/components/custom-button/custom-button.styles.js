import styled from "styled-components";

export const CustomButtonBlock = styled.div`
  width: 7rem;
  border: none;
  border-radius: 3px;
  text-transform: capitalize;
  font-family: "Nunito Sans", sans-serif;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  transition: 0.3s;
  cursor: pointer;
  background-color: rgb(180, 36, 93);
  font-size: 0.8rem;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  outline-style: none;
  padding: 0.5rem 0;
  border-radius: 15px;
  font-weight: bold;

  &:hover {
    color: #c6450cf2;
    border: none;
    background-color: #ffffff;
    text-decoration: none;
  }

  &:focus {
    transition: 0s;
    border: none;
    background-color: inherit;
  }

  @media (max-width: 767px) {
    font-size: 0.7rem;
    padding: 5px 18px;
  }

  @media (max-width: 500px) {
    font-size: 0.7rem;
    padding: 5px 18px;
    border-radius: 6px;
  }
`;
