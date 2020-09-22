import styled from "styled-components";
import MenuTwoToneIcon from "@material-ui/icons/MenuTwoTone";

export const StyledHamburger = styled(MenuTwoToneIcon)`
  color: white;
`;

export const SidebarIconContainer = styled.div`
  margin: 0;
  font-family: "Nunito Sans", sans-serif;
  background: trasparent;
  width: 100%;
  margin: auto;
  display: none;
  position: fixed;
  z-index: 99;
  cursor: pointer;
  padding-left: 0.5rem;
  opacity: 0.95;
  height: 3.3rem;
  transition: height 0.3s;
  -webkit-box-shadow: 0 8px 9px -9px grey;
  -moz-box-shadow: 0 8px 9px -9px grey;
  box-shadow: 0 8px 9px -9px grey;
  background-color: rgb(231, 46, 119);

  .icon-block {
    width: auto;
    display: flex;
    position: relative;
    height: auto;
    align-items: center;
  }

  .icon-wrapper {
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
  }

  .company-logo {
    width: 30%;
    height: 2.2rem;
    padding-left: 1rem;
  }

  @media (min-width: 600px) {
    .company-logo {
      width: 20%;
    }
  }

  @media (max-width: 777px) {
    display: flex;
    align-items: center;
  }
`;
