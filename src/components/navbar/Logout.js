import React, { Fragment, useContext } from "react";
import { authContext } from "../context/AuthContext";

import { StyledButton, StyledLogOutDiv } from "./NavbarElements";



const Logout = () => {
  const authCtx = useContext(authContext);

  return (
    //<StyledLogOutDiv>
    <Fragment>
      <StyledButton onClick={authCtx.logout}>Log Out</StyledButton>
      </Fragment>
    //</StyledLogOutDiv>
  );
};

export default Logout;
