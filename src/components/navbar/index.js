import { Bars, Navigation, NavBtn, NavMenu, NavLink, NavLinkSignUp } from "./NavbarElements";
import Auth from "./Auth";
import React, { useContext } from "react";
import { authContext } from "../context/AuthContext";
import Logout from "./Logout";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const NavigationBar = () => {
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
    // <Navigation borderDisplay={border}>
    //   <Bars />
    //   <NavMenu>
    //     <NavLink to="/about">About</NavLink>
    //     {!authCtx.isLoggedIn && <NavLink to="/signup">Sign Up</NavLink>}
    //     {authCtx.isLoggedIn && (
    //       <NavLink to="/changepassword">Change Password</NavLink>
    //     )}
    //     <NavLink to="/macros">Macros</NavLink>
    //   </NavMenu>
    //   <NavBtn>{context}</NavBtn>
    // </Navigation>

    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="">Macro Calculator</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-0">
            <NavLink to="/about">About</NavLink>
            {!authCtx.isLoggedIn && <NavLinkSignUp to="/signup">Sign Up</NavLinkSignUp>}
            {authCtx.isLoggedIn && (
              <NavLink to="/changepassword">Change Password</NavLink>
            )}
            <NavLink to="/macros">Macros</NavLink>
          {context}

         

            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
