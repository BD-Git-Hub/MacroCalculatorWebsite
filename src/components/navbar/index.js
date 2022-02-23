import { Bars, Nav, NavBtn, NavMenu, NavLink } from "./NavbarElements";
import Auth from "./Auth";
import React, { useContext } from "react";
import { authContext } from "../context/AuthContext";
import Logout from "./Logout";

const Navbar = () => {
  const authCtx = useContext(authContext);

  let context = <Auth />;

  let border = false;

 



  if (authCtx.isLoggedIn) {
    border = true;
    context = (
      <React.Fragment>
        <NavBtn>
          <Logout />
        </NavBtn>
        
      </React.Fragment>
    );
  } else {
    border = false;
  }

  return (
    <Nav borderDisplay={border}>
      <Bars />
      <NavMenu>
        <NavLink to="/about">About</NavLink>
        {!authCtx.isLoggedIn && <NavLink to="/signup">Sign Up</NavLink>}
        {authCtx.isLoggedIn && <NavLink to="/changepassword">Change Password</NavLink>}
        <NavLink to="/macros">Macros</NavLink>
      </NavMenu>
      <NavBtn>{context}</NavBtn>
    </Nav>
  );
};

export default Navbar;
