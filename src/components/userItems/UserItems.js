import { Fragment } from "react";
import styled from "styled-components";
import Breakfast from "../categories/Breakfast";
import Lunch from "../categories/Lunch";
import Dinner from "../categories/Dinner";
import Snacks from "../categories/Snacks";

const StyledDiv = styled.div`
  background-color: grey;
  width: 100%;
  text-align: center;
`;

const BreakfastDiv = styled.div`
  display: inline-block;
  background-color: red;
  max-width: 25%;
  padding: 0 2% 0 2%;
  height: 20rem;
  width: 20rem;
  margin: 0 2% 0 2%;
`;

const LunchDiv = styled.div`
  display: inline-block;
  background-color: red;
  max-width: 25%;
  padding: 0 2% 0 2%;
  height: 20rem;
  width: 20rem;
  margin: 0 2% 0 2%;
`;

const DinnerDiv = styled.div`
  display: inline-block;
  background-color: red;
  max-width: 25%;
  padding: 0 2% 0 2%;
  height: 20rem;
  width: 20rem;
  margin: 0 2% 0 2%;
`;

const SnacksDiv = styled.div`
  display: inline-block;
  background-color: red;
  max-width: 25%;
  padding: 0 2% 0 2%;
  height: 20rem;
  width: 20rem;
  margin: 0 2% 0 2%;
`;

const Styledh1 = styled.h1`
  text-decoration: underline;
  text-transform: uppercase;
`;



// const categorySort = (macroData) => {
//   const categorisedData = macroData.filter((macroData) => {
//     let holder;

//     if (macroData[4] === "breakfast") {

//       holder = macroData;

//     }
//     if (macroData[4] === "lunch") {
//       holder = macroData;
//     }
//     if (macroData[4] === "dinner") {
//       holder = macroData;
//     }
//     if (macroData[4] === "snacks") {
//       holder = macroData;
//     }

//     return holder;
//   });

//   return categorisedData;
// };

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
      />
      </BreakfastDiv>
      <LunchDiv>
        <Styledh1>Lunch</Styledh1>
        <Lunch data={data.filter((data) => {
    let holder;
    if (data[4] === "lunch") {
      holder = data;
    }
    return holder;
  })} />
      </LunchDiv>
      <DinnerDiv>
        <Styledh1>Dinner</Styledh1>
        <Dinner data={data.filter((data) => {
    let holder;
    if (data[4] === "dinner") {
      holder = data;
    }
    return holder;
  })} />
      </DinnerDiv>
      <SnacksDiv>
        <Styledh1>Snacks</Styledh1>
        <Snacks data={data.filter((data) => {
    let holder;
    if (data[4] === "snack") {
      holder = data;
    }
    return holder;
  })} />
      </SnacksDiv>
    </StyledDiv>
  );

  // const data = macroData.map((macroData) => (
  //   <div onClick={props.onRemove.bind(null, macroData.key)} key={macroData.id}>
  //     <p>Title:{macroData.titleData}</p>
  //     <p>Carbohydrates:{macroData.carbsData}</p>
  //     <p>Proteins:{macroData.proteinsData}</p>
  //     <p>Fats:{macroData.fatsData}</p>
  //   </div>
  // ));

  return <Fragment>{categoryTemplate}</Fragment>;
};

export default UserItems;
