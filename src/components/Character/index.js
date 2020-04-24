import React from "react";
import styled from "styled-components";
import { useCharDataStore } from "../state/character";
import { TextMd, TextMdCss } from "../StyledItems/fontSizing";
import {
  ShowOnlyMobile,
  ShowOnlyDesktop,
  Tooltip,
  TooltipWrapper,
} from "../StyledItems";
import { observer } from "mobx-react-lite";

const Character = ({ isExpanded, switchCharSize, styling, setup }) => (
  <>
    <MobileWrapper styling={styling}>
      {isExpanded ? (
        <MobFull
          switchCharSize={switchCharSize}
          styling={styling}
          setup={setup}
        />
      ) : (
        <MobTopBanner switchCharSize={switchCharSize} styling={styling} />
      )}
    </MobileWrapper>
    <ShowOnlyDesktop>
      <Desktop
        isExpanded={isExpanded}
        switchCharSize={switchCharSize}
        styling={styling}
        setup={setup}
      />
    </ShowOnlyDesktop>
  </>
);

// Desktop Comp
const Desktop = ({ isExpanded, switchCharSize, styling, setup }) =>
  isExpanded ? (
    <DesktopFull
      switchCharSize={switchCharSize}
      styling={styling}
      setup={setup}
    />
  ) : (
    <div />
  );

const DesktopFull = ({ switchCharSize, styling, setup }) => (
  <DesktopFullSize styling={styling}>
    <DesktopScroll>
      <LgCharTop>
        <Portrait alt="image" />
        <CharDetails />
        <DropBtn onClick={switchCharSize} styling={styling}>
          {"<"}
        </DropBtn>
      </LgCharTop>
      <CharBackground />
      <CharChallenge />
      <CharSetting setup={setup} />
      <Abilities />
      <AdvDrawbacks />
      <Items />
    </DesktopScroll>
  </DesktopFullSize>
);
// Mobile Comp
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
const MobFull = ({ switchCharSize, styling, setup }) => (
  <LgMobBox styling={styling}>
    <LgMobScroll>
      <LgCharTop>
        <Portrait alt="image" />
        <CharDetails />
        <DropBtn onClick={switchCharSize} styling={styling}>
          ~/\~
        </DropBtn>
      </LgCharTop>
      <CharBackground />
      <CharChallenge />
      <CharSetting setup={setup} />
      <Abilities />
      <AdvDrawbacks />
      <Items />
    </LgMobScroll>
  </LgMobBox>
);

// State connected components
const CharDetails = observer(() => {
  const store = useCharDataStore();
  const { name, age, race, points } = store;

  return (
    <LgCharTopText>
      <TextBox title="Name:" value={name} />
      <TextBox title="Age:" value={age} />
      <TextBox title="Race:" value={race} />
      <TextBox title="Points:" value={points} />
    </LgCharTopText>
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
const CharSetting = ({ setup }) => {
  return <TextPara title="Setting" value={setup.setting} />;
};
const Abilities = observer(() => {
  const store = useCharDataStore();
  const { abilities } = store;

  return (
    <>
      <TitleDiv>
        <TextMd>Abilities</TextMd>
      </TitleDiv>
      {abilities.length === 0 && <TextMd>None</TextMd>}
      {abilities.map((ability) => (
        <TextBox title={"> " + ability.name + " : "} value={ability.power} />
      ))}
    </>
  );
});
const AdvDrawbacks = observer(() => {
  const store = useCharDataStore();
  const { advDrawback } = store;

  return (
    <>
      <TitleDiv>
        <TextMd>{"Advantages & Drawbacks"}</TextMd>
      </TitleDiv>
      {advDrawback.length === 0 && <TextMd>None</TextMd>}
      {advDrawback.map((set) => (
        <>
          <TextPad>{"=>  " + set.name}</TextPad>
          <div>{"+  " + set.adv}</div>
          <div>{"-  " + set.drawback}</div>
        </>
      ))}
    </>
  );
});
const Items = observer(() => {
  const store = useCharDataStore();
  const { items } = store;
  // TODO show icon / text switch
  return (
    <>
      <TitleDiv>
        <TextMd>{"Inventory"}</TextMd>
      </TitleDiv>
      {items.length === 0 && <TextMd>None</TextMd>}
      <InventoryWrapper>
        {items.map((item) => (
          <InventoryItem
            name={item.name}
            desc={item.desc}
            quantity={item.quantity}
            icon={item.icon}
          />
        ))}
      </InventoryWrapper>
    </>
  );
});
const InventoryItem = ({ name, desc, quantity, icon }) => {
  // TODO icon
  return (
    <TooltipWrapper>
      <Tooltip>{desc}</Tooltip>
      <InventoryItemBox>
        {name}
        {quantity > 1 && "  |  x" + quantity}
      </InventoryItemBox>
    </TooltipWrapper>
  );
};

// Templates
const TextBox = ({ title, value }) => (
  <TextPad>
    <LgMobTitlePad>{title}</LgMobTitlePad>
    <TextMd>{value}</TextMd>
  </TextPad>
);
const TextPara = ({ title, value }) => (
  <TextPad>
    <TitleDiv nopad>
      <TextMd>{title}</TextMd>
    </TitleDiv>
    <TextMd>{value}</TextMd>
  </TextPad>
);

const DesktopBox = styled(ShowOnlyDesktop)`
  height: 100vh;
  width: ${(props) => props.width};
  height: 100%;
  background: green;
  color: ${({ styling }) => styling.colors.charText};
  ${TextMdCss}
`;
// Shared
const TitleDiv = styled.div`
  padding-left: ${({ nopad }) => (nopad ? "0" : "8px")};
  text-decoration: underline;
`;
const LgCharTop = styled.div`
  display: flex;
`;
const LgCharTopText = styled.div`
  flex-grow: 1;
`;
// Desktop
const DesktopFullSize = styled.div`
  position: fixed;
  height: 100vh;
  width: ${({ styling }) => styling.layout.sidebarWidth};
  padding: 32px;
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
const DesktopScroll = styled.div`
  margin-bottom: 10px;
  overflow-y: auto;
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
  padding: 2px;
  height: 126%;
  margin-left: 16px;

  &:hover {
    background: ${({ styling }) => styling.colors.charBgB};
    cursor: pointer;
  }
`;
// Mobile Full
const LgMobBox = styled.div`
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
const LgMobScroll = styled.div`
  min-height: 50vh;
  max-height: 75vh;
  margin-bottom: 10px;
  overflow-y: auto;
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
const InventoryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
`;
const InventoryItemBox = styled.div`
  border-left: 1px solid black;
  padding: 4px 16px;
  cursor: help;
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
