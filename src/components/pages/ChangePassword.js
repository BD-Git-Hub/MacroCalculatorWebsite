import { useState, useRef, useContext } from "react";
import { authContext } from "../context/AuthContext";
import { useHistory } from "react-router";

const ChangePassword = () => {
    const history = useHistory();
  const authCtx = useContext(authContext)
  const passwordRef = useRef();
  const [isLoading, SetisLoading] = useState(false);


  const SubmitHandler = (e) => {
    e.preventDefault();
    SetisLoading(true);

    const inputPassword = passwordRef.current.value;

    //add validation for password instead of minlength in input type.

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDKx4s2Yj2na069sDc3FOtDc7NYnHq7-XU', {
        method: 'POST',
        body: JSON.stringify({
            idToken: authCtx.token,
            password: inputPassword,
            returnSecureToken: false
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        //always success
        SetisLoading(false);
        history.replace('/')
    })
  };

  return (
    <div>
      <h1>Change Password</h1>
      <form onSubmit={SubmitHandler}>
        <label>password: </label>
        <input type="password" minLength="7" ref={passwordRef}></input>
        <button type="submit">Submit</button>
      </form>

      {isLoading && <p>Submitting...</p>}
      {!isLoading && <p>password change successful!</p>}

    </div>
  );
};

export default ChangePassword;
