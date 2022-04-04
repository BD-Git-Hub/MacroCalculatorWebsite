import React, { useContext } from "react";
import { authContext } from "../context/AuthContext";

import { StyledButton, StyledLogOutDiv } from "./NavbarElements";



const Logout = () => {
  const authCtx = useContext(authContext);

  return (
    <StyledLogOutDiv>
      <StyledButton onClick={authCtx.logout}>Log Out</StyledButton>
    </StyledLogOutDiv>
  );
};

export default Logout;
