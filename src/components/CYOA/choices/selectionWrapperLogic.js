import React, { useState } from "react";

const SelectionLogicWrapper = ({ ChildNode, selectionData, styling }) => {
  const initArray = selectionData.choices.map(() => 0);
  const unique = selectionData.buy.unique;
  const MaxBuy = selectionData.buy.max;
  const [numBought, setNumBought] = useState(0);
  const [boughtDataArr, setBoughtArr] = useState(initArray);
  const [errorMax, setErrorMax] = useState(false);

  const choiceBought = (arrayIndex) => {
    if (unique && selectionData.buy.max > 1) {
      if (boughtDataArr[arrayIndex] === 0) {
        if (numBought < MaxBuy) {
          const tempArray = boughtDataArr.slice(0);
          tempArray[arrayIndex] = 1;
          setBoughtArr(tempArray);
          setNumBought(numBought + 1);
          // TODO trigger buy effect
        } else {
          window.alert("No more of that group of selections can be taken");
          setErrorMax(true);
        }
      } else {
        const tempArray = boughtDataArr.slice(0);
        tempArray[arrayIndex] = 0;
        setBoughtArr(tempArray);
        setNumBought(numBought - 1);
        // TODO trigger unbuy effect
      }
    } else if (unique) {
      if (boughtDataArr[arrayIndex] === 0) {
        const tempArray = initArray.slice(0);
        tempArray[arrayIndex] = 1;
        setBoughtArr(tempArray);
        // TODO trigger buy effect
      } else if (boughtDataArr[arrayIndex] === 1) {
        const tempArray = initArray.slice(0);
        setBoughtArr(tempArray);
        // TODO trigger unbuy effect
      }
    } else {
      // Non Unique Logic
      if (numBought < MaxBuy) {
        const tempArray = boughtDataArr.slice(0);
        tempArray[arrayIndex] = tempArray[arrayIndex] + 1;
        setBoughtArr(tempArray);
        setNumBought(numBought + 1);
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
    } else {
      window.alert("ERROR: All already unselected");
    }
  };

  return (
    <ChildNode
      data={selectionData}
      styling={styling}
      unique={unique}
      boughtDataArr={boughtDataArr}
      buyFunc={choiceBought}
      unselectFunc={choiceUnSelected}
      errorMax={errorMax}
    />
  );
};


export default SelectionLogicWrapper;