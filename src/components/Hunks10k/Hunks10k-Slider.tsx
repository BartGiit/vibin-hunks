import React, { useState, useRef } from 'react'; // <-- Added useRef
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-cards';
import './Hunks10k-Slider.css';

export const Slider = () => {
    const Slides = [1, 2, 3, 4, 5, 6];

    // useState to control the visibility of InstructionSwipe
    const [showInstruction, setShowInstruction] = useState(true);
    
    // Track touch events and active index
    const [touchStartedIndex, setTouchStartedIndex] = useState<number | null>(null);

    // Instantiate the swiper ref
    const swiperRef = useRef<any>(null); // <-- Added this line

    const handleSlideChange = () => {
        if (swiperRef.current) {  // <-- Changed this line from Swiper.current
            const swiper = swiperRef.current.swiper;   
            
            // Play the video of the active slide
            const playVideoForSlideIndex = (index:any) => {
                const video = swiper.slides[index]?.querySelector('video');
                if (video) {
                    video.play();
                }
            };
    
            playVideoForSlideIndex(swiper.activeIndex);
            
            // Previous slide (considering loop)
            let prevIndex = swiper.activeIndex - 1;
            if (prevIndex < 0) prevIndex = swiper.slides.length - 1; 
            playVideoForSlideIndex(prevIndex);
    
            // Next slide (considering loop)
            let nextIndex = (swiper.activeIndex + 1) % swiper.slides.length;
            playVideoForSlideIndex(nextIndex);
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
