import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart } from "react-icons/ai";
import Cart from './Cart'
import { useStateContext } from '../../context/StateContext';
const Navbar = () => {
  const {showCart, setShowCart, totalQuantity} = useStateContext();
  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link to={'/'}>Falk Store</Link>
      </p>
      <button type='button' className='cart-icon' onClick={()=>setShowCart(true)}><AiOutlineShoppingCart/><span className='cart-item-qty'>{totalQuantity}</span></button>
      {showCart && <Cart/>}
    </div>
  )
}

export default Navbar