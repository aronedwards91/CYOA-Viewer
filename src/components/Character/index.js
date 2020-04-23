import React from "react";
import styled from "styled-components";
import { useCharDataStore } from "../state/character";
import { TextMd, TextMdCss } from "../StyledItems/fontSizing";
import { ShowOnlyMobile, ShowOnlyDesktop } from "../StyledItems";
import { observer } from "mobx-react-lite";

const Character = ({ isExpanded, switchCharSize, styling }) => {
  const LayoutSettings = styling.layout;

  return (
    <>
      <MobileWrapper styling={styling}>
        {isExpanded ? (
          <MobFull switchCharSize={switchCharSize} styling={styling} />
        ) : (
          <MobTopBanner switchCharSize={switchCharSize} styling={styling} />
        )}
      </MobileWrapper>
      <DesktopBox
        styling={styling}
        width={
          isExpanded
            ? LayoutSettings.sidebarWidth
            : LayoutSettings.sidebarWidthDeskSm
        }
      />
    </>
  );
};

const MobTopBanner = observer(({ switchCharSize, styling }) => {
  const store = useCharDataStore();
  const { name, race, points } = store;

  return (
    <SmBox styling={styling}>
      <SmMobName>Name: {name}</SmMobName>
      <TextMd>[ {race} ]</TextMd>
      <SmMobPoints>CP [ {points} ]</SmMobPoints>
      <DropBtn onClick={switchCharSize} styling={styling}>
        ~V~
      </DropBtn>
    </SmBox>
  );
});
const MobFull = ({ switchCharSize, styling }) => (
  <LgMobBox styling={styling}>
    <LgMobScroll>
      <LgMobTop>
        <Portrait alt="image" />
        <CharDetails />
        <DropBtn onClick={switchCharSize} styling={styling}>
          ~/\~
        </DropBtn>
      </LgMobTop>
      <CharBackground />
      <CharChallenge />
      <CharSetting />
      <Abilities />
      <div>Adv Drawback</div>
      <div>Inventory</div>
    </LgMobScroll>
  </LgMobBox>
);
// State connected components
const CharDetails = observer(() => {
  const store = useCharDataStore();
  const { name, age, race, points } = store;

  return (
    <LgMobTopText>
      <TextBox title="Name:" value={name} />
      <TextBox title="Age:" value={age} />
      <TextBox title="Race:" value={race} />
      <TextBox title="Points:" value={points} />
    </LgMobTopText>
  );
});
const CharBackground = observer(() => {
  const store = useCharDataStore();
  const { background } = store;

  return <TextPara title="Origin" value={background} />;
});
const CharChallenge = observer(() => {
  const store = useCharDataStore();
  const { challenge } = store;

  return challenge.name ? (
    <TextPara title={challenge.name} value={challenge.desc} />
  ) : null;
});
const CharSetting = () => {
  return <TextPara title="Setting" value="To Do" />;
};
const Abilities = observer(() => {
  const store = useCharDataStore();
  const { abilities } = store;

  return (
    <>
      <TitleDiv>
        <TextMd>Abilities</TextMd>
      </TitleDiv>
      {abilities.map((ability) => (
        <TextBox title={'> ' + ability.name + " : "} value={ability.power} />
      ))}
    </>
  );
});
// Templates
const TextBox = ({ title, value }) => (
  <TextPad>
    <LgMobTitlePad>{title}</LgMobTitlePad>
    <TextMd>{value}</TextMd>
  </TextPad>
);
const TextPara = ({ title, value }) => (
  <TextPad>
    <TitleDiv>
      <TextMd>{title}</TextMd>
    </TitleDiv>
    <TextMd>{value}</TextMd>
  </TextPad>
);

const DesktopBox = styled(ShowOnlyDesktop)`
  height: 100vh;
  position: fixed;
  width: ${(props) => props.width};
  height: 100%;
  background: green;
  color: ${({ styling }) => styling.colors.charText};
  ${TextMdCss}
`;
// Shared
const TitleDiv = styled.div`
  padding-left: 8px;
  text-decoration: underline;
`;
// Mobile
const MobileWrapper = styled(ShowOnlyMobile)`
  position: fixed;
  z-index: 100;
  color: ${({ styling }) => styling.colors.charText};
  ${TextMdCss}
`;
const DropBtn = styled.div`
  border: 1px solid ${({ styling }) => styling.colors.charBorder};
  border-radius: ${({ styling }) => styling.themeing.bordersWidth};
  padding: 4px;
  height: 120%;
  margin-left: 16px;

  &:hover {
    background: ${({ styling }) => styling.colors.charBgB};
    cursor: pointer;
  }
`;
// Mobile Desktop
const LgMobBox = styled.div`
  width: 100%;
  min-height: 50%;
  max-height: 75%;
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
const LgMobScroll = styled.div`
  overflow-y: auto;
`;
const LgMobTop = styled.div`
  display: flex;
`;
const LgMobTopText = styled.div`
  flex-grow: 1;
`;
const Portrait = styled.img`
  width: 120px;
  min-height: 60px
  background: yellow;
`;
const TextPad = styled.div`
  padding: 8px;
`;
const LgMobTitlePad = styled.span`
  padding-right: 16px;
`;

// Small Mob
const SmBox = styled.div`
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
const SmMobName = styled(TextMd)`
  padding-right: 16px;
`;
const SmMobPoints = styled(TextMd)`
  text-align: right;
  flex-grow: 1;
`;

export default Character;
