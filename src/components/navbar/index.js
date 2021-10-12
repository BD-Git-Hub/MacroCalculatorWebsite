import { Bars, Nav, NavBtn, NavBtnLink, NavMenu, NavLink } from "./NavbarElements";


const Navbar = () => {
  return (
    <Nav>
      <Bars />
      <NavMenu>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </NavMenu>
      <NavBtn>
        <NavBtnLink to="/signin">Sign In</NavBtnLink>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
