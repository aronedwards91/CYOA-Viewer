import React from "react";
import styled from "styled-components";
import media from "styled-media-query";

const CYOA = ({ LayoutSettings, isExpanded }) => {
  return (
    <Box
      sidebarWidth={
        isExpanded ? LayoutSettings.sidebarWidth : LayoutSettings.sidebarWidthSm
      }
    />
  );
};
const Box = styled.div`
  flex-grow: 1;
  height: 1800px;
  background-image: linear-gradient(red, yellow, green);
  border: 2px solid black;

  ${media.greaterThan("medium")`
    margin-left: ${(props) => props.sidebarWidth};
  `}
`;

export default CYOA;
