import React, { Fragment, useState } from "react";

const BreakfastItemSection = (props) => {
  const value = props.value;
  const id = props.id;

  const categoryInput = props.categoryInput;
  const inputAdjusted = props.inputAdjusted;

  const [intialShown, setIntialShown] = useState(false);
  const [input, setInput] = useState("");

  const changeHandler = (e, category) => {
    const input = e.target.value;
    setIntialShown(true);
    setInput(input);
    
  };

  const updateHandler = (prevInput, id, categoryInput) => {

    console.log(prevInput, id, categoryInput);

    if (categoryInput === "title" && prevInput !== input && intialShown === true) {
      inputAdjusted(prevInput, input, id);
    } else if (categoryInput === "carbs" && prevInput !== input && intialShown === true) {
      inputAdjusted(prevInput, input, id);
    } else if (categoryInput === "proteins" && prevInput !== input && intialShown === true) {
      inputAdjusted(prevInput, input, id);
    } else if (categoryInput === "fats" && prevInput !== input && intialShown === true) {
      inputAdjusted(prevInput, input, id);
    } else {
      return;
    }

  };

  return (
    <Fragment>
      <input
        value={!intialShown ? value : input}
        onChange={(e) => {
          changeHandler(e);
        }}
        onBlur={() => {
          updateHandler(value, id, categoryInput);
        }}
      />
    </Fragment>
  );
};

export default BreakfastItemSection;
