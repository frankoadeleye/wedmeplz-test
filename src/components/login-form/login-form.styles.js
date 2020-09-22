import styled from "styled-components";

export const LoginFormBlock = styled.div`
  width: 86%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80vh;
  background-color: #ffffff;
  justify-content: flex-start;
  margin: auto;

  .title {
    text-align: left;
    font-weight: bolder;
    color: black;
    width: 80%;
    font-size: 1.7rem;
    top: 1rem;
    position: relative;
    margin: 2rem 0rem 0rem 1rem;
  }

  @media (min-width: 500px) {
    margin-top: 1rem;
  }

  @media (min-width: 600px) {
    width: 60%;
    height: 90vh;
    padding-top: 0rem;
    margin: auto;

    .title {
      width: 70%;
    }
  }

  @media (min-width: 1024px) {
    .title {
      font-size: 2.2rem;
    }
  }

  @media (min-width: 1600px) {
    .title {
      font-size: 1.8rem;
      top: 1.2rem;
      margin-bottom: 2rem;
    }
  }

  @media (min-width: 2000px) {
    .title {
      font-size: 2rem;
      top: 1.2rem;
      margin: 3rem 0rem;
    }
  }

  @media (min-width: 2000px) {
    .title {
      font-size: 2.2rem;
      top: 1.2rem;
      margin: 3rem 0rem;
    }
  }
`;
