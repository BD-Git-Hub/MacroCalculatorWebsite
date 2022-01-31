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
  const [intialCarbsShown, setIntialCarbsShown] = useState(false);
  const [intialProteinsShown, setIntialProteinsShown] = useState(false);
  const [intialFatsShown, setIntialFatsShown] = useState(false);

  const [titleInput, setTitleInput] = useState();
  const [carbsInput, setCarbsInput] = useState();
  const [proteinsInput, setProteinsInput] = useState();
  const [fatsInput, setFatsInput] = useState();

  const adjustHandler = (e, category) => {
    if (category === "title") {
      setIntialTitleShown(true);
      setTitleInput(e.target.value);
    } else if (category === "carbs") {
      setIntialCarbsShown(true);
      setCarbsInput(e.target.value);
    } else if (category === "proteins") {
      setIntialProteinsShown(true);
      setProteinsInput(e.target.value);
    } else if (category === "fats") {
      setIntialFatsShown(true);
      setFatsInput(e.target.value);
    } else {
      return;
    }
  };

  const updateHandler = (prevInput, id, category) => {
    if (category === "title" && prevInput !== titleInput) {
      inputAdjusted(prevInput, titleInput, id);
    } else if (category === "carbs" && prevInput !== carbsInput) {
      inputAdjusted(prevInput, carbsInput, id);
    } else if (category === "proteins" && prevInput !== proteinsInput) {
      inputAdjusted(prevInput, proteinsInput, id);
    } else if (category === 'fats' && prevInput !== fatsInput) {
      inputAdjusted(prevInput, fatsInput, id);
    } else {
      
      return;
    }
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
              value={!intialCarbsShown ? macroData[1] : carbsInput}
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
          <p>
            Proteins:
            <input
              value={!intialProteinsShown ? macroData[2] : proteinsInput}
              onChange={(e) => {
                adjustHandler(e, "proteins");
              }}
              onBlur={updateHandler.bind(
                null,
                macroData[2],
                macroData[5],
                "proteins"
              )}
            />
          </p>
          <p>
            Fats:
            <input
              value={!intialFatsShown ? macroData[3] : fatsInput}
              onChange={(e) => {
                adjustHandler(e, "fats");
              }}
              onBlur={updateHandler.bind(
                null,
                macroData[3],
                macroData[5],
                "fats"
              )}
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
