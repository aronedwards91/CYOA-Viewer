import React from "react";
import styled from "styled-components";
import media from "styled-media-query";
import Setting from "../../cyoadata";
import { TextMd, TextMdCss, TextSmCss } from "../StyledItems/fontSizing";

const Style = Setting.styling;
const CharBorderStyle =
  Style.themeing.bordersWidth +
  " " +
  Style.themeing.borderStyle +
  " " +
  Style.colors.charBorder;
const CharBgGradient = `linear-gradient(
  0.15turn,
  ${
    Style.colors.charBgB +
    ", " +
    Style.colors.charBgA +
    ", " +
    Style.colors.charBgB
  }
);`;

// Templates
export const TextBox = ({ title, value }) => (
  <TextPad>
    <LgMobTitlePad>{title}</LgMobTitlePad>
    <span>{value}</span>
  </TextPad>
);
export const TextPara = ({ title, value }) => (
  <TextPad>
    <TitleDiv nopad>
      <TextMd>{title}</TextMd>
    </TitleDiv>
    <span>{value}</span>
  </TextPad>
);

// Shared
export const TitleDiv = styled.div`
  padding-left: ${({ nopad }) => (nopad ? "0" : "8px")};
  text-decoration: underline;
`;
export const LgCharTop = styled.div`
  display: flex;
`;
export const LgCharTopText = styled.div`
  flex-grow: 1;
`;
export const DropBtn = styled.div`
  border: 1px solid ${Style.colors.charBorder};
  border-radius: ${Style.themeing.bordersWidth};
  padding: 2px;
  height: 126%;
  margin-left: 16px;

  &:hover {
    background: ${Style.colors.charBgB};
    cursor: pointer;
  }
`;
export const TextBtn = styled(DropBtn)`
  text-align: center;
  height: auto;
  ${TextSmCss};
  margin: 0 8px;

  ${media.greaterThan("medium")`
    margin: 0;
    ${({ marginBtm }) => marginBtm && "margin: 16px 0 8px;"}
  `}
`;

// Desktop
export const DesktopSm = styled.div`
  position: fixed;
  height: 100vh;
  width: ${Style.layout.sidebarWidthDeskSm};
  padding: 16px;
  background: ${CharBgGradient}
  border-right: ${
    Style.themeing.bordersWidth + " solid " + Style.colors.charBorder
  };
`;
export const DesktopFullSize = styled.div`
  position: fixed;
  height: 100vh;
  width: ${Style.layout.sidebarWidth};
  overflow-y: auto;
  padding: 24px;
  background: ${CharBgGradient}
  border-right: ${CharBorderStyle};
`;
export const DesktopScroll = styled.div`
  margin-bottom: 10px;
  overflow-y: auto;
  ${TextMdCss};
`;
export const DeskFullBtn = styled(DropBtn)`
  height: 34px;
  width: 34px;
  text-align: center;
  font-size: 22px;
`;
export const VertBtn = styled(DeskFullBtn)`
  margin: 16px 8px;
`;

// Mobile
export const MobileWrapper = styled.div`
  position: fixed;
  z-index: 100;
  color: ${Style.colors.charText};
  ${TextMdCss}
  width: 100%;
`;

// Mobile Full
export const LgMobBox = styled.div`
  position: relative;
  width: 100%;
  padding: 32px;
  background: ${CharBgGradient}
  border-bottom: ${CharBorderStyle};
`;
export const LgMobScroll = styled.div`
  min-height: 50vh;
  max-height: 75vh;
  margin-bottom: 10px;
  overflow-y: auto;
`;
export const Portrait = styled.img`
  border: 1px solid ${Style.colors.charBorder};
  max-width: 140px;
  max-height: 240px;
  background: yellow;
`;
export const TextPad = styled.div`
  padding: 8px;
  max-width: 98%;
`;
export const LgMobTitlePad = styled.span`
  padding-right: 16px;
`;
export const InventoryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
`;
export const InventoryItemBox = styled.div`
  border-left: 1px solid black;
  padding: 4px 16px;
  cursor: help;
`;
export const InvImg = styled.img`
  margin-top: -4px;
  margin-bottom: calc(-4px + -0.5vw);
  height: calc(24px + 1.5vw);
  width: calc(24px + 1.5vw);
`;
export const MobFloatBtm = styled.div`
  position: absolute;
  padding: 0 32px;
  left: 0;
  width: 100%;
  text-align: center;
  cursor: pointer;
`;

// Small Mob
export const SmBox = styled.div`
  background: lightgreen;
  background: ${CharBgGradient}
  border-bottom: ${CharBorderStyle};
  height: ${Style.layout.sidebarWidthMobSm};
  width: 100%;
  display: flex;
  padding: 16px 8px;
`;
export const SmMobName = styled(TextMd)`
  padding-right: 16px;
`;
export const SmMobPoints = styled(TextMd)`
  text-align: right;
  flex-grow: 1;
`;

// EditBtn
export const TickBtn = styled.span`
  cursor: pointer;
  color: ${Style.colors.charText};
  border: 1px solid ${Style.colors.charBorder};
  border-radius: ${Style.themeing.bordersWidth};
  margin-right: 4px;
  padding: 4px;
`;
export const DataInput = styled.input`
  color: ${Style.colors.charText};
  outline: none;
  font-family: inherit;
  background: transparent;
  width: 70%;
  border: 1px solid transparent;
  ${TextMdCss}

  &:focus {
    border-bottom: 1px solid ${Style.colors.charBorder};
  }
  &::placeholder {
    color: ${Style.colors.charText};
    opacity: 1; /* Firefox */
  }
`;
