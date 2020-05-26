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

export const Addendum = () => {
  if (Data.addendumTitle || Data.addendumPic || Data.addendumText) {
    return (
      <AddendumCard>
        <div>
          {Data.addendumTitle && <HeaderMd>{Data.addendumTitle}</HeaderMd>}
        </div>
        {Data.addendumPic && <MdImg alt="worldMap" src={Data.addendumPic} />}
        {Data.addendumText && Data.addendumText.length > 400 ? (
          <Article3Col>
            <TextMd>{Data.addendumText}</TextMd>
          </Article3Col>
        ) : (
          <TextMd>{Data.addendumText}</TextMd>
        )}
      </AddendumCard>
    );
  } else {
    return <div></div>;
  }
};

const IntroCard = styled(Card)`
  padding: 32px;
`;
const LgImg = styled.img`
  width: 100%;
  object-fit: cover;
  border: 2px solid ${Settings.styling.colors.mainHighlight};
  margin-bottom: 20px;
`;
const AddendumCard = styled(Card)`
  display: flex;
  flex-direction: column;
  padding: 32px;
`;
const MdImg = styled.img`
  margin-top: 16px;
  max-width: 100%;
  min-width: 220px;
  object-fit: contain;
  margin-bottom: 20px;
`;

export default Intro;
