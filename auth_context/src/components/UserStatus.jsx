import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
export const UserStatus = () =>{
    const {isAuth} = useContext(AuthContext)
    
    return(<>
        <h1> {isAuth?"User Is Logged In...":"Index Page"}  </h1>
    </>)
} 