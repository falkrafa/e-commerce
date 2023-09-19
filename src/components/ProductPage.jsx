import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { urlFor } from '../../lib/client';
import sanityClient from '../../lib/client.js'
import Navbar from './Navbar';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar,AiOutlineStar } from 'react-icons/ai';
import Product from './Product';
import { useStateContext } from '../../context/StateContext';

const ProductPage = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [Allproduct, setAllProduct] = useState(null);
  const [index,setIndex] = useState(0);
  const { decQty, addQty, qty, AddCart } = useStateContext();

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const productData = await sanityClient.fetch(`*[_type=="product" && slug.current == '${slug}'][0]`);
        const allproductData = await sanityClient.fetch(`*[_type=="product"]`);
        setProduct(productData);
        setAllProduct(allproductData);
      } catch (error) {
        console.log("Erro ao buscar dados do produto:");
      }
    };
  
    fetchProductData();
  }, [slug]);
  
  
  return (
    <>
    {product <= 0 &&(
      <div className='gif-container'>
        <img src='https://i.gifer.com/3BBV.gif'></img>
      </div>
    )}
      {product && Allproduct &&(
        <div className='layout'>
          <Navbar/>
          <div className='product-detail-container'>
            <div>
              <div className='image-container'>
                <img src={urlFor(product.image[index])} alt="" className='product-detail-image'/>
              </div>
              <div className='small-images-container'>
                {product.image?.map((item,i)=><img src={urlFor(item)} className={i === index ? 'small-image selected-image' : 'small-image'} onMouseEnter={()=>setIndex(i)}></img>)}
              </div>
            </div>
            <div className='product-detail-desc'>
              <h1>{product.name}</h1>
              <div className='reviews'>
                <div>
                  <AiFillStar/>
                  <AiFillStar/>
                  <AiFillStar/>
                  <AiFillStar/>
                  <AiOutlineStar/>
                </div>
                <p>(20)</p>
              </div>
              <h4>Details: </h4>
              <p>{product.details}</p>
              <p className='price'>${product.price}</p>
              <div className='quantity'>
                <h3>Quantity: </h3>
                <p className='quantity-desc'>
                  <span className='minus' onClick={decQty}><AiOutlineMinus/></span>
                  <span className='num'>{qty}</span>
                  <span className='plus' onClick={addQty}><AiOutlinePlus/></span>
                </p>
              </div>
              <div className='buttons'>
                <button type='button' className='add-to-cart' onClick={()=>AddCart(product, qty)}>Add to Cart</button>
                <button type='button' className='buy-now'>Buy Now</button>
              </div>
            </div>
          </div>
          <div className='maylike-products-wrapper'>
            <h2>You may also like</h2>
            <div className='marquee'>
              <div className='maylike-products-container track'>
                {Allproduct.map((item)=>(
                  <Product key={item._id} product={item}/>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductPage;
