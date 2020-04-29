import React from "react";
import styled from "styled-components";
import Settings from "../../cyoadata";

const Style = Settings.styling;

const Background = styled.div`
  background-image: url(${Style.cyoa.backgroundImg});
  background-size: cover;
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: -100;
`;
export const BgImg = () =>
  Style.cyoa.backgroundImg ? <Image src={Style.cyoa.backgroundImg} /> : null;
const Image = styled.img`
  height: 100%;
  width: 100%;
  position: fixed;
  object-fit: ${Style.cyoa.backgroundImgObjectFit};
  z-index: -100;
`;

export const BackgroundGradient = styled.div`
  position: absolute;
  z-index: -101;
  height: 100%;
  width: 100%;

  background-image: linear-gradient(
    ${Style.cyoa.backgroundGradient || "red, yellow, red"}
  );
`;
export default Background;
