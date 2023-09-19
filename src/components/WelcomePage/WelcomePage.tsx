import React, { useState, useEffect } from 'react';
import {NavBar} from './WelcomePage-NavBar';
import {Slider} from './WelcomePage-Slider';
import {Trailer} from './WelcomePage-Trailer';
import './WelcomePage.css';

interface WelcomePageProps {
  onLoaded: () => void;
}

export const WelcomePage: React.FC<WelcomePageProps> = ({ onLoaded }) => {

  const [VideoSize, setVideoSize] = useState(
    window.innerWidth > 1220 ?
      { dynamicWidth: "big" } :
      window.innerWidth > 550 ?
        { dynamicWidth: "mid" } :
        { dynamicWidth: "small" }
  );

  const handleVideoLoaded = () => {
    if (onLoaded) onLoaded();
  };

  useEffect(() => {
    const videoElement = document.querySelector('.BlueBackground video');
    if (videoElement) {
      videoElement.addEventListener('canplaythrough', handleVideoLoaded);
      return () => {
        videoElement.removeEventListener('canplaythrough', handleVideoLoaded);
      };
    }
  }, []);

  return (
    <div className={"WelcomePage"}>
      <div className={"BlueBackground"}>
      <video autoPlay loop muted playsInline><source src={require("../../../src/images/background/blue_background.mp4")} type='video/mp4'/></video>
      </div>
      <NavBar />
      <Slider
        VideoSize={VideoSize}
        setVideoSize={setVideoSize}
      />
      <Trailer />
    </div>
  );
}