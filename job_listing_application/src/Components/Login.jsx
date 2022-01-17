import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

export const Login = () => {
    const {handleToken} = useContext(AuthContext)
  return (
    <>
      <h1> Login here</h1>
      <input type="text" placeholder="Email " /> <br /><br />
      <input type="password" placeholder="Password " /><br /><br />
      <button onClick={()=>handleToken("1a2cv3")} > Login </button>
    </>
  );
};
