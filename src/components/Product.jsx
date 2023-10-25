import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { urlFor } from '../../lib/client'

const Product = ({product:{image,name,slug,price}}) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const location = useLocation();

  const productImageClasses = location.pathname === '/' ? 'product-card' : 'product-page-card';

  return (
    <div>
      <Link to={`/product/${slug.current}`}>
        <div className={productImageClasses}>
          <img src={urlFor(image && image[0])} width={300} height={250} className='product-image' onClick={scrollToTop}></img>
          <p className='product-name'>{name}</p>
          <p className='product-price'>${price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product