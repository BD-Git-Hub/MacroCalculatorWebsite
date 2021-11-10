import React, { useContext, useState } from "react";
import styled from "styled-components";
import { authContext } from "../context/AuthContext";

const Styledbutton = styled.button``;

const StyledUserInput = styled.input`
  border: 0.1rem solid ${(props) => (props.focusColor ? "red" : "grey")};
`;

const StyledPasswordInput = styled.input`
  border: 0.1rem solid ${(props) => (props.focusColor ? "red" : "grey")};
`;

const Auth = () => {
  const authCtx = useContext(authContext);

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
    authCtx.login();

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDKx4s2Yj2na069sDc3FOtDc7NYnHq7-XU",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredUsername,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return response.json().then((data) => {
            let errorMessage = "Authentication failed!";

            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

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
        type="password"
        value={enteredPassword}
        onChange={(e) => setEnteredPassword(e.target.value)}
      ></StyledPasswordInput>
      <Styledbutton
        type="submit"
        disabled={!validUserNameAndPassword}
        onClick={loginHandler}
      >
        Sign In
      </Styledbutton>
    </form>
  );
};

export default Auth;
