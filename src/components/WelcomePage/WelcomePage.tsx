import React, { useState } from 'react';
import {NavBar} from './WelcomePage-NavBar';
import {Slider} from './WelcomePage-Slider';
import {Trailer} from './WelcomePage-Trailer';
import './WelcomePage.css';

export const WelcomePage = () => {
  const [swiperBackgroundColor, setSwiperBackgroundColor] = useState("rgb(148, 169, 255)");
  const [VideoSize, setVideoSize] = useState(
    window.innerWidth > 1220 ?
      { dynamicWidth: "big" } :
      window.innerWidth > 550 ?
        { dynamicWidth: "mid" } :
        { dynamicWidth: "small" }
  );

  return (
    <div className={"WelcomePage"} style={VideoSize.dynamicWidth === "small" ? { backgroundColor: swiperBackgroundColor } : {}}>
      <NavBar />
      <Slider
        setSwiperBackgroundColor={setSwiperBackgroundColor}
        VideoSize={VideoSize}
        setVideoSize={setVideoSize}
      />
      <Trailer />
    </div>
  );
}