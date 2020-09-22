import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const SidebarContainer = styled.div`
  height: auto;
  transition: 0.3s;
  width: 100%;
  overflow-y: hidden;
  position: relative;
  z-index: 999;

  .is-active {
    border-bottom: 1px solid #0066d6;
  }

  .is-active .link {
    color: #0066d6;
  }

  .is-active .icon__container svg {
    fill: #0066d6;
  }
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100vh;
`;

export const IconContainer = styled(NavLink)`
  width: 70%;
  border-bottom: 0.5px solid #00000029;
  height: auto;
  display: flex;
  margin: auto;
  justify-content: flex-start;
  align-items: center;
  margin: auto;
  margin-left: 5%;
  padding-bottom: 0.1rem;
  text-decoration: none;
  height: auto;

  .icon__container {
    width: 1.4rem;
    height: 1.4rem;
    display: flex;
  }

  .link {
    font-size: 15px;
    color: #000000ad;
    font-family: inherit;
    margin-left: 0.5rem;
    width: auto;
  }
`;
