import React, { useState } from "react";
import styled from "styled-components";
import { useCharDataStore } from "../state/character";
import { ShowOnlyMobile, ShowOnlyDesktop } from "../StyledItems";
import { useObserver } from "mobx-react-lite";

const Character = ({ isExpanded, switchCharSize, styling }) => {
  const LayoutSettings = styling.layout;

  return (
    <>
      <MobileBox>
        {isExpanded ? (
          <Box />
        ) : (
          <MobTopBanner
            onClick={switchCharSize}
            widthSm={LayoutSettings.sidebarWidthMobSm}
          />
        )}
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

const MobTopBanner = ({ switchCharSize, widthSm }) => {
  const [names, setNames] = useState("x");
  const store = useCharDataStore();
  console.log("store", store);
  const { name, setName } = store;
  const test = () => {
    console.log("tester", name);
    setNames(names + "[[");
    setName(name + "xx");
  };
  return useObserver(() => (
    <SmBox widthSm={widthSm}>
      <div onClick={test}>Name-dd-{name}</div>
      <span>Race--{names}</span>
      <SmMobPoints>780 - CP</SmMobPoints>
      <span onClick={switchCharSize}> -Up=</span>
    </SmBox>
  ));
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
  z-index: 100;
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
  display: flex;
`;
const SmMobPoints = styled.div`
  text-align: right;
  flex-grow: 1;
`;

export default Character;
