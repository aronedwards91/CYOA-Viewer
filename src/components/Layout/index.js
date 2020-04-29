import PropTypes from "prop-types";
import React, { useState } from "react";
import styled from "styled-components";

import Character from "../Character";
import CYOA from "../CYOA";
import Data from "../../cyoadata";

const Template = styled.div`
  display: flex; 
`;

const Layout = () => {
  const [expandedChar, setExpandedChar] = useState(false);
  const switchCharSize = () => setExpandedChar(!expandedChar);

  return (
    <Template>
      <Character
        isExpanded={expandedChar}
        switchCharSize={switchCharSize}
        setup={Data.charSetup}
      />
      <CYOA isExpanded={expandedChar}/>
    </Template>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
