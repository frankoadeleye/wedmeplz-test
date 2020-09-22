import styled from "styled-components";
import { Images } from "../../assets/images";

const { BannerImg } = Images;

export const BannerBlock = styled.div`
  width: 100%;
  height: 100vh;

  background-image: url(${BannerImg});
  background-color: #cccccc;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
