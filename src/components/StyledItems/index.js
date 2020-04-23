import React from "react";
import styled from "styled-components";
import media from "styled-media-query";

import Data from "../../cyoadata";
const Style = Data.styling;

export const RedX = () => <span style={{ color: "red" }}>X</span>;

// Mobile
export const ShowOnlyMobile = styled.div`
  display: block;
  width: 100%;
  height: 100%;

  ${media.greaterThan("medium")`
    display: none;
  `}
`;
export const ShowOnlyDesktop = styled.div`
  display: none;
  width: 100%;
  height: 100%;

  ${media.greaterThan("medium")`
    display: block;
  `}
`;

export const Card = styled.div`
  border-radius: ${Style.themeing.sectionCornerRadius};
  border: ${Style.themeing.bordersWidth} ${Style.themeing.borderStyle} ${Style.colors.mainD};
  margin: calc(2rem + 2vw) calc(1rem + 1vw);;
  padding: 16px;
  background: linear-gradient(0.15turn, ${Style.colors.mainB}, ${Style.colors.mainA}, ${Style.colors.mainB});
`;

export const Article3Col = styled.article`
  -webkit-columns: 3 180px;
  -moz-columns: 3 180px;
  columns: 3 180px;
  margin: 0 auto;
  max-width: 1000px;
  column-gap: 64px;
  column-rule: 1px solid ${Style.colors.mainD};
`;

export const Article2Col = styled.article`
  -webkit-columns: 2 220px;
  -moz-columns: 2 220px;
  columns: 2 220px;
  margin: 0 auto;
  max-width: 800px;
  column-gap: 32px;
  column-rule: 2px solid ${Style.colors.mainD};
`;
