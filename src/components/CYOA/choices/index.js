import React, { useState } from "react";
import { Card, ShowOnlyDesktop, ShowOnlyMobile } from "../../StyledItems";
import {
  TextMd,
  HeaderLg,
  HeaderMd,
  HeaderSm,
} from "../../StyledItems/fontSizing";

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

const StyleChoices = {
  line: "lines",
  boxes: "boxes",
};

const SelectionsBuilder = ({ data, styling }) => {
  if (Array.isArray(data)) {
    return data.map((selection) => {
      if (selection.style === StyleChoices.line)
        return (
          <SelectionWrapperLogic
            ChildNode={ChoiceLines}
            selectionData={selection}
            styling={styling}
          />
        );
      if (selection.style === StyleChoices.boxes) {
        return (
          <SelectionWrapperLogic
            ChildNode={ChoiceBoxes}
            selectionData={selection}
            styling={styling}
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
  styling,
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
      <LineHeaderWrap styling={styling}>
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
            styling={styling}
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

const LineItem = ({
  choice,
  styling,
  unique,
  buyFunc,
  unselectFunc,
  boughtNum,
}) => {
  return (
    <>
    {!unique && boughtNum > 0 && (
        <LinesOverlay onClick={unselectFunc}>
          <HeaderMd>[X]  --  x{boughtNum}</HeaderMd>
          <HeaderMd></HeaderMd>
        </LinesOverlay>
      )}
    <LinesWrapper
      key={choice.name}
      styling={styling}
      boughtNum={boughtNum}
      onClick={buyFunc}
    >
      {/* unselectFunc for seperate button on multibuy */}
      <LinesTopWrapper>
        <TextWrapper>
          <TitleWrap styling={styling}>
            <HeaderMd>{choice.name}</HeaderMd>
          </TitleWrap>
          <ShowOnlyDesktop>
            <TextMd>{choice.description}</TextMd>
          </ShowOnlyDesktop>
        </TextWrapper>
        <Image alt="Image" src={choice.img} styling={styling}/>
      </LinesTopWrapper>
      <ShowOnlyMobile>
        <TextMd>{choice.description}</TextMd>
      </ShowOnlyMobile>
      <Details details={choice.effect} styling={styling} />
    </LinesWrapper>
    </>
  );
};

const ChoiceBoxes = ({
  data,
  styling,
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
              styling={styling}
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

const BoxItem = ({
  choice,
  styling,
  unique,
  buyFunc,
  unselectFunc,
  boughtNum,
}) => {
  return (
    <BoxContainer
      key={choice.name}
      styling={styling}
      unique={unique}
      boughtNum={boughtNum}
    >
      {!unique && boughtNum > 0 && (
        <MultibuyOverlay onClick={unselectFunc}>
          <HeaderMd>[X]</HeaderMd>
          <HeaderMd>x{boughtNum}</HeaderMd>
        </MultibuyOverlay>
      )}
      <BoxImage alt="image" src={choice.img} />
      <BoxTextWrapper onClick={buyFunc}>
        <TitleWrap styling={styling}>
          <HeaderSm>{choice.name}</HeaderSm>
        </TitleWrap>
        <TextMd>{choice.description}</TextMd>
        <Details details={choice.effect} styling={styling} />
      </BoxTextWrapper>
    </BoxContainer>
  );
};

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
