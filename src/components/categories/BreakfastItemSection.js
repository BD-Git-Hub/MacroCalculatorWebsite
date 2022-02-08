import React, { Fragment } from "react";
import BreakfastItemSection from "./BreakfastItem";

const Breakfast = (props) => {
  let onRemove = props.onRemove;
  let macroData = props.data;
  let inputAdjusted = props.inputAdjusted;
  let userItemTemplate = (
    <Fragment>
      <p>Title:</p>
      <p>Carbohydrates:</p>
      <p>Proteins:</p>
      <p>Fats:</p>
    </Fragment>
  );


  

  
  

  


  const item = macroData.map((macroData) => {
    let holder = "";
    holder = (
      <Fragment key={macroData[5]}>
        <div>
          <p>
            Title:
            <BreakfastItemSection
              value={macroData[0]}
              inputAdjusted={inputAdjusted}
              id={macroData[5]} 
              categoryInput={'title'}
            />
          </p>

          <p>
            Carbohydrates:
            <BreakfastItemSection
              value={macroData[1]}
              inputAdjusted={inputAdjusted}
              id={macroData[5]}
              categoryInput={'carbs'}
            />
          </p>
          <p>Proteins:
          <BreakfastItemSection
              value={macroData[2]}
              inputAdjusted={inputAdjusted}
              id={macroData[5]}
              categoryInput={'proteins'}
            />

          </p>
          <p>
            Fats:
            <BreakfastItemSection
              value={macroData[3]}
              inputAdjusted={inputAdjusted}
              id={macroData[5]}
              categoryInput={'fats'}
            />
          </p>
          <button onClick={onRemove.bind(null, macroData[5])}>DELETE</button>
        </div>
      </Fragment>
    );
    return holder;
  });

  userItemTemplate = item;

  return userItemTemplate;
};

export default Breakfast;
