import { Bars, Nav, NavBtn, NavMenu, NavLink } from "./NavbarElements";
import { useState} from "react";
import styled from "styled-components";

const Styledbutton = styled.button`
  
`;

const StyledUserInput = styled.input`
  border: 0.1rem solid ${(props) => (props.focusColor ? "red" : "grey")};
`;

const StyledPasswordInput = styled.input`
  border: 0.1rem solid ${(props) => (props.focusColor ? "red" : "grey")};
`;

const Navbar = () => {
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

  return (
    <Nav>
      <Bars />
      <NavMenu>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </NavMenu>
      <NavBtn>
        <form onSubmit={signInHandler}>
          <label htmlFor="username">Username</label>
          <StyledUserInput
            focusColor={emptyUsername}
            type="text"
            value={enteredUsername}
            onChange={(e) => setEnteredUsername(e.target.value)}
            onBlur={blurValidUserInputHandler}
          ></StyledUserInput>
          <label htmlfor="password">Password</label>
          <StyledPasswordInput
            focusColor={emptyPassword}
            onBlur={blurValidPasswordInputHandler}
            type="text"
            value={enteredPassword}
            onChange={(e) => setEnteredPassword(e.target.value)}
          ></StyledPasswordInput>
          <Styledbutton type="submit" disabled={!validUserNameAndPassword}>
            Sign In
          </Styledbutton>
        </form>
        {/* <NavBtnLink to="/signin">Sign In</NavBtnLink> */}
      </NavBtn>
    </Nav>
  );
};

export default Navbar;

// fetch(url, {
//   method: "POST",
//   body: JSON.stringify({
//     email: enteredEmail,
//     password: enteredPassword,
//     returnSecureTaken: true,
//   }),
//   headers: {
//     "Content-Type": "application/JSON",
//   },
// })
//   .then((res) => {
//     setIsloading(false);
//     if (res.ok) {
//       return res.json();
//     } else {
//       return res.json().then((data) => {
//         let errorMessage = "Authentication failed";

//         if (data && data.error && data.error.message) {
//           errorMessage = data.error.message;
//         }
//         throw new Error(errorMessage);
//       });
//     }
//   })
//   .then((data) => {
//     authCtx.login(data.idToken, Date.now() + data.expiresIn * 1000);
//     history.replace("/");
//   })
//   .catch((err) => {
//     alert(err.message);
//   });
