import styled from "styled-components";

export const StyledDiv = styled.div`
  background-color: #222831;
`;

export const StyledInput = styled.input`
  width: 15%;
  padding: 2rem 3rem;
  box-sizing: border-box;
  margin-left 3rem;
  &:focus {
    box-shadow 0 0 10px #00ADB5;
  }
`;

export const StyledInputButton = styled.input.attrs({
  type: "submit",
  value: "SUBMIT",
})`
  width: 15%;
  padding: 2rem 3rem;
  margin-left: 1rem;
`;



export const StyledTodoDiv = styled.div`
  background-color: #d4f1f4;
`;

export const StyledLabel = styled.label`
  color: #eeeeee;
`;

export const StyledDivFlex = styled.div`
        display: 'flex',
        justifyContent: 'Right',
        alignItems: 'Right',
        height: '100vh'

`;
