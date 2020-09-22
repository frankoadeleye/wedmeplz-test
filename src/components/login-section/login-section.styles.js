import styled from "styled-components";

export const LoginSectionBlock = styled.div`
  width: 100%;
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 3px 6px #00000042;
  background-color: white;

  @media (min-width: 600px) {
    flex-direction: row;
    width: 85%;
    height: 90vh;

    .company-logo {
      display: none;
    }
  }

  @media (min-width: 1100px) {
    width: 65%;
  }
`;

export const LoginIllustnBlock = styled.div`
  display: none;

  @media (min-width: 600px) {
    width: 40%;
    display: flex;
    height: 70vh;
    img {
      object-fit: cover;
    }
  }
`;
