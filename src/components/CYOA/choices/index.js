import React, { useState } from "react";
import { Card, ShowOnlyDesktop, ShowOnlyMobile } from "../../StyledItems";
import {
  TextMd,
  HeaderLg,
  HeaderMd,
  HeaderSm,
} from "../../StyledItems/fontSizing";
import { useGlobalDataStore } from "../../state/globals";
import { observer } from "mobx-react-lite";

import Details, { Cost } from "./choicedetails";
import SelectionWrapperLogic from "./selectionWrapperLogic";
import {
  HeaderWrap,
  HeaderSplit,
  HeaderDescSplit,
  ButtonSplit,
  CentreDiv,
  TitleWrap,
  LineHeaderWrap,
  LinesWrapper,
  LinesTopWrapper,
  TextWrapper,
  Image,
  BoxHeader,
  BoxItemWrapper,
  BoxContainer,
  OverlayBox,
  TriggerOverlay,
  MultibuyOverlay,
  LinesOverlay,
  BoxImage,
  BoxTextWrapper,
  PadNoImg,
} from "./styling";

import Settings from "../../../cyoadata";

const Data = Settings.cyoa.selections;
const StyleChoices = {
  line: "lines",
  boxes: "boxes",
  smBoxes: "smallboxes",
};

const SelectionsBuilder = () => {
  if (Array.isArray(Data)) {
    return Data.map((selection) => {
      switch (selection.style) {
        case StyleChoices.line:
          return (
            <SelectionWrapperLogic
              key={selection.name}
              ChildNode={ChoiceLines}
              selectionData={selection}
            />
          );

        case StyleChoices.boxes:
          return (
            <SelectionWrapperLogic
              key={selection.name}
              ChildNode={ChoiceBoxes}
              selectionData={selection}
            />
          );
        case StyleChoices.smBoxes:
          return (
            <SelectionWrapperLogic
              key={selection.name}
              ChildNode={ChoiceSmBoxes}
              selectionData={selection}
            />
          );

        default:
          return <div>style unknown</div>;
      }
    });
  } else {
    return <div>Error in cyoadata => cyoa.selections not an Array</div>;
  }
};

const ChoiceLines = ({
  data,
  unique,
  boughtDataArr,
  buyFunc,
  unselectFunc,
}) => {
  const [showChoices, setShowChoices] = useState(true);
  const switchShowChoices = () => {
    setShowChoices(!showChoices);
  };
  return (
    <Card key={data.name}>
      <LineHeaderWrap>
        <HeaderContent
          data={data}
          onClick={switchShowChoices}
          shown={showChoices}
        />
      </LineHeaderWrap>
      {showChoices &&
        data.choices.map((choice, index) => (
          <LineItem
            key={choice.name}
            choice={choice}
            unique={unique}
            buyFunc={() => buyFunc(index)}
            unselectFunc={() => unselectFunc(index)}
            boughtNum={boughtDataArr[index]}
          />
        ))}
      {!showChoices && <TextMd>{data.choices.length} Choices Hidden</TextMd>}
    </Card>
  );
};

