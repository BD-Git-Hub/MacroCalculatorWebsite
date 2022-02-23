import React, { useContext, useState } from "react";
import { authContext } from "../context/AuthContext";
import { StyledPropsbutton, StyledLabel, StyledUserInput, StyledPasswordInput, StyledForm } from './NavbarElements'





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
        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );
        authCtx.login(data.idToken, expirationTime.toISOString());
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <StyledForm onSubmit={signInHandler}>
      <StyledLabel htmlFor="username">Username</StyledLabel>
      <StyledUserInput
        focusColor={emptyUsername}
        type="text"
        value={enteredUsername}
        onChange={(e) => setEnteredUsername(e.target.value)}
        onBlur={blurValidUserInputHandler}
      ></StyledUserInput>
      <StyledLabel htmlFor="password">Password</StyledLabel>
      <StyledPasswordInput
        focusColor={emptyPassword}
        onBlur={blurValidPasswordInputHandler}
        type="password"
        value={enteredPassword}
        onChange={(e) => setEnteredPassword(e.target.value)}
      ></StyledPasswordInput>
      <StyledPropsbutton

        disabledFontColor={validUserNameAndPassword}
        type="submit"
        disabled={!validUserNameAndPassword}
        onClick={loginHandler}
      >
        Sign In
      </StyledPropsbutton>
    </StyledForm>
  );
};

export default Auth;
