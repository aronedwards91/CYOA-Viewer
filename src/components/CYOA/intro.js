import React from "react";
import styled from "styled-components";

import { Card, Article3Col } from "../StyledItems";
import { HeaderMd, TextMd } from "../StyledItems/fontSizing";


const Intro = ({data}) => (
  <IntroCard>
    <Article3Col>
      <HeaderMd>{data.title}</HeaderMd>
      <br />
      <br />
      <TextMd>{data.introText}</TextMd>
      <br />
      <br />
      <HeaderMd>{data.appendTitle}</HeaderMd>
      <br />
      <br />
      <TextMd>{data.appendText}</TextMd>
    </Article3Col>
  </IntroCard>
);

const IntroCard = styled(Card)`
  padding: 32px;
`;

export default Intro;
