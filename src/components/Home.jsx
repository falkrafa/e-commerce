import React from 'react';
import Banner from './Banner';
import Footer from './Footer';
import Product from './Product'
import sanityClient from '../../lib/client.js'
import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import BannerFooter from './BannerFooter';
import { Link } from 'react-router-dom';
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
      {product && BannerProduct &&(
        <>
            <Navbar/>
            <Banner banner={ BannerProduct.length && BannerProduct[0]}/>
            <div className='products-heading'>
              <h2>Best selling products</h2>
              <p>Speakers of many variations</p>
            </div>
            <div className='products-section'>
              <div className='products-container'>
                  {product?.map((product) => <Product key={product._id} product={product}/>)}
              </div>
            </div>
            <div className='second-container'>
            <div className='container-image'>
              <div className='left2'>
                <h1>New Adidas Yeezy</h1>
                <h2>$120</h2>
                <Link to={`/product/adidas-yeezy`}><button type='button' className='left2-button'>Buy Now</button></Link>
              </div>
            </div>
            </div>
              <Footer footer={BannerProduct.length && BannerProduct[0]}/>
              <BannerFooter/>
        </>
      )}
    </>
  );
};

export default Home;
