import React, { useState } from 'react';
import {NavBar} from './WelcomePage-NavBar';
import {Slider} from './WelcomePage-Slider';
import {Trailer} from './WelcomePage-Trailer';
import './WelcomePage.css';

export const WelcomePage = () => {

  const [VideoSize, setVideoSize] = useState(
    window.innerWidth > 1220 ?
      { dynamicWidth: "big" } :
      window.innerWidth > 550 ?
        { dynamicWidth: "mid" } :
        { dynamicWidth: "small" }
  );

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