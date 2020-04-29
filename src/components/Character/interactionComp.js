import React, { useState, useEffect } from "react";
import { ShowOnDeskSpan, ShowOnMobSpan } from "../StyledItems";
import { TextBtn, DataInput, TickBtn, LgMobTitlePad, TextPad } from "./styling";

export const ShowEffectsBtn = ({
  isShowingChoiceEffects,
  showChoiceEffects,
  hideChoiceEffects,
  marginBtm,
}) =>
  isShowingChoiceEffects ? (
    <TextBtn
      onClick={hideChoiceEffects}
      marginBtm={marginBtm}
    >
      <ShowOnMobSpan>-</ShowOnMobSpan>
      <ShowOnDeskSpan>Hide </ShowOnDeskSpan>
      Effects
    </TextBtn>
  ) : (
    <TextBtn
      onClick={showChoiceEffects}
      marginBtm={marginBtm}
    >
      <ShowOnMobSpan>-</ShowOnMobSpan>
      <ShowOnDeskSpan>Show </ShowOnDeskSpan>
      Effects
    </TextBtn>
  );

export const EditableText = ({ label, value, triggerChange, type }) => {
  const [showTick, setShowTick] = useState(false);
  const [editVal, setEditVal] = useState(value);
  useEffect(() => {
    setEditVal(value);
  }, [value]);

  const clickShow = () => setShowTick(true);
  const setNewVal = (evt) => setEditVal(evt.target.value);
  const acceptNewVal = () => {
    triggerChange(editVal);
    setShowTick(false);
  };

  return (
    <TextPad>
      {showTick ? (
        <TickBtn onClick={acceptNewVal}>✓</TickBtn>
      ) : (
        <LgMobTitlePad>{label}</LgMobTitlePad>
      )}
      <DataInput
        type={type}
        placeholder={value}
        onChange={setNewVal}
        onClick={clickShow}
      />
    </TextPad>
  );
};
