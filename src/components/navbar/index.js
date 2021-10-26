import { Bars, Nav, NavBtn, NavMenu, NavLink } from "./NavbarElements";
import Auth from "./Auth";
import Profile from "./Profile";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";


const Navbar = () => {
  const authContext = useContext(AuthContext)

  let content = <Auth/>

  if(authContext.isAuth) {
    content = <Profile/>

  }
  

  return (
    <Nav>
      <Bars />
      <NavMenu>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </NavMenu>
      <NavBtn>
         {content}
        
      
        
        
      </NavBtn>
    </Nav>
  );
};

export default Navbar;


