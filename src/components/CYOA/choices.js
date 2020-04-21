import React from "react";
import styled from "styled-components";
import media from "styled-media-query";

import { Card, ShowOnlyMobile, ShowOnlyDesktop } from "../StyledItems";
import { HeaderLg, HeaderMd, HeaderSM } from "../StyledItems/fontSizing";

const StyleChoices = {
  line: "lines",
  boxes: "boxes",
};

const ChoicesBuilder = ({ data }) => {
  if (Array.isArray(data)) {
    return data.map((choice) => {
      if (choice.style === StyleChoices.line)
        return <ChoiceLines data={choice} />;
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
const ChoiceLines = ({ data }) => (
  <Card key={data.name}>
    <HeaderWrap>
      <TitleWrap>
        <HeaderLg>{data.name}</HeaderLg>
      </TitleWrap>
      <div>
        <HeaderMd>{data.description}</HeaderMd>
      </div>
    </HeaderWrap>
    {data.choices.map((choice) => (
      <LinesWrapper key={choice.name}>
        <TextWrapper>
          <TitleWrap>
            <HeaderMd>{choice.name}</HeaderMd>
          </TitleWrap>
          {/* article 2 col */}
        </TextWrapper>
        <Image alt="todo" />
      </LinesWrapper>
    ))}
  </Card>
);

const HeaderWrap = styled.div`
  display: flex;
  flex-direction: column;

  ${media.greaterThan("medium")`
    flex-direction: row;
  `}
`;

const LinesWrapper = styled.div`
  display: flex;
`;
const TextWrapper = styled.div`
  text-align: left;
`;
const TitleWrap = styled.div`
  text-align: left;
  padding-right: 32px;
`;
const Image = styled.img`
  max-width: 200px;
  border: 1px solid orange;
`;
export default ChoicesBuilder;
