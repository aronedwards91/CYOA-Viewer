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

const Template = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  ${media.greaterThan("medium")`
    flex-direction: row;
    justify-content:space-between;
    align-items: flex-start;
  `}
`;

const Layout = ({ children }) => (
  <Template>
    <Background />
    <Character />
    <CYOA />
  </Template>
);

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
