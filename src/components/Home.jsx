import React from 'react';
import Banner from './Banner';
import Footer from './Footer';
import Product from './Product'
import sanityClient from '../../lib/client.js'
import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import BannerFooter from './BannerFooter';
import { Link } from 'react-router-dom';
import ProductSection from './ProductSection';


const Home = () => {
  const [product, setProduct] = useState(null)
  const [BannerProduct, setBannerProduct] = useState(null)

  useEffect(()=>{
    const productItem= async ()=>{

      const productData = await sanityClient.fetch(`*[_type == "product"]`)
      setProduct(productData)

      const BannerData = await sanityClient.fetch(`*[_type == "banner"]`)
      setBannerProduct(BannerData)
    }
    productItem();
  },[])
  return (
    <>
      {product <=0 && BannerProduct <= 0 &&(
        <div className='gif-container'>
          <img src='https://i.gifer.com/3BBV.gif'></img>
        </div>
      )}
      {product && BannerProduct &&(
        <>
            <Banner banner={ product}/>
            <ProductSection product={product}/>
            <div className='second-container'>
            <div className='container-image'>
              <div className='left2'>
                <h1>New Adidas Yeezy</h1>
                <h2>$120</h2>
                <Link to={`/product/adidas-yeezy`}><button type='button' className='left2-button'>Buy Now</button></Link>
              </div>
            </div>
            </div>
              <BannerFooter/>
        </>
      )}
    </>
  );
};

export default Home;
