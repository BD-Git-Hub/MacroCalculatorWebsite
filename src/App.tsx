import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Navbar from "./components/navbar";
import Main from "./components/pages";
import About from "./components/pages/About";
import ChangePassword from "./components/pages/ChangePassword";
import SignUp from "./components/pages/Signup";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route path="/about" exact>
          <About />
        </Route>

        <Route path="/signup" exact>
          <SignUp />
        </Route>

        <Route path="/macros" exact>
          <Main />
        </Route>

        <Route path="/changePassword">
          <ChangePassword />
        </Route>

         <Route path="*">
          <Redirect to="/macros" />
          <Main />
        </Route> 
        

      </Switch>
    </React.Fragment>
  );
}

export default App;
