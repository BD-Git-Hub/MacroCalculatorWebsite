import React, { Fragment } from "react";
import BreakfastItemSection from "./BreakfastItem";
import styled from "styled-components";

const StyledDiv = styled.div`

background: #393E46;


`;

const StyledP = styled.p`
  color: #eeeeee;
`;

const Breakfast = (props) => {
  let onRemove = props.onRemove;
  let macroData = props.data;
  let inputAdjusted = props.inputAdjusted;

  let userItemTemplate = (
    <Fragment>
      <StyledP>Title:</StyledP>
      <StyledP>Carbohydrates:</StyledP>
      <StyledP>Proteins:</StyledP>
      <StyledP>Fats:</StyledP>
    </Fragment>
  );

  const item = macroData.map((macroData) => {
    let holder = "";
    holder = (
      <Fragment key={macroData[5]}>
        <StyledDiv>
          <StyledP>
            Title:
            <BreakfastItemSection
              value={macroData[0]}
              inputAdjusted={inputAdjusted}
              id={macroData[5]}
              categoryInput={"title"}
            />
          </StyledP>

          <StyledP>
            Carbohydrates:
            <BreakfastItemSection
              value={macroData[1]}
              inputAdjusted={inputAdjusted}
              id={macroData[5]}
              categoryInput={"carbs"}
            />
          </StyledP>
          <StyledP>
            Proteins:
            <BreakfastItemSection
              value={macroData[2]}
              inputAdjusted={inputAdjusted}
              id={macroData[5]}
              categoryInput={"proteins"}
            />
          </StyledP>
          <StyledP>
            Fats:
            <BreakfastItemSection
              value={macroData[3]}
              inputAdjusted={inputAdjusted}
              id={macroData[5]}
              categoryInput={"fats"}
            />
          </StyledP>
          <button onClick={onRemove.bind(null, macroData[5])}>DELETE</button>
        </StyledDiv>
      </Fragment>
    );
    return holder;
  });

  userItemTemplate = item;

  return userItemTemplate;
};

export default Breakfast;
