import React, { useContext } from "react";
import { Redirect, Route, Switch } from "react-router";
import { authContext } from "./components/context/AuthContext";
import Navbar from "./components/navbar";
import Main from "./components/pages";
import About from "./components/pages/About";
import ChangePassword from "./components/pages/ChangePassword";
import SignUp from "./components/pages/Signup";

function App() {
  const authCtx = useContext(authContext);
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route path="/about" exact>
          <About />
        </Route>

        <Route path="/signup" exact>
          {!authCtx.token &&<SignUp />}
          {authCtx.token &&  <Redirect to="/macros" />}
                   
        </Route>

        <Route path="/macros" exact>
          {authCtx.token && <Main />}
        </Route>

        <Route path="/changepassword">
          <ChangePassword />
        </Route>

        <Route path="*">
          <Redirect to="/signup" />

          <Main />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
