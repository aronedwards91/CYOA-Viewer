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
import { TextSm } from "../StyledItems/fontSizing";
import { useCharDataStore } from "../state/character";
import { useGlobalDataStore } from "../state/globals";
import { observer } from "mobx-react-lite";

export const CreateExport = ({ marginBtm }) => {
  const store = useCharDataStore();
  const { createbackup } = store;

  return (
    <TextBtn onClick={createbackup} mobMargin marginBtm={marginBtm}>
      Export Character
    </TextBtn>
  );
};
export const ShowEffectsBtn = observer(({ marginBtm }) => {
  const {
    isShowingChoiceEffects,
    showChoiceEffects,
    hideChoiceEffects,
  } = useGlobalDataStore();

  return isShowingChoiceEffects ? (
    <TextBtn onClick={hideChoiceEffects} marginBtm={marginBtm}>
      <ShowOnMobSpan style={FontBold}>-</ShowOnMobSpan>
      <ShowOnDeskSpan>Hide </ShowOnDeskSpan>
      Effects
    </TextBtn>
  ) : (
    <TextBtn onClick={showChoiceEffects} marginBtm={marginBtm}>
      Show Effects
    </TextBtn>
  );
});

export const EditableText = ({ label, value, triggerChange, type, info }) => {
  const [showTick, setShowTick] = useState(false);
  const [editVal, setEditVal] = useState(value);
  const [wasEdited, setWasEdited] = useState(false);

  useEffect(() => {
    setEditVal(value);
  }, [value]);

  const clickShow = () => setShowTick(true);
  const setNewVal = (evt) => setEditVal(evt.target.value);
  const acceptNewVal = () => {
    triggerChange(editVal);
    setShowTick(false);
    setWasEdited(true);
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
      {!wasEdited && info && (
        <div>
          <TextSm>{info}</TextSm>
        </div>
      )}
    </TextPad>
  );
};
