import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className>
      
 <hi>
 <nav className='nav'>
  <div>Welcome!</div>
 <Link className='Link' to="/Home">Home</Link>
  <Link className='Link' to="about">About</Link>
  <Link className='Link' to="Product">Product</Link>
  <Link className='Link' to="Services">Services</Link>
 </nav>
 </hi>

    </div>
  )
}
export default Header