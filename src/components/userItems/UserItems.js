import { Fragment } from "react";
import Breakfast from "./categories/BreakfastItemSection";
import Lunch from "./categories/Lunch";
import Dinner from "./categories/Dinner";
import Snacks from "./categories/Snacks";

import {
  StyledDiv,
  BreakfastDiv,
  LunchDiv,
  DinnerDiv,
  SnacksDiv,
  Styledh1,
} from "./UserItemsElements";

const objToArr = (macroData) => {
  const arr = macroData.map((macroData) => {
    let arr = [];
    let titleData = "";
    let carbData = "";
    let proteinsData = "";
    let fatsData = "";
    let categoryData = "";
    let id = "";

    titleData = macroData.titleData;
    carbData = macroData.carbsData;
    proteinsData = macroData.proteinsData;
    fatsData = macroData.fatsData;
    categoryData = macroData.categoryData;
    id = macroData.id;

    arr = [titleData, carbData, proteinsData, fatsData, categoryData, id];

    return arr;
  });
  return arr;
};

const UserItems = (props) => {
  let macroData = props.macroData;
  let onRemove = props.onRemove;
  let inputAdjusted = props.inputAdjusted;

  const data = objToArr(macroData);

  let categoryTemplate = (
    <StyledDiv>
      <BreakfastDiv>
        <Styledh1>Breakfast</Styledh1>
        <Breakfast
          data={data.filter((data) => {
            let holder;
            if (data[4] === "breakfast") {
              holder = data;
            }
            return holder;
          })}
          onRemove={onRemove}
          inputAdjusted={inputAdjusted}
        />
      </BreakfastDiv>
      <LunchDiv>
        <Styledh1>Lunch</Styledh1>
        <Lunch
          data={data.filter((data) => {
            let holder;
            if (data[4] === "lunch") {
              holder = data;
            }
            return holder;
          })}
          onRemove={onRemove}
          inputAdjusted={inputAdjusted}
        />
      </LunchDiv>
      <DinnerDiv>
        <Styledh1>Dinner</Styledh1>
        <Dinner
          data={data.filter((data) => {
            let holder;
            if (data[4] === "dinner") {
              holder = data;
            }
            return holder;
          })}
        />
      </DinnerDiv>
      <SnacksDiv>
        <Styledh1>Snacks</Styledh1>
        <Snacks
          data={data.filter((data) => {
            let holder;
            if (data[4] === "snack") {
              holder = data;
            }
            return holder;
          })}
        />
      </SnacksDiv>
    </StyledDiv>
  );

  return <Fragment>{categoryTemplate}</Fragment>;
};

export default UserItems;
