import { Fragment, useRef } from "react";
import styled from "styled-components";

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

const StyledInputDiv = styled.div`
  background-color: blue;
`;

const Main = () => {
  const inputRef = useRef();

  const addBtnHandler = () => {

    //send data

    //clear input field
    
  };

  return (
    <Fragment>
      <StyledDiv>
        <StyledInput type="text" ref={inputRef}></StyledInput>
        <StyledInputButton onClick={addBtnHandler}>Add</StyledInputButton>
        <Styledh1>TO DO LIST:</Styledh1>
      </StyledDiv>
      <StyledInputDiv></StyledInputDiv>
    </Fragment>
  );
};

export default Main;
