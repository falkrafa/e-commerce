import React,{useRef} from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping} from 'react-icons/ai';
import {TiDeleteOutline} from 'react-icons/ti'
import toast from 'react-hot-toast';
import { useStateContext } from '../../context/StateContext';
import { urlFor } from '../../lib/client';

const Cart = () => {
  const cartRef = useRef()
  const {totalPrice, totalQuantity, cartItems, setShowCart, toggleCartItemQty, removeCartItemById} = useStateContext()
  return (
    <div className='cart-wrapper' ref={cartRef} >
      <div className='cart-container'>
        <button type='button' className='cart-heading' onClick={()=>setShowCart(false)}>
          <AiOutlineLeft/> 
          <span className='heading'>Your Cart</span>
          <span className='cart-num-items'>({totalQuantity} {totalQuantity > 1? 'items':'item'})</span>
        </button>
        {cartItems.length < 1 && (
          <div className='empty-cart'>
            <AiOutlineShopping size={150}/>
            <h3>Your shopping bag is empty</h3>
            <Link to={'/'}>
              <button type='button' onClick={()=>setShowCart(false)} className='btn'>Continue Shopping</button>
            </Link>
          </div>
        )}
        <div className='product-container'>
          {cartItems.length >=1 && cartItems.map((item)=>(
            <div className='product' key={item._id}>
              <img src={urlFor(item?.image[0])} className='cart-product-image'/>
              <div className='item-desc'>
                <div className='flex top'>
                  <h5>{item.name}</h5>
                  <h4>${item.price}</h4>
                </div>
                <div className='flex bottom'>
                  <div>
                    <p className='quantity-desc'>
                      <span className='minus' onClick={()=>toggleCartItemQty(item._id,'dec')} style={{color:'black'}}><AiOutlineMinus/></span>
                      <span className='num'>{item.quantity}</span>
                      <span className='plus' onClick={()=>toggleCartItemQty(item._id,'inc')} style={{color:'black'}}><AiOutlinePlus/></span>
                    </p>
                  </div>
                  <button type='button' className='remove-item' onClick={()=>removeCartItemById(item._id)}><TiDeleteOutline/></button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {cartItems.length >=1 && (
          <div  className='cart-bottom'>
            <div className='total'>
              <h3>Subtotal:</h3>
              <h3>${totalPrice}</h3>
            </div>
            <div className='btn-container'>
              <button type='button' className='btn' onClick={''}>Proceed to checkout</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart