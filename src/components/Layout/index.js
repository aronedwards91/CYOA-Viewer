import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import media from "styled-media-query";

import Background from "../Background";
// import { Header } from "../Text";
// import Backup from "../Backup";
// import Tools from "../Tools";
import Character from "../Character";
import CYOA from "../CYOA";

// import img from "../../public/loogo512.png";
const LayoutSettings = {
  sidebarWidth: "320px",
};

const Template = styled.div`
  display: flex;
`;

const Layout = () => (
  <Template>
    <Background />
    <Character LayoutSettings={LayoutSettings} />
    <CYOA LayoutSettings={LayoutSettings} />
  </Template>
);

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
