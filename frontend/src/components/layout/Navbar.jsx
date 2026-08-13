import { Link } from "react-router-dom"

import "./Navbar.scss"
import logo from "../../assets/images.jpg"

const Navbar = () => {
  return (
    <div className="navbar-cont">

      <div className="logo">
        <img src= {logo} alt="logo" />
      </div>

     <div className="nav-menu">
       <Link to={"/"}>Home</Link>
       <Link to={"/counter"}>Counter</Link>
      <Link to={"/products"}>Products</Link>
      <Link to={"/todos"}>Todo</Link>
      <Link to={"/calculator"}>Calculator</Link>
      <Link to={"/timer"}>Timer</Link>
      <Link to={"/datatable"}>DataTable</Link>
     </div>


       <div className="nav-auth">
        <Link to={"/login"}>Login</Link>
      <Link to={"/signup"}>Signup</Link>
       </div>


    </div>
  )
}

export default Navbar