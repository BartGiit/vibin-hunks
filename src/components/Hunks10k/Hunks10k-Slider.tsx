import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-cards';
import './Hunks10k-Slider.css';

export const Slider = () => {
    const Slides = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    const [showInstruction, setShowInstruction] = useState(true);
    const [touchStartedIndex, setTouchStartedIndex] = useState<number | null>(null);
    const swiperRef = useRef<any>(null);

    const handleSlideChange = () => {
        if (swiperRef.current) {
            const swiper = swiperRef.current.swiper;
            const videos = document.querySelectorAll('video');
            
            // Pause all videos
            videos.forEach(video => video.pause());
            
            // Play the video of the active slide
            const activeVideo = swiper.slides[swiper.activeIndex].querySelector('video');
            if (activeVideo) {
                activeVideo.play();
            }
        }
    };

    return (
        <>
            <div className={"Slider"}>
                {showInstruction && (
                    <div className={"InstructionSwipe"}>
                        <video autoPlay loop muted playsInline>
                            <source src={require("../../../src/images/instructions/swipe.mp4")} type='video/mp4; codecs="hvc1"'/>
                            <source src={require("../../../src/images/instructions/swipe.webm")} type='video/webm'/>
                        </video> 
                    </div>
                )}
                
                <Swiper
                    ref={swiperRef}
                    effect={"cards"}
                    grabCursor={true}
                    modules={[EffectCards, Autoplay]}
                    speed={750}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    onTouchStart={(swiper) => {
                        if (showInstruction){
                            setTouchStartedIndex(swiper.activeIndex);
                        }
                    }}
                    onTouchEnd={(swiper) => {
                        if (showInstruction){
                            setTimeout(() => {
                                if (touchStartedIndex !== null && touchStartedIndex !== swiper.activeIndex) {
                                    setShowInstruction(false);
                                }
                                setTouchStartedIndex(null);
                            }, 600);
                        }
                    }}
                    onSlideChangeTransitionEnd={handleSlideChange}
                    className="mySwiper"
                >
                    {Slides.map(slide => 
                        <SwiperSlide key={slide}>
                            <video loop muted playsInline>
                                <source src={require(`../../../src/images/Hunks10k/Vibin-Hunks-Slide${slide}.mp4`)} type='video/mp4'/>
                            </video>
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
        </>
    );
}
