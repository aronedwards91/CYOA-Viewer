import React from "react";
import Settings from "../../../cyoadata";
import { TextSm, TextMd } from "../../StyledItems/fontSizing";
import { Article2ColDesktop } from "../../StyledItems";
import {
  ChoiceWrapper,
  ChoiceHeader,
  PadTopDiv,
  PadSm,
  ImgSm,
} from "./styling";
import { effectKeys } from "../../state/character";

const ChoiceDetails = ({ details, styling }) => {
  return (
    <ChoiceWrapper>
      <TextSm>
        {Settings.charSetup.choicePointsShort}:{" "}
        {details.cost < 0 && <TextMd bold>+</TextMd>}
        {details.cost === 0 ? "Free" : -1 * details.cost}
        {"   "}
      </TextSm>
      <ChoiceHeader styling={styling}>GRANTS: </ChoiceHeader>
      <Article2ColDesktop>
        {Object.keys(details).map((key) => (
          <ChoiceOptions type={key} value={details[key]} styling={styling} />
        ))}
      </Article2ColDesktop>
    </ChoiceWrapper>
  );
};

const ChoiceOptions = ({ type, value, styling }) => {
  switch (type) {
    case effectKeys.age:
      return <DivText value={"AGE; " + value} />;
    case effectKeys.race:
      return <DivText value={"RACE; " + value} />;
    case effectKeys.Home:
      return <DivText value={"HOME; " + value} />;
    case effectKeys.background:
      return <DivText value={"Background; " + value} />;
    case effectKeys.advDrawback:
      return (
        <DivSectionWrapper styling={styling}>
          <DivText value={"CATCH; " + value.name} />
          <DivText value={"+ > " + value.adv} />
          <DivText value={"- > " + value.drawback} />
        </DivSectionWrapper>
      );
    case effectKeys.challenge:
      return (
        <DivSectionWrapper styling={styling}>
          <DivText value={"CHALLENGE; " + value.name} />
          <DivText value={value.desc} />
        </DivSectionWrapper>
      );
    case effectKeys.allies:
      return (
        <DivSectionWrapper styling={styling}>
          <DivText value={"ALLIES; " + value.name} />
          <DivText value={value.desc} />
        </DivSectionWrapper>
      );
    case effectKeys.abilities:
      return (
        <DivSectionWrapper styling={styling}>
          <DivText value={"ABILITY; " + value.name} />
          <DivText value={value.power} />
        </DivSectionWrapper>
      );
    case effectKeys.drawback:
      return (
        <DivSectionWrapper styling={styling}>
          <DivText value={"DRAWBACKS; " + value.name} />
          <DivText value={value.desc} />
        </DivSectionWrapper>
      );
    case effectKeys.items:
      return value.map((item) => {
        const quantity = item.quantity > 1 ? "  X" + item.quantity : "";
        return (
          <DivSectionWrapper styling={styling}>
            <DivText value={"ITEM; " + item.name}>
              {item.icon && <ImgSm src={item.icon} alt="icon error" padleft/>}
            </DivText>
            <DivText value={item.desc + quantity} />
          </DivSectionWrapper>
        );
      });
    case effectKeys.points:
      return null;
    default:
      return <DivText value="Type not recognised" />;
  }
};

const DivText = ({ value, children }) => (
  <PadSm>
    <TextSm>{value}</TextSm>
    {children}
  </PadSm>
);
const DivSectionWrapper = ({ children, styling }) => (
  <PadTopDiv styling={styling}>{children}</PadTopDiv>
);

export default ChoiceDetails;
