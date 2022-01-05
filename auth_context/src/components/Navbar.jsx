import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const Navbar = () => {
  const { isAuth, toggleAuth, setToken } = useContext(AuthContext);
  const cred = {
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  };

  const logout = ()=>{
    toggleAuth();
    setToken("");
  }

  const fetchUser = () => {
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cred),
    })
      .then((res) => res.json())
      .then((data) => {
        toggleAuth();
        setToken(data.token);
      });
  };
  //   useEffect(()=>fetchUser(), []);

  return (
    <div className="navbar">
      <div> Context API </div>
      <div>
        
        <button onClick={() => isAuth ?logout(): fetchUser()} className="btn">
          {isAuth ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
};
