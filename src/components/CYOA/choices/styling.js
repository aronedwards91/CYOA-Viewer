import styled from "styled-components";
import media from "styled-media-query";
import Settings from "../../../cyoadata";
import { Card } from "../../StyledItems";
import { TextSm } from "../../StyledItems/fontSizing";

const Style = Settings.styling;

export const HeaderWrap = styled.div`
  display: flex;
  flex-direction: column;

  ${media.greaterThan("medium")`
  flex-direction: row;
`}
`;
export const HeaderSplit = styled.div`
  flex-basis: 40%;
  flex-grow: 1;
`;
export const HeaderDescSplit = styled.div`
  flex-basis: 30%;
  flex-grow: 1;
`;
export const ButtonSplit = styled.div`
  cursor: pointer;
  flex-basis: 30px;
  align-self: center;
  padding-left: 16px;
`;
export const CentreDiv = styled.div`
  width: 100%;
  text-align: center;
`;
export const TitleWrap = styled.div`
  text-align: left;
  padding-right: 32px;
  padding-bottom: 4px;
  border-bottom: 0.5px solid ${Style.colors.mainBorder || "black"};
  margin-bottom: 4px;
`;

// lines
export const LineHeaderWrap = styled(HeaderWrap)`
  padding-bottom: 16px;
  margin-bottom: 16px;
  border-bottom: 2px solid ${Style.colors.mainBorder || "black"};
`;
export const LinesWrapper = styled.div`
  margin-bottom: calc(16px + 0.5vw);
  cursor: pointer;
  padding: 8px;
  cursor: pointer;
  border: 2px solid transparent;
  border-bottom: 2px solid ${Style.colors.mainBorder || "black"};
  ${({ boughtNum }) =>
    boughtNum > 0
      ? "border: 2px solid " + Style.colors.mainHighlight + ";"
      : ""}

  ${media.greaterThan("medium")`
    padding: 16px;
  `}
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
  max-height: 150px;
  width: auto;
  height: auto;
  border: 1px solid ${Style.colors.mainHighlight || "black"};
  margin-left: 12px;

  ${media.greaterThan("medium")`
    max-width: 300px;
    max-height: 220px;
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
  max-width: 40%;
  ${({ unique, boughtNum }) =>
    unique && boughtNum > 0
      ? "border: 2px solid " + Style.colors.mainHighlight + ";"
      : ""}
  ${({ small }) => small && `max-width: 30%; margin: 4px;`}

  ${media.greaterThan("medium")`
    max-width: 380px;
    ${({ small }) =>
      small &&
      `max-width: 200px; margin: calc(1rem + 1vw) calc(0.5rem + 0.3vw);`}
  `}
`;
export const LinesOverlay = styled.div`
  cursor: pointer;
  width: 100%;
  background: rgba(124, 124, 124, 0.5);
  padding: 8px 16px;
`;
export const MultibuyOverlay = styled(LinesOverlay)`
  position: absolute;
  display: flex;
  justify-content: space-between;
`;
export const OverlayBox = styled.div`
  cursor: pointer;
  width: 100%;
  height: 100%;
  position: absolute;
`;
export const TriggerOverlay = styled.div`
  height: 100%;
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
  border-bottom: 1px solid ${Style.colors.mainBorder};
`;
export const PadSm = styled.div`
  margin-top: calc(8px + 0.3vw);
  padding-left: calc(4px + 0.8vw);
`;
export const PadTopDiv = styled.div`
  margin-top: calc(8px + 0.3vw);
  border-left: 1px solid ${Style.colors.mainBorder};
`;
export const PadBottom = styled.div`
  margin-bottom: calc(8px + 0.3vw);
`;
export const ImgSm = styled.img`
  margin-top: -12px;
  margin-bottom: calc(-4px + -0.5vw);
  height: calc(16px + 1.5vw);
  width: calc(16px + 1.5vw);
  ${({ padleft }) => padleft && "margin-left: calc(8px + 1vw);"};
`;
