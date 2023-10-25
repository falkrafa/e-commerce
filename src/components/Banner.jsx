import React from 'react'
import { Link } from "react-router-dom";
import { urlFor } from '../../lib/client';
import Navbar from './Navbar';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './banner.css'
// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
const Banner = ({banner}) => {
  return (
    <div className='banner-container1'>
      <Navbar/>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        crossFade={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        style={{
          "--swiper-pagination-color": "#FFBA08",
          "--swiper-navigation-color": "#FFBA08",
          "--swiper-pagination-bullet-inactive-color": "#999999",
        }}
        loop={true}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
          {banner?.map((items) => {
            return (
              urlFor(items.image[0]) && (
                <SwiperSlide style={{backgroundImage: `url(${urlFor(items.image[0]).url()})`}}>
                  <div className="slide-content">
                    <h1>{items.name}</h1>
                  </div>
                </SwiperSlide>
              )
            )
          })}
      </Swiper>
    </div>
  )
}

export default Banner