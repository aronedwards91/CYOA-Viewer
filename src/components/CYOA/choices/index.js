import React from "react";
import { Card } from "../../StyledItems";
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
        // return <ChoiceBoxes data={selection} styling={styling} />;
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

// if selection style === 'lines'
const ChoiceLines = ({
  data,
  styling,
  unique,
  boughtDataArr,
  buyFunc,
  unselectFunc,
}) => (
  <Card key={data.name}>
    <LineHeaderWrap styling={styling}>
      <HeaderSplit>
        <HeaderLg>{data.name}</HeaderLg>
      </HeaderSplit>
      <HeaderSplit>
        <HeaderSm>{data.description}</HeaderSm>
      </HeaderSplit>
    </LineHeaderWrap>
    {data.choices.map((choice, index) => (
      <LineBox
        choice={choice}
        styling={styling}
        unique={unique}
        buyFunc={() => buyFunc(index)}
        unselectFunc={() => unselectFunc(index)}
        boughtNum={boughtDataArr[index]}
      />
    ))}
  </Card>
);

const LineBox = ({
  choice,
  styling,
  unique,
  buyFunc,
  unselectFunc,
  boughtNum,
}) => {
  return (
    <LinesWrapper
      key={choice.name}
      styling={styling}
      unique={unique}
      boughtNum={boughtNum}
      onClick={buyFunc}
    >
      {/* unselectFunc for seperate button on multibuy */}
      <LinesTopWrapper>
        <TextWrapper>
          <TitleWrap styling={styling}>
            <HeaderMd>{choice.name}</HeaderMd>
          </TitleWrap>
          <TextMd>{choice.description}</TextMd>
        </TextWrapper>
        <Image alt="Image" src={choice.img} />
      </LinesTopWrapper>
      <Details details={choice.effect} styling={styling} />
    </LinesWrapper>
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
  return (
    <>
      <BoxHeader>
        <HeaderWrap>
          <HeaderSplit>
            <HeaderLg>{data.name}</HeaderLg>
          </HeaderSplit>
          <HeaderSplit>
            <HeaderSm>{data.description}</HeaderSm>
          </HeaderSplit>
        </HeaderWrap>
      </BoxHeader>
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

export default SelectionsBuilder;
