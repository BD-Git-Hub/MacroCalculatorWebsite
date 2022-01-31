import React, { Fragment, useState } from "react";

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

  const [intialTitleShown, setIntialTitleShown] = useState(false);
  const [intialCarbShown, setIntialCarbShown] = useState(false);

  const [titleInput, setTitleInput] = useState();
  const [carbsInput, setCarbsInput] = useState();

  const adjustHandler = (e, category) => {
    if (category === "title") {
      setIntialTitleShown(true);
      setTitleInput(e.target.value);
    } else if (category === "carbs") {
      setIntialCarbShown(true);
      setCarbsInput(e.target.value);
    } else {
      return;
    }
  };

  const updateHandler = (prevInput, id, category) => {
    if (category === "title" && prevInput !== titleInput) {
      inputAdjusted(prevInput, titleInput, id);
    } else if (category === "carbs" && prevInput !== carbsInput) {
      inputAdjusted(prevInput, carbsInput, id);
    }
    return;
  };

  const item = macroData.map((macroData) => {
    let holder = "";
    holder = (
      <Fragment key={macroData[5]}>
        <div>
          <p>
            Title:
            <input
              value={!intialTitleShown ? macroData[0] : titleInput}
              onChange={(e) => {
                adjustHandler(e, "title");
              }}
              onBlur={updateHandler.bind(
                null,
                macroData[0],
                macroData[5],
                "title"
              )} //macroData[0] is titleData from server
            />
          </p>

          <p>
            Carbohydrates:
            <input
              value={!intialCarbShown ? macroData[1] : carbsInput}
              onChange={(e) => {
                adjustHandler(e, "carbs");
              }}
              onBlur={updateHandler.bind(
                null,
                macroData[1],
                macroData[5],
                "carbs"
              )}
            />
          </p>
          <p>Proteins:<input value={'#'} onChange={'#'} onBlur={'#'}/></p>
          <p>Fats:{macroData[3]}</p>
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
