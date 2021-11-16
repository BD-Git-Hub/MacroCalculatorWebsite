import { Bars, Nav, NavBtn, NavMenu, NavLink } from "./NavbarElements";
import Auth from "./Auth";
import React, { useContext } from "react";
import { authContext } from "../context/AuthContext";
import Profile from "./Profile";
import Logout from "./Logout";

const Navbar = () => {
  const authCtx = useContext(authContext);

  let context = <Auth />;

  if (authCtx.isLoggedIn) {
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
        {!authCtx.isLoggedIn && <NavLink to="/signup">Sign Up</NavLink>}
        {authCtx.isLoggedIn && <NavLink to="/changePassword">Change Password</NavLink>}
        <NavLink to="/macros">Macros</NavLink>
      </NavMenu>
      <NavBtn>{context}</NavBtn>
    </Nav>
  );
};

export default Navbar;
