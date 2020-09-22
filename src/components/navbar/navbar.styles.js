import styled from "styled-components";

export const NavbarBlock = styled.div`
  display: none;

  @media (min-width: 777px) {
    display: flex;
    margin: 0;
    font-family: "Nunito Sans", sans-serif;
    height: 3rem;
    width: 100%;
    margin: 0;
    padding: 0;
    justify-content: space-evenly;
    align-items: center;
    font-weight: normal;
    background-color: rgb(231, 46, 119);
  }

  div:nth-child(2) {
    transform: translateY(-30rem);
    animation: slideIn 1s forwards;
  }
  div:nth-child(1) {
    transform: translateX(-100rem);
    animation: slideIn 1s forwards;
  }
  div:nth-child(1) {
    animation-delay: 0.8s;
  }
  div:nth-child(2) {
    animation-delay: 0s;
  }
  @keyframes slideIn {
    from {
    }
    to {
      transform: translateX(0);
    }
  }
  @media (min-width: 1500px) {
    padding: 2rem 0rem;
  }
`;
