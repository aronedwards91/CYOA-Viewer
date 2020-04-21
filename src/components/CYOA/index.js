import React from "react";
import styled from "styled-components";
import media from "styled-media-query";

import Background, { BackgroundGradient, BgImg } from "../Background";
// Bg Gradient

const CYOA = ({ isExpanded, data }) => {
  const Layout = data.styling.layout;

  return (
    <Box
      mobTopBarSize={Layout.sidebarWidthMobSm}
      sidebarWidth={
        isExpanded ? Layout.sidebarWidth : Layout.sidebarWidthDeskSm
      }
    >
      <BgImg styling={data.styling} />
      <BackgroundGradient styling={data.styling} />
      <div>Text here</div>
    </Box>
  );
};
const Box = styled.div`
  position: relative;
  flex-grow: 2;
  height: 1800px;
  border: 2px solid black;
  padding-top: ${(props) => props.mobTopBarSize || "80px"};

  ${media.greaterThan("medium")`
  padding-top: 0;
    margin-left: ${(props) => props.sidebarWidth || "600px"};
  `}
`;

export default CYOA;
