import { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";

export const Login = () => {
  const { handleToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    handleToken("a1a1a1");
    navigate(-1);
  };
  return (
    <>
      <h1> Login here</h1>
      <form onSubmit={handleSubmit} className="logForm">
        <input type="text" placeholder="Email " />

        <input type="password" placeholder="Password " />

        <input type="submit" value="Login" />
      </form>
    </>
  );
};
