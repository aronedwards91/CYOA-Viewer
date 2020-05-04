import React, { useState } from "react";
import { useCharDataStore, effectKeys } from "../../state/character";

const SelectionLogicWrapper = ({ ChildNode, selectionData }) => {
  const initArray = selectionData.choices.map(() => 0);
  const unique = selectionData.buy.unique;
  const MaxBuy = selectionData.buy.max;
  const store = useCharDataStore();
  const [numBought, setNumBought] = useState(0);
  const [boughtDataArr, setBoughtArr] = useState(initArray);
  const [errorMax, setErrorMax] = useState(false);

  const choiceBought = (arrayIndex) => {
    if (unique && selectionData.buy.max > 1) {
      if (boughtDataArr[arrayIndex] === 0) {
        if (numBought < MaxBuy) {
          // Updates with new item
          const tempArray = boughtDataArr.slice(0);
          tempArray[arrayIndex] = 1;
          setBoughtArr(tempArray);
          setNumBought(numBought + 1);
          RunAddEffects(selectionData.choices[arrayIndex].effect, store);
        } else {
          window.alert("No more of that group of selections can be taken");
          setErrorMax(true);
        }
      } else {
        const tempArray = boughtDataArr.slice(0);
        tempArray[arrayIndex] = 0;
        setBoughtArr(tempArray);
        setNumBought(numBought - 1);
        RunRemoveEffects(selectionData.choices[arrayIndex].effect, store);
      }
    } else if (unique) {
      if (boughtDataArr[arrayIndex] === 0) {
        // Remove effects from already selected Items
        boughtDataArr.forEach((value, index) => {
          if (value === 1 && index !== arrayIndex) {
            RunRemoveEffects(selectionData.choices[index].effect, store);
          }
        });
        // switches item to selected item
        const tempArray = initArray.slice(0);
        tempArray[arrayIndex] = 1;
        setBoughtArr(tempArray);
        RunAddEffects(selectionData.choices[arrayIndex].effect, store);
      } else if (boughtDataArr[arrayIndex] === 1) {
        const tempArray = initArray.slice(0);
        setBoughtArr(tempArray);
        RunRemoveEffects(selectionData.choices[arrayIndex].effect, store);
      }
    } else {
      // Non Unique Logic
      if (numBought < MaxBuy) {
        const tempArray = boughtDataArr.slice(0);
        tempArray[arrayIndex] = tempArray[arrayIndex] + 1;
        setBoughtArr(tempArray);
        setNumBought(numBought + 1);
        RunAddEffects(selectionData.choices[arrayIndex].effect, store);
      } else {
        window.alert("No more of that group of selections can be taken");
        setErrorMax(true);
      }
    }
  };
  const choiceUnSelected = (arrayIndex) => {
    // Unselect for Non-unique items
    if (boughtDataArr[arrayIndex] > 0) {
      const tempArray = boughtDataArr.slice(0);
      tempArray[arrayIndex] = boughtDataArr[arrayIndex] - 1;
      setBoughtArr(tempArray);
      setNumBought(numBought - 1);
      RunRemoveEffects(selectionData.choices[arrayIndex].effect, store);
    } else {
      window.alert("ERROR: All already unselected");
    }
  };

  return (
    <ChildNode
      data={selectionData}
      unique={unique}
      boughtDataArr={boughtDataArr}
      buyFunc={choiceBought}
      unselectFunc={choiceUnSelected}
      errorMax={errorMax}
    />
  );
};

const RunAddEffects = (effectsObj, store) => {
  Object.keys(effectsObj).forEach((effectKey) => {
    EffectsSwitch(effectKey, effectsObj[effectKey], store, true);
  });
};
const RunRemoveEffects = (effectsObj, store) => {
  Object.keys(effectsObj).forEach((effectKey) => {
    EffectsSwitch(effectKey, effectsObj[effectKey], store, false);
  });
};

const EffectsSwitch = (effectKey, effectData, store, isAdded) => {
  const {
    setProfImg,
    resetProfImg,
    setAge,
    resetAge,
    setRace,
    resetRace,
    setBackground,
    resetBackground,
    setChallenge,
    resetChallenge,
    addAlly,
    removeAlly,
    addAbility,
    removeAbility,
    addAdvDrawback,
    removeAdvDrawback,
    addDrawback,
    removeDrawback,
    addItemArray,
    removeItemArray,
    addMisc,
    removeMisc,
    addPoints,
    removePoints,
  } = store;

  switch (effectKey) {
    case effectKeys.profImg:
      isAdded ? setProfImg(effectData) : resetProfImg();
      break;

    case effectKeys.age:
      isAdded ? setAge(effectData) : resetAge();
      break;

    case effectKeys.race:
      isAdded ? setRace(effectData) : resetRace();
      break;

    case effectKeys.background:
      isAdded ? setBackground(effectData) : resetBackground();
      break;

    case effectKeys.allies:
      isAdded ? addAlly(effectData) : removeAlly(effectData);
      break;

    case effectKeys.challenge:
      isAdded ? setChallenge(effectData) : resetChallenge();
      break;

    case effectKeys.abilities:
      isAdded ? addAbility(effectData) : removeAbility(effectData);
      break;

    case effectKeys.advDrawback:
      isAdded ? addAdvDrawback(effectData) : removeAdvDrawback(effectData);
      break;

    case effectKeys.drawback:
      isAdded ? addDrawback(effectData) : removeDrawback(effectData);
      break;

    case effectKeys.items:
      isAdded ? addItemArray(effectData) : removeItemArray(effectData);
      break;

    case effectKeys.misc:
      isAdded ? addMisc(effectData) : removeMisc(effectData);
      break;

    case effectKeys.points:
      isAdded ? removePoints(effectData) : addPoints(effectData);
      break;

    default:
      break;
  }
};

export default SelectionLogicWrapper;
