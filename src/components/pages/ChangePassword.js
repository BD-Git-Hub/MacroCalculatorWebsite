import { useState, useRef, useContext } from "react";
import { authContext } from "../context/AuthContext";
import {
  StyledCenterContentDiv,
  StyledSizedH1,
  StyledChangePasswordLabel,
  StyledChangePasswordInput,
  StyledChangePasswwordSubmitButton,
  StyledP,
  StyledBlueP,
} from "./PagesElements";
import 'dotenv/config';


const ChangePassword = () => {
  
  document.title = "Change Password Page"
  const authCtx = useContext(authContext);
  const passwordRef = useRef();
  const [isLoading, SetisLoading] = useState(false);
  const [submitted, setSubmitted] = useState();
  const [errorMessage, setErrorMessage] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordChanged, setPasswordChanged] = useState(false);

  const SubmitHandler = (e) => {
    e.preventDefault();
    SetisLoading(true);

    const inputPassword = passwordRef.current.value;

    //add validation for password instead of minlength in input type.


    
    fetch(
      "https://bovindesouzao.korconnect.io/MacroCalculatorAPI/",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCtx.token,
          password: inputPassword,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          SetisLoading(false);
          setSubmitted(true);
          setPasswordChanged(true);

        } else {

          SetisLoading(false);
          setSubmitted(true);
          setPasswordChanged(false);



          return response.json().then((data) => {
            
            let errorMessage = "Authentication failed!";

            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }

            throw new Error(errorMessage);
          });
        }
      })
      .catch((err) => {
        console.log(err.message);
        setErrorMessage(err.message);
      });

      setPasswordInput('');
  };

  return (
    <StyledCenterContentDiv>
      <StyledSizedH1>Change Password</StyledSizedH1>
      <form onSubmit={SubmitHandler}>
        <StyledChangePasswordLabel htmlfor="passwordInput">password: </StyledChangePasswordLabel>
        <StyledChangePasswordInput
          type="password"
          minLength="7"
          ref={passwordRef}
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
          
        ></StyledChangePasswordInput>
        <StyledChangePasswwordSubmitButton type="submit">
          Submit
        </StyledChangePasswwordSubmitButton>
      </form>

      {isLoading && <StyledP>Submitting...</StyledP>}
      {submitted && passwordChanged && (
        <StyledBlueP>Password change successful!</StyledBlueP>
      )}

      {submitted && !passwordChanged &&(
        <StyledP>Password change failed: {errorMessage}</StyledP>
      )}
    </StyledCenterContentDiv>
  );
};

export default ChangePassword;

