import React, { useContext } from "react";
import { authContext } from "../context/AuthContext";

import { StyledButton } from "./NavbarElements";



const Logout = () => {
  const authCtx = useContext(authContext);

  return (
    <div>
      <StyledButton onClick={authCtx.logout}>Log Out</StyledButton>
    </div>
  );
};

export default Logout;
