import React, { Dispatch, SetStateAction, useState, useEffect} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Autoplay} from 'swiper';
import logo from '../../../src/images/logo.svg';
import 'swiper/css';
import 'swiper/css/navigation';
import './WelcomePage-Slider.css';
import VideoCanvas from '../Utils/Canvas';


type SliderProps = {
  VideoSize: {
    dynamicWidth: string;
  };
  setVideoSize: Dispatch<SetStateAction<{ dynamicWidth: string }>>;
};

export const Slider: React.FC<SliderProps> = ({ VideoSize, setVideoSize }) => {

  // useState WindowWidth, VideoSize
  const [WindowWidth, setWindowWidth] = useState({
    dynamicWidth: window.innerWidth,
  });

  //set SpaceBetween
  const calculateInitialSpace = () => {
    if (window.innerHeight <= 1100) {
      if (window.innerWidth > 1400) {
        return 100;
      } else if (window.innerWidth > 600) {
        return 620;
      } else {
        return 260;
      }
    } else {
      if (window.innerWidth > 1400) {
        return 800;
      } else if (window.innerWidth > 600) {
        return 620;
      } else {
        return 260;
      }
    }
  };

  const [SpaceBetween, SetSpaceBetween] = useState(calculateInitialSpace);

  const setSpace = () => {
    SetSpaceBetween(calculateInitialSpace());
  };

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
        setSpace();
    };

    window.addEventListener('resize', handleResize);
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
        spaceBetween={SpaceBetween}
        speed={750}
        autoplay={{
          delay: 7500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide className={"SwiperSlide"} key={1}>
            {VideoSize.dynamicWidth === "small" ?
                <video autoPlay loop muted playsInline key={VideoSize.dynamicWidth} preload="metadata" poster={require('../../../src/images/small/Vibin-Hunks-slide1-poster.png')}>
                    <source src={require("../../../src/images/small/Vibin-Hunks-slide1.mp4")} type='video/mp4'/>
                </video>
                : VideoSize.dynamicWidth === "mid" ?
                <VideoCanvas size="mid" videoNumber="1" key={"mid-1"}/>
                :
                <VideoCanvas size="big" videoNumber="1" key={"big-1"}/>
            }
        </SwiperSlide>
        <SwiperSlide className={"SwiperSlide"} key={2}>
            {VideoSize.dynamicWidth === "small" ?
                <video autoPlay loop muted playsInline key={VideoSize.dynamicWidth} preload="metadata" poster={require('../../../src/images/small/Vibin-Hunks-slide2-poster.png')}>
                    <source src={require("../../../src/images/small/Vibin-Hunks-slide2.mp4")} type='video/mp4'/>
                </video>
                : VideoSize.dynamicWidth === "mid" ?
                <VideoCanvas size="mid" videoNumber="2" key={"mid-2"}/>
                :
                <VideoCanvas size="big" videoNumber="2" key={"big-2"}/>
            }
        </SwiperSlide>
        <SwiperSlide className={"SwiperSlide"} key={3}>
            {VideoSize.dynamicWidth === "small" ?
                <video autoPlay loop muted playsInline key={VideoSize.dynamicWidth} preload="metadata" poster={require('../../../src/images/small/Vibin-Hunks-slide3-poster.png')}>
                    <source src={require("../../../src/images/small/Vibin-Hunks-slide3.mp4")} type='video/mp4'/>
                </video>
                : VideoSize.dynamicWidth === "mid" ?
                <VideoCanvas size="mid" videoNumber="3" key={"mid-3"}/>
                :
                <VideoCanvas size="big" videoNumber="3" key={"big-3"}/>
            }
        </SwiperSlide>
        <SwiperSlide className={"SwiperSlide"} key={4}>
            {VideoSize.dynamicWidth === "small" ?
                <video autoPlay loop muted playsInline key={VideoSize.dynamicWidth} preload="metadata" poster={require('../../../src/images/small/Vibin-Hunks-slide4-poster.png')}>
                    <source src={require("../../../src/images/small/Vibin-Hunks-slide4.mp4")} type='video/mp4'/>
                </video>
                : VideoSize.dynamicWidth === "mid" ?
                <VideoCanvas size="mid" videoNumber="4" key={"mid-4"}/>
                :
                <VideoCanvas size="big" videoNumber="4" key={"big-4"}/>
            }
        </SwiperSlide>

        <img src={logo} alt="Logo Vibin Hunks" />
      </Swiper>
    </>
  )
}
