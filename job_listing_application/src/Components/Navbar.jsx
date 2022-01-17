import {Link} from "react-router-dom"

export const Navbar = () =>{
    return(<div className="navbar">
        <Link to="/" style={{margin:"10px"}}> Home </Link>
        <Link to="/login" style={{margin:"10px"}}> Login </Link>
        <Link to="/jobs" style={{margin:"10px"}}> Jobs </Link>
        <Link to="/ad_login" style={{margin:"10px"}}> Admin Login </Link>
    </div>)
}