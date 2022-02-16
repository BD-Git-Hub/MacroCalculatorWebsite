import { useRef, useState } from "react";
import { StyledDivFlex } from "./PagesElements";



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
    <StyledDivFlex>
      <h1>Sign up Page</h1>
      <form onSubmit={submitHandler}>
        <label>email: </label>
        <input type="text" ref={emailRef}></input>

        <label>password: </label>
        <input type="password" ref={passwordRef}></input>

        {!isLoading && <button type="submit">Create Account</button>}
        {isLoading && <p>Loading...</p>}
      </form>
    </StyledDivFlex>
  );
};

export default SignUp;
