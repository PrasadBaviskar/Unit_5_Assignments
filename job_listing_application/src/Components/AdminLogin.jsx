import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

export const AdminLogin = () => {
    const {handleToken} = useContext(AuthContext)
  return (
    <>
      <h1> Admin Login here</h1>
      <input type="text" placeholder="Email " /> <br /><br />
      <input type="password" placeholder="Password " /><br /><br />
      <button onClick={()=>handleToken("admin")} > Login </button>
    </>
  );
};
