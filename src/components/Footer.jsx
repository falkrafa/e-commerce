import React from 'react'
import { Link } from 'react-router-dom'
import { urlFor } from '../../lib/client'
const Footer = ({footer}) => {
  return (
    <div className='footer-banner-container main-container'>
      <div className='banner-desc'>
        <div className='left'>
          <p>{footer.discount}</p>
          <h3>{footer.largeText1}</h3>
          <h3>{footer.largeText2}</h3>
          <p>{footer.saleTime}</p>
        </div>
        <div className='right'>
          <p>{footer.smallText}</p>
          <h3>{footer.midText}</h3>
          <p>{footer.desc}</p>
          <Link to={`/product/${footer.product}`}><button type='button'>{footer.buttonText}</button></Link>
        </div>
        <img src='img/photo-1542291026-7eec264c27ff-removebg-preview.png' alt="" className='footer-banner-image'/>
      </div>
    </div>
  )
}

export default Footer