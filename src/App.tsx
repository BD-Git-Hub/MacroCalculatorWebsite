import React, { useContext } from "react";
import { Redirect, Route, Switch } from "react-router";
import { authContext } from "./components/context/AuthContext";
import GlobalStyle from "./components/GlobalStyles";
import NavigationBar from "./components/navbar";
import Main from "./components/pages";
import About from "./components/pages/About";
import ChangePassword from "./components/pages/ChangePassword";
import NotLoggedIn from "./components/pages/NotLoggedIn";
import SignUp from "./components/pages/Signup";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const authCtx = useContext(authContext);
  return (
    <React.Fragment>
      <GlobalStyle/>
      <NavigationBar />
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
          {!authCtx.token && <NotLoggedIn/>}
         
        </Route>

        <Route path="/changepassword">
          {authCtx.token &&   <ChangePassword />}
          {!authCtx.token && <NotLoggedIn/>}
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
