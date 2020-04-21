import React from "react";
import styled from "styled-components";
import { ShowOnlyMobile, ShowOnlyDesktop } from "../StyledItems";

const Character = ({ isExpanded, switchCharSize, styling }) => {
  const LayoutSettings = styling.layout;
  return (
    <>
      <MobileBox>
        {isExpanded ? <Box /> : <SmBox onClick={switchCharSize} widthSm={LayoutSettings.sidebarWidthMobSm}/>}
      </MobileBox>
      <DesktopBox
        width={
          isExpanded
            ? LayoutSettings.sidebarWidth
            : LayoutSettings.sidebarWidthDeskSm
        }
      />
    </>
  );
};

const DesktopBox = styled(ShowOnlyDesktop)`
  height: 100vh;
  position: fixed;
  width: ${(props) => props.width};
  height: 100%;
  background: green;
`;
const MobileBox = styled(ShowOnlyMobile)`
  position: fixed;
`;
const Box = styled.div`
  width: 100%;
  min-height: 500px;
  background: darkgreen;
`;
const SmBox = styled.div`
  height: ${(props) => props.widthSm};
  width: 100%;
  background: lightgreen;
`;

export default Character;
