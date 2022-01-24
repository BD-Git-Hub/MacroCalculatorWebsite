import React, { Fragment } from "react";

const Breakfast = (props) => {

  let userItemTemplate = (
    <Fragment >
      <p>Title:</p>
      <p>Carbohydrates:</p>
      <p>Proteins:</p>
      <p>Fats:</p>
    </Fragment>
  );

  
  let macroData = props.data;

  console.log(macroData[0][5]);


  const item = macroData.map(macroData => {
    let holder = "";
    holder = <Fragment key={macroData[5]}>
      <p>Title:{macroData[0]}</p>
      <p>Carbohydrates:{macroData[1]}</p>
      <p>Proteins:{macroData[2]}</p>
      <p>Fats:{macroData[3]}</p>
      
    </Fragment>
    return holder;

  });

  userItemTemplate = item;

  return userItemTemplate;
};

export default Breakfast;
