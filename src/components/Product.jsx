import React from 'react'
import { Link } from 'react-router-dom'
import { urlFor } from '../../lib/client'

const Product = ({product:{image,name,slug,price}}) => {
  return (
    <div>
      <Link to={`/product/${slug.current}`}>
        <div className='product-card'>
          <img src={urlFor(image && image[0])} width={350} height={280} className='product-image'></img>
          <p className='product-name'>{name}</p>
          <p className='product-price'>${price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product