const LineItem = observer(
  ({ choice, unique, buyFunc, unselectFunc, boughtNum }) => {
    const { isShowingChoiceEffects } = useGlobalDataStore();

    return (
      <>
        {!unique && boughtNum > 0 && (
          <LinesOverlay onClick={unselectFunc}>
            <HeaderMd>[X] -- x{boughtNum}</HeaderMd>
            <HeaderMd></HeaderMd>
          </LinesOverlay>
        )}
        <LinesWrapper key={choice.name} boughtNum={boughtNum} onClick={buyFunc}>
          {/* unselectFunc for seperate button on multibuy */}
          <LinesTopWrapper>
            <TextWrapper>
              <TitleWrap>
                <HeaderMd>{choice.name}</HeaderMd>
              </TitleWrap>
              <ShowOnlyDesktop>
                <TextMd>{choice.description}</TextMd>
              </ShowOnlyDesktop>
            </TextWrapper>
            {choice.img && <Image alt="Image" src={choice.img} />}
          </LinesTopWrapper>
          <ShowOnlyMobile>
            <TextMd>{choice.description}</TextMd>
          </ShowOnlyMobile>
          <Cost data={choice.effect.cost} />
          {isShowingChoiceEffects && <Details details={choice.effect} />}
        </LinesWrapper>
      </>
    );
  }
);
const ChoiceSmBoxes = (props) => <ChoiceBoxes {...props} small />;
const ChoiceBoxes = ({
  data,
  unique,
  boughtDataArr,
  buyFunc,
  unselectFunc,
  small,
}) => {
  const [showChoices, setShowChoices] = useState(true);
  const switchShowChoices = () => {
    setShowChoices(!showChoices);
  };

  return (
    <>
      <BoxHeader>
        <HeaderWrap>
          <HeaderContent
            data={data}
            onClick={switchShowChoices}
            shown={showChoices}
          />
        </HeaderWrap>
        {!showChoices && <TextMd>{data.choices.length} Choices Hidden</TextMd>}
      </BoxHeader>
      {showChoices && (
        <BoxItemWrapper>
          {data.choices.map((choice, index) => (
            <BoxItem
              key={choice.name}
              choice={choice}
              unique={unique}
              buyFunc={() => buyFunc(index)}
              unselectFunc={() => unselectFunc(index)}
              boughtNum={boughtDataArr[index]}
              small={small}
            />
          ))}
        </BoxItemWrapper>
      )}
    </>
  );
};

const BoxItem = observer(
  ({ choice, unique, buyFunc, unselectFunc, boughtNum, small }) => {
    const { isShowingChoiceEffects } = useGlobalDataStore();

    return (
      <BoxContainer
        key={choice.name}
        unique={unique}
        boughtNum={boughtNum}
        small={small}
      >
        <OverlayBox>
          {!unique && boughtNum > 0 && (
            <MultibuyOverlay onClick={unselectFunc}>
              <HeaderMd>[X]</HeaderMd>
              <HeaderMd>x{boughtNum}</HeaderMd>
            </MultibuyOverlay>
          )}
          <TriggerOverlay onClick={buyFunc} />
        </OverlayBox>
        {choice.img && <BoxImage alt="image" src={choice.img} />}
        {!choice.img && !unique && boughtNum > 0 && <PadNoImg>|</PadNoImg>}
        <BoxTextWrapper>
          <TitleWrap>
            <HeaderSm>{choice.name}</HeaderSm>
          </TitleWrap>
          <TextMd>{choice.description}</TextMd>
          <Cost data={choice.effect.cost} />
          {isShowingChoiceEffects && <Details details={choice.effect} />}
        </BoxTextWrapper>
      </BoxContainer>
    );
  }
);

const HeaderContent = ({ data, onClick, shown }) => (
  <>
    <HeaderSplit>
      <HeaderLg>{data.name}</HeaderLg>
    </HeaderSplit>
    <HeaderDescSplit>
      <HeaderSm>{data.description}</HeaderSm>
      {data.buy.max > 1 && (
        <>
          <br />
          <HeaderSm>Max {data.buy.max} choices</HeaderSm>
        </>
      )}
    </HeaderDescSplit>
    <ButtonSplit onClick={onClick}>
      {shown ? (
        <>
          <ShowOnlyDesktop>
            <TextMd>/\</TextMd>
          </ShowOnlyDesktop>
          <CentreDiv>
            <TextMd>
              <ShowOnlyMobile>/\ X /\</ShowOnlyMobile>
              <ShowOnlyDesktop>X</ShowOnlyDesktop>
            </TextMd>
          </CentreDiv>
        </>
      ) : (
        <CentreDiv>
          <TextMd>~V~</TextMd>
        </CentreDiv>
      )}
    </ButtonSplit>
  </>
);

export default SelectionsBuilder;
