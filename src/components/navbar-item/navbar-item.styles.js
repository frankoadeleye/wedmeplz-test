import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavbarItemBlock = styled(NavLink)`
  font-family: "Nunito Sans", sans-serif;
  // width: 100%;
  height: 2.3rem;
  padding: 3px 0px;
  opacity: 1;
  text-transform: capitalize;
  font-family: inherit;
  letter-spacing: 0px;
  color: white;
  font-weight: bold;
  opacity: 1;
  font-size: 0.9rem;
  cursor: pointer;
  text-decoration: none !important;
  display: flex;
  align-items: center;
  justify-content: center;
  // border: 1px solid blue;
  flex-grow: ${(props) => (props.grow_width ? 2 : 1)};

  &:hover {
    border-bottom: 5px solid white;
    padding-top: 0.5rem;
    ${(props) => props.showDropDown && true};
  }

  @media (min-width: 1600px) {
    font-size: 1.1rem;
  }
  @media (min-width: 1900px) {
    font-size: 1.5rem;
  }
  @media (min-width: 1900px) {
    font-size: 1.7rem;
  }
`;
