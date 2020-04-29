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

import Details from "./choicedetails";
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
  MultibuyOverlay,
  LinesOverlay,
  BoxImage,
  BoxTextWrapper,
} from "./styling";

import Settings from "../../../cyoadata";

const Data = Settings.cyoa.selections;
const StyleChoices = {
  line: "lines",
  boxes: "boxes",
};

const SelectionsBuilder = () => {
  if (Array.isArray(Data)) {
    return Data.map((selection) => {
      if (selection.style === StyleChoices.line)
        return (
          <SelectionWrapperLogic
            ChildNode={ChoiceLines}
            selectionData={selection}
          />
        );
      if (selection.style === StyleChoices.boxes) {
        return (
          <SelectionWrapperLogic
            ChildNode={ChoiceBoxes}
            selectionData={selection}
          />
        );
      } else {
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
    const store = useGlobalDataStore();
    const { isShowingChoiceEffects } = store;

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
            <Image alt="Image" src={choice.img} />
          </LinesTopWrapper>
          <ShowOnlyMobile>
            <TextMd>{choice.description}</TextMd>
          </ShowOnlyMobile>
          {isShowingChoiceEffects && <Details details={choice.effect} />}
        </LinesWrapper>
      </>
    );
  }
);

const ChoiceBoxes = ({
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
              choice={choice}
              unique={unique}
              buyFunc={() => buyFunc(index)}
              unselectFunc={() => unselectFunc(index)}
              boughtNum={boughtDataArr[index]}
            />
          ))}
        </BoxItemWrapper>
      )}
    </>
  );
};

const BoxItem = observer(
  ({ choice, unique, buyFunc, unselectFunc, boughtNum }) => {
    const globalStore = useGlobalDataStore();

    return (
      <BoxContainer key={choice.name} unique={unique} boughtNum={boughtNum}>
        {!unique && boughtNum > 0 && (
          <MultibuyOverlay onClick={unselectFunc}>
            <HeaderMd>[X]</HeaderMd>
            <HeaderMd>x{boughtNum}</HeaderMd>
          </MultibuyOverlay>
        )}
        {choice.img && <BoxImage alt="image" src={choice.img} />}
        <BoxTextWrapper onClick={buyFunc}>
          <TitleWrap>
            <HeaderSm>{choice.name}</HeaderSm>
          </TitleWrap>
          <TextMd>{choice.description}</TextMd>
          {globalStore.isShowingChoiceEffects && (
            <Details details={choice.effect} />
          )}
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
    </HeaderDescSplit>
    <ButtonSplit onClick={onClick}>
      {shown ? (
        <>
          <TextMd>/\</TextMd>
          <CentreDiv>
            <TextMd>X</TextMd>
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
