import React, { useState, useEffect } from "react";
import { ShowOnDeskSpan, ShowOnMobSpan } from "../StyledItems";
import {
  TextBtn,
  DataInput,
  TickBtn,
  LgMobTitlePad,
  TextPad,
  FontBold,
} from "./styling";
import { useCharDataStore } from "../state/character";

export const CreateExport = ({ marginBtm }) => {
  const store = useCharDataStore();
  const { createbackup } = store;

  return (
    <TextBtn onClick={createbackup} mobMargin marginBtm={marginBtm}>
      Export Character
    </TextBtn>
  );
};
export const ShowEffectsBtn = ({
  isShowingChoiceEffects,
  showChoiceEffects,
  hideChoiceEffects,
  buildHtml,
  marginBtm,
}) =>
  isShowingChoiceEffects ? (
    <TextBtn onClick={buildHtml} marginBtm={marginBtm}>
      <ShowOnMobSpan style={FontBold}>-</ShowOnMobSpan>
      <ShowOnDeskSpan>Hide </ShowOnDeskSpan>
      Test html build
    </TextBtn>
  ) : (
    <TextBtn onClick={showChoiceEffects} marginBtm={marginBtm}>
      <ShowOnMobSpan style={FontBold}>+</ShowOnMobSpan>
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
