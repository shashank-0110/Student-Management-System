import React from 'react'
import './Navbar.css';
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className='nav'><ul>
    <li><Link to="/Home">HOME</Link></li>
    <li><Link to="/AllStudents">STUDENT</Link></li>
    <li><Link to="/Professor">PROFESSOR</Link></li>
    <li><Link to="/Branch">BRANCH</Link></li>
    
  </ul>
  </div>

  )
}

export default Navbar