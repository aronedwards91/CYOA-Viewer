import React from "react";
import styled from "styled-components";

import Data from "../../cyoadata";
import { Card, Article3Col } from "../StyledItems";
import { HeaderMd, TextMd } from "../StyledItems/fontSizing";

const Input = Data.cyoa.intro;

const Intro = () => (
  <IntroCard>
    <Article3Col>
      <HeaderMd>{Input.title}</HeaderMd>
      <br />
      <br />
      <TextMd>{Input.introText}</TextMd>
      <br />
      <br />
      <HeaderMd>{Input.appendTitle}</HeaderMd>
      <br />
      <br />
      <TextMd>{Input.appendText}</TextMd>
    </Article3Col>
  </IntroCard>
);

const IntroCard = styled(Card)`
  padding: 32px;
`;

export default Intro;
