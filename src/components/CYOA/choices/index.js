import React from "react";
import Details from "./choicedetails";
import { Card } from "../../StyledItems";
import {
  TextMd,
  HeaderLg,
  HeaderMd,
  HeaderSm,
} from "../../StyledItems/fontSizing";
import {
  HeaderWrap,
  HeaderSplit,
  TitleWrap,
  LineHeaderWrap,
  LinesWrapper,
  TextWrapper,
  Image,
  BoxHeader,
  BoxItemWrapper,
  BoxContainer,
  BoxImage,
  BoxTextWrapper,
} from "./styling";

const StyleChoices = {
  line: "lines",
  boxes: "boxes",
};

const ChoicesBuilder = ({ data, styling }) => {
  if (Array.isArray(data)) {
    return data.map((choice) => {
      if (choice.style === StyleChoices.line)
        return <ChoiceLines data={choice} styling={styling} />;
      if (choice.style === StyleChoices.boxes) {
        return <ChoiceBoxes data={choice} styling={styling} />;
      } else {
        return <div>style unknown</div>;
      }
    });
  } else {
    return <div>Error in cyoadata => cyoa.selections not an Array</div>;
  }
};

// if selection style === 'lines'
const ChoiceLines = ({ data, styling }) => (
  <Card key={data.name}>
    <LineHeaderWrap styling={styling}>
      <HeaderSplit>
        <HeaderLg>{data.name}</HeaderLg>
      </HeaderSplit>
      <HeaderSplit>
        <HeaderSm>{data.description}</HeaderSm>
      </HeaderSplit>
    </LineHeaderWrap>
    {data.choices.map((choice) => (
      <LineBox choice={choice} styling={styling} />
    ))}
  </Card>
);

const LineBox = ({ choice, styling }) => {
  return (
    <LinesWrapper key={choice.name} styling={styling}>
      <TextWrapper>
        <TitleWrap styling={styling}>
          <HeaderMd>{choice.name}</HeaderMd>
        </TitleWrap>
        <TextMd>{choice.description}</TextMd>
        <Details details={choice.effect} />
      </TextWrapper>
      <Image alt="Image" src={choice.img} />
    </LinesWrapper>
  );
};

const ChoiceBoxes = ({ data, styling }) => {
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
        {data.choices.map((choice) => (
          <BoxItem choice={choice} styling={styling} />
        ))}
      </BoxItemWrapper>
    </>
  );
};

const BoxItem = ({ choice, styling }) => {
  return (
    <BoxContainer key={choice.name}>
      <BoxImage alt="image" src={choice.img} />
      <BoxTextWrapper>
        <TitleWrap styling={styling}>
          <HeaderSm>{choice.name}</HeaderSm>
        </TitleWrap>
        <TextMd>{choice.description}</TextMd>
        <Details details={choice.effect} />
      </BoxTextWrapper>
    </BoxContainer>
  );
};

export default ChoicesBuilder;
