import React, { useState } from "react";
import styled from "styled-components";
import { ShowOnlyMobile, ShowOnlyDesktop } from "../StyledItems";

const Character = ({ LayoutSettings }) => {
  const [isMobSmallVersion, changeSize] = useState(true);
  const switchSize = () => {
    changeSize(!isMobSmallVersion);
  };

  return (
    <>
      <MobileBox>
        {isMobSmallVersion ? <SmBox onClick={switchSize} /> : <Box />}
      </MobileBox>
      <DesktopBox sidebarWidth={LayoutSettings.sidebarWidth} />
    </>
  );
};

const DesktopBox = styled(ShowOnlyDesktop)`
  height: 100vh;
  position: fixed;
  width: ${(props) => props.sidebarWidth};
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
  min-height: 60px;
  max-height: 80px;
  width: 100%;
  background: lightgreen;
`;

export default Character;
