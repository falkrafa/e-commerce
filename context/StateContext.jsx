import React,{createContext,useContext,useState,useEffect} from "react";
import {toast} from 'react-hot-toast'

const Context = createContext();

export const StateContext = ({children})=>{
  const [showCart, setShowCart] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalQuantity, setTotalQuantity] = useState(0)
  const [qty,setQty] = useState(1);


  const addQty = () =>{
    setQty((prevQty)=> prevQty+1)
  }
  const decQty = () =>{
    setQty((prevQty)=> {
      if(prevQty - 1 < 1) return 1;
      return prevQty-1;
    })
  }

  const AddCart = (product,quantity) =>{
    const checkProduct = cartItems.find((item)=> item._id === product._id)

    setTotalPrice((prevTotal)=> prevTotal + product.price * quantity)
    setTotalQuantity((prevQuantity)=> prevQuantity +  quantity)
    if(checkProduct){

      const updateItem = cartItems.map((cartProduct)=>{
        if(cartProduct._id === product._id) return {...cartProduct, quantity: cartProduct.quantity + quantity}
      })
      setCartItems(updateItem)
      toast.success(`${qty} ${product.name} added to the cart`)
    }else{
      product.quantity = quantity
      setCartItems([...cartItems,{...product}])
      toast.success(`${qty} ${product.name} added to the cart`)
    }
  }
  const toggleCartItemQty = (id, value) => {
    const updatedCartItems = [...cartItems];
  
    const index = updatedCartItems.findIndex((item) => item._id === id);
    const itemToUpdate = updatedCartItems[index];
  
    if (index !== -1) {
      if (value === 'inc') {
        updatedCartItems[index] = { ...itemToUpdate, quantity: itemToUpdate.quantity + 1 };
        setTotalPrice((prevTotal) => prevTotal + itemToUpdate.price);
        setTotalQuantity((prevQuantity) => prevQuantity + 1);
      } else if (value === 'dec' && itemToUpdate.quantity > 1) {
        updatedCartItems[index] = { ...itemToUpdate, quantity: itemToUpdate.quantity - 1 };
        setTotalPrice((prevTotal) => prevTotal - itemToUpdate.price);
        setTotalQuantity((prevQuantity) => prevQuantity - 1);
      }
  
      setCartItems(updatedCartItems);
    }
  };
  
  return (
    <Context.Provider value={{
      showCart,cartItems,totalPrice,totalQuantity,qty,addQty,decQty, AddCart, setShowCart, toggleCartItemQty
    }}>
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context)