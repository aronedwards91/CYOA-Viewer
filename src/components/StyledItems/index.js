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
  border: ${Style.themeing.bordersWidth} solid ${Style.colors.mainD};
  margin: 24px 16px;
  padding: 16px;
  background: ${Style.colors.mainA};
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
