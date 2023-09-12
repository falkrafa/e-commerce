import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart } from "react-icons/ai";
const Navbar = () => {
  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link to={'/'}>Falk Store</Link>
      </p>
      <button type='button' className='cart-icon' onClick=''><AiOutlineShoppingCart/><span className='cart-item-qty'>1</span></button>
    </div>
  )
}

export default Navbar