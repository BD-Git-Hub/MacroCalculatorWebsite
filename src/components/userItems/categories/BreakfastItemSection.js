import React, { Fragment } from "react";
import BreakfastItemSection from "./BreakfastItem";

import { StyledCategoryP, StyledCategoryDiv, StyledCategoryDeleteBtn } from "../UserItemsElements";

const Breakfast = (props) => {
  let onRemove = props.onRemove;
  let macroData = props.data;
  let inputAdjusted = props.inputAdjusted;

  let userItemTemplate = (
    <Fragment>
      <StyledCategoryP>Title:</StyledCategoryP>
      <StyledCategoryP>Carbohydrates:</StyledCategoryP>
      <StyledCategoryP>Proteins:</StyledCategoryP>
      <StyledCategoryP>Fats:</StyledCategoryP>
    </Fragment>
  );

  const item = macroData.map((macroData) => {
    let holder = "";
    holder = (
      <Fragment key={macroData[5]}>
        <StyledCategoryDiv>
          <StyledCategoryP>
            Title:
            <BreakfastItemSection
              value={macroData[0]}
              inputAdjusted={inputAdjusted}
              id={macroData[5]}
              categoryInput={"title"}
            />
          </StyledCategoryP>

          <StyledCategoryP>
            Carbohydrates:
            <BreakfastItemSection
              value={macroData[1]}
              inputAdjusted={inputAdjusted}
              id={macroData[5]}
              categoryInput={"carbs"}
            />
          </StyledCategoryP>
          <StyledCategoryP>
            Proteins:
            <BreakfastItemSection
              value={macroData[2]}
              inputAdjusted={inputAdjusted}
              id={macroData[5]}
              categoryInput={"proteins"}
            />
          </StyledCategoryP>
          <StyledCategoryP>
            Fats:
            <BreakfastItemSection
              value={macroData[3]}
              inputAdjusted={inputAdjusted}
              id={macroData[5]}
              categoryInput={"fats"}
            />
          </StyledCategoryP>
          <StyledCategoryDeleteBtn onClick={onRemove.bind(null, macroData[5])}>DELETE</StyledCategoryDeleteBtn>
        </StyledCategoryDiv>
      </Fragment>
    );
    return holder;
  });

  userItemTemplate = item;

  return userItemTemplate;
};

export default Breakfast;
