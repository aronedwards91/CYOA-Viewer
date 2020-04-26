import styled from "styled-components";
import media from "styled-media-query";
import { Card } from "../../StyledItems";
import { TextSm } from "../../StyledItems/fontSizing";

export const HeaderWrap = styled.div`
  display: flex;
  flex-direction: column;

  ${media.greaterThan("medium")`
  flex-direction: row;
`}
`;
export const HeaderSplit = styled.div`
  flex-basis: 50%;
`;
export const TitleWrap = styled.div`
  text-align: left;
  padding-right: 32px;
  padding-bottom: 4px;
  border-bottom: 0.5px solid ${(props) => props.styling.colors.mainD || "black"};
  margin-bottom: 4px;
`;

// lines
export const LineHeaderWrap = styled(HeaderWrap)`
  padding-bottom: 16px;
  margin-bottom: 16px;
  border-bottom: 2px solid ${({ styling }) => styling.colors.mainD || "black"};
`;
export const LinesWrapper = styled.div`
  border-bottom: 1px solid ${({ styling }) => styling.colors.mainD || "black"};
  margin-bottom: calc(16px + 0.5vw);
  cursor: pointer;
  padding: 16px;
  cursor: pointer;
  border: 2px solid transparent;
  ${({ unique, boughtNum, styling }) =>
    unique && boughtNum > 0
      ? "border: 2px solid " + styling.colors.mainHighlight + ";"
      : ""}
`;
export const LinesTopWrapper = styled.div`
  margin-bottom: calc(16px + 0.5vw);
  display: flex;
`;
export const TextWrapper = styled.div`
  text-align: left;
  flex-basis: 20%;
  flex-grow: 1;
`;
export const Image = styled.img`
  max-width: 200px;
  width: 200px;
  height: 120px;
  border: 1px solid orange;
  margin-left: 12px;

  ${media.greaterThan("medium")`
    max-width: 300px;
    width: 300px;
    height: 180px;
    margin-left: 32px;
  `}
`;
// boxes
export const BoxHeader = styled(Card)`
  margin-bottom: calc(0.5rem + 1vw);
`;
export const BoxItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
`;
export const BoxContainer = styled(Card)`
  position: relative;
  border-width: 2px;
  overflow: hidden;
  padding: 0 0 16px 0;
  margin-top: 16px;
  margin-bottom: 16px;
  flex-grow: 1;
  height: max-content;
  width: 240px;
  max-width: 560px;
  ${({ unique, boughtNum, styling }) =>
    unique && boughtNum > 0
      ? "border: 2px solid " + styling.colors.mainHighlight + ";"
      : ""}

  ${media.greaterThan("medium")`
    max-width: 380px;
  `}
`;
export const MultibuyOverlay = styled.div`
  cursor: pointer;
  position: absolute;
  width: 100%;
  background: rgba(124, 124, 124, 0.5);
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
`;
export const BoxImage = styled.img`
  height: 50%;
  width: 100%;
  object-fit: cover;
`;
export const BoxTextWrapper = styled.div`
  text-align: left;
  padding: calc(0.5rem + 1vw);
  cursor: pointer;
`;

//choices
export const ChoiceWrapper = styled.div`
  margin-top: calc(0.6rem + 0.5vw);
`;
export const ChoiceHeader = styled(TextSm)`
  border-bottom: 1px solid ${(props) => props.styling.colors.mainD};
`;
export const PadSm = styled.div`
  margin-top: calc(8px + 0.3vw);
  padding-left: calc(4px + 0.8vw);
`;
export const PadTopDiv = styled.div`
  margin-top: calc(8px + 0.3vw);
  border-left: 1px solid ${(props) => props.styling.colors.mainD};
`;
export const PadBottom = styled.div`
  margin-bottom: calc(8px + 0.3vw);
`;
