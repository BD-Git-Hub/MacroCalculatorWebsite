import React, { useContext } from "react";
import { useHistory } from "react-router";
import { authContext } from "../context/AuthContext";

const Logout = () => {
  const authCtx = useContext(authContext);

  return (
    <div>
      <button onClick={authCtx.logout}>Log Out</button>
    </div>
  );
};

export default Logout;
