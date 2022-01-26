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

  const [firstShown, setFirstShown] = useState(false);
  const [titleInput, setTitleInput] = useState();

  const adjustHandler = (e) => {
    setFirstShown(true);
    setTitleInput(e.target.value);
  };

  const updateInput = (prevTitle) => {
    if (prevTitle === titleInput) {
      return;
    }
    inputAdjusted(prevTitle, titleInput)

  };

  const item = macroData.map((macroData) => {
    let holder = "";
    holder = (
      <Fragment key={macroData[5]}>
        <div>
          <p>
            Title:
            <input
              value={!firstShown ? macroData[0] : titleInput}
              onChange={adjustHandler}
              onBlur={updateInput.bind(null, macroData[0])}
            />
          </p>

          <p>Title:{macroData[0]}</p>
          <p>Carbohydrates:{macroData[1]}</p>
          <p>Proteins:{macroData[2]}</p>
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
