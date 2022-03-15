import { Bars, Navigation, NavBtn, NavMenu, NavLink } from "./NavbarElements";
import Auth from "./Auth";
import React, { useContext } from "react";
import { authContext } from "../context/AuthContext";
import Logout from "./Logout";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";




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
    // <Nav borderDisplay={border}>
    //   <Bars />
    //   <NavMenu>
    //     <NavLink to="/about">About</NavLink>
    //     {!authCtx.isLoggedIn && <NavLink to="/signup">Sign Up</NavLink>}
    //     {authCtx.isLoggedIn && <NavLink to="/changepassword">Change Password</NavLink>}
    //     <NavLink to="/macros">Macros</NavLink>
    //   </NavMenu>
    //   <NavBtn>{context}</NavBtn>
    // </Nav>

    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
};

export default NavigationBar;
