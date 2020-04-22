import React from "react";
import styled from "styled-components";
import media from "styled-media-query";

import { Card, ShowOnlyMobile, ShowOnlyDesktop } from "../StyledItems";
import { HeaderLg, HeaderMd, HeaderSm } from "../StyledItems/fontSizing";


const Header = ({ data }) => (
  <Card>
    <ShowOnlyMobile>
      <TitleBox data={data} />
    </ShowOnlyMobile>
    <MainBox>
      <Logo alt="todo" src={data.logo} />
      <TextWrapper>
        <ShowOnlyDesktop>
          <TitleBox data={data} />
        </ShowOnlyDesktop>
        <TextArea>
          <Subtitle>
            <HeaderMd>{data.subHeader}</HeaderMd>
          </Subtitle>
          <Author>
            <HeaderSm>Author: {data.author}</HeaderSm>
          </Author>
        </TextArea>
      </TextWrapper>
    </MainBox>
  </Card>
);

const TitleBox = ({ data }) => (
  <Title>
    <HeaderLg>{data.title}</HeaderLg>
  </Title>
);
const MainBox = styled.div`
  display: flex;
  align-items: center;
`;
const Logo = styled.img`
  height: 80px;
  width: 80px;
  margin-right: 24px;
`;
const TextWrapper = styled.div`
  width: 100%;
`;
const TextArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  ${media.greaterThan("medium")`
    flex-direction: row;
  `}
`;
const Title = styled.div`
  text-align: center;
  padding: 12px 0;
`;
const Subtitle = styled.div`
  flex-grow: 1;
  padding-bottom: 16px;

  ${media.greaterThan("medium")`
    padding-bottom: 0;
  `}
`;
const Author = styled.div`
  min-width: 20%;
`;

export default Header;
