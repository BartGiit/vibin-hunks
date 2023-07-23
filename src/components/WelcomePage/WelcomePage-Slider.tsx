import React, {useState,useEffect} from 'react';
import {Swiper,SwiperSlide} from 'swiper/react';
import {Navigation, Autoplay} from 'swiper';
import logo from '../../../src/images/logo.svg';
import 'swiper/css';
import 'swiper/css/navigation';
import './WelcomePage-Slider.css';

export const Slider = () => {

  //useState WindowWidth, VideoSize
  const [WindowWidth, setWindowWidth] = useState({
    dynamicWidth: window.innerWidth,
  });

  const [VideoSize, setVideoSize] = useState(
    window.innerWidth>1060 ? 
    {dynamicWidth: "big"} : 
    window.innerWidth>550 ? 
    {dynamicWidth:"mid"} : 
    {dynamicWidth:"small"}
    );

  //set WindowWidth, VideoSize
  const setWidthWindow = () => {
    setWindowWidth({
      dynamicWidth: window.innerWidth,
    })
  }

  const setVideo = () => {
    if (window.innerWidth > 1060){
      setVideoSize({
        dynamicWidth: "big",
      })
    }else if(window.innerWidth > 550){
      setVideoSize({
        dynamicWidth: "mid",
      })
    }else{
      setVideoSize({
        dynamicWidth: "small",
      })
    }
  }

  //useEffect checking WindowWidth changes
  useEffect(() => {
    window.addEventListener('resize', setWidthWindow);
    return(() => {
        window.removeEventListener('resize', setWidthWindow);
    })
  }, [WindowWidth])

  useEffect(() => {
    window.addEventListener('resize', setVideo);
    return(() => {
        window.removeEventListener('resize', setVideo);
    })
  }, [VideoSize])

    return (
      <>
        <Swiper
          className={"Slider"}
          navigation={true}
          modules={[Navigation, Autoplay]}
          loop={true}
          spaceBetween={
            WindowWidth.dynamicWidth>1400 ? 100 : WindowWidth.dynamicWidth>600? 620 : 260}
          speed={750}
          autoplay={{
            delay: 7500,
            disableOnInteraction: false,
          }}
        > 
          <SwiperSlide className={"SwiperSlide"} key={1}>
            <video width="100%" autoPlay loop muted key={VideoSize.dynamicWidth}>
            <source src={require(`../../../src/images/${VideoSize.dynamicWidth}/Vibin-Hunks-slide1.webm`)} type="video/webm" />
            {VideoSize.dynamicWidth === "mid" ? <source src={require(`../../../src/images/${VideoSize.dynamicWidth}/Vibin-Hunks-slide1.mp4`)} type='video/mp4; codecs=hvc1'/> : null}
            </video>
          </SwiperSlide>
          <SwiperSlide className={"SwiperSlide"} key={2}>
            <video width="100%" autoPlay loop muted key={VideoSize.dynamicWidth}>
            <source src={require(`../../../src/images/${VideoSize.dynamicWidth}/Vibin-Hunks-slide2.webm`)} type="video/webm" />
            {VideoSize.dynamicWidth === "mid" ? <source src={require(`../../../src/images/${VideoSize.dynamicWidth}/Vibin-Hunks-slide2.mp4`)} type='video/mp4; codecs=hvc1'/> : null}
            </video>
          </SwiperSlide>
          <SwiperSlide className={"SwiperSlide"} key={3}>
            <video width="100%" autoPlay loop muted key={VideoSize.dynamicWidth}>
            <source src={require(`../../../src/images/${VideoSize.dynamicWidth}/Vibin-Hunks-slide3.webm`)} type="video/webm" />
            {VideoSize.dynamicWidth === "mid" ? <source src={require(`../../../src/images/${VideoSize.dynamicWidth}/Vibin-Hunks-slide3.mp4`)} type='video/mp4; codecs=hvc1'/> : null}
            </video>
          </SwiperSlide>
          <SwiperSlide className={"SwiperSlide"} key={4}>
            <video width="100%" autoPlay loop muted key={VideoSize.dynamicWidth}>
            <source src={require(`../../../src/images/${VideoSize.dynamicWidth}/Vibin-Hunks-slide4.webm`)} type="video/webm" />
            {VideoSize.dynamicWidth === "mid" ? <source src={require(`../../../src/images/${VideoSize.dynamicWidth}/Vibin-Hunks-slide4.mp4`)} type='video/mp4; codecs=hvc1'/> : null}
            </video>
          </SwiperSlide>
          <img src={logo} alt="Logo Vibin Hunks" />
        </Swiper>
      </>
    )
  }