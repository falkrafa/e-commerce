import React, { useState } from 'react'
import Product from './Product'

const ProductSection = ({ product }) => {

  const [allProduct, setAllproduct] = useState(false);
  const [selling, setSelling] = useState(true);

  const handleBestSellingClick = () => {
    setAllproduct(false)
    setSelling(true)
  };

  const handleAllProductsClick = () => {
    setAllproduct(true)
    setSelling(false)
  };

  return (
    <>
      <div className='products-section'>
        <div className='products-heading'>
          <button className={`${selling ? 'active' : ''}`} onClick={handleBestSellingClick}>
            Best Selling
          </button>
          <button className={`${ allProduct ? 'active' : ''}`} onClick={handleAllProductsClick}>
            All Products
          </button>
        </div>
        <div className='products-section'>
          <div className='products-container'>
            {allProduct == true ?  product?.map((product) => (
              <Product key={product._id} product={product} />
            )): product?.slice(0,3).map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductSection