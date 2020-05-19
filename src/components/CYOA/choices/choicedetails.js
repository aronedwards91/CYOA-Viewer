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
  CostWrap,
} from "./styling";
import { effectKeys } from "../../state/character";

const ChoiceDetails = ({ details, styling }) => {
  return (
    <ChoiceWrapper>
      <ChoiceHeader styling={styling}>GRANTS: </ChoiceHeader>
      <Article2ColDesktop>
        {Object.keys(details).map((key) => (
          <ChoiceOptions type={key} value={details[key]} styling={styling} />
        ))}
      </Article2ColDesktop>
    </ChoiceWrapper>
  );
};

export const Cost = ({ data }) => {
  if (Settings.charSetup.purchasing.length === 0) return null;
  const isArray = Array.isArray(data);
  return isArray ? (
    data.map((cost, index) => {
      const Info = Settings.charSetup.purchasing[index];
      return (
        cost !== 0 && (
          <CostWrap key={Info.ShortName}>
            <TextSm>
              {cost < 0 && <TextMd bold>+</TextMd>}
              {-1 * cost}
              {!Info.icon && " " + Info.ShortName}
            </TextSm>
            {Info.icon && <ImgSm src={Info.icon} alt={Info.ShortName} />}
          </CostWrap>
        )
      );
    })
  ) : (
    <div key={"free"}>
      <TextSm>
        {data < 0 && <TextMd bold>+</TextMd>}
        {data === 0 ? "Free" : -1 * data}
      </TextSm>
      {Settings.charSetup.purchasing[0].icon && data !== 0 && (
        <ImgSm src={Settings.charSetup.purchasing[0].icon} alt="cost" />
      )}
    </div>
  );
};

const ChoiceOptions = ({ type, value, styling }) => {
  switch (type) {
    case effectKeys.profImg:
      return <DivText value={"Adds Profile Img"} />;
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
              {item.icon && <ImgSm src={item.icon} alt="icon error" padleft />}
            </DivText>
            <DivText value={item.desc + quantity} />
          </DivSectionWrapper>
        );
      });
    case effectKeys.misc:
      return (
        <DivSectionWrapper styling={styling}>
          <DivText value={`[${value.key}] ` + value.name} />
          <DivText value={value.desc} />
        </DivSectionWrapper>
      );
    case effectKeys.points:
      return null;
    case effectKeys.discount:
      return null;
    case effectKeys.discountVal:
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
