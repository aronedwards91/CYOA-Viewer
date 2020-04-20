import React from "react";
import styled from "styled-components";
import media from "styled-media-query";

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
