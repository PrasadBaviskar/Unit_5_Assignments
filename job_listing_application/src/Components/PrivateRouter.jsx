import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

export const PrivateRoute = ({ children }) => {
  const { token, userType } = useContext(AuthContext);
//   console.log(userType);
  if (!token) {
    return <Navigate to="/login" />;
  }
  return children;
};
