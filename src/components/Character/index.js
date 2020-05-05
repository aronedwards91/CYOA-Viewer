import React from "react";
import Settings from "../../cyoadata";
import { useCharDataStore } from "../state/character";
import { observer } from "mobx-react-lite";

import { ShowEffectsBtn, EditableText, CreateExport } from "./interactionComp";
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

const Character = ({ isExpanded, switchCharSize, setup }) => (
  <>
    <ShowOn mobile>
      <MobileWrapper>
        {isExpanded ? (
          <MobFull switchCharSize={switchCharSize} setup={setup} />
        ) : (
          <MobTopBanner switchCharSize={switchCharSize} />
        )}
      </MobileWrapper>
    </ShowOn>
    <ShowOn desktop>
      <Desktop
        isExpanded={isExpanded}
        switchCharSize={switchCharSize}
        setup={setup}
      />
    </ShowOn>
  </>
);

// Desktop Comp
const Desktop = ({ isExpanded, switchCharSize, setup }) =>
  isExpanded ? (
    <DesktopFull switchCharSize={switchCharSize} setup={setup} />
  ) : (
    <DesktopCompact switchCharSize={switchCharSize} />
  );
const DesktopCompact = observer(({ switchCharSize }) => {
  const store = useCharDataStore();
  const { name, race, points, items } = store;

  return (
    <DesktopSm>
      <VertBtn onClick={switchCharSize}>{">"}</VertBtn>
      <TitleDiv nopad>{"Character"}</TitleDiv>
      <TextPad>{name}</TextPad>
      <TextPad>{race}</TextPad>
      <TextPad>Items: {items.length}</TextPad>
      <TitleDiv nopad>{Settings.charSetup.choicePointsFullName}</TitleDiv>
      <TextPad>{points}</TextPad>
      <ShowEffectsBtn />
      <VertBtn onClick={switchCharSize}>{">"}</VertBtn>
    </DesktopSm>
  );
});
const DesktopFull = ({ switchCharSize, setup }) => (
  <DesktopFullSize>
    <DesktopScroll>
      <LgCharTop>
        <CharProfile />
        <CharDetails />
        <DeskFullBtn onClick={switchCharSize}>{"<"}</DeskFullBtn>
      </LgCharTop>
      <CharBackground />
      <CharChallenge />
      <CharSetting setup={setup} />
      <Allies />
      <Abilities />
      <Drawbacks />
      <AdvDrawbacks />
      <Items />
      <MiscEffects />
      <ShowEffectsBtn marginBtm />
      <CreateExport marginBtm />
      <DeskFullBtn onClick={switchCharSize}>{"<"}</DeskFullBtn>
    </DesktopScroll>
  </DesktopFullSize>
);
// Mobile Comp
const MobTopBanner = observer(({ switchCharSize }) => {
  const store = useCharDataStore();
  const { name, points } = store;

  return (
    <SmBox>
      <SmMobName>Name: {name}</SmMobName>
      <ShowEffectsBtn />
      <SmMobPoints>
        {Settings.charSetup.choicePointsShort} {points}
      </SmMobPoints>
      <DropBtn onClick={switchCharSize}>~V~</DropBtn>
    </SmBox>
  );
});
const MobFull = ({ switchCharSize, setup }) => (
  <LgMobBox>
    <LgMobScroll>
      <LgCharTop>
        <CharProfile />
        <CharDetails />
        <DropBtn onClick={switchCharSize}>~/\~</DropBtn>
      </LgCharTop>
      <CharBackground />
      <CharChallenge />
      <CharSetting setup={setup} />
      <Allies />
      <Abilities />
      <AdvDrawbacks />
      <Drawbacks />
      <Items />
      <MiscEffects />
      <ShowEffectsBtn marginBtm />
      <CreateExport />
    </LgMobScroll>
    <MobFloatBtm onClick={switchCharSize}>--/\--</MobFloatBtm>
  </LgMobBox>
);

// State connected components
const CharProfile = observer(() => {
  const store = useCharDataStore();
  const { profImg } = store;

  return <Portrait alt="Img" src={profImg} />;
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
        <TextBox
          title={"> " + ally.name + " : "}
          value={`${ally.desc} ${ally.quantity} in number.`}
        />
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

const MiscEffects = observer(() => {
  const { misc } = useCharDataStore();

  return Object.keys(misc).map((miscKey) =>
    misc[miscKey].length > 0 ? (
      <>
        <TitleDiv>
          <TextMd>{miscKey}</TextMd>
        </TitleDiv>
        {misc[miscKey].map((miscEffect) => (
          <TextBox
            title={miscEffect.name + ": "}
            value={`${miscEffect.desc} x${miscEffect.quantity}`}
          />
        ))}
      </>
    ) : null
  );
});

export default Character;
