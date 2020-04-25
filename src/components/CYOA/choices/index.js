import React, { useEffect, useState } from "react";
import Details from "./choicedetails";
import { Card } from "../../StyledItems";
import {
  TextMd,
  HeaderLg,
  HeaderMd,
  HeaderSm,
} from "../../StyledItems/fontSizing";
import {
  HeaderWrap,
  HeaderSplit,
  TitleWrap,
  LineHeaderWrap,
  LinesWrapper,
  LinesTopWrapper,
  TextWrapper,
  Image,
  BoxHeader,
  BoxItemWrapper,
  BoxContainer,
  BoxImage,
  BoxTextWrapper,
} from "./styling";

const StyleChoices = {
  line: "lines",
  boxes: "boxes",
};

const SelectionsBuilder = ({ data, styling }) => {
  if (Array.isArray(data)) {
    return data.map((selection) => {
      if (selection.style === StyleChoices.line)
        // return <ChoiceLines data={selection} styling={styling} />;
        return (
          <SelectionLogicWrapper
            ChildNode={ChoiceLines}
            selectionData={selection}
            styling={styling}
          />
        );
      if (selection.style === StyleChoices.boxes) {
        return <ChoiceBoxes data={selection} styling={styling} />;
      } else {
        return <div>style unknown</div>;
      }
    });
  } else {
    return <div>Error in cyoadata => cyoa.selections not an Array</div>;
  }
};

const SelectionLogicWrapper = ({ ChildNode, selectionData, styling }) => {
  const initArray = selectionData.choices.map(() => 0);
  const unique = selectionData.buy.unique;
  const MaxBuy = selectionData.buy.max;
  const [numBought, setNumBought] = useState(0);
  const [boughtDataArr, setBoughtArr] = useState([]);
  const [errorMax, setErrorMax] = useState(false);
  useEffect(() => {
    setBoughtArr(initArray);
  }, [initArray]);

  const choiceBought = (arrayIndex) => {
    if (unique && selectionData.buy.max > 1) {
      if (boughtDataArr[arrayIndex] === 0) {
        if (numBought < MaxBuy) {
          const tempArray = boughtDataArr.slice(0);
          tempArray[arrayIndex] = 1;
          setBoughtArr(tempArray);
          setNumBought(numBought + 1);
        } else {
          window.alert("No more of that group of selections can be taken");
          setErrorMax(true);
        }
      } else {
        const tempArray = boughtDataArr.slice(0);
        tempArray[arrayIndex] = 0;
        setBoughtArr(tempArray);
        setNumBought(numBought - 1);
      }
    } else if (unique) {
      if (boughtDataArr[arrayIndex] === 0) {
        const tempArray = initArray.slice(0);
        tempArray[arrayIndex] = 1;
        setBoughtArr(tempArray);
      } else if (boughtDataArr[arrayIndex] === 1) {
        const tempArray = initArray.slice(0);
        setBoughtArr(tempArray);
      }
    }
    // TODO multibuy
  };
  const choiceUnSelected = (arrayIndex) => {
    if (boughtDataArr[arrayIndex] > 0) {
      setNumBought(numBought + 1);
      const tempArray = boughtDataArr.slice(0);
      tempArray[arrayIndex] = boughtDataArr[arrayIndex] + 1;
    } else {
      window.alert("unable to remove any more");
    }
  };
  // console.log("bd:Logic:numBuy", numBought);
  // console.log("bd:Logic:Arr", boughtDataArr);

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
// if selection style === 'lines'
const ChoiceLines = ({
  data,
  styling,
  unique,
  boughtDataArr,
  buyFunc,
  unselectFunc,
}) => (
  <Card key={data.name}>
    <LineHeaderWrap styling={styling}>
      <HeaderSplit>
        <HeaderLg>{data.name}</HeaderLg>
      </HeaderSplit>
      <HeaderSplit>
        <HeaderSm>{data.description}</HeaderSm>
      </HeaderSplit>
    </LineHeaderWrap>
    {data.choices.map((choice, index) => (
      <LineBox
        choice={choice}
        styling={styling}
        unique={unique}
        buyFunc={() => buyFunc(index)}
        unselectFunc={() => unselectFunc(index)}
        boughtNum={boughtDataArr[index]}
      />
    ))}
  </Card>
);

const LineBox = ({
  choice,
  styling,
  unique,
  buyFunc,
  unselectFunc,
  boughtNum,
}) => {
  return (
    <LinesWrapper
      key={choice.name}
      styling={styling}
      unique={unique}
      boughtNum={boughtNum}
      onClick={buyFunc}
    >
      {/* unselectFunc for seperate button on multibuy */}
      <LinesTopWrapper>
        <TextWrapper>
          <TitleWrap styling={styling}>
            <HeaderMd>{choice.name}</HeaderMd>
          </TitleWrap>
          <TextMd>{choice.description}</TextMd>
        </TextWrapper>
        <Image alt="Image" src={choice.img} />
      </LinesTopWrapper>
      <Details details={choice.effect} styling={styling} />
    </LinesWrapper>
  );
};

const ChoiceBoxes = ({ data, styling }) => {
  return (
    <>
      <BoxHeader>
        <HeaderWrap>
          <HeaderSplit>
            <HeaderLg>{data.name}</HeaderLg>
          </HeaderSplit>
          <HeaderSplit>
            <HeaderSm>{data.description}</HeaderSm>
          </HeaderSplit>
        </HeaderWrap>
      </BoxHeader>
      <BoxItemWrapper>
        {data.choices.map((choice) => (
          <BoxItem choice={choice} styling={styling} />
        ))}
      </BoxItemWrapper>
    </>
  );
};

const BoxItem = ({ choice, styling }) => {
  return (
    <BoxContainer key={choice.name}>
      <BoxImage alt="image" src={choice.img} />
      <BoxTextWrapper>
        <TitleWrap styling={styling}>
          <HeaderSm>{choice.name}</HeaderSm>
        </TitleWrap>
        <TextMd>{choice.description}</TextMd>
        <Details details={choice.effect} styling={styling} />
      </BoxTextWrapper>
    </BoxContainer>
  );
};

export default SelectionsBuilder;
