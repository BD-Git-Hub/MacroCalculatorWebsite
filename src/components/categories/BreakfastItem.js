import React, { Fragment, useState } from "react";

const BreakfastItem = (props) => {
  const value = props.value;
  const id = props.id;
  const inputAdjusted = props.inputAdjusted;

  const [intialTitleShown, setIntialTitleShown] = useState(false);

  const [titleInput, setTitleInput] = useState("");

  const changeHandler = (e, category) => {
    const input = e.target.value;

    if (category === "title") {
      setIntialTitleShown(true);
      setTitleInput(input);
    } else if (category === "carbs") {
      //setIntialCarbsShown(true);
      //setCarbsInput(input);
    } else if (category === "proteins") {
      //setIntialProteinsShown(true);
      //setProteinsInput(input);
    } else if (category === "fats") {
      //setIntialFatsShown(true);
      //setFatsInput(input);
    } else {
      return;
    }
  };

  const updateHandler = (prevInput, id, category) => {
    if (category === "title" && prevInput !== titleInput) {
      inputAdjusted(prevInput, titleInput, id);
    }
    // } else if (category === "carbs" && prevInput !== carbsInput) {
    // //   inputAdjusted(prevInput, carbsInput, id);
    // //   setIntialCarbsShown(false);
    // } else if (category === "proteins" && prevInput !== proteinsInput) {
    // //   inputAdjusted(prevInput, proteinsInput, id);
    // //   setIntialProteinsShown(false);
    // } else if (category === "fats" && prevInput !== fatsInput) {
    // //   inputAdjusted(prevInput, fatsInput, id);
    // //   setIntialFatsShown(false);
    // } else {
    //   return;
    // }
  };

  return (
    <Fragment>
      <p>
        Title:
        <input
          value={!intialTitleShown ? value : titleInput}
          onChange={(e) => {
            changeHandler(e, "title");
          }}
          onBlur={() => {
            updateHandler(value, id, "title");
          }}
        />
      </p>

      <p>Carbohydrates:</p>
      <p>Proteins:</p>
      <p>Fats:</p>
    </Fragment>
  );
};

export default BreakfastItem;
