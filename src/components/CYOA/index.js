import React from "react";
import styled from "styled-components";
import media from "styled-media-query";

import Settings from "../../cyoadata";
import { BackgroundGradient, BgImg } from "../Background";
import Header from "./header";
import Intro from "./intro";
import Selections from "./choices/index";

const Layout = Settings.styling.layout;

const CYOA = ({ isExpanded}) => (
  <Box
    sidebarWidth={isExpanded ? Layout.sidebarWidth : Layout.sidebarWidthDeskSm}
  >
    <BgImg />
    {/* Background gradient is used if image found */}
    <BackgroundGradient />
    <Header />
    <Intro />
    <Selections />
  </Box>
);

const Box = styled.div`
  position: relative;
  flex-grow: 2;
  height: auto;
  padding-top: ${Layout.sidebarWidthMobSm || "80px"};
  color: ${Settings.styling.colors.maintext};

  ${media.greaterThan("medium")`
    padding-top: 0;
    margin-left: ${(props) => props.sidebarWidth || "600px"};
  `}
`;

export default CYOA;
