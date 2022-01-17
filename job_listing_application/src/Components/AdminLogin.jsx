import { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";

export const AdminLogin = () => {
  const navigate = useNavigate();
  const { handleToken } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    handleToken("admin");
    navigate("/ad_dashboard");
  };
  return (
    <>
      <h1> Admin Login here</h1>
      <form onClick={handleSubmit} className="logForm">
        <input type="text" placeholder="Email " />

        <input type="password" placeholder="Password " />

        <input type="submit" value="Login" />
      </form>
    </>
  );
};
