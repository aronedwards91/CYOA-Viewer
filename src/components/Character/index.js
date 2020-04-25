import React from "react";
import { useCharDataStore } from "../state/character";
import { TextMd } from "../StyledItems/fontSizing";
import { Tooltip, TooltipWrapper, ShowOn } from "../StyledItems";
import { observer } from "mobx-react-lite";
import {
  TextBox,
  TextPara,
  TitleDiv,
  LgCharTop,
  LgCharTopText,
  DropBtn,
  DesktopSm,
  DesktopFullSize,
  DesktopScroll,
  DeskFullBtn,
  VertBtn,
  MobileWrapper,
  LgMobBox,
  LgMobScroll,
  Portrait,
  TextPad,
  InventoryWrapper,
  InventoryItemBox,
  SmBox,
  SmMobName,
  SmMobPoints,
} from "./styling";

const Character = ({ isExpanded, switchCharSize, styling, setup }) => (
  <>
    <ShowOn mobile>
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
    </ShowOn>
    <ShowOn desktop>
      <Desktop
        isExpanded={isExpanded}
        switchCharSize={switchCharSize}
        styling={styling}
        setup={setup}
      />
    </ShowOn>
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
    <DesktopCompact styling={styling} switchCharSize={switchCharSize} />
  );
const DesktopCompact = observer(({ switchCharSize, styling }) => {
  const store = useCharDataStore();
  const { name, race, points, items } = store;

  return (
    <DesktopSm styling={styling}>
      <VertBtn onClick={switchCharSize} styling={styling}>
        {">"}
      </VertBtn>
      <TitleDiv nopad>{"Character"}</TitleDiv>
      <TextPad>{name}</TextPad>
      <TextPad>{race}</TextPad>
      <TextPad>Items: {items.length}</TextPad>
      <TitleDiv nopad>{"Points"}</TitleDiv>
      <TextPad>{points}</TextPad>
      <VertBtn onClick={switchCharSize} styling={styling}>
        {">"}
      </VertBtn>
    </DesktopSm>
  );
});
const DesktopFull = ({ switchCharSize, styling, setup }) => (
  <DesktopFullSize styling={styling}>
    <DesktopScroll>
      <LgCharTop>
        <Portrait alt="image" />
        <CharDetails />
        <DeskFullBtn onClick={switchCharSize} styling={styling}>
          {"<"}
        </DeskFullBtn>
      </LgCharTop>
      <CharBackground />
      <CharChallenge />
      <CharSetting setup={setup} />
      <Abilities />
      <AdvDrawbacks />
      <Items />
      <DeskFullBtn onClick={switchCharSize} styling={styling}>
        {"<"}
      </DeskFullBtn>
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

export default Character;
