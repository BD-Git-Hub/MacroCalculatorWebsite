import { Fragment, useCallback, useRef, useState } from "react";
import styled from "styled-components";
import UserItems from "../userItems/UserItems";

const StyledDiv = styled.div`
  background-color: red;
  width: 100%;
  margin: 0 auto;
`;

const StyledInput = styled.input`
  width: 80%;
  padding: 2rem 3rem;
  box-sizing: border-box;
  margin-left 3rem;
`;

const StyledInputButton = styled.button`
  width: 15%;
  padding: 2rem 3rem;
  margin-left: 1rem;
`;

const Styledh1 = styled.h1`
  text-align: center;
  font-size: 3rem;
`;

const StyledTodoDiv = styled.div`
  background-color: #d4f1f4;
`;

const Main = () => {
  const inputRef = useRef();
  const [userInputData, setUserInputData] = useState([{}]);
  const [input, setInput] = useState("");

  const addBtnHandler = () => {
    //check data in input field
    const inputData = inputRef.current.value;

    if (!inputData || !userInputData) {
      return;
    }

    //set
    setUserInputData((prevState) => {
      return [
        ...prevState,
        { key: Math.random().toString(), userData: inputData },
      ];
    });

    //clear input field
    setInput("");
  };

  const removeItemHandler = (id) => {
    const filteredUserData = userInputData.filter((Data) => Data.key !== id);

    setUserInputData(filteredUserData);
  };

  return (
    <Fragment>
      <StyledDiv>
        <StyledInput
          type="text"
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></StyledInput>
        <StyledInputButton onClick={addBtnHandler}>Add</StyledInputButton>
        <Styledh1>TO DO LIST:</Styledh1>
      </StyledDiv>
      <StyledTodoDiv>
        <UserItems userInputData={userInputData} onRemove={removeItemHandler} />
      </StyledTodoDiv>
    </Fragment>
  );
};

export default Main;
