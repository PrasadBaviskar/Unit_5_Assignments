import {Link} from "react-router-dom"

export const Navbar = () =>{
    return(<div className="navbar">
        <Link to="/" style={{margin:"10px"}}> Home </Link>
        <Link to="/login" style={{margin:"10px"}}> Login </Link>
        <Link to="/jobs" style={{margin:"10px"}}> Jobs </Link>
    </div>)
}