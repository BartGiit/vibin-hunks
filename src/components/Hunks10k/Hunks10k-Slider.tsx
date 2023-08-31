import React from 'react';
import {Swiper,SwiperSlide} from 'swiper/react';
import {EffectCards,Autoplay} from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-cards';
import './Hunks10k-Slider.css';

export const Slider = () => {

   const Slides = [1,2,3,4,5,6];

    return (
     <>
         <div className={"Slider"}>
         <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards, Autoplay]}
            speed={750}
            loop={true}
            autoplay={{
               delay: 5000,
               disableOnInteraction: false,
            }}
            className="mySwiper"
         >
         {Slides.map(slide => 
            <SwiperSlide key={slide}>
               <video autoPlay loop muted playsInline>
                    <source src={require(`../../../src/images/Hunks10k/Vibin-Hunks-Slide${slide}.mp4`)} type='video/mp4'/>
               </video>
            </SwiperSlide>) }
         </Swiper>
         </div>
       </>
    );
  }