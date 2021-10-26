import React, { useState, useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";

const Styledbutton = styled.button``;

const StyledUserInput = styled.input`
  border: 0.1rem solid ${(props) => (props.focusColor ? "red" : "grey")};
`;

const StyledPasswordInput = styled.input`
  border: 0.1rem solid ${(props) => (props.focusColor ? "red" : "grey")};
`;

const Auth = () => {

  const authContext = useContext(AuthContext)

  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [clickedUsernameInput, setClickedUsernameInput] = useState(false);
  const [clickedPasswordInput, setClickedPasswordInput] = useState(false);

  const emptyUsername = enteredUsername.trim() === "" && clickedUsernameInput;
  const emptyPassword = enteredPassword.trim() === "" && clickedPasswordInput;
  const validUserNameAndPassword = enteredUsername && enteredPassword;

  const signInHandler = (e) => {
    e.preventDefault();

    if (!validUserNameAndPassword) {
      return;
    }

    setEnteredUsername("");
    setEnteredPassword("");
    setClickedUsernameInput(false);
    setClickedPasswordInput(false);
  };

  const blurValidUserInputHandler = () => {
    setClickedUsernameInput(true);
  };

  const blurValidPasswordInputHandler = () => {
    setClickedPasswordInput(true);
  };

  const loginHandler = () => {
      authContext.login();
  }


  return (
    <form onSubmit={signInHandler}>
      <label htmlFor="username">Username</label>
      <StyledUserInput
        focusColor={emptyUsername}
        type="text"
        value={enteredUsername}
        onChange={(e) => setEnteredUsername(e.target.value)}
        onBlur={blurValidUserInputHandler}
      ></StyledUserInput>
      <label htmlFor="password">Password</label>
      <StyledPasswordInput
        focusColor={emptyPassword}
        onBlur={blurValidPasswordInputHandler}
        type="text"
        value={enteredPassword}
        onChange={(e) => setEnteredPassword(e.target.value)}
      ></StyledPasswordInput>
      <Styledbutton type="submit" disabled={!validUserNameAndPassword} onClick={loginHandler}>
        Sign In
      </Styledbutton>
    </form>
  );
};

export default Auth;
