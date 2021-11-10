import React, { useState } from "react";

export const authContext = React.createContext({
  token: '',
  isAuth: false,
  login: () => {},
});

const AuthContext = (props) => {
  const [isAuth, setIsAuth] = useState(false);

  const loginHandler = () => {
    if (!isAuth) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  };

  return (
    <authContext.Provider value={{ login: loginHandler, isAuth: isAuth }}>
      {props.children}
    </authContext.Provider>
  );
};

export default AuthContext;
