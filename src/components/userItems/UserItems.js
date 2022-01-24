import { Fragment } from "react";
import styled from "styled-components";
import Breakfast from "../categories/Breakfast";

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

const CategoryItemDiv = styled.div`

  background-color: aquamarine;
  padding 1% 0 1% 0;
  margin-top: 1%;
  
`;

const UserItems = (props) => {
  let macroData = props.macroData;

  const objToArr = (macroData) => {
    const arr = macroData.map((macroData) => {
      let arr = [];
      let titleData = "";
      let carbData = "";
      let proteinsData = "";
      let fatsData = "";

      titleData = macroData.titleData;
      carbData = macroData.carbsData;
      proteinsData = macroData.proteinsData;
      fatsData = macroData.fatsData;

      arr = [titleData, carbData, proteinsData, fatsData];

      return arr;
    });
    return arr;
  };

  const data = objToArr(macroData);

  let categoryTemplate = (
    <StyledDiv>
      <BreakfastDiv>
        <Styledh1>Breakfast</Styledh1>
        <Breakfast data={data} />
      </BreakfastDiv>
      <LunchDiv>
        <Styledh1>Lunch</Styledh1>
      </LunchDiv>
      <DinnerDiv>
        <Styledh1>Dinner</Styledh1>
      </DinnerDiv>
      <SnacksDiv>
        <Styledh1>Snacks</Styledh1>
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
