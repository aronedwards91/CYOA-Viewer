import React from "react";
import styled from "styled-components";
import media from "styled-media-query";

import {
  Card,
  ShowOnlyMobile,
  ShowOnlyDesktop,
  Article2Col,
} from "../StyledItems";
import {
  TextMd,
  HeaderLg,
  HeaderMd,
  HeaderSM,
} from "../StyledItems/fontSizing";

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
        return <div>choice boxes</div>;
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
    <HeaderWrap styling={styling}>
      <HeaderSplit>
        <HeaderLg>{data.name}</HeaderLg>
      </HeaderSplit>
      <HeaderSplit>
        <HeaderSM>{data.description}</HeaderSM>
      </HeaderSplit>
    </HeaderWrap>
    {data.choices.map((choice) => (
      <LineBox choice={choice} styling={styling} />
    ))}
  </Card>
);

const LineBox = ({ choice, styling }) => {
  return (
    <LinesWrapper key={choice.name} styling={styling}>
      <TextWrapper>
        <TitleWrap>
          <HeaderMd>{choice.name}</HeaderMd>
        </TitleWrap>
        <TextMd>{choice.description}</TextMd>
      </TextWrapper>
      <Image alt="todo" />
    </LinesWrapper>
  );
};

const HeaderWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 16px;
  margin-bottom: 16px;
  border-bottom: 2px solid ${(props) => props.styling.colors.mainD || "black"};

  ${media.greaterThan("medium")`
    flex-direction: row;
  `}
`;
const HeaderSplit = styled.div`
  flex-basis: 50%;
`;

const LinesWrapper = styled.div`
  padding: calc(16px + 0.5vw) 8px;
  border-bottom: 1px solid ${(props) => props.styling.colors.mainD || "black"};
  margin-bottom: calc(16px + 0.5vw);
  cursor: pointer;
  display: flex;
`;
const TextWrapper = styled.div`
  text-align: left;
  flex-basis: 20%;
  flex-grow: 1;
`;
const TitleWrap = styled.div`
  text-align: left;
  padding-right: 32px;
`;
const Image = styled.img`
  max-width: 200px;
  width: 200px;
  height: 120px;
  border: 1px solid orange;

  ${media.greaterThan("medium")`
  max-width: 300px;
  width: 300px;
  height: 180px;
  `}
`;
export default ChoicesBuilder;
