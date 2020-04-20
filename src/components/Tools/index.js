import React, { useState } from "react";
import styled from "styled-components";
import { RedX } from "../StyledItems";

const Tools = ({ children }) => {
  const [show, setShow] = useState(false);
  const showTools = () => {
    setShow(true);
  };
  const hideTools = () => {
    setShow(false);
  };

  return (
    <ToolsContainer>
      {show ? (
        <ToolsClick onClick={hideTools}>
          Tools <RedX />
        </ToolsClick>
      ) : (
        <ToolsClick onClick={showTools}>Tools +</ToolsClick>
      )}
      {show && children}
    </ToolsContainer>
  );
};

const ToolsContainer = styled.div`
  width: calc(100% - 24px);
  padding: 12px;
  text-align: left;
`;
const ToolsClick = styled.span`
  cursor: pointer;
`;

export default Tools;
