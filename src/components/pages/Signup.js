import { useRef, useState } from "react";
import { StyledSignUpDiv, StyledSizedH1, StyledSignUpLabel, StyledSignUpInput, StyledSignUpSubmitButton, StyledCenterContentDiv, StyledP, StyledAboutSpan} from './PagesElements'



const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const [isLoading, setIsloading] = useState(false);
  const [accCreated, setAccCreated] = useState();
  const [submitted, setSubmitted] = useState();
  const [errorMessage, setErrorMessage] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

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
          setAccCreated(true);
          setIsloading(false);

          return response.json();

        } else {
          return response.json().then((data) => {

        setIsloading(false);
        setSubmitted(true);
        setAccCreated(false);


            let errorMessage = "Authentication failed!";
            

            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        
        
      })
      .catch((err) => {
        console.log(err.message);
        setErrorMessage(err.message);


      });

      setEmailInput('')
      setPasswordInput('')
  };

  return (
    <StyledSignUpDiv>
      <StyledCenterContentDiv>

      <StyledSizedH1>Sign up Page</StyledSizedH1>
      <form onSubmit={submitHandler}>
        <StyledSignUpLabel>Email: </StyledSignUpLabel>
        <StyledSignUpInput type="text" ref={emailRef} value={emailInput} onChange={(e) => setEmailInput(e.target.value)}></StyledSignUpInput>

        <StyledSignUpLabel>Password: </StyledSignUpLabel>
        <StyledSignUpInput type="password" ref={passwordRef} value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)}></StyledSignUpInput>

        {!isLoading && <StyledSignUpSubmitButton type="submit">Create Account</StyledSignUpSubmitButton>}
        {isLoading && <StyledP>Loading...</StyledP>}
        {accCreated  && <StyledP>Sign up successful, <StyledAboutSpan>please log in.</StyledAboutSpan></StyledP>}
        {submitted && !accCreated && 
        <StyledP>{errorMessage} - Sign up failed, please try again.</StyledP>
        }
        


      </form>
      </StyledCenterContentDiv>
    </StyledSignUpDiv>
  );
};

export default SignUp;
