const { createContext, useState } = require("react");

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isAuth, setAuth] = useState(false);
  const [token, setToken] = useState("abcde")

  const toggleAuth = () => {
    // console.log(p);
    setAuth((p)=>!p);
  };
  return (
    <AuthContext.Provider value={{ isAuth, toggleAuth , token, setToken}}>
      {children}
    </AuthContext.Provider>
  );
};
