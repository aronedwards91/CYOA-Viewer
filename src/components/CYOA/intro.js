import React from "react";
import styled from "styled-components";

import Settings from "../../cyoadata";
import { Card, Article3Col } from "../StyledItems";
import { HeaderMd, TextMd } from "../StyledItems/fontSizing";

const Data = Settings.cyoa.intro;

const Intro = () => (
  <IntroCard>
    <Article3Col>
      <HeaderMd>{Data.title}</HeaderMd>
      <br />
      <br />
      <TextMd>{Data.introText}</TextMd>
      <br />
      <br />
      <HeaderMd>{Data.appendTitle}</HeaderMd>
      <br />
      <br />
      <TextMd>{Data.appendText}</TextMd>
    </Article3Col>
  </IntroCard>
);

const IntroCard = styled(Card)`
  padding: 32px;
`;

export default Intro;
