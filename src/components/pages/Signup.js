import { useRef, useState } from "react";
import { StyledSignUpDiv, StyledAboutH1, StyledSignUpLabel, StyledSignUpInput, StyledSignUpButton, StyledSignUpContentDiv, StyledAboutP} from './PagesElements'



const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const [isLoading, setIsloading] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    //add validation to email being valid
    //add validation for password being 5 letters or more, has numbers, 1 capital

    setIsloading(true);

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDKx4s2Yj2na069sDc3FOtDc7NYnHq7-XU",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
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
        setIsloading(false);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <StyledSignUpDiv>
      <StyledSignUpContentDiv>

      <StyledAboutH1>Sign up Page</StyledAboutH1>
      <form onSubmit={submitHandler}>
        <StyledSignUpLabel>Email: </StyledSignUpLabel>
        <StyledSignUpInput type="text" ref={emailRef}></StyledSignUpInput>

        <StyledSignUpLabel>Password: </StyledSignUpLabel>
        <StyledSignUpInput type="password" ref={passwordRef}></StyledSignUpInput>

        {!isLoading && <StyledSignUpButton type="submit">Create Account</StyledSignUpButton>}
        {isLoading && <StyledAboutP>Loading...</StyledAboutP>}
      </form>
      </StyledSignUpContentDiv>
    </StyledSignUpDiv>
  );
};

export default SignUp;
