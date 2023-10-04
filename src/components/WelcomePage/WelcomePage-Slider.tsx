import React, { Dispatch, SetStateAction, useState, useEffect} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Autoplay} from 'swiper';
import logo from '../../../src/images/logo.svg';
import 'swiper/css';
import 'swiper/css/navigation';
import './WelcomePage-Slider.css';


type SliderProps = {
  VideoSize: {
    dynamicWidth: string;
  };
  setVideoSize: Dispatch<SetStateAction<{ dynamicWidth: string }>>;
  onReady?: () => void;
};

export const Slider: React.FC<SliderProps> = ({ VideoSize, setVideoSize, onReady }) => {

  // useState WindowWidth, VideoSize
  const [WindowWidth, setWindowWidth] = useState({
    dynamicWidth: window.innerWidth,
  });

  // set WindowWidth, VideoSize
  const setWidthWindow = () => {
    setWindowWidth({
      dynamicWidth: window.innerWidth,
    })
  }

  const setVideo = () => {
    if(window.innerHeight <= 1100){
      if (window.innerWidth > 1220){
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
    }else{
      if (window.innerWidth > 1780){
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
  }

  // useEffect checking WindowWidth changes
  useEffect(() => {
    const handleResize = () => {
        setWidthWindow();
        setVideo();
    };

    window.addEventListener('resize', handleResize);

    // Invoke the onReady callback when the Slider mounts
    if (onReady) {
        onReady();
    }

    return () => {
        window.removeEventListener('resize', handleResize);
    };
}, []);

  return (
    <>
      <Swiper
        className={"Slider"}
        navigation={true}
        modules={[Navigation, Autoplay]}
        loop={true}
        spaceBetween={WindowWidth.dynamicWidth>1550 ? 100 : WindowWidth.dynamicWidth>600? 620 : 260}
        speed={750}
        autoplay={{
          delay: 7500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide className={"SwiperSlide"} key={1}>
            {VideoSize.dynamicWidth === "small" ?
                <video autoPlay loop muted playsInline key={VideoSize.dynamicWidth} preload="metadata" poster={require('../../../src/images/small/Vibin-Hunks-slide1-poster.jpeg')}>
                    <source src={require("../../../src/images/small/Vibin-Hunks-slide1.mp4")} type='video/mp4'/>
                </video>
                : VideoSize.dynamicWidth === "mid" ?
                <video autoPlay loop muted playsInline key={VideoSize.dynamicWidth} preload="metadata">
                    <source src={require("../../../src/images/mid/Vibin-Hunks-slide1.mp4")} type='video/mp4; codecs=hvc1'/>                  
                    <source src={require("../../../src/images/mid/Vibin-Hunks-slide1.webm")} type='video/webm'/>
                </video>
                :
                <video autoPlay loop muted playsInline key={VideoSize.dynamicWidth} preload="metadata">
                    <source src={require("../../../src/images/big/Vibin-Hunks-slide1.mp4")} type='video/mp4; codecs=hvc1'/>
                    <source src={require("../../../src/images/big/Vibin-Hunks-slide1.webm")} type='video/webm'/>
                </video>
            }
        </SwiperSlide>
        <SwiperSlide className={"SwiperSlide"} key={2}>
            {VideoSize.dynamicWidth === "small" ?
                <video autoPlay loop muted playsInline key={VideoSize.dynamicWidth} preload="metadata" poster={require('../../../src/images/small/Vibin-Hunks-slide2-poster.jpeg')}>
                    <source src={require("../../../src/images/small/Vibin-Hunks-slide2.mp4")} type='video/mp4'/>
                </video>
                : VideoSize.dynamicWidth === "mid" ?
                <video autoPlay loop muted playsInline key={VideoSize.dynamicWidth} preload="metadata">
                    <source src={require("../../../src/images/mid/Vibin-Hunks-slide2.mp4")} type='video/mp4; codecs=hvc1'/>
                    <source src={require("../../../src/images/mid/Vibin-Hunks-slide2.webm")} type='video/webm'/>
                </video>
                :
                <video autoPlay loop muted playsInline key={VideoSize.dynamicWidth} preload="metadata">
                    <source src={require("../../../src/images/big/Vibin-Hunks-slide2.mp4")} type='video/mp4; codecs=hvc1'/>              
                    <source src={require("../../../src/images/big/Vibin-Hunks-slide2.webm")} type='video/webm'/>
                </video>
            }
        </SwiperSlide>
        <SwiperSlide className={"SwiperSlide"} key={3}>
            {VideoSize.dynamicWidth === "small" ?
                <video autoPlay loop muted playsInline key={VideoSize.dynamicWidth} preload="metadata" poster={require('../../../src/images/small/Vibin-Hunks-slide3-poster.jpeg')}>
                    <source src={require("../../../src/images/small/Vibin-Hunks-slide3.mp4")} type='video/mp4'/>
                </video>
                : VideoSize.dynamicWidth === "mid" ?
                <video autoPlay loop muted playsInline key={VideoSize.dynamicWidth} preload="metadata">
                    <source src={require("../../../src/images/mid/Vibin-Hunks-slide3.mp4")} type='video/mp4; codecs=hvc1'/>                  
                    <source src={require("../../../src/images/mid/Vibin-Hunks-slide3.webm")} type='video/webm'/>
                </video>
                :
                <video autoPlay loop muted playsInline key={VideoSize.dynamicWidth} preload="metadata">
                    <source src={require("../../../src/images/big/Vibin-Hunks-slide3.mp4")} type='video/mp4; codecs=hvc1'/>
                    <source src={require("../../../src/images/big/Vibin-Hunks-slide3.webm")} type='video/webm'/>
                </video>
            }
        </SwiperSlide>
        <SwiperSlide className={"SwiperSlide"} key={4}>
            {VideoSize.dynamicWidth === "small" ?
                <video autoPlay loop muted playsInline key={VideoSize.dynamicWidth} preload="metadata" poster={require('../../../src/images/small/Vibin-Hunks-slide4-poster.jpeg')}>
                    <source src={require("../../../src/images/small/Vibin-Hunks-slide4.mp4")} type='video/mp4'/>
                </video>
                : VideoSize.dynamicWidth === "mid" ?
                <video autoPlay loop muted playsInline key={VideoSize.dynamicWidth} preload="metadata">
                    <source src={require("../../../src/images/mid/Vibin-Hunks-slide4.mp4")} type='video/mp4; codecs=hvc1'/>                  
                    <source src={require("../../../src/images/mid/Vibin-Hunks-slide4.webm")} type='video/webm'/>
                </video>
                :
                <video autoPlay loop muted playsInline key={VideoSize.dynamicWidth} preload="metadata">
                    <source src={require("../../../src/images/big/Vibin-Hunks-slide4.mp4")} type='video/mp4; codecs=hvc1'/>                  
                    <source src={require("../../../src/images/big/Vibin-Hunks-slide4.webm")} type='video/webm'/>
                </video>
            }
        </SwiperSlide>

        <img src={logo} alt="Logo Vibin Hunks" />
      </Swiper>
    </>
  )
}
