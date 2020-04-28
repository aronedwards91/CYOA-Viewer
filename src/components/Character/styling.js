import React from "react";
import styled from "styled-components";
import media from "styled-media-query";
import Setting from "../../cyoadata";
import { TextMd, TextMdCss, TextSmCss } from "../StyledItems/fontSizing";

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
  border: 1px solid ${({ styling }) => styling.colors.charBorder};
  border-radius: ${({ styling }) => styling.themeing.bordersWidth};
  padding: 2px;
  height: 126%;
  margin-left: 16px;

  &:hover {
    background: ${({ styling }) => styling.colors.charBgB};
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
  width: ${({ styling }) => styling.layout.sidebarWidthDeskSm};
  padding: 16px;
  background: linear-gradient(
    0.15turn,
    ${({ styling }) =>
      styling.colors.charBgB +
      ", " +
      styling.colors.charBgA +
      ", " +
      styling.colors.charBgB}
  );
  border-right: ${({ styling }) =>
    styling.themeing.bordersWidth + " solid " + styling.colors.charBorder};
`;
export const DesktopFullSize = styled.div`
  position: fixed;
  height: 100vh;
  width: ${({ styling }) => styling.layout.sidebarWidth};
  overflow-y: auto;
  padding: 24px;
  background: linear-gradient(
    0.6turn,
    ${({ styling }) =>
      styling.colors.charBgB +
      ", " +
      styling.colors.charBgA +
      ", " +
      styling.colors.charBgB}
  );
  border-right: ${({ styling }) =>
    styling.themeing.bordersWidth +
    " " +
    styling.themeing.borderStyle +
    " " +
    styling.colors.charBorder};
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
  color: ${({ styling }) => styling.colors.charText};
  ${TextMdCss}
  width: 100%;
`;

// Mobile Full
export const LgMobBox = styled.div`
  position: relative;
  width: 100%;
  padding: 32px;
  background: linear-gradient(
    0.35turn,
    ${({ styling }) =>
      styling.colors.charBgA +
      ", " +
      styling.colors.charBgB +
      ", " +
      styling.colors.charBgA}
  );
  border-bottom: ${({ styling }) =>
    styling.themeing.bordersWidth +
    " " +
    styling.themeing.borderStyle +
    " " +
    styling.colors.mainD};
`;
export const LgMobScroll = styled.div`
  min-height: 50vh;
  max-height: 75vh;
  margin-bottom: 10px;
  overflow-y: auto;
`;
export const Portrait = styled.img`
  width: 120px;
  min-height: 60px
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
  background: linear-gradient(
    0.35turn,
    ${({ styling }) =>
      styling.colors.charBgA +
      ", " +
      styling.colors.charBgB +
      ", " +
      styling.colors.charBgA}
  );
  border-bottom: ${({ styling }) =>
    styling.themeing.bordersWidth +
    " " +
    styling.themeing.borderStyle +
    " " +
    styling.colors.mainD};
  height: ${({ styling }) => styling.layout.sidebarWidthMobSm};
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
  color: ${Setting.styling.colors.charText};
  border: 1px solid ${Setting.styling.colors.charBorder};
  border-radius: ${Setting.styling.themeing.bordersWidth};
  margin-right: 4px;
  padding: 4px;
`;
export const DataInput = styled.input`
  color: ${Setting.styling.colors.charText};
  outline: none;
  font-family: inherit;
  background: transparent;
  width: 70%;
  border: 1px solid transparent;
  ${TextMdCss}

  &:focus {
    border-bottom: 1px solid ${Setting.styling.colors.charBorder};
  }
  &::placeholder {
    color: ${Setting.styling.colors.charText};
    opacity: 1; /* Firefox */
  }
`;
