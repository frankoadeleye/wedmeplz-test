import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  text-decoration: none;
  margin-right: 0rem;
  margin-left: 0rem;

  @media (min-width: 1100px) {
    margin-right: 2rem;
    margin-left: 1rem;
  }
`;

export const NavbarItemsBlock = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 70%;
  height: 2.6rem;
  padding: 5px;
  padding: 0;
  margin: 0;
  list-style-type: none;
  text-decoration: 0;

  .is-active {
    border-bottom: 5px solid white;
    padding-top: 0.5rem;
  }
  .item:nth-child(4),
  .item:nth-child(5),
  .item:nth-child(6),
  button,
  span {
    transform: translateY(-30rem);
    animation: slideIn 1s forwards;
  }
  .item:nth-child(1),
  .item:nth-child(2),
  .item:nth-child(3) {
    transform: translateX(-100rem);
    animation: slideIn 1s forwards;
  }
  .item:nth-child(1) {
    animation-delay: 0.8s;
  }
  .item:nth-child(2) {
    animation-delay: 0.6s;
  }
  .item:nth-child(3) {
    animation-delay: 0.4s;
  }
  .item:nth-child(4) {
    animation-delay: 0s;
  }
  .item:nth-child(5) {
    animation-delay: 0.8s;
  }
  .item:nth-child(6) {
    animation-delay: 0.12s;
  }

  span {
    animation-delay: 0.16s;
  }

  button {
    animation-delay: 0.16s;
    font-size: 0.9rem;
  }
  @keyframes slideIn {
    from {
    }
    to {
      transform: translateX(0);
    }
  }
  @media (min-width: 1500px) {
    height: 4.4rem;
  }
  @media (min-width: 1900px) {
    button {
      font-size: 1.4rem;
    }
  }
  @media (min-width: 2400px) {
    button {
      font-size: 1.5rem;
    }
  }
`;
