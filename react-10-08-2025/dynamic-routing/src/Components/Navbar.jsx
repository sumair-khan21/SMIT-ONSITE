import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const navLinkStyles = ({ isActive }) => ({
  color: isActive ? "red" : "black",
  fontWeight: isActive ? "bold" : "normal",
  textDecoration: "none",
  marginRight: "10px",
});

    
  return (
    <>
    {/* nested routes */}
    {/* <div>
        <h1>logo</h1>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                
                <Link to="about">About</Link>
            </li>
            <li>
                
                <Link to="projects">Projects</Link>
            </li>
        </ul>
    </div> */}

    {/* dynamic route */}
            <nav>
                <NavLink to='/' style={navLinkStyles}>Home</NavLink>
                <NavLink to='/users' style={navLinkStyles}>Users</NavLink>
            </nav>
    </>
  )
}

export default Navbar
