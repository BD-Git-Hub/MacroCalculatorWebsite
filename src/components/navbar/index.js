import { Bars, Nav, NavBtn, NavMenu, NavLink } from "./NavbarElements";
import Auth from "./Auth";
import React, { useContext } from "react";
import { authContext } from "../context/AuthContext";
import Profile from "./Profile";
import Logout from "./Logout";
import { Route } from "react-router";
import About from "../pages/About";

const Navbar = () => {
  const authCtx = useContext(authContext);

  let context = <Auth />;

  if (authCtx.isAuth) {
    context = (
      <React.Fragment>
        <NavBtn>
          <Logout />
        </NavBtn>
        <Profile />
      </React.Fragment>
    );
  }

  return (
    <Nav>
      <Bars />
      <NavMenu>
        
        <NavLink to="/about">About</NavLink>
        {!authCtx.isAuth && <NavLink to="/signup">Sign Up</NavLink>}
        <NavLink to="/macros">Macros</NavLink>
      </NavMenu>
      <NavBtn>{context}</NavBtn>
    </Nav>
  );
};

export default Navbar;
