import React, { useState } from 'react';
import {NavBar} from './WelcomePage-NavBar';
import {Slider} from './WelcomePage-Slider';
import {Trailer} from './WelcomePage-Trailer';
import './WelcomePage.css';

export const WelcomePage = () => {
  const [swiperBackgroundColor, setSwiperBackgroundColor] = useState("#96a5fe");
  const [VideoSize, setVideoSize] = useState(
    window.innerWidth > 1060 ?
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