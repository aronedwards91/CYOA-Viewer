import React from "react";
import Settings from "../../cyoadata";
import { useCharDataStore } from "../state/character";
import { useGlobalDataStore } from "../state/globals";
import { observer } from "mobx-react-lite";

import { ShowEffectsBtn, EditableText } from "./interactionComp";
import { TextMd } from "../StyledItems/fontSizing";
import { Tooltip, TooltipWrapper, ShowOn } from "../StyledItems";
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
  InvImg,
  MobFloatBtm,
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
  const globalStore = useGlobalDataStore();

  return (
    <DesktopSm styling={styling}>
      <VertBtn onClick={switchCharSize} styling={styling}>
        {">"}
      </VertBtn>
      <TitleDiv nopad>{"Character"}</TitleDiv>
      <TextPad>{name}</TextPad>
      <TextPad>{race}</TextPad>
      <TextPad>Items: {items.length}</TextPad>
      <TitleDiv nopad>{Settings.charSetup.choicePointsFullName}</TitleDiv>
      <TextPad>{points}</TextPad>
      <ShowEffectsBtn {...globalStore} styling={styling} />
      <VertBtn onClick={switchCharSize} styling={styling}>
        {">"}
      </VertBtn>
    </DesktopSm>
  );
});
const DesktopFull = observer(({ switchCharSize, styling, setup }) => {
  const globalStore = useGlobalDataStore();

  return (
    <DesktopFullSize styling={styling}>
      <DesktopScroll>
        <LgCharTop>
          <CharProfile />
          <CharDetails />
          <DeskFullBtn onClick={switchCharSize} styling={styling}>
            {"<"}
          </DeskFullBtn>
        </LgCharTop>
        <CharBackground />
        <CharChallenge />
        <CharSetting setup={setup} />
        <Allies />
        <Abilities />
        <Drawbacks />
        <AdvDrawbacks />
        <Items />
        <ShowEffectsBtn {...globalStore} styling={styling} marginBtm />
        <DeskFullBtn onClick={switchCharSize} styling={styling}>
          {"<"}
        </DeskFullBtn>
      </DesktopScroll>
    </DesktopFullSize>
  );
});
// Mobile Comp
const MobTopBanner = observer(({ switchCharSize, styling }) => {
  const globalStore = useGlobalDataStore();
  const store = useCharDataStore();
  const { name, race, points } = store;

  return (
    <SmBox styling={styling}>
      <SmMobName>Name: {name}</SmMobName>
      <TextMd>[ {race} ]</TextMd>
      <ShowEffectsBtn {...globalStore} styling={styling} />
      <SmMobPoints>
        {Settings.charSetup.choicePointsShort} [ {points} ]
      </SmMobPoints>
      <DropBtn onClick={switchCharSize} styling={styling}>
        ~V~
      </DropBtn>
    </SmBox>
  );
});
const MobFull = observer(({ switchCharSize, styling, setup }) => {
  const globalStore = useGlobalDataStore();

  return (
    <LgMobBox styling={styling}>
      <LgMobScroll>
        <LgCharTop>
          <CharProfile />
          <CharDetails />
          <DropBtn onClick={switchCharSize} styling={styling}>
            ~/\~
          </DropBtn>
        </LgCharTop>
        <CharBackground />
        <CharChallenge />
        <CharSetting setup={setup} />
        <Allies />
        <Abilities />
        <AdvDrawbacks />
        <Drawbacks />
        <Items />
        <ShowEffectsBtn {...globalStore} styling={styling} />
      </LgMobScroll>
      <MobFloatBtm onClick={switchCharSize}>--/\--</MobFloatBtm>
    </LgMobBox>
  );
});

// State connected components
const CharProfile = observer(() => {
  const store = useCharDataStore();
  const { profImg } = store;

  return <Portrait alt="Img" src={profImg}/>;
});
const CharDetails = observer(() => {
  const store = useCharDataStore();
  const { name, setName, age, setAge, race, points } = store;

  return (
    <LgCharTopText>
      <EditableText
        label="Name:"
        value={name}
        triggerChange={setName}
        type="text"
      />
      <EditableText
        label="Age:"
        value={age}
        triggerChange={setAge}
        type="number"
      />
      <TextBox title="Race:" value={race} />
      <TextBox
        title={Settings.charSetup.choicePointsShort + ":"}
        value={points}
      />
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
const Allies = observer(() => {
  const store = useCharDataStore();
  const { allies } = store;

  return (
    <>
      {allies.length > 0 && (
        <TitleDiv>
          <TextMd>Allies</TextMd>
        </TitleDiv>
      )}
      {allies.map((ally) => (
        <TextBox title={"> " + ally.name + " : "} value={ally.desc} />
      ))}
    </>
  );
});
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
const Drawbacks = observer(() => {
  const store = useCharDataStore();
  const { drawbacks } = store;

  return (
    <>
      {drawbacks.length > 0 && (
        <TitleDiv>
          <TextMd>Drawbacks</TextMd>
        </TitleDiv>
      )}
      {drawbacks.map((drawback) => (
        <TextBox title={"> " + drawback.name + " : "} value={drawback.desc} />
      ))}
    </>
  );
});
const Items = observer(() => {
  const store = useCharDataStore();
  const { items } = store;
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
        {icon ? <InvImg src={icon} alt={name} /> : name}
        {quantity > 1 && "  |  x" + quantity}
      </InventoryItemBox>
    </TooltipWrapper>
  );
};

export default Character;
