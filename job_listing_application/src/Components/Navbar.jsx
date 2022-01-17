import {Link} from "react-router-dom"

export const Navbar = () =>{
    return(<div className="navbar">
        <Link to="/home" style={{margin:"10px"}}> Home </Link>
        <Link to="/home" style={{margin:"10px"}}> Login </Link>
    </div>)
}