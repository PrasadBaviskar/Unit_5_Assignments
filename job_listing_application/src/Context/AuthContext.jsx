import { createContext, useState } from "react";

export const AuthContext = createContext({ token: "", handleToken: () => {} });

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState("aaa");
  const handleToken = (token) => {
    setToken(token);
  };

  // const [userType, setUserType] = useState("user");
  // const handleUser = (type) => {
  //   setUserType(type);
  // };

  return (
    <AuthContext.Provider value={{ token, handleToken }}>
      {children}
    </AuthContext.Provider>
  );
};
