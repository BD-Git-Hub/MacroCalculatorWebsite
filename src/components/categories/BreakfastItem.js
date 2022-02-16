import React, { Fragment, useEffect, useState, useRef } from "react";

const BreakfastItemSection = (props) => {
  const prevInput = props.value;
  const id = props.id;
  const inputAdjusted = props.inputAdjusted;
  const categoryInput = props.categoryInput;

  const [intialShown, setIntialShown] = useState(false);
  const [input, setInput] = useState(prevInput);

  const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  };

  const previousInput = usePrevious(input);

  const changeHandler = (e) => {
    const input = e.target.value;
    setIntialShown(true);
    setInput(input);
  };

  const updateHandler = (prevInput, id, categoryInput) => {
    if (input === "") {
      setInput(previousInput);
    } else if (input !== prevInput && input !== "") {
      inputAdjusted(prevInput, input, id, categoryInput);
    } else if (input === prevInput) {
      return;
    }
  };

  return (
    <Fragment>
      <input
        value={!intialShown ? prevInput : input}
        onChange={(e) => {
          changeHandler(e);
        }}
        onBlur={() => {
          updateHandler(prevInput, id, categoryInput);
        }}
      />
    </Fragment>
  );
};

export default BreakfastItemSection;
