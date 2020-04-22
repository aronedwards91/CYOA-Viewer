import React from "react";
import { TextSm } from "../../StyledItems/fontSizing";
import { ChoiceWrapper, ChoiceHeader, PadTopDiv } from "./styling";

const EffectsList = {
  Age: "body-age",
  Race: "body-race",
  Home: "char-home",
  Background: "char-background",
  AdvantageDrawback: "char-advdrawback",
  Item: "inv-item"
};

const ChoiceDetails = ({ details }) => {
  return (
    <ChoiceWrapper>
      <ChoiceHeader>GRANTS: </ChoiceHeader>
      <div>
        {Object.keys(details).map(key => (
          <ChoiceOptions type={key} value={details[key]} />
        ))}
      </div>
    </ChoiceWrapper>
  );
};

const ChoiceOptions = ({ type, value }) => {
  console.log("val", value);
  switch (type) {
    case EffectsList.Age:
      return <DivText value={"Age; " + value} />;
    case EffectsList.Race:
      return <DivText value={"Race; " + value} />;
    case EffectsList.Home:
      return <DivText value={"Home; " + value} />;
    case EffectsList.Background:
      return <DivText value={"Background; " + value} />;
    case EffectsList.AdvantageDrawback:
      return (
        <DivSectionWrapper>
          <DivText value={"CATCH; " + value.name} />
          <DivText value={"+ > " + value.adv} />
          <DivText value={"- > " + value.drawback} />
        </DivSectionWrapper>
      );
    case EffectsList.Item:
      return value.map(item => (
        <DivSectionWrapper>
          <DivText value={"ITEM; " + item.name} />
          <div>
            <TextSm>{item.desc}</TextSm>
            <TextSm>{item.quantity > 1 && "  X" + item.quantity}</TextSm>
          </div>
        </DivSectionWrapper>
      ));

    default:
      return <DivText value="Type not recognised" />;
  }
};

const DivText = ({ value }) => (
  <div>
    <TextSm>{value}</TextSm>
  </div>
);
const DivSectionWrapper = ({ children }) => <PadTopDiv>{children}</PadTopDiv>;

export default ChoiceDetails;
