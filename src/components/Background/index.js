import React from "react";
import styled from "styled-components";
import Col from "../data/colors.json";

const Background = styled.div`
  background-image: url(${(props) => props.styling.cyoa.backgroundImg});
  background-size: cover;
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: -100;
`;
export const BgImg = ({ styling }) =>
  styling.cyoa.backgroundImg ? (
    <Image src={styling.cyoa.backgroundImg} styling={styling}/>
  ) : (
    <div />
  );
const Image = styled.img`
  height: 100vh;
  width: 100%;
  position: fixed;
  object-fit: ${(props) => props.styling.cyoa.backgroundImgObjectFit};
`;

export const BackgroundGradient = styled.div`
  position: absolute;
  z-index: -101;
  height: 100%;
  width: 100%;

  background-image: linear-gradient(
    ${(props) => props.styling.cyoa.backgroundGradient || "red, yellow, red"}
  );
`;
export default Background;
