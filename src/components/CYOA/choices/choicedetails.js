import React from "react";
import { TextSm } from "../../StyledItems/fontSizing";
import { ChoiceWrapper, ChoiceHeader, PadTopDiv, PadSm } from "./styling";

const EffectsList = {
  Age: "body-age",
  Race: "body-race",
  Ability: "body-ability",
  Home: "char-home",
  Background: "char-background",
  AdvantageDrawback: "char-advdrawback",
  Challenge: "char-challenge",
  Item: "inv-items",
};

const ChoiceDetails = ({ details, styling }) => {
  return (
    <ChoiceWrapper>
      <ChoiceHeader styling={styling}>GRANTS: </ChoiceHeader>
      <div>
        {Object.keys(details).map((key) => (
          <ChoiceOptions type={key} value={details[key]} styling={styling} />
        ))}
      </div>
    </ChoiceWrapper>
  );
};

const ChoiceOptions = ({ type, value, styling }) => {
  switch (type) {
    case EffectsList.Age:
      return <DivText value={"AGE; " + value} />;
    case EffectsList.Race:
      return <DivText value={"RACE; " + value} />;
    case EffectsList.Ability:
      return (
        <DivSectionWrapper styling={styling}>
          <DivText value={"ABILITY; " + value.name} />
          <DivText value={value.power} />
        </DivSectionWrapper>
      );
    case EffectsList.Home:
      return <DivText value={"HOME; " + value} />;
    case EffectsList.Background:
      return <DivText value={"Background; " + value} />;
    case EffectsList.AdvantageDrawback:
      return (
        <DivSectionWrapper styling={styling}>
          <DivText value={"CATCH; " + value.name} />
          <DivText value={"+ > " + value.adv} />
          <DivText value={"- > " + value.drawback} />
        </DivSectionWrapper>
      );
    case EffectsList.Challenge:
      return (
        <DivSectionWrapper styling={styling}>
          <DivText value={"CHALLENGE; " + value.name} />
          <DivText value={value.desc} />
        </DivSectionWrapper>
      );
    case EffectsList.Item:
      return value.map((item) => {
        const quantity = item.quantity > 1 ? "  X" + item.quantity : "";
        return (
          <DivSectionWrapper styling={styling}>
            <DivText value={"ITEM; " + item.name} />
            <DivText value={item.desc + quantity} />
          </DivSectionWrapper>
        );
      });

    default:
      return <DivText value="Type not recognised" />;
  }
};

const DivText = ({ value }) => (
  <PadSm>
    <TextSm>{value}</TextSm>
  </PadSm>
);
const DivSectionWrapper = ({ children, styling }) => (
  <PadTopDiv styling={styling}>{children}</PadTopDiv>
);

export default ChoiceDetails;
