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
    <br />
    {Data.worldmap && <LgImg alt="worldMap" src={Data.worldmap} />}
    {Data.Worldbuildingtext && Data.Worldbuildingtext.length > 300 ? (
      <Article3Col>
        <TextMd>{Data.Worldbuildingtext}</TextMd>
      </Article3Col>
    ) : (
      <TextMd>{Data.Worldbuildingtext}</TextMd>
    )}
  </IntroCard>
);

const IntroCard = styled(Card)`
  padding: 32px;
`;
const LgImg = styled.img`
  width: 100%;
  object-fit: cover;
  border: 2px solid ${Settings.styling.colors.mainHighlight};
  margin-bottom: 20px;
`;

export default Intro;